function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getAddress(latitude, longitude);
      },
      (error) => {
        console.error(`Error getting location: ${error.message}`);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}


function getAddress(latitude, longitude) {
  if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
    console.error('Google Maps API is not loaded!');
    return;
  }

  const latLng = new google.maps.LatLng(latitude, longitude);
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ 'location': latLng }, (results, status) => {
    if (status === 'OK') {
      if (results[0]) {
        document.getElementById('address').innerHTML = `<h3>Address:  ${results[0].formatted_address}</h3>`;
      } else {
        document.getElementById('address').innerText = 'No address found';
      }
    } else {
      document.getElementById('address').innerText = 'Geocoder failed due to: ' + status;
    }
  });
}

getLocation();

