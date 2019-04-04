$(document).ready(function(){

  $('#owl-one').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    autoplaySpeed: (true, 3000),
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:4,
        nav:false,
        loop:true
      }
    }
  });




  $('#owl-two').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 5500,
    autoplayHoverPause: true,
    autoplaySpeed: (true, 3000),
    rtl: true,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:4,
        nav:false,
        loop:true
      }
    }
  });
});
