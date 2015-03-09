Template.photoPage.events({
    'submit #add_caption': function(event){
      event.preventDefault();
      var captionValue = event.target.caption.value;
      var photoId = event.target.photoId.value;
      Photos.update({_id: photoId}, {
        $set: { caption: captionValue }
      })
    }
});

Template.photoPage.helpers({
  getVotes: function () {
    return this.upvotes - this.downvotes;
  }
});