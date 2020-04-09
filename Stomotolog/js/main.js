$(document).ready(function(){
    $('.question').click(function(event){
        $(this).toggleClass('active').next().slideToggle(100);
    })
    $('.feedbacks').slick({
		prevArrow: "<img src='../img/prev.svg' class='prev' alt='1'>",
    	nextArrow: "<img src='../img/next.svg' class='next' alt='2'>",
		infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
    new WOW().init();
})
