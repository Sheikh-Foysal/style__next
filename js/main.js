


// Function Activation
$(document).ready(function(){

    new WOW().init();
    GalleryFunction();
    OwlCarouselFunction();
    stickyMenu();

});



// Gallery Function
function GalleryFunction(){
    $('a[data-imagelightbox="imageligtbox"]').imageLightbox({
        activity: true,
        arrows: true,
        button: true,
        caption: true,
        navigation: true,
        overlay: true,
        quitOnDocClick: false,
        selector: 'a[data-imagelightbox="f"]'
    });
}



// Owl Carousel Function
function OwlCarouselFunction(){
    $('#hero_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dots:false,
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // },
        items:1
    });
}



function stickyMenu(){
    $(window).scroll(function () {
        if($(window).scrollTop() > 20) {
          $(".primary_custom_navbar").addClass('sticky');
        } else {
          $(".primary_custom_navbar").removeClass('sticky');
        }
      });
}
