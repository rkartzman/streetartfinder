Template.userProfile.helpers({
  userPhotos: function () {
    return Photos.find({user_id: Meteor.user()._id});
  },
  userPhotos2: function() {
    return Photos.find({user: Meteor.user()});
  }
});

Template.userProfile.events({
  'click #delete-account': function () {
    // Meteor.users.remove({_id: Meteor.user()._id})
    Meteor.logout();
    Router.go('/');
  }
});

Template.userProfile.events({
  'click #logout': function () {
    Meteor.logout();
    Router.go('/');
  }
});

Template.userProfile.helpers({
  username: function(){
    return (Meteor.user().emails[0].address).substring(0, (Meteor.user().emails[0].address).indexOf("@"))
  }
});

Template.userProfile.events({
  'click #user-photos-check': function (event) {
    event.preventDefault();
    $('.profile-photos').toggle(true);
    $('.been-there-user').toggle(false);
    $('.manage-account').toggle(false);
  }
});

Template.userProfile.helpers({
  beenTherePhotos: function () {
    return Photos.find({seen: Meteor.user()._id});
  }
});

Template.userProfile.events({
  'click #user-been-there': function (event) {
    event.preventDefault();
    $('.been-there-user').toggle(true);
    $('.profile-photos').toggle(false);
    $('.manage-account').toggle(false);
  }
});

Template.userProfile.events({
  'click #user-manage-account': function (event) {
    event.preventDefault();
    $('.manage-account').toggle(true);
    $('.been-there-user').toggle(false);
    $('.profile-photos').toggle(false);
  }
});

Template.userProfile.events({
  'click #delete-photo-user': function () {
    Photos.remove({_id: this._id}, {justOne: true});
  }
});