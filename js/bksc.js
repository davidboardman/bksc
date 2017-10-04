
$('.scrollto').click(function () {
    var divID = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(divID).offset().top
    }, 500);
});



$(document).ready(function() {
    $('.single-item').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 5000,
        arrows: true
    });
});

