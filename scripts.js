jQuery(document).on('click', 'a[href^="#"]', function (event) {
   event.preventDefault();

  jQuery('html, body').animate({
       scrollTop: jQuery($.attr(this, 'href')).offset().top
   }, 1000);
});