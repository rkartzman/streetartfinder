Meteor.publish('photos', function () {
  return Photos.find();
});

Meteor.publish('comments', function () {

});