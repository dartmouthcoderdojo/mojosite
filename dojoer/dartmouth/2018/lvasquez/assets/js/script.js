$(document).ready(function() {

  // Handlers
  $(window).on('scroll', function() {
    var wScroll = $(this).scrollTop();
    var fade = 35;
    var introHeight = $('.intro-wrapper').height();
    var fadePoint = (fade / 100) * introHeight - $('.title').height();
    
    
    $('.welcome-msg').css({
      'transform': 'translate(0px, ' + wScroll * 1.5 + 'px)'
    });

    if (wScroll > fadePoint) {
      $(".welcome-msg").fadeOut();
    }

    if (wScroll < fadePoint) {
      $(".welcome-msg").fadeIn();
    }

  });

});
