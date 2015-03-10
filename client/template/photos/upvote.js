Template.upvoteForm.events({
  'submit form': function (event) {
    event.preventDefault();
    var photoId = event.target.photoId.value;
    var userId = [Meteor.user()._id];
    var photo = Photos.find({_id: photoId}).fetch()[0];
    if ($.inArray(userId[0], photo.usersVotedUp) === -1) {
      Photos.update({_id: photoId}, {
        $addToSet: {
          usersVotedUp: userId[0]
        }
      });
    }
  }
});