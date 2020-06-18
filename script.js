// // Initialize some map with center at Bucaramanga

//   Change navbar Logo Collor and Height

// // An array with the coordinates of the boundaries of Bucaramanga, extracted manually from the GADM database



function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
        lat: 44.4268,
        lng: 26.1025
    },
    zoom: 13,
    mapTypeId: 'roadmap'
  });
  
  var sector1Coords=[
    {lat:44.434798,lng: 26.097717},
    {lat: 44.466941,lng:26.097150},
    {lat:44.441327,lng: 26.198153},
    {lat: 44.457841,lng: 26.154109},
    {lat: 44.479183,lng: 26.181571},
  ]
  var sector2Coords=[  
    {lat:44.434798,lng: 26.097717},
    {lat:44.466941,lng:26.097150},
    {lat:44.423498,lng: 26.198153},
    {lat:44.409672,lng: 26.123571},
    {lat:44.393841,lng:26.179947}, 
     {lat:44.396100,lng:26.211131},
  
  ] 
   var sector3Coords=[
    {lat:44.434798,lng: 26.097717},
    {lat: 44.438210,lng:26.101234},
    {lat:44.441327,lng: 26.198153},
    {lat: 44.457841,lng: 26.154109},
    {lat: 44.479183,lng: 26.181571},
  ]
  var sector4Coords=[  
    {lat:44.434798,lng: 26.097717},
    {lat:44.4253560,lng:26.108394},
    {lat:44.423498,lng: 26.198153},
    {lat:44.409672,lng: 26.123571},
    {lat:44.393841,lng:26.179947}, 
     {lat:44.396100,lng:26.211131},
  
  ]
  var sector5Coords=[
    {lat:44.434798,lng: 26.097717},
    {lat: 44.438210,lng:26.101234},
    {lat:44.441327,lng: 26.198153},
    {lat: 44.457841,lng: 26.154109},
    {lat: 44.479183,lng: 26.181571},
  ]
  var sector6Coords=[  
    {lat:44.434798,lng: 26.097717},
    {lat:44.4253560,lng:26.108394},
    {lat:44.423498,lng: 26.198153},
    {lat:44.409672,lng: 26.123571},
    {lat:44.393841,lng:26.179947}, 
     {lat:44.396100,lng:26.211131},
  
  ]
  // Construct the polygon.
    var sector1=new google.maps.Polygon({
      paths:sector1Coords,
      strokeColor:'#ff0000',
      strokeOpacity:0.5,
      strokeWeight:2,
      fillColor:'red',
      editable:false,
      fillOpacity:0.5,
  
    })

    var sector2=new google.maps.Polygon({
      paths:sector2Coords,
      strokeColor:'#ff0000',
      strokeOpacity:0.5,
      strokeWeight:2,
      fillColor:'blue',
      editable:false,
      fillOpacity:0.5,
  
    })
  // Draw the polygon on the desired map instance
  sector1.setMap(map);
  sector2.setMap(map);
  sector3.setMap(map);
  sector4.setMap(map);
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}