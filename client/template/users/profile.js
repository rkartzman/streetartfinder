Template.userProfile.helpers({
	userPhotos: function(){
		return Photos.find({user_id: Meteor.user()._id});
	}
});

Template.userProfile.events({
 'click #delete-account':function(){
    // Meteor.users.remove({_id: Meteor.user()._id})
    Meteor.logout()
    Router.go('/')
  }
})

Template.userProfile.events({
 'click #logout':function(){
    Meteor.logout()
    Router.go('/')
  }
})