
$(function() {
  "use strict";
  
  $(window).on("scroll", function() {
      // On scroll smooth header
      if($(window).scrollTop() > 50) {
          $(".header-nav").addClass("header-fix");
      } else {
         $(".header-nav").removeClass("header-fix");
      }
      // On scroll auto close menu
      if($('.navbar-collapse').hasClass('show')){
        $('#navbar .navbar-toggler').click();
      }
  });
      // On click menu close
  $('#navbar ul li a').click(function(){
    if($('.navbar-collapse').hasClass('show')){
      $('#navbar .navbar-toggler').click();
    }
  });

});

// Hide menu when click outside the menu

  // On Counter animation
$('.countdown-content>h6').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});


  // Testimonials Slider
$(document).ready(function () {
  $('#testimonials .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        navText: ['<i class="bi bi-arrow-left-circle" aria-hidden="true"></i>', '<i class="bi bi-arrow-right-circle" aria-hidden="true"></i>']
      }
    }
  })

  
  // Partners Slider
  $('.partners-list-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        navText: ['<i class="bi bi-arrow-left-circle" aria-hidden="true"></i>', '<i class="bi bi-arrow-right-circle" aria-hidden="true"></i>']
      }
    }
  })
});