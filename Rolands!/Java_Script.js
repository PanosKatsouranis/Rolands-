
/*its a function that says that if the var is = to the lat and lng it should center and zoom in  */

function initMap() {
    // The location of Kalvitsa
    var Kalvitsa = {lat: 63.945639, lng: 127.018022};
    // The map, centered at Kalvitsa
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 9, center: Kalvitsa});
    // The marker, positioned at Kalvitsa
    var marker = new google.maps.Marker({position: Kalvitsa, map: map});
  }