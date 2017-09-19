console.log("JS is connected!");

var slideIndex = 1;
//showDivs(slideIndex);
getStarted();


function getStarted(){
  var alpha = document.getElementsByClassName('showtime');
  for (i = 1; i<=alpha.length; i++){
    var j = i.toString();
    var k = 'show'+j;
    var l = document.getElementById(k);
    //console.log(l);
    showDivs(slideIndex, l)
  }
}





function plusDivs(n, m) {
    showDivs(slideIndex += n, m);
    //console.log(m.getElementsByClassName("slideshow"));
}

function showDivs(n, m) {
    var i;
    //var x = document.getElementsByClassName("slideshow");
    var x = m.getElementsByClassName("slideshow");
    //console.log(x);
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
