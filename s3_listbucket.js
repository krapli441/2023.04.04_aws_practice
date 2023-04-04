// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// import AWS from "aws-sdk";
// import { S3 } from "./node_modules/aws-sdk/clients/s3.js";

var S3 = require("./node_modules/aws-sdk/clients/s3.js");
// Set the region
AWS.config.update({ region: "ap-northeast-2" });

// Create S3 service object

const s3 = new AWS.S3({
  accessKeyId: "AKIAYAPT5ALZP4YPFR5O",
  secretAccessKey: "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",
  apiVersion: "2006-03-01",
});

// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});
