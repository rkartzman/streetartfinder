Template.allPhotoPage.helpers({
  photos: function () {
    return Photos.find({}, {sort: {submitted: -1}});
  }
});
