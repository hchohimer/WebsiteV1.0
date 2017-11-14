
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=3UvdoeOD9tWiO6WOsSfd22DKGGIZuvApjII2pUAU

var randomint = 0;
var sol = 1269;
var nasa_camera = ['fhaz', 'rhaz', 'mast', 'mahli', 'navcam'];
var init = true;
var spacedata = [];
var fhazpics = [];
var rhazpics = [];
var mastpics = [];
var mahlipics = [];
var navcampics = [];
var currentCamera = 'fhaz';
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var maxsol;

//-----------------------------global variables and p5 setup-------------------------------------------------
function setup() {
  var h = window.innerHeight;
  $('#bodyid').css('height', h )
  randomize();

}

//-----------------------------p5 setup and parsing the photo data------------------------------------------

function parseData(data){
  maxsol = spacedata[0].responseJSON.photos[0].rover.max_sol;
  $("#todaysol").html(maxsol);
  fhazpics = [];
  rhazpics = [];
  mastpics = [];
  mahlipics = [];
  navcampics = [];

  for (i = 0; i < 5; i++) {
    // console.log(spacedata[i].responseJSON);
    spacedata[i].responseJSON.photos.forEach(function(element) {
      let pic = element.img_src;
      switch (i) {
        case 0:
            fhazpics.push(pic);
            break;
        case 1:
            rhazpics.push(pic);
            break;
        case 2:
             mastpics.push(pic);
            break;
        case 3:
             mahlipics.push(pic);
            break;
        case 4:
             navcampics.push(pic);
            break;
        default:
            break;
      }
    });
  }
  displayData();
}

//-----------------------------parsing the photo data and displaying photo data------------------------------------------
function displayData(){
  // console.log('displaying data');
  // console.log(fhazpics[0]);
  // console.log(rhazpics[0]);
  // console.log(mastpics[0]);
  // console.log(mahlipics[0]);
  // console.log(navcampics[0]);
$('#fhazphoto').attr("src", fhazpics[0]);
$('#rhazphoto').attr("src", rhazpics[0]);
$('#mastphoto').attr("src", mastpics[0]);
$('#mahliphoto').attr("src", mahlipics[0]);
$('#navcamphoto').attr("src", navcampics[0]);
$("#inputfield")[0].value = sol;

}

//----------------------------displaying photo data and changing sol data chage data-----------------------------------------

function randomize(){
if (init)
{init = false;}
else
{sol = Math.floor(Math.random() * 700)+1000;}

console.log(sol);
  for (var i = 0; i<5; i++){
    spacedata[i] = $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+sol+"&camera="+nasa_camera[i]+"&page=1&api_key=3UvdoeOD9tWiO6WOsSfd22DKGGIZuvApjII2pUAU");
  }
setTimeout(function(){parseData();}, 2000);
}
//----------------------------------------------randimizer and slideshow-----------------------------------------------------
function slideshow(value){

  var absvalue = abs(value);
  switch (absvalue) {
    case 1:
        if (value<0 && a>0)
          {a--;}
        else if(value<0 && a<=0)
          {a = fhazpics.length-1}
        else if(value>0 && a<fhazpics.length-1)
          {a++}
        else if(value>0 && a>=fhazpics.length-1)
          {a = 0}
        $('#fhazphoto').attr("src", fhazpics[a]);
        break;
    case 2:
        if (value<0 && b>0)
          {b--;}
        else if(value<0 && b<=0)
          {b = mahlipics.length-1}
        else if(value>0 && b<mahlipics.length-1)
          {b++}
        else if(value>0 && b>=mahlipics.length-1)
          {b = 0}

        $('#mahliphoto').attr("src", mahlipics[b]);
        break;
    case 3:
        if (value<0 && c>0)
          {c--;}
        else if(value<0 && c<=0)
          {c = mastpics.length-1}
        else if(value>0 && c<mastpics.length-1)
          {c++}
        else if(value>0 && c>=mastpics.length-1)
          {c = 0}
        $('#mastphoto').attr("src", mastpics[c]);

        break;
    case 4:
        if (value<0 && d>0)
          {d--;}
        else if(value<0 && d<=0)
          {d = rhazpics.length-1}
        else if(value>0 && d<rhazpics.length-1)
          {d++}
        else if(value>0 && d>=rhazpics.length-1)
          {d = 0}
        $('#rhazphoto').attr("src", rhazpics[d]);

        break;
    case 5:
        if (value<0 && e>0)
          {e--;}
        else if(value<0 && e<=0)
          {e = navcampics.length-1}
        else if(value>0 && e<navcampics.length-1)
          {e++}
        else if(value>0 && e>=navcampics.length-1)
          {e = 0}
        $('#navcamphoto').attr("src", navcampics[e]);

        break;
    default:
        break;
  }
}

function searchsol(val){
  if (val == 0) {
    sol  = $("#inputfield")[0].value;
  }
  else if(val == -1){
    sol--;
  }
  else if (val == 1){
    sol++
  }
  init = true;
  randomize();
}
