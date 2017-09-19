console.log('javascript is connected');
// variables
var page_title = document.getElementById('title');
var labs_tab = document.getElementById('tab1');
var projects_tab = document.getElementById('tab2');
var journal_tab = document.getElementById('tab3');

//highlight page tab will show whichever page you're on as a selected option
function highlight_page(){
if (page_title.innerHTML == "FWD Labs"){
  labs_tab.style.backgroundColor = 'rgb(36,36,36)';
  labs_tab.style.color = ' rgb(176,145,91)';
}
if (page_title.innerHTML == "FWD Projects"){
  projects_tab.style.backgroundColor = 'rgb(36,36,36)';
  projects_tab.style.color = ' rgb(176,145,91)';
}
if (page_title.innerHTML == "FWD Journal"){
  journal_tab.style.backgroundColor = 'rgb(36,36,36)';
  journal_tab.style.color = ' rgb(176,145,91)';
}
}
highlight_page();


function fade_in_content(){
  // $("#posts").css("opacity", 1)
   $("#posts").fadeTo(1500, 1)
  console.log("ran fadeIN");
}
$(document).ready(function() {

fade_in_content();

$("#doubleclick").dblclick(function(){
  alert("Sponsored by Gorillas for Outstanding Design.");
});

$("#mouseover").mouseenter(function(){
  $("#posts").fadeOut('fast');
});
$("#mouseover").mouseleave(function(){
  $("#posts").fadeIn('fast');
});






});
