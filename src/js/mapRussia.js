var zoneOverlay;

window.initMap = function () {
  let mapMoscow;
  let uluru = { lat: 55.6526, lng: 37.6173 };
  mapMoscow = new google.maps.Map(document.getElementById('mapMoscow'), {
    center: uluru,
    zoom: 10.5,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    gestureHandling: 'cooperative',
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    styles: [{ featureType: 'all', elementType: 'labels.text.fill', stylers: [{ saturation: 36 }, { color: '#000000' }, { lightness: 40 }] }, { featureType: 'all', elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, { color: '#000000' }, { lightness: 16 }] }, { featureType: 'all', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#000000' }, { lightness: 20 }] }, { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#000000' }, { lightness: 17 }, { weight: 1.2 }] }, { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 20 }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 21 }] }, { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#000000' }, { lightness: 17 }] }, { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#000000' }, { lightness: 29 }, { weight: 0.2 }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 18 }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 16 }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 19 }] }, { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 17 }] }]
  });
  let marker = new google.maps.Marker({
    position: { lat: 55.788543, lng: 37.527704 },
    map: mapMoscow,
    animation: google.maps.Animation.DROP,
    title: 'Moscow',
    icon: {
      url: './../img/mapMarker.svg',
      scaledSize: new google.maps.Size(32, 32)
    }
  });

  var imageBounds = {
    north: 56.3,
    south: 55.205,
    west: 36.89,
    east: 38.29
  };

  zoneOverlay = new google.maps.GroundOverlay(
    './../img/mapZone.svg',
    imageBounds);
/*   zoneOverlay.setMap(mapMoscow); */
 
  var outerCoords = [
    { lat: 57.183603, lng: 37.150727 },
    { lat: 54, lng: 33},
    { lat: 54, lng: 41 }
  ];

  // Define the LatLng coordinates for the polygon's inner path.
  // Note that the points forming the inner path are wound in the
  // opposite direction to those in the outer path, to form the hole.
  function circlePath(center, radius, points) {
    var a = [], p = 360 / points, d = 0;
    for (var i = 0; i < points; ++i, d += p) {
      a.push(google.maps.geometry.spherical.computeOffset(center, radius, d));
    }
    return a;
  }
  var center = new google.maps.LatLng({
    lat: 55.7493,
    lng: 37.618704
  });
  var innerCoords = circlePath(center, 5300, 360).map(point => ({
    lat: point.lat(),
    lng: point.lng()
  }));

  // Construct the polygon, including both paths.
  var bermudaTriangle = new google.maps.Polygon({
    paths: [outerCoords, innerCoords],
    strokeColor: 'red',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: 'red',
    fillOpacity: 0.2
  });
  bermudaTriangle.setMap(mapMoscow);



  let mapRussia;
  mapRussia = new google.maps.Map(document.getElementById('mapRussia'), {
    center: { lat: 52.5, lng: 93.51359 },
    zoom: 3,
    disableDefaultUI: true,
    scrollwheel: false,
    zoomControl: true,
    gestureHandling: 'cooperative',
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    styles: [{ featureType: 'water', elementType: 'geometry', stylers: [{ color: '#e9e9e9' }, { lightness: 17 }] }, { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 20 }] }, { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }, { lightness: 17 }] }, { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 18 }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 16 }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 21 }] }, { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#dedede' }, { lightness: 21 }] }, { elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }] }, { elementType: 'labels.text.fill', stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }] }, { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#f2f2f2' }, { lightness: 19 }] }, { featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#fefefe' }, { lightness: 20 }] }, { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }] }]
  });
  let Newmarker = new google.maps.Marker({
    position: { lat: 55.755826, lng: 37.6173 },
    map: mapRussia,
    title: 'Moscow',
    animation: google.maps.Animation.DROP,
    icon: {
      url: './../img/mapMarker.svg',
      scaledSize: new google.maps.Size(32, 32)
    }
  });
};
