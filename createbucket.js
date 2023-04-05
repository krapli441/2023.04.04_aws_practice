// ! AWS-SDK 모듈 불러옴
const AWS = require("aws-sdk");

// ! 지역 설정해주기. (서울을 선택함)
AWS.config.update({ region: "ap-northeast-2" });

// ! 접근 키와 비밀 접근 키를 불러옴
// ! 안전하게 키를 불러올 방법을 찾아봐야 할 것 같다.
const key = require("./key.js");

// ? 키가 잘 불러와졌는지 확인
console.log(key.access_key_id);
console.log(key.secret_access_key);

// ! S3 통신 객체 작성. 통신에 필요한 접근 키와 비밀 접근 키를 설정해줌
const s3 = new AWS.S3({
  accessKeyId: key.access_key_id,
  secretAccessKey: key.secret_access_key,
});

let bucketParams = {
  Bucket: process.argv[2],
};

// ! S3 쿼리문(?)을 작성해줌.
s3.createBucket(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Location);
  }
});
