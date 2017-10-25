




function expand(){
  this.toggleClass('open');
  this.children.fadeIN(fast);
}
function collapse(){
  this.toggleClass('open');
  this.children.fadeout(fast);
}

function change(){
  var classes = this.hasClass('open');
  if(classes){
  collapse();
}
else {
  expand();
}
}
