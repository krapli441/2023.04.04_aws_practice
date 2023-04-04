const AWS = require("aws-sdk");

AWS.config.update({ region: "ap-northeast-2" });

const key = require("./key.js");

const s3 = new AWS.S3({
  accessKeyId: key.access_key_id,
  secretAccessKey: key.secret_access_key,
});

// Create params for S3.deleteBucket
let bucketParams = {
  Bucket: "letsmaketestbucket",
};

// Call S3 to delete the bucket
s3.deleteBucket(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
