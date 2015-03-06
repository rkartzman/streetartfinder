Photos = new Mongo.Collection('photos');

// if (Meteor.isClient) {
//   Template.photos.helpers({
//     players: function () {
//       return Players.find({}, { sort: { score: -1, name: 1 } });
//     },
//     selectedName: function () {
//       var player = Players.findOne(Session.get("selectedPlayer"));
//       return player && player.name;
//     }
//   });