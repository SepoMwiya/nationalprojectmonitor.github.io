
var osmMap= L.tileLayer.provider('OpenStreetMap.Mapnik');
var TopoMap= L.tileLayer.provider('OpenTopoMap');

// Google Map Layer
var googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    subdomains:['mt0','mt1','mt2','mt3']
});

// Satellite Layer
var googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    subdomains:['mt0','mt1','mt2','mt3']
});

var baseMaps = {
  OSM: osmMap,
  'Open Topo Map' : TopoMap,
 'Google Map': googleStreets,
 'Satellite': googleSat,
};

// Initialize the map
var map = L.map('map', {
  center: [-12.80243,28.21323],
  zoom: 13,
  layers: [osmMap]

  
});


// Add Leaflet Geocoder control
var geocoderControl = L.Control.geocoder({
  defaultMarkGeocode: true,
}).addTo(map);

// Add the tile layer control with overlays
    L.control.layers(baseMaps).addTo(map);


   var popup = L.popup();
   function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
        
}

map.on('click', onMapClick);


//add marker
        var marker = L.marker([-12.806047, 28.248249])
        .bindPopup('<h1>PROJECT 1 CBU HOSTELS</h1><p> The construction started in 2018. A Total number of 155 workmen. Target is set for 2023 December</p>' ) 
        .addTo(map);
        
        var marker = L.marker([-12.807879, 28.243692])
        .bindPopup('<h1>PROJECT 2 CBU GROUNDS </h1>')
        .addTo(map);
        
        var marker = L.marker([-12.805903, 28.235827])
        .bindPopup('<h1>PROJECT 3 CBU SOLAR PLANT</h1>')
        .addTo(map);

    
        

        
      
     

  
 
   


