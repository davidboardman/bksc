$('[href^="#"]').off().on('click', function (e) {
    if ($(this).attr('href') != '#') {
        e.preventDefault();
        $('body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
    }
});
