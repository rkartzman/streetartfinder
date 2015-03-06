Template.showMap.rendered = function () {
  (function(window, google){
    var options = {
      center: {
        lat: 40.7062502,
        lng: -74.00926679999999
      },
      zoom: 10,
      disableDefaultUI: true
    },

    element = document.getElementById('map-canvas'),
    map = new google.maps.Map(element, options);

  }(window, google));
}
