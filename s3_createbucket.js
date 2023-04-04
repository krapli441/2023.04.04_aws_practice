// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
var S3 = require("aws-sdk/clients/s3.js");
// Set the region
AWS.config.update({ region: "ap-northeast-2" });

// Create S3 service object

const access = require("./access.js");

const s3 = new AWS.S3({
  accessKeyId: access.accessKeyId,
  secretAccessKey: access.secretAccessKey,
  apiVersion: "2006-03-01",
});

// Create the parameters for calling createBucket
var bucketParams = {
  Bucket: process.argv[2],
};

// call S3 to create the bucket
s3.createBucket(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Location);
  }
});
