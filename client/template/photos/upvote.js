Template.upvoteForm.events({
  'submit form': function(event){
    event.preventDefault();
    var photoId = event.target.photoId.value;
    var userId = [Meteor.user()._id];
    var photo = Photos.find({_id: photoId}).fetch()[0];
    if($.inArray(userId[0], photo.usersVotedUp) === -1 ) {
      Photos.update({_id: photoId}, {
        $addToSet: { usersVotedUp: userId[0] },
        $inc: { upvotes: 1 }
      })
    }
    // if($.inArray(userId[0], photo.usersVotedDown !== -1)) {
    //   Photos.update({_id: photoId}, {
    //     $inc: { upvotes: 2 }
    //   })
    //     photo.usersVotedDown.splice($.inArray(userId[0]), 1)
    //     photo.usersVotedUp.splice($.inArray(userId[0]), 1)
    // }
    // console.log(photo.usersVotedDown)
    // console.log(photo.usersVotedUp)
  }
});