  getCoordinates = function(){
    return Geolocation.latLng();
  };

	// if currentPosition
	// and meteor is client
	// return {
	// 	lat: lat,
	// 	lng: longi
	// }
// })();

function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Uint8Array(array);

    //return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  }

// $(document).on("keypress", "#caption", function(){picCaption = $('#caption').val();})
}

if(Meteor.isClient){
  Template.takePhoto.events({
    'click .capture': function(){
      MeteorCamera.getPicture({}, function(error, data){
        Session.set('photo', data);
        var blob = dataURItoBlob(data);
        var newOne = Photos.insert({});
        var fileName = newOne + ".jpg";
        Meteor.call("upload_to_s3", fileName, blob);
        Photos.update(
          {_id: newOne},
          {
            $set: {
              url: "http://s3.amazonaws.com/streetartfinder/" + fileName,
              coordinates: {lat: Geolocation.latLng().lat,
                lng: Geolocation.latLng().lng,
        // caption: picCaption
      }
    }
  });
        Router.go('photoPage', {_id: newOne})


      });
    }
  });
}
