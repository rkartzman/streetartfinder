Template.downvoteForm.events({
  'submit form': function(event){
    event.preventDefault();
    var photoId = event.target.photoId.value;
    var userId = [Meteor.user()._id];
    var photo = Photos.find({_id: photoId}).fetch()[0];
    if($.inArray(userId[0], photo.usersVotedDown) === -1 ) {
      Photos.update({_id: photoId}, {
        $addToSet: { usersVotedDown: userId[0] },
        $inc: { downvotes: 1 }
      })
    }
    // if($.inArray(userId[0], photo.usersVotedUp !== -1)) {
    //   Photos.update({_id: photoId}, {
    //     $inc: { downvotes: 2 }
    //   })
    //     photo.usersVotedUp.splice($.inArray(userId[0]), 1)
    //     photo.usersVotedDown.splice($.inArray(userId[0]), 1)
    // }
    // console.log(photo.usersVotedDown)
    // console.log(photo.usersVotedUp)
  }
});