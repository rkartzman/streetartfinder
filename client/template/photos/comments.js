Template.comments.events({
  'submit form': function (event) {
    event.preventDefault();
    var commentValue = event.target.comment.value;
    var photoId = event.target.photoId.value;
    Photos.update({_id: photoId}, {
      $addToSet: {
        comments: {
          content: commentValue,
          user: Meteor.user()
        }
      }
    });
    event.target.comment.value = "";
  }
});

Template.comments.helpers({
  photoComments: function () {
    return this.comments;
  },
  commenter: function() {
    return (this.user.emails[0].address).substring(0, (this.user.emails[0].address).indexOf("@"))
  }
});