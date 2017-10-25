var valone;
var valtwo;
var valthree;
var valfour;
var valfive;
var valsix;
var valseven;
var valeight;
var valnine;
var valten;
var totalscore;


function setup(){
var C1 = createCanvas(1280/1.5, 1024/1.5);
C1.parent('screen');
x = 0;
y = height/2;

bg = loadImage("img/Sidious-Vader.png")
img = loadImage("img/ship-right.png")
img2 = loadImage("img/ship.png")
deathstar = loadImage("img/deathstar.png");

}


function draw(){
if (x<windowWidth){
x+=4;
};
if (x>=windowWidth){
x = -30;
};

// y = 100*sin(x/100);
// y = y+height/2;
y = 100*sin(x/100);
y = y*cos(300*x);
y = y+height/2;


// console.log(x, y);



background(0);
fill(255);
image(bg,0,0,bg.width/1.5, bg.height/1.5)
image(img, x, y-75,img.height/2,img.width/2);
image(img, 5*x-width*4, height/3 ,img.height/2,img.width/2);
image(img2, -1*x+width, -1*y+height+75,img.height/2,img.width/2);
image(img2, -1*x+width/1.3, -1*x+height,img.height/2,img.width/2);
image(img2, -5*x+width*4.8, height/2.2 ,img.height/2,img.width/2);

// ellipse(-1*x+width, -1*y+height+75, 30,30);

// console.log(-1*y+height);
//end of draw
}



// When the user clicks the mouse
// function mouseClicked() {
//   console.log('clicked');
//   fill(255);
//   image(deathstar, mouseX, mouseY);
//   ellipse(mouseX, mouseY, 20,20);
//   console.log('ellipsed');
//
// }


 setTimeout( sidebars, 100);
 setTimeout( sidebars, 150);
 setTimeout( sidebars, 200);
 setTimeout( sidebars, 350);
 setTimeout( sidebars, 1000);

$( document ).ready(function() {
//-------------------------------- Document Ready functions
  sidebars();

$('#question1').find( 'answer1' ).click(function(){
  makeselected('#question1' , 'answer1');
});



























  //--------------------------------events
$( window ).resize(function() {
  sidebars();
  console.log('sidebars');


  });
});

//setInterval(function(){ sidebars(); }, 1000);

function sidebars(){
  //reset's the height so collecting the height doesnt break
  $( '#sidebar1' ).height(400);
  $( '#sidebar2' ).height(400);
  //collecting height of page
  htmlheight = $( document ).height();
console.log(htmlheight);
//setting height of side bar to page height;
  $( '#sidebar1' ).height(htmlheight);
  $( '#sidebar2' ).height(htmlheight);
}


function sithwin(){
console.log('sithwin');
$('#resultsbox').empty();

$('#resultsbox').hide().append("<h3 class='lessimportant'>You would be a great Sith!<br>Welcome to the Dark Side!</h3><p class='conclusion'>The hate flows through you. After analyzing your results, it appears you would clearly support the massacre of Alderaan, the Wookie enslavement, or how Lord Vader choked his pregnant wife as your support is Dark Side leaning. We thank you for your support. As our power grows, we will guide the galaxy with an loving, gentle, and iron fist, into a more civilized age!  <br>  <br>I created this page to demonstrate how politicians can frame their platform and manipulate their surveys to show that they have support behind them, even if they are actually evil. This quiz doesn’t really lie, these questions are just manipulated to force as many people as possible to get a Sith result. I hope this fun activity will help you will stay aware of similar tricks in the future.<br><br>Thanks for playing, and may the Force be with you!</p>").fadeIn("slow");

sidebars();

}
function youwin(){
  console.log('youwin');
  $('#resultsbox').empty();

  $('#resultsbox').hide().append("<h3 class='lessimportant win'>You fool!<br>You will be purged like the Jedi before you!</h3><p class='conclusion'>Curses, despite our attempts, you proved to be truly incompatible with the Dark Side. We have determined your support is… egh... Right Side leaning. We hope that you die, slowly and painfully. You are in the way of progress like the Jedi before you, but you will not stop us. We will guide the galaxy with an Iron fist, into a new, more civilized age!  <br>  <br>I created this page to demonstrate how politicians can frame their platform and manipulate their surveys to show that they have support behind them, even if they are actually evil. This quiz doesn’t really lie, these questions are just manipulated to force as many people as possible to get a Sith result. I hope this fun activity will help you will stay aware of similar tricks in the future.<br><br>Thanks for playing, and may the Force be with you!</p>").fadeIn("slow");

  sidebars();

  }








//---------------------------Quiz

function quizfunc(){

console.log("quizfunc ran");
totalscore = 0;
valone = $('input[type=radio][name=question1]:checked').attr('id');
valtwo = $('input[type=radio][name=question2]:checked').attr('id');
valthree= $('input[type=radio][name=question3]:checked').attr('id');
valfour= $('input[type=radio][name=question4]:checked').attr('id');
valfive= $('input[type=radio][name=question5]:checked').attr('id');
valsix= $('input[type=radio][name=question6]:checked').attr('id');
valseven= $('input[type=radio][name=question7]:checked').attr('id');
valeight= $('input[type=radio][name=question8]:checked').attr('id');
valnine= $('input[type=radio][name=question9]:checked').attr('id');
valten= $('input[type=radio][name=question10]:checked').attr('id');


if (valone == 'Q1A') {
totalscore ++;
}
if (valtwo == 'Q2A') {
totalscore ++;
}
if (valthree == 'Q3B' || valthree == 'Q3A') {
totalscore ++;
}
if (valfour == 'Q4C' || valfour == 'Q4A' || valfour == 'Q4D') {
totalscore ++;
}
if (valfive == 'Q5D') {
totalscore ++;
}
if (valsix == 'Q6A' || valsix == 'Q6B' || valsix == 'Q6C' || valsix == 'Q6D') {
totalscore ++;
}
if (valseven == 'Q7B' || valseven == 'Q7C') {
totalscore ++;
}
if (valeight == 'Q8A' || valeight == 'Q8B' || valeight == 'Q8C' || valeight == 'Q8D') {
totalscore ++;
}
if (valnine == 'Q9A' || valnine == 'Q9B' || valnine == 'Q9C' || valnine == 'Q9D') {
totalscore ++;
}
if (valten == 'Q10B') {
totalscore ++;
}
//console.log(totalscore);


if(totalscore >= 5){
  sithwin();
}
else{
  youwin();
}

}
