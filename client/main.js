console.log(Geolocation.latLng());
console.log(Geolocation.currentLocation());
navigator.geolocation.getCurrentPosition(function (position) {
  var lat = position.coords.latitude;
  var longi = position.coords.longitude;
  console.log(lat, longi);
});