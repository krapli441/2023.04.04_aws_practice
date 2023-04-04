// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "ap-northeast-2" });

// const access = require("./access.js");

const key = require("./key.js");

console.log(key.access_key_id);
console.log(key.secret_access_key);

const s3 = new AWS.S3({
  accessKeyId: key.access_key_id,
  secretAccessKey: key.secret_access_key,
});

// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});
