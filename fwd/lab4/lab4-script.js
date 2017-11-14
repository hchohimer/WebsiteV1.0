
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=3UvdoeOD9tWiO6WOsSfd22DKGGIZuvApjII2pUAU

var randomint = 0;
var sol = 648;
var nasa_camera = 'fhaz';
var getMoreData = false;
function setup() {

    loadJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+sol+"&camera="+nasa_camera+"&api_key=3UvdoeOD9tWiO6WOsSfd22DKGGIZuvApjII2pUAU",showData);
}

function showData(data){
  let spacepics = [];
  // Parse the JSON
  data.photos.forEach(function(element) {
      let pic = element.img_src;
          spacepics.push(pic);
    });
//--------^gets the photos and puts them into a
//console.log('changing photo');
//console.log(spacepics[randomint]);
$('#nasaphoto').attr("src", spacepics[randomint])


}

function randomize(){
sol = Math.floor(Math.random() * 1100)+30;
//randomint = Math.floor(Math.random() * 1100)+30;
randomint = 0;
getMoreData = true;
}

function draw(){

  if (getMoreData) {
        loadJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+sol+"&camera="+nasa_camera+"&api_key=3UvdoeOD9tWiO6WOsSfd22DKGGIZuvApjII2pUAU",showData);
        getMoreData = false;
  }

}
