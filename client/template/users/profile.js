Template.userProfile.helpers({
	userPhotos: function(){
		return Photos.find({user_id: Meteor.user()._id});
	}
})