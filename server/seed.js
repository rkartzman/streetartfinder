// if (Users.find().count() === 0) {
//   Users.insert({
//     name: 'Lucas',
//     password: '123'
//   });

//   Users.insert({
//     name: 'Remy',
//     password: '123'
//   });

//   Users.insert({
//     name: 'Ivan',
//     password: '123'
//   });

//   Users.insert({
//     name: 'Denko',
//     password: '123'
//   });
// }

if (Photos.find().count() === 0) {
  // Photos.insert({
  //   caption: 'SUP',
  //   url: 'http://upload.wikimedia.org/wikipedia/commons/d/d2/Round_Lake_(2)_-_Fayetteville_NY.jpg',
  //   coordinates: { lat: '40.706249', lng: '-74.00925289999999'},
  //   comments: []
  //   // user_id: Users.findOne({ name: 'Lucas' })._id
  // });

  Photos.insert({
    caption: 'Biggie',
    url: '/imgs/seed/biggie.jpeg',
    coordinates: { lat: '40.811550', lng: '-73.946477'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    usersVotedDown: [],
    seen: []
    // user_id: Users.findOne({ name: 'Remy' })._id
  });

  Photos.insert({
    caption: 'Biker',
    url: '/imgs/seed/bike.jpeg',
    coordinates: { lat: '40.783811', lng: '-73.979899'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    usersVotedDown: [],
    seen: []
    // user_id: Users.findOne({ name: 'Remy' })._id
  });

  Photos.insert({
    caption: 'Boat',
    url: '/imgs/seed/boat.png',
    coordinates: { lat: '40.788374', lng: '-73.976634'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    usersVotedDown: [],
    // user_id: Users.findOne({ name: 'Ivan' })._id
  });

    Photos.insert({
    caption: 'Woah',
    url: '/imgs/seed/dope.jpeg',
    coordinates: { lat: '40.806823', lng: '-73.961053'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    usersVotedDown: [],
      seen: []
  });

    Photos.insert({
    caption: 'Flower',
    url: '/imgs/seed/flower.png',
    coordinates: { lat: '40.769102', lng: '-73.957214'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
      seen: []
  });

    Photos.insert({
    caption: 'Graffiti',
    url: '/imgs/seed/graffiti.jpeg',
    coordinates: { lat: '40.771247', lng: '-73.972664'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    usersVotedDown: [],
      seen: []
    // user_id: Users.findOne({ name: 'Ivan' })._id
  });

    Photos.insert({
    caption: 'Heart',
    url: '/imgs/seed/heart.jpeg',
    coordinates: { lat: '40.750118', lng: '-74.000130'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    usersVotedDown: [],
      seen: []
  });

    Photos.insert({
    caption: 'Shinning',
    url: '/imgs/seed/jack.jpeg',
    coordinates: { lat: '40.749858', lng: '-73.992405'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
      seen: []
  });

      Photos.insert({
    caption: 'Little Hat',
    url: '/imgs/seed/little.png',
    coordinates: { lat: '40.744461', lng: '-74.003305'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
      seen: []
  });

    Photos.insert({
    caption: 'Olympics',
    url: '/imgs/seed/olympics.jpeg',
    coordinates: { lat: '40.740006', lng: '-73.986676'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    usersVotedDown: [],
      seen: []
    // user_id: Users.findOne({ name: 'Ivan' })._id
  });

    Photos.insert({
    caption: 'Pigeons',
    url: '/imgs/seed/pigeons.jpeg',
    coordinates: { lat: '40.736299', lng: '-73.980303'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    usersVotedDown: [],
      seen: []
  });

    Photos.insert({
    caption: 'Plugs',
    url: '/imgs/seed/plugs.jpeg',
    coordinates: { lat: '40.727226', lng: '-73.977985'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
      seen: []
  });


      Photos.insert({
    caption: 'Sign',
    url: '/imgs/seed/sign.jpeg',
    coordinates: { lat: '40.718249', lng: '-73.980560'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    seen: []
  });

    Photos.insert({
    caption: 'Skeleton',
    url: '/imgs/seed/skeleton.jpeg',
    coordinates: { lat: '40.713565', lng: '-74.010429'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    usersVotedDown: [],
    seen: []
    // user_id: Users.findOne({ name: 'Ivan' })._id
  });

    Photos.insert({
    caption: 'Maid',
    url: '/imgs/seed/sweep.jpeg',
    coordinates: { lat: '40.705400', lng: '-74.017038'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    usersVotedDown: [],
    seen: []
  });

  Photos.insert({
    caption: 'Tree',
    url: '/imgs/seed/tree.png',
    coordinates: { lat: '40.711126', lng: '-73.990216'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
    seen: []
  });

     Photos.insert({
    caption: 'Finish Line',
    url: '/imgs/seed/runner.jpeg',
    coordinates: { lat: '40.723128', lng: '-73.977385'},
    comments: [],
    upvotes: 0,
    downvotes: 0,
    usersVotedUp: [],
      seen: []
  });
}


