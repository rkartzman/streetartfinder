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
  Photos.insert({
    caption: 'SUP',
    url: 'http://upload.wikimedia.org/wikipedia/commons/d/d2/Round_Lake_(2)_-_Fayetteville_NY.jpg',
    coordinates: { lat: '40.706249', lng: '-74.00925289999999'},
    comments: []
    // user_id: Users.findOne({ name: 'Lucas' })._id
  });

  Photos.insert({
    caption: 'bacon',
    url: 'https://bacon.com',
    coordinates: { lat: '41.706249', lng: '-74.00925289999999'},
    comments: []
    // user_id: Users.findOne({ name: 'Remy' })._id
  });

  Photos.insert({
    caption: 'chipotle',
    url: 'https://chipotle.com',
    coordinates: { lat: '42.706249', lng: '-74.00925289999999'},
    comments: []
    // user_id: Users.findOne({ name: 'Ivan' })._id
  });
}


