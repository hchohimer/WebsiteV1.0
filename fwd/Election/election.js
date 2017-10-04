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
function mouseClicked() {
  console.log('clicked');
  fill(255);
  image(deathstar, mouseX, mouseY);
  ellipse(mouseX, mouseY, 20,20);
  console.log('ellipsed');

}

 setTimeout( sidebars, 100);
 setTimeout( sidebars, 150);
 setTimeout( sidebars, 200);
 setTimeout( sidebars, 350);
 setTimeout( sidebars, 1000);

$( document ).ready(function() {
//--------------------------------functions
  sidebars();


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










//---------------------------Quiz!
