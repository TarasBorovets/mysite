$(document).ready(function() {

    $('.togglemenu').click(function() {
        $('.ggg ul').toggleClass('active');
        $('.togglemenu').toggleClass('click');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 15) {
            $('.ggg').addClass("fixed");
        } else {
            $('.ggg').removeClass("fixed");
        }
    });

    $("#owl-example").owlCarousel({

        autoPlay: 3000,
        stopOnHover: true,
        navigation: true,
        paginationSpeed: 3000,
        goToFirstSpeed: 2000,
        singleItem: true,
        navigationText: ["previous", "next"],
        responsive: true,
        autoHeight: true,
    });

    $(".ggg, #moreinf-button").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});