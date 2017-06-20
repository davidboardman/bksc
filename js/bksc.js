$('[href^="#"]').off().on('click', function (e) {
    if ($(this).attr('href') != '#') {
        e.preventDefault();
        $('body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
    }
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

