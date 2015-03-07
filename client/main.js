navigator.geolocation.getCurrentPosition(function (position) {
  var lat = position.coords.latitude;
  var longi = position.coords.longitude;
  console.log(lat, longi);
});

if(Meteor.isClient){
  Template.takePhoto.events({
    'click .capture': function(){
      MeteorCamera.getPicture({}, function(error, data){
  Session.set('photo', data);
});
    }
  });
}