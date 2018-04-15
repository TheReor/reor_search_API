var geocoder = new google.maps.Geocoder();
var map;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var loca = new google.maps.LatLng(56.046467, 12.694512);

  map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: loca,
    zoom: 8
  });

}


function codeAddress(address) {
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
          
          
      var prop = {
          center:new google.maps.LatLng(results[0].geometry.bounds.f.f, results[0].geometry.bounds.b.b),
          zoom: 8
      };

  var map=new google.maps.Map(document.getElementById('map'),prop);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

$('#search_form').submit(function (e) {
  e.preventDefault();
  var cityInput = $('#cities_val').val();
  codeAddress(cityInput);
});



google.maps.event.addDomListener(window, 'load', initialize);