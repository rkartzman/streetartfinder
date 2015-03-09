Meteor.methods({
  "upload_to_s3": function (fileName, data) {
    console.log(fileName);
    s3 = new AWS.S3({endpoint: "s3.amazonaws.com"});
    s3.putObject(
      {
        Bucket: "streetartfinder",
        ACL: 'public-read',
        Key: fileName,
        ContentType: "image/jpeg",
        Body: data
      },
      function (err, data) {
        if (err) {
          console.log('upload error:', err);
        } else {
          console.log('upload was succesfull', data);
        }
      }
    );
  }
});

