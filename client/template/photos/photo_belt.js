Template.allPhotoPage.helpers({
  lastPhoto: function () {
    return Photos.find().fetch().sort({_id: -1}).pop()
  	console.log("We're in here")
  }
});

Template.photoBelt.events({
	'click': function(event){
		event.preventDefault();
		var cloned = $(event.target).clone()
		$('#mostRecentDiv').html(cloned)
		// event.preventdef
	// $(document).on('click', function(){console.log("here")});
	}
});

//  Template.allPhotoPage.events({
// $("document").on('click', function(){
// 		console.log('hello');
// 	});
// });