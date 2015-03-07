// Meteor.startup(function(){
// var  Buffer = Npm.require('buffer');
// });
// Meteor.methods({ 
// base64tos3 :function(photo){
//   // console.log(AWS);
//       AWS.config.update({
//         accessKeyId: 'KIAJ5OCMWZGBGZMIXIQ', 
//         secretAccessKey: 'TgghDmN3DwB+YFdVeHKl8DtkO72JEbS7KHeAmDXj', 
//         // region: 'US Standard'
//       });
//       console.log("bubububu")
//       console.log('photo', photo);

//       buf = new Buffer(photo.replace(/^data:image\/\w+;base64,/, ""),'base64')
//       str = +new Date + Math.floor((Math.random() * 100) + 1)+ ".jpg";
//       var params = {
//         Bucket: 'steven-remy',
//         Key: str, 
//         Body: buf,
//         ACL:'public-read',
//         ContentEncoding: 'base64',
//         ContentType: 'image/jpeg'
//       };

//       var s3 = new AWS.S3();
//       s3.putObject(params, function(err, data) {
//         if (err) console.log(err)
//         else {
//           console.log(data);
//           console.log("Successfully uploaded data to s3");
//           var urlParams = {Bucket: 'dtc-photos', Key: str};
//           s3.getSignedUrl('getObject', urlParams, function(err, url){
//               console.log('the url of the image is ' +  url);
//           });
//         }
//       });

//     }
//   });


AWS.config.update({
    accessKeyId: "AKIAIKHFKWTRGA525ZPA",
    secretAccessKey: "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"
});

Meteor.methods({
"upload_to_s3":function(fileName, data){
        console.log(fileName);
        //console.log(data);
        s3 = new AWS.S3({endpoint:"s3.amazonaws.com"});
        s3.putObject(
            {
                Bucket: "streetartfinder",
                ACL:'public-read',
                Key: fileName,
                ContentType: "image/jpeg",
                Body:data
            },
            function(err, data) {
                if(err){
                    console.log('upload error:',err);
                }else{
                    console.log('upload was succesfull',data);
                    // store some data in your local mongo
                }
            }
        );
    }
});

