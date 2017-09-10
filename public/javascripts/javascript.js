

$(document).ready( function () {

  var $window = $(window);

  setInterval( function () {
    scrollCheck()
  }, 500)

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



  function scrollCheck() {
    if ($(document).scrollTop() > 750){
      mockUpFadeIn()
    }
    if ($(document).scrollTop() > 1480) {
      drawMarkerLines()
      drawTechScores()
    }

  }

  function mockUpFadeIn() {
    if (!($('.img-mockup-phone').hasClass('viewed'))) {
    $('.img-mockup-phone').css('visibility','visible').addClass('animated fadeInRight viewed')
    $('.img-mockup-laptop').css('visibility','visible').addClass('animated fadeInRight viewed')
    }
  }

  function drawMarkerLines() {
    $('.skillmarker-1').addClass('showing').css("height", "70%").css("left", "30%")
    $('.skillmarker-2').addClass('showing').css("height", "70%").css("left", "43%")
    $('.skillmarker-3').addClass('showing').css("height", "70%").css("left", "56%")
    $('.skillmarker-4').addClass('showing').css("height", "70%").css("left", "69%")
    }

  function drawTechScores () {
    // setTimeout( function () {
      $('.skillbar-1').addClass('showing-skill').css("width", "89%").css('visibility','visible').css("animated fadeInLeft")
      $('.skillbar-2').addClass('showing-skill').css("width", "83%")
      $('.skillbar-3').addClass('showing-skill').css("width", "66%")
      $('.skillbar-4').addClass('showing-skill').css("width", "70%")

    // }, 2000)
  }

})
