Template.allPhotoPage.helpers({
  lastPhoto: function () {
    return Photos.find().fetch().sort({_id: -1}).pop()
  	console.log("We're in here")
  }
});