Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {return Meteor.subscribe('photos')}
});

Router.route('/', {name: 'showMap'});

Router.route('/camera', {name: 'takePhoto'});