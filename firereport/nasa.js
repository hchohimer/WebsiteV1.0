//var category = 8;
//var status = 'open';
//var limit = 20;
//var days = 7;
//var api_key = '3UvdoeOD9tWiO6WOsSfd22DKGGIZuvApjII2pUAU';
var count = 0;
let google_api = 'AIzaSyDmtWEol4FnHHLLdHOzTbiu6hiBVKl5rpU';
let fires = [];
let GMap;
var heatmapData = [];
// var itteration = 0;

// P5 Function used to load JSON. Could remove it to drop the p5 dependency
function setup() {
  //loadJSON("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8?status="+"open"+"?limit="+"20"+"?days=1?"+"api_key=3UvdoeOD9tWiO6WOsSfd22DKGGIZuvApjII2pUAU",getFireData);
  loadJSON("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8?status=open", getFireData);
}


// This function cleans up the JSON input from NASA into a more concise array for use in Google API
// Collection [
/* {
//      name: string
//      coordinates: array [double lat, double long]
// }
 ] */
function getFireData(data) {
  // Parse the JSON
  data.events.forEach(function(element) {
    let fire = {
      name: element.title,
      coordinates: [element.geometries[0].coordinates[0], element.geometries[0].coordinates[1]]
    };
    fires.push(fire)
  });
  populateMap(fires)

}

// Called Once the Fire Data is populated
function populateMap(fires) {
  fires.forEach(function(element) {
    // console.log('Adding ' + element.name+' '+element.coordinates[1]+' '+element.coordinates[0])
    count++;
    var image = 'img/fire.png';
    var latLng = new google.maps.LatLng(element.coordinates[1], element.coordinates[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: GMap,
      icon: image
    });
    //---------------marker^---tag v
    element.coordinates[1] = Math.round(element.coordinates[1] * 1000) / 1000;
    element.coordinates[0] = Math.round(element.coordinates[0] * 1000) / 1000;
    var contentString = "<div class='content'>   <h3>" + element.name + "</h3><h4> Lat: " + element.coordinates[1] + " Long: " + element.coordinates[0] + "</h4> </div>";
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
      setTimeout(function() {
        infowindow.close();
      }, 7000);
    });
    //------------------heatmap-------------
    heatmapData.push({
      location: latLng,
      weight: 5
    });
    // console.log(heatmapData);


    // console.log(heatmapData[itteration]+"||| itteration: "+itteration);
    // console.log(heatmapData[itteration]);
    // itteration++;
  });
  // var statement = "<p>There are currently "+count+" fires currently being tracked.</p>";
  $("#counted").empty();
  $('#counted').hide().append("<p>There are currently " + count + " fires currently being tracked.</p>").fadeIn("slow");
}


// Initalizes the Google Map
function initMap() {
  var us = {
    lat: 39.5,
    lng: -108.35
  };
  GMap = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: us
  });
  setTimeout(function() {
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      map: GMap,
      radius: .5,
      dissipating: false
    });
    heatmap.setMap(GMap);
    console.log(heatmapData);
    // heatmap.setMap(GMap);
    console.log('posted heat data');
    console.log(GMap);
  }, 1000);



  var waqiMapOverlay = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
      return 'https://tiles.waqi.info/tiles/usepa-aqi/' + zoom + "/" + coord.x + "/" + coord.y + ".png?token=38fae8a9dc426daac5d4612f2338ef17100e9908";
    },
    name: "Air  Quality",
  });

  GMap.overlayMapTypes.insertAt(0, waqiMapOverlay);

}


setTimeout(function() {
  initMap();
}, 800);
// make the side bar height work
// function sidebars(){
//   // //reset's the height so collecting the height doesnt break
//   // $( '#sidebar1' ).height(400);
//   //collecting height of page
//   htmlheight = $( document ).height();
// console.log(htmlheight);
// //setting height of side bar to page height;
//   $( '#content' ).height(htmlheight);
//
// }
// sidebars();
