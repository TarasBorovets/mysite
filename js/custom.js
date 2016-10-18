$(document).ready(function() {

    $('.togglemenu').click(function() {
        $('.ggg ul').toggleClass('active');
        $('.togglemenu').toggleClass('click');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.ggg').addClass("fixed");
        } else {
            $('.ggg').removeClass("fixed");
        }
    });

    $("#owl-example").owlCarousel({

        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        paginationSpeed: 2000,
        goToFirstSpeed: 3000,
        singleItem: true,
        navigationText: ["previous", "next"],
        responsive: true,
        autoHeight: true,
    });

    $(".ggg, #moreinf-button, .godownbutton").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
    console.log( $("#form-submit"));
     $("#form-submit").submit(function eventHandler(event){
        event.preventDefault();
        // console.log(event,$(event.target).find("input[type='email']").val());
        
        var email = $(event.target).find("input[name='email']").val();
        var surname = $(event.target).find("input[name='surname']").val();
        var name = $(event.target).find("input[name='name']").val();
        var comment = $(event.target).find("textarea[name='comment']").val();
        console.log(email,name,surname,comment);
        
        $.ajax({
            url: "https://formspree.io/legioner.ukr@gmail.com", 
            method: "POST",
            data: {
                email: email,
                surname: surname,
                name: name,
                comment: comment
            },
            dataType: "json",
            success : function(response){
               
                alert("success:" + response.success);
            },
            error: function(response){
                alert("error: " + response.responseJSON.error);
            }
        });
    });
         
});
 var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: '.swiper-pagination',
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
  }) 