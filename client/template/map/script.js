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

    marks = [];
    function addMarker(lat, lng, photoId) {
        mark = (new google.maps.Marker({
        id: photoId,
        position: {
          lat: lat,
          lng: lng
        },
        map: map
      }));
        if($.inArray(mark, marks) === -1 ) {
          marks.push(mark)
        } else {
          return
        }
    };
    var mcOptions = {gridSize: 50, maxZoom: 12};
    google.maps.event.addListenerOnce(map, 'tilesloaded', function(evt) {
      for(var i = 0; i < Photos.find().count(); i++){
        mapster.addMarker(parseFloat(Photos.find().fetch()[i].coordinates.lat), parseFloat(Photos.find().fetch()[i].coordinates.lng), Photos.find().fetch()[i]._id)
      }
    var mapClusterer = new MarkerClusterer(map, marks, mcOptions)
    marks.forEach(function(mark) {
        google.maps.event.addListener(mark,'click',function() {
         Router.go('/photos/' + mark.id);
        });
      });
    });


    return {
      addMarker: addMarker
    }
  }(window, google));
}
