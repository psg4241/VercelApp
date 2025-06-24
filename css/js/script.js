$(document).ready(function () {
  // Fade in jobs one by one
  $('.job').hide().each(function (i) {
    $(this).delay(i * 300).fadeIn(1000);
  });

  // Animate section on scroll
  $(window).on('scroll', function () {
    $('.animate-on-scroll').each(function () {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
        $(this).addClass('animate__animated animate__fadeInUp');
      }
    });
  });

  // Hover grow effect on icons
  $('.social-icons a').hover(function () {
    $(this).animate({ fontSize: "1.8rem" }, 200);
  }, function () {
    $(this).animate({ fontSize: "1.5rem" }, 200);
  });
});
