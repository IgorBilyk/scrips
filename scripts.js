
//Smooth scroll
jQuery(document).on('click', 'a[href^="#"]', function (event) {
   event.preventDefault();

  jQuery('html, body').animate({
       scrollTop: jQuery($.attr(this, 'href')).offset().top
   }, 1000);
});

//Change color of navbar whe scroll

 let $nav = $(".navbar");
     $(document).scroll(function () {
       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
       //$('.span-logo').toggleClass('pinked', $(this).scrollTop() > $('.cover').height()-10);
     });