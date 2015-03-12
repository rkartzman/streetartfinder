var mapster, map, marks, mark, options, icon;
Template.showMap.rendered = function () {
  var lat = parseFloat(this.data.lat);
  var lng = parseFloat(this.data.lng);
  mapster = (function (window, google) {
    if (lat && lng) {
      options = {
        center: {
          lat: lat,
          lng: lng
        },
        zoom: 14,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.HYBRID
      };
    } else {
      options = {
        center: {
          lat: 40.7062502,
          lng: -74.00926679999999
        },
        zoom: 14,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.HYBRID
      };
    }

    element = document.getElementById('map-canvas');

    map = new google.maps.Map(element, options);

    marks = [];
    var addMarker = function (lat, lng, photoId, seen) {
      if ($.inArray(Meteor.user()._id, seen) === -1) {
        icon = '/imgs/marker-one.png';
      } else {
        icon = '/imgs/marker-two.png';
      }
      mark = (new google.maps.Marker({
        id: photoId,
        position: {
          lat: lat,
          lng: lng
        },
        map: map,
        icon: icon
      }));

      if ($.inArray(mark, marks) === -1) {
        marks.push(mark);
      } else {
        return;
      }
    };

    var mcOptions = {gridSize: 50, maxZoom: 12};
    google.maps.event.addListenerOnce(map, 'tilesloaded', function (evt) {
      var i;
      for (i = 0; i < Photos.find().count(); i++) {
        mapster.addMarker(parseFloat(Photos.find().fetch()[i].coordinates.lat), parseFloat(Photos.find().fetch()[i].coordinates.lng), Photos.find().fetch()[i]._id, Photos.find().fetch()[i].seen);
      }
      var mapClusterer = new MarkerClusterer(map, marks, mcOptions);
      marks.forEach(function (mark) {
        google.maps.event.addListener(mark, 'click', function () {
          Router.go('/photos/' + mark.id);
        });
      });
    });
    return {
      addMarker: addMarker
    };
  }(window, google));
};
