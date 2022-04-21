jQuery(document).ready(function () {

    $('.item_video svg').mouseover(function () {
        $(".item_video svg").fadeTo(100, 0.3);
    });
    $('.item_video svg').click(function () {
        $('.item_video svg').css('display', 'none');
    });
    $('.burger').click(function () {
        $('.burger, .nav').toggleClass('active');
    });


});
