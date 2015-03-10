Template.allPhotoPage.helpers({
  lastPhoto: function () {
    return Photos.find().fetch().sort({_id: -1}).pop()
  }
});

Template.photoBelt.events({
	'click': function(event){
		event.preventDefault();
		var cloned = $(event.target).parent().clone()
		$('#mostRecentDiv').html(cloned).toggleClass("mostRecentPhoto")
	}
});
