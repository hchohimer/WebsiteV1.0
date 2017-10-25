//adapted from http://www.learningjquery.com/2007/02/more-showing-more-hiding


$(document).ready(function() {
//$('li').hide();
$('ul.season').click(function(){
	$(this).next().slideToggle(500);
	if ($(this).find('.arrow').attr('src')=='arrow-up.gif')
		$(this).find('.arrow').attr('src', 'arrow-down.gif');
	else if ($(this).find('.arrow').attr('src')=='arrow-down.gif')
		$(this).find('.arrow').attr('src','arrow-up.gif');
})

})
