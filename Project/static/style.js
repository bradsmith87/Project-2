// Creating our map object
var myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 2
  });
  
  // Adding a tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
//   // Adding country data to segment areas 
//   L.geoJson(countryData).addTo(myMap);
  
  // create and add the tile layer
//   var tiles = L.tileLayer('/test');
//   tiles.addTo(map);