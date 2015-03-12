Template.allPhotoPage.helpers({
  lastPhoto: function () {
    return Photos.find().fetch().sort({_id: -1}).pop()
  }
});

Template.photoBelt.events({
	'click': function(event){
		event.preventDefault();
		var cloned = $(event.target).parent().clone()
    $(cloned).children('img').eq(0).removeClass("allPhotos").addClass("main-preview")
		$('#mostRecentDiv').html(cloned).toggleClass("mostRecentPhoto")
	}
});
