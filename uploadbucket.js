const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-northeast-2" });
const key = require("./key.js");

const s3 = new AWS.S3({
  accessKeyId: key.access_key_id,
  secretAccessKey: key.secret_access_key,
});

let uploadParams = { Bucket: process.argv[2], Key: "", Body: "" };
let file = process.argv[3];

let fs = require("fs");
let fileStream = fs.createReadStream(file);
fileStream.on("error", function (err) {
  console.log("File Error", err);
});
uploadParams.Body = fileStream;
let path = require("path");
uploadParams.Key = path.basename(file);

s3.upload(uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  }
  if (data) {
    console.log("Upload Success", data.Location);
  }
});
