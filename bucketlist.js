// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "ap-northeast-2" });

const access = require("./access.js");

const s3 = new AWS.S3({
  accessKeyId: access.accessKeyId,
  secretAccessKey: access.secretAccessKey,
  region: "ap-northeast-2", // ex) ap-northeast-2
  signatureVersion: "v4",
});

// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});