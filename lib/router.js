Router.configure({
  layoutTemplate: 'layout',
  waitOn: function () {
    return Meteor.subscribe('photos');
  }
});

Router.route('/', {
  name: 'loginSignup'
});

Router.route('/map', {
  name: 'showMap',
  // data:{lat: this.params.query.lat, lng: this.params.query.lng}
  data: function () {
    return {
      lat: this.params.query.lat,
      lng: this.params.query.lng
    };
  }
});

Router.route('/camera', {
  name: 'takePhoto'
});


Router.route('/photos/:_id', {
  name: 'photoPage',
  data: function () { return Photos.findOne(this.params._id); }
});

Router.route('/user/:_id', {
  name: 'userProfile'
});

Router.route('/all', {
  name: 'allPhotoPage'
});

Router.route('/following', {
  name: 'goodArt'
});

// var requireLogin = function() {
//   if (! Meteor.user()){
//     Router.go('/');
//     // this.render('loginSignup');
//   } else {
//     Router.go('/map');
//     // this.render('showMap');
//   }
// };

// Router.onBeforeAction(requireLogin, {except: ['showMap', 'userProfile', 'goodArt', 'takePhoto', 'allPhotoPage', 'photoPage']});