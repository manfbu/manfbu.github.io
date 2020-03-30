$(document).ready(function(){
	$('.slider').slick({
		prevArrow: "<img src='img/Arow1.svg' class='prev' alt='1'>",
    	nextArrow: "<img src='img/Arrow2.svg' class='next' alt='2'>",
		infinite: true,
        slidesToShow: 2,
		slidesToScroll: 1
	});
});
