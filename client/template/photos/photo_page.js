Template.photoPage.helpers({
  getVotes: function () {
    return this.upvotes - this.downvotes;
  }
});