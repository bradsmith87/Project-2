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
  
  
  function getColor(d) {
    return d > 105 ? '#00441b' :
           d > 50  ? '#006d2c' :
           d > 40 ? '#238b45' :
           d >  30  ? '#41ae76' :
           d >  20 ? '#66c2a4' :
           d >  10 ? '#99d8c9' :
           d >  5 ? '#ccece6' :
                      '#e5f5f9';
  }

// // Adding colour layer
function style(feature) {
    return {
        fillColor: getColor(feature.properties.airpollution_field_10),
        weight: 2,
        color: 'white',
        fillOpacity: 1
    };
  }
  L.geoJson(countryData, {style: style}).addTo(myMap);


  //Called from update2010() to apply change
function u2010(feature)  {
    return {
        fillColor: getColor(feature.properties.airpollution_field_3),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
  }
  
  function update2010() {
    L.geoJson(countryData, {style: u2010}).addTo(myMap);
    L.geoJson(countryData, {
        style: u2010,
        onEachFeature: onEachFeature7
      }).addTo(myMap);
  }
  
  //Called from update2011() to apply change
  function u2011(feature)  {
    return {
        fillColor: getColor(feature.properties.airpollution_field_4),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
  }
  
  function update2011() {
    L.geoJson(countryData, {style: u2011}).addTo(myMap);
    L.geoJson(countryData, {
        style: u2011,
        onEachFeature: onEachFeature6
      }).addTo(myMap);
  }
  
  //Called from update2012() to apply change
  function u2012(feature)  {
    return {
        fillColor: getColor(feature.properties.airpollution_field_5),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
  }
  
  function update2012() {
    L.geoJson(countryData, {style: u2012}).addTo(myMap);
    L.geoJson(countryData, {
        style: u2012,
        onEachFeature: onEachFeature5
      }).addTo(myMap);
  }
  
  //Called from update2013() to apply change
  function u2013(feature)  {
    return {
        fillColor: getColor(feature.properties.airpollution_field_6),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
  }
  
  function update2013() {
    L.geoJson(countryData, {style: u2013}).addTo(myMap);
    L.geoJson(countryData, {
        style: u2013,
        onEachFeature: onEachFeature4
      }).addTo(myMap);
  }
  
  //Called from update2014() to apply change
  function u2014(feature)  {
    return {
        fillColor: getColor(feature.properties.airpollution_field_7),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
  }
  
  function update2014() {
    L.geoJson(countryData, {style: u2014}).addTo(myMap);
    L.geoJson(countryData, {
        style: u2014,
        onEachFeature: onEachFeature3
      }).addTo(myMap);
  }
  
  //Called from update2015() to apply change
  function u2015(feature)  {
    return {
        fillColor: getColor(feature.properties.airpollution_field_8),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
  }
  function update2015() {
    L.geoJson(countryData, {style: u2015}).addTo(myMap);
    L.geoJson(countryData, {
        style: u2015,
        onEachFeature: onEachFeature2
      }).addTo(myMap);
  }
  
  //Called from update2016() to apply change
  function u2016(feature)  {
    return {
        fillColor: getColor(feature.properties.airpollution_field_9),
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
        onEachFeature: onEachFeature1
      }).addTo(myMap);
  }
  
    //Called from update2017() to apply change
    function u2017(feature)  {
        return {
            fillColor: getColor(feature.properties.airpollution_field_10),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
      }
      function update2017() {
        L.geoJson(countryData, {style: u2017}).addTo(myMap);
      }
      


  // // Adding interaction
  function onEachFeature7(feature, layer) {
    layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.airpollution_field_3);
    }

  function onEachFeature6(feature, layer) {
    layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.airpollution_field_4);
    }

  function onEachFeature5(feature, layer) {
    layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.airpollution_field_5);
    }

  function onEachFeature4(feature, layer) {
    layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.airpollution_field_6);
    }

function onEachFeature3(feature, layer) {
    layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.airpollution_field_7);
    }

    function onEachFeature2(feature, layer) {
        layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.airpollution_field_8);
        }

    function onEachFeature1(feature, layer) {
        layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.airpollution_field_9);
        }


  function onEachFeature(feature, layer) {
    layer.bindPopup(feature.properties.name + "<br><br>" + feature.properties.airpollution_field_10);
    }

  
      
  
  





  // Legend
var legend = L.control({position: 'topright'});

legend.onAdd = function (myMap) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [5, 10, 20, 30, 40, 50, 105],
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