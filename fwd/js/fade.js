console.log('fade connected');

$(document).ready(function() {
  console.log('ready-LOADED');
  $("#posts").css("opacity",0);
});




$(window).on('load', function() {
      console.log('LOADED');
        $("#posts").css("opacity",0);
});
