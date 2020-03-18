$(function() {
	$('a[data-target^="list"]').bind('click.smoothscroll',  function() {
		var	target = $(this).attr('href'),
		    bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 800);
		return false;
	});
	$('.pop-btn').on('click',  function(event) {
		event.preventDefault();
		$('.popup').fadeIn( function() {
			
		});
		$('.popup-close').on('click', function(event) {
			event.preventDefault();
			$('.popup').fadeOut( function() {
				
			});
		});
	});
});
