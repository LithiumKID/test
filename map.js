let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.0363574, lng: -118.3765343 },
    zoom: 12,
  });
  const marker = new google.maps.Marker({
    position: { lat: 34.0363574, lng: -118.3765343 },
    map: map,
  }); 
}

window.initMap = initMap;