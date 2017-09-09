

$(document).ready( function () {

  $('.splash-content-1').css('visibility','visible').addClass('animated bounceinUp');
  setTimeout(function () {
    $('.splash-content-2').css('visibility','visible').addClass('animated bounceinUp');
  }, 600)

  setTimeout(function () {
    $('.splash-statement-1').css('visibility','visible').addClass('animated fadeInUp');
  }, 800)

  setTimeout(function () {
    $('.splash-statement-2').css('visibility','visible').addClass('animated fadeInUp');
  }, 1000)

  setTimeout(function () {
    $('.splash-statement-3').css('visibility','visible').addClass('animated fadeInUp');
  }, 1200)

  setTimeout(function () {
    $('.arrow').css('visibility','visible').addClass('animated bounceinUp');
  }, 3500)

  setTimeout(function () {
  $('.arrow').removeClass('bounceinUp').addClass('bounce')
}, 5000)

})
