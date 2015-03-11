Template.takePhoto.helpers({
  'photo': function () {
    return Session.get('photo');
  }
});

Geolocation.latLng();

if (Meteor.isClient) {
  Template.takePhoto.events({
    'click .capture': function () {
      MeteorCamera.getPicture({}, function (error, data) {
        Session.set('photo', data);
        var blob = dataURItoBlob(data);
        var newOne = Photos.insert({});
        var fileName = newOne + ".jpg";
        Meteor.call("upload_to_s3", fileName, blob);
        Photos.update({
          _id: newOne
        }, {
          $set: {
            url: "http://s3.amazonaws.com/streetartfinder/" + fileName,
            coordinates: {
              lat: Geolocation.latLng().lat,
              lng: Geolocation.latLng().lng
            },
            upvotes: 0,
            downvotes: 0,
            usersVotedUp: [],
            usersVotedDown: [],
            comments: [],
            seen: [Meteor.user()._id],
            user: Meteor.user()
          }
        });
        Router.go('photoPage', {_id: newOne});
      });
    }
  });
}