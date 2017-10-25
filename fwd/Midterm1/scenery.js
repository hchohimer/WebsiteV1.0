




$( document ).ready(function() {
//-------------------------------- Document Ready functions
randomimg();
});

function randomimg(){
  var rand;
  var prevrand
  rand =  Math.round(Math.random()*4);
  while (rand == prevrand) {
    rand =  Math.round(Math.random()*4);
  }
  console.log(rand);
  prevrand = rand;
  if (rand == 0) {
$("#imgtag").attr("src","images/scene1.jpg");
  }
  if (rand == 1) {
$("#imgtag").attr("src","images/scene2.jpg");
  }
  if (rand == 2) {
$("#imgtag").attr("src","images/scene3.jpg");
  }
  if (rand == 3) {
$("#imgtag").attr("src","images/scene4.jpg");
  }
  if (rand == 4) {
$("#imgtag").attr("src","images/scene5.jpg");
  }
}
