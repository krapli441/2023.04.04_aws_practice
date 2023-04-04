const AWS = require("aws-sdk");

AWS.config.update({ region: "ap-northeast-2" });

const key = require("./key.js");

const s3 = new AWS.S3({
  accessKeyId: key.access_key_id,
  secretAccessKey: key.secret_access_key,
});

// Create the parameters for calling listObjects
let bucketParams = {
  Bucket: "kraplitest",
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
