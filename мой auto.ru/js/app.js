$(function(){
    $('.offer__searchbox').keyup(function(){

        if($(this).val() != '') {
            $('.list').slideDown();
        } else if($(this).val() == '') {
            $('.list').slideUp();
        }
    })

    $('.list__item.list-group-item-action a').click(function(){
        var linkText = $(this).text();
        $('.offer__searchbox').attr('value', linkText);
        $('.list').slideUp();
    })

    $('.sale').on('click',  function(event) {
        event.preventDefault();
        $('.popup').fadeIn( function() {
            
        });
        $('.popup_close').on('click', function(event) {
            event.preventDefault();
            $('.popup').fadeOut( function() {
                
            });
        });
    });
    $('.buy').on('click',  function(event) {
        event.preventDefault();
        $('.popup2').fadeIn( function() {
            
        });
        $('.popup_close').on('click', function(event) {
            event.preventDefault();
            $('.popup2').fadeOut( function() {
                
            });
        });
    });

    $(".thumb-item").brazzersCarousel();
})