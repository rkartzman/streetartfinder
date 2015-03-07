navigator.geolocation.getCurrentPosition(function (position) {
  var lat = position.coords.latitude;
  var longi = position.coords.longitude;
});

function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Uint8Array(array);
    
    //return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}

if(Meteor.isClient){
  Template.takePhoto.events({
    'click .capture': function(){
      MeteorCamera.getPicture({}, function(error, data){
      Session.set('photo', data);
      var blob = dataURItoBlob(data);
      var fileName = 'new' + ".jpg";
      Meteor.call("upload_to_s3", fileName, blob);
      Photos.insert(
      {
          url: "http://s3.amazonaws.com/streetartfinder/" + fileName,
          takenAt: 'abcdefg'
      })
      
	});
    }
  });
}

