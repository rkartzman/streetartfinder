Template.photoPage.helpers({
  getVotes: function () {
    return this.usersVotedUp.length;
  },
  getLat: function() {
  	return this.coordinates.lat;
  },
  getLng: function(){
  	return this.coordinates.lng;
  },
  getPoster: function () {
    return (this.user.emails[0].address).substring(0, (this.user.emails[0].address).indexOf("@"))
  }
});

Template.photoPage.events({
  'click #been-there': function(event){
    event.preventDefault();
    var photoId = this._id;
    Photos.update({_id: photoId}, {
      $addToSet: {
        seen: Meteor.user()._id
      }
    })
  }
});

