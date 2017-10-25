// $( document ).ready(function() {
// //-------------------------------- Document Ready functions
// randomimg();
// });


function showbiking(){
  console.log('biking');
  $('#results').empty();

  $('#results').hide().append("<figure><img src='images/cycling.jpg' alt='a biker biking'></figure> <p>Some of the best single-track trails on the planet are found in Colorado. Many Colorado roads offer road cyclists a great way to enjoy the spectacular scenery outside of a car. The plethora of bike paths offer families the opportunity for fun cycling adventures.</p>").fadeIn("slow");
}

function showclimbing(){
  console.log('climbing');
  $('#results').empty();

  $('#results').hide().append("<figure><img src='images/climbing.jpg' alt='a climber climbing'></figure><p>Colorado offers breathtaking vistas of some of the Rocky's most scenic peaks and a rich history that makes Colorado one of the most visited summer climbing areas in North America</p>").fadeIn("slow");


}
function showskiing(){
  console.log('skiing');
  $('#results').empty();

  $('#results').hide().append("<figure><img src='images/skiing.jpg' alt='a skier skiing'></figure><p>From family ski trips with leisurely days spent gliding down the slopes to intense, expert-only terrain for adventurous skiers and boarders, there’s a slope in Colorado for everyone. </p>").fadeIn("slow");
}
