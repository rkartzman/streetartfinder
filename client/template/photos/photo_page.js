Template.photoPage.helpers({
  getVotes: function () {
    return this.usersVotedUp.length;
  }, 
  getLat: function() {
  	return this.coordinates.lat; 
  }, 
  getLng: function(){
  	return this.coordinates.lng;
  }
});
