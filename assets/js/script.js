$(document).ready(function(){

	$('.card').click('click', function(){
		$(this).toggleClass('card--open')
	});

	$('.card__like').click('click', function(e){
		$(this).toggleClass('card__like--red');
		e.preventDefault();
		e.stopPropagation();
	});


})


