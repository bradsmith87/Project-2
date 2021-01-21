// MAP ONE 
// Creating our map object
var myMap = L.map("map", {
  // 'Empty':L.tileLayer(''),
  center: [35.933365, -14.381034],
  zoom: 2
});

// Adding a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v9",
  accessToken: API_KEY
}).addTo(myMap);

// Adding country data to segment areas 
L.geoJson(countryData).addTo(myMap);


// Creating colour pallette
function getColor(d) {
  return d > 35 ? '#990000' :
         d > 25  ? '#d7301f' :
         d > 20  ? '#ef6548' :
         d >  15 ? '#fc8d59' :
         d >  0  ? '#fdbb84' :
         d >  -15 ? '#fdd49e' :
         d >  -35 ? '#fee8c8' :
         d == 'null' ? '#ffffff':
                    '#ffffff';
}

// // Adding colour layer
function style(feature) {
  return {
      fillColor: getColor(feature.properties.temps_field_14),
      weight: 2,
      color: 'white',
      fillOpacity: 1
  };
}
L.geoJson(countryData, {style: style}).addTo(myMap);






//Called from update2015() to apply change
function update2015() {
  L.geoJson(countryData, {style: u2015}).addTo(myMap);
  L.geoJson(countryData, {
    style: u2015,
    onEachFeature: onEachFeature5
  }).addTo(myMap);
}

function u2015(feature)  {
  return {
      fillColor: getColor(feature.properties.temps_field_9),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

function update2016() {
  L.geoJson(countryData, {style: u2016}).addTo(myMap);
  L.geoJson(countryData, {
    style: u2016,
    onEachFeature: onEachFeature4
  }).addTo(myMap);
}
//Called from update2016() to apply change
function u2016(feature)  {
  return {
      fillColor: getColor(feature.properties.temps_field_10),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

function update2017() {
  L.geoJson(countryData, {style: u2017}).addTo(myMap);
  L.geoJson(countryData, {
    style: u2017,
    onEachFeature: onEachFeature3
  }).addTo(myMap);
}

//Called from update2017() to apply change
function u2017(feature)  {
  return {
      fillColor: getColor(feature.properties.temps_field_11),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

function update2018() {
  L.geoJson(countryData, {style: u2018}).addTo(myMap);
  L.geoJson(countryData, {
    style: u2018,
    onEachFeature: onEachFeature2
  }).addTo(myMap);
}

//Called from update2018() to apply change
function u2018(feature)  {
  return {
      fillColor: getColor(feature.properties.temps_field_12),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

function update2019() {
  L.geoJson(countryData, {style: u2019}).addTo(myMap);
  L.geoJson(countryData, {
    style: u2019,
    onEachFeature: onEachFeature1
  }).addTo(myMap);
}

//Called from update2019() to apply change
function u2019(feature)  {
  return {
      fillColor: getColor(feature.properties.temps_field_13),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

function update2020() {
  L.geoJson(countryData, {style: u2020}).addTo(myMap);
  L.geoJson(countryData, {
    style: u2020,
    onEachFeature: onEachFeature
  }).addTo(myMap);
}

//Called from update2020() to apply change
function u2020(feature)  {
  return {
      fillColor: getColor(feature.properties.temps_field_14),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}
// // Adding interaction

function onEachFeature5(feature, layer) {
  layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.temps_field_9 + "℃");
  }

function onEachFeature4(feature, layer) {
  layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.temps_field_10 + "℃");
  }

function onEachFeature3(feature, layer) {
  layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.temps_field_11 + "℃");
  }

function onEachFeature2(feature, layer) {
  layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.temps_field_12 + "℃");
  }

function onEachFeature1(feature, layer) {
  layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.temps_field_13 + "℃");
  }
            

function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.temps_field_14 + "℃");
  }

// geojson = L.geoJson(countryData, {
//   style: style,
//   onEachFeature: onEachFeature
// }).addTo(myMap);


//         }




// Legend
var legend = L.control({position: 'topright'});

legend.onAdd = function (myMap) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-35, -15, 1, 15, 20, 25, 30, 35],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);