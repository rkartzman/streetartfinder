if (Users.find().count() === 0) {
  Users.insert({
    name: 'Lucas',
    password: '123'
  });

  Users.insert({
    name: 'Remy',
    password: '123'
  });

  Users.insert({
    name: 'Ivan',
    password: '123'
  });
}

if (Photos.find().count() === 0) {
  Photos.insert({
    caption: 'SUP',
    url: 'https://sup.com',
    coordinates: { lat: '', lng: ''},
    comments: [],
    user_id: Users.findOne({ name: 'Lucas' })._id
  });

  Photos.insert({
    caption: 'bacon',
    url: 'https://bacon.com',
    coordinates: { lat: '', lng: ''},
    comments: [],
    user_id: Users.findOne({ name: 'Remy' })._id
  });

  Photos.insert({
    caption: 'chipotle',
    url: 'https://chipotle.com',
    coordinates: { lat: '', lng: ''},
    comments: [],
    user_id: Users.findOne({ name: 'Ivan' })._id
  });
}


