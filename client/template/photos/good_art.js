Template.goodArt.helpers({
  likedArt: function() {
    return Photos.find({usersVotedUp: Meteor.user()._id});
  }
});


// get all the Photos
// 

// db.photos.find({usersVotedUp: "hu8sTyQ9QGzZ3yH5Z"});