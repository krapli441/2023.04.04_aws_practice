// Load the AWS SDK for Node.js

import AWS from "aws-sdk";
import { S3 } from "@aws-sdk/client-s3";
// Set the region
AWS.config.update({ region: "ap-northeast-2" });

// Create S3 service object
const s3 = new S3({ apiVersion: "2006-03-01" });

// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});
