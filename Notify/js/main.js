$(document).ready(function(){
    $('.slider').slick({
        prevArrow: "<img src='../img/prev.svg' class='prev' alt='1'>",
    	nextArrow: "<img src='../img/next.svg' class='next' alt='2'>",
    });
    $('.cart.mi').on('click',  function(event) {
		event.preventDefault();
		$('.popup.mi').fadeIn( function() {
			
		});
		$('.popup__close').on('click', function(event) {
			event.preventDefault();
			$('.popup').fadeOut( function() {
				
			});
		});
    });
    $('.cart.nike').on('click',  function(event) {
		event.preventDefault();
		$('.popup.nike').fadeIn( function() {
			
		});
		$('.popup__close').on('click', function(event) {
			event.preventDefault();
			$('.popup').fadeOut( function() {
				
			});
		});
    });
    $('.cart.chair').on('click',  function(event) {
		event.preventDefault();
		$('.popup.chair').fadeIn( function() {
			
		});
		$('.popup__close').on('click', function(event) {
			event.preventDefault();
			$('.popup').fadeOut( function() {
				
			});
		});
	});
})