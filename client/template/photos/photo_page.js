Template.photoPage.helpers({
  getVotes: function () {
    return this.usersVotedUp.length;
  }
});

Template.photoPage.events({
    'click #been-there': function(event){
      event.preventDefault();
      console.log(event.target);
      var photoId = this._id;
      Photos.update({_id: photoId}, {
        $addToSet: {
          seen: Meteor.user()._id
              }
        })
    }
});