// ! Node.js에서 AWS 불러옴
var AWS = require("aws-sdk");

var S3 = require("aws-sdk/clients/s3.js");
// Set the region
AWS.config.update({ region: "ap-northeast-2" });

const access = require("./access.js");

const s3 = new AWS.S3({
  accessKeyId: access.accessKeyId,
  secretAccessKey: access.secretAccessKey,
  apiVersion: "2006-03-01",
});

var uploadParams = { Bucket: process.argv[2], Key: "", Body: "" };
var file = process.argv[3];

// Configure the file stream and obtain the upload parameters
var fs = require("fs");
var fileStream = fs.createReadStream(file);
fileStream.on("error", function (err) {
  console.log("File Error", err);
});
uploadParams.Body = fileStream;
var path = require("path");
uploadParams.Key = path.basename(file);

// call S3 to retrieve upload file to specified bucket
s3.upload(uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  }
  if (data) {
    console.log("Upload Success", data.Location);
  }
});
