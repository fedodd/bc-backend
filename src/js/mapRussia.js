let map;

export default window.initMap = function () {
  let uluru = { lat: 55.755826, lng: 37.6173 };
  map = new google.maps.Map(document.getElementById('mapMoscow'), {
    center: uluru,
    zoom: 11,
    disableDefaultUI: true,
    zoomControl: true,
    styles: [{ featureType: 'all', elementType: 'labels.text.fill', stylers: [{ saturation: 36 }, { color: '#000000' }, { lightness: 40 }] }, { featureType: 'all', elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, { color: '#000000' }, { lightness: 16 }] }, { featureType: 'all', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#000000' }, { lightness: 20 }] }, { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#000000' }, { lightness: 17 }, { weight: 1.2 }] }, { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 20 }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 21 }] }, { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#000000' }, { lightness: 17 }] }, { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#000000' }, { lightness: 29 }, { weight: 0.2 }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 18 }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 16 }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 19 }] }, { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }, { lightness: 17 }] }]
  });
  let marker = new google.maps.Marker({
    position: { lat: 55.788543, lng: 37.527704 },
    map: map,
    title: 'Moscow',
    icon: {
      url: './../img/mapMarker.svg',
      scaledSize: new google.maps.Size(32, 32)
    }
  });

  let mapRussia;
  mapRussia = new google.maps.Map(document.getElementById('mapRussia'), {
    center: { lat: 61.521958, lng: 93.51359 },
    zoom: 3,
    disableDefaultUI: true,
    zoomControl: true,
    styles: [{ featureType: 'water', elementType: 'geometry', stylers: [{ color: '#e9e9e9' }, { lightness: 17 }] }, { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 20 }] }, { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }, { lightness: 17 }] }, { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 18 }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#ffffff' }, { lightness: 16 }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }, { lightness: 21 }] }, { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#dedede' }, { lightness: 21 }] }, { elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }] }, { elementType: 'labels.text.fill', stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }] }, { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#f2f2f2' }, { lightness: 19 }] }, { featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#fefefe' }, { lightness: 20 }] }, { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }] }]
  });
  let Newmarker = new google.maps.Marker({
    position: { lat: 55.755826, lng: 37.6173 },
    map: mapRussia,
    title: 'Moscow',
    icon: {
      url: './../img/mapMarker.svg',
      scaledSize: new google.maps.Size(32, 32)
    }
  });
}
