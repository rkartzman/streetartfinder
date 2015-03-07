Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {return Meteor.subscribe('photos')}
});

Router.route('/', {name: 'showMap'});

Router.route('/camera', {name: 'takePhoto'});

Router.route('/photos/:_id', {
  name: 'photoPage',
  data: function() { return Photos.findOne(this.params._id); }
});

