Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {return Meteor.subscribe('photos')}
});

Router.route('/', {name: 'loginSignup'});

Router.route('/map', {name: 'showMap'});

Router.route('/camera', {name: 'takePhoto',
  waitOn: function() {
  return getCoordinates() }
});


Router.route('/photos/:_id', {
  name: 'photoPage',
  data: function() { return Photos.findOne(this.params._id); }
});

Router.route('/user/:_id', {name: 'userProfile'});

Router.route('/all', {
  name: 'allPhotoPage'
});

Router.route('/following', {
	name: 'goodArt'
})