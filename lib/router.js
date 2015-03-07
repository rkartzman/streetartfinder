Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {return Meteor.subscribe('photos')}
});

Router.route('/', {name: 'showMap'});
