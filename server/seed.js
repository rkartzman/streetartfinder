var user1 = db.users.insert({ username: 'Lucas', password: '123' });
var user2 = db.users.insert({ username: 'Remy', password: '123' });
var user3 = db.users.insert({ username: 'Ivan', password: '123' });
var user4 = db.users.insert({ username: 'David', password: '123' });

var photo1 = db.photos.insert({ caption: 'SUP', url: 'https://sup.com', coordinates: {lat: '', lng: ''}, user_id: user1._id});
var photo2 = db.photos.insert({ caption: 'SUP', url: 'https://sup.com', coordinates: {lat: '', lng: ''}, user_id: user2._id});
var photo3 = db.photos.insert({ caption: 'SUP', url: 'https://sup.com', coordinates: {lat: '', lng: ''}, user_id: user4._id});
var photo4 = db.photos.insert({ caption: 'SUP', url: 'https://sup.com', coordinates: {lat: '', lng: ''}, user_id: user3._id});