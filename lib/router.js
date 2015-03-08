Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {return Meteor.subscribe('photos')}
 //  waitOn: function() {
 //   return getCoordinates();
	// }
});

Router.route('/', {name: 'showMap'});

Router.route('/camera', {name: 'takePhoto',
 waitOn: function() { return getCoordinates() }});


Router.route('/photos/:_id', {
  name: 'photoPage',
  data: function() { return Photos.findOne(this.params._id); }
});


Router.route('/all', {
  name: 'allPhotoPage',
  // data: function() { return Photos.find(); }
});
