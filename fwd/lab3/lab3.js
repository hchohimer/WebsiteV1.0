var htmlheight;


$( document ).ready(function() {

  words();
sidebars();

//----------------------------------
//making the fades for 6 boxes
$("#one").hover(function(){
  $("#one").fadeTo(500, 0);
});
$("#one").mouseleave(function(){
  $("#one").fadeTo(400, 1);
});
$("#two").hover(function(){
  $("#two").fadeTo(500, 0);
});
$("#two").mouseleave(function(){
  $("#two").fadeTo(400, 1);
});
$("#three").hover(function(){
  $("#three").fadeTo(500, 0);
});
$("#three").mouseleave(function(){
  $("#three").fadeTo(400, 1);
});
$("#four").hover(function(){
  $("#four").fadeTo(500, 0);
});
$("#four").mouseleave(function(){
  $("#four").fadeTo(400, 1);
});
$("#five").hover(function(){
  $("#five").fadeTo(500, 0);
});
$("#five").mouseleave(function(){
  $("#five").fadeTo(400, 1);
});
$("#six").hover(function(){
  $("#six").fadeTo(500, 0);
});
$("#six").mouseleave(function(){
  $("#six").fadeTo(400, 1);
});
//-------------------------------------



//event watchers
$( window ).resize(function() {
  sidebars();
  });
});





function sidebars(){
  //reset's the height so collecting the height doesnt break
  $( '#sidebar1' ).height(400);
  $( '#sidebar2' ).height(400);
  //collecting height of page
  htmlheight = $( document ).height();

//setting height of side bar to page height;
  $( '#sidebar1' ).height(htmlheight - 120);
  $( '#sidebar2' ).height(htmlheight - 120);
}

function words(){
  $('.words').append('<h6>Like this line here!</h6>')
}
