$(document).ready(function() {
   $('.slider').slick({
       asNavFor: '.thumbs',
       responsive: [
           {
               breakpoint: 630,
               settings: {
                   arrows: false,
               }
           },

       ]

   });
   $('.thumbs').slick({
       slidesToShow: 6,
       slidesToScroll: 6,
       asNavFor: '.slider',
       focusOnSelect: true,
       responsive: [
           {
               breakpoint: 960,
               settings: {
                   slidesToShow: 4,
                   slidesToScroll: 1,
                   focusOnSelect: false,
               }

           },
           {
               breakpoint: 630,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
               }
           },
           {
               breakpoint: 460,
               settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1,
               }
           }
       ]
   });

   $('.menu__btn').on('click', function () {
      $ ('.menu__btn, .menu__list').toggleClass('active')
   });
});