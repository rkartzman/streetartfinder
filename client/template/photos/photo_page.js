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

Template.photoPage.events({
    'submit #add_comment': function(event){
      event.preventDefault();
      var commentValue = event.target.comment.value;
      var photoId = event.target.photoId.value;
      Photos.update({_id: photoId}, {
        $addToSet: {
          comments: { content: commentValue,
                user: Meteor.user() }
              }
        })
      event.target.comment.value = ""
    }
});

Template.photoPage.helpers({
  getVotes: function () {
    return this.upvotes - this.downvotes;
  }
});

Template.photoPage.helpers({
  photoComments: function() {
    return Photos.find();
    // ({_id: this.params.:_id}).comments
  }
});