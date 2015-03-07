Template.showMap.rendered = function () {
  mapster = (function(window, google){
    var options = {
      center: {
        lat: 40.7062502,
        lng: -74.00926679999999
      },
      zoom: 10,
      disableDefaultUI: true
    },

    element = document.getElementById('map-canvas');
    map = new google.maps.Map(element, options);


    function addMarker(lat, lng) {
      new google.maps.Marker({
        position: {
          lat: lat,
          lng: lng
        },
        map: map
      });
    };

    google.maps.event.addListener(map, 'tilesloaded', function(evt) {

      for(var i = 0; i < Photos.find().count(); i++){
        mapster.addMarker(parseFloat(Photos.find().fetch()[i].coordinates.lat), parseFloat(Photos.find().fetch()[i].coordinates.lng))
      }

    });

    return {
      addMarker: addMarker
    }
  }(window, google));
}