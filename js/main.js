$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.hideme').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){

              $(this).animate({'opacity':'1'},500);

          }

      });
  });

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.animate-bars').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){

              $('.effectsa').css('width', '100%');
              $('.effectsb').css('width', '60%');
              $('.effectsc').css('width', '60%');
              $('.effectsd').css('width', '55%');
              $('.effectse').css('width', '40%');

          }

      });
  });

  /* nav bar color change */
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length){
  $(document).scroll(function() { 
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
        //$("nav").css('background-color', '#131E00'); // dark
        $("nav#full-nav").css('background-color', '#82B240');
     } else {
        $('nav#full-nav').css('background-color', 'transparent');
     }
  });
  }

  /* smooth scrolling */
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});