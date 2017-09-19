

$(document).ready( function () {
  $('.scrollspy').scrollSpy({scrollOffset: 0});

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
    if ($(document).scrollTop() > 500){
      navigationFadein()
    }
    if ($(document).scrollTop() > 600){
      mockUpFadeIn()
    }
    if ($(document).scrollTop() > 1300) {
      drawMarkerLines()
      drawTechScores()
      drawLogos()
      drawSideTech()
    }
    if ($(document).scrollTop() > 1730) {
      drawWorkUnderline()
    }

  }

  function navigationFadein () {
    $('.side-contents').css('visibility','visible').addClass('animated fadeInLeft viewed')
  }

  function mockUpFadeIn() {
    if (!($('.img-mockup-phone').hasClass('viewed'))) {
    $('.img-mockup-phone').css('visibility','visible').addClass('animated fadeInRight viewed')
    $('.img-mockup-laptop').css('visibility','visible').addClass('animated fadeInRight viewed')
    }
  }

  function drawMarkerLines() {
    $('.skillmarker-1').addClass('showing').css("height", "47.5%").css("left", "30%")
    $('.skillnumber-1').css('visibility','visible').css("left", "29%").addClass('animated fadeInLeft viewed')

    $('.skillmarker-2').addClass('showing').css("height", "47.5%").css("left", "43%")
    $('.skillnumber-2').css('visibility','visible').css("left", "40.5%").addClass('animated fadeInLeft viewed')

    $('.skillmarker-3').addClass('showing').css("height", "47.5%").css("left", "56%")
    $('.skillnumber-3').css('visibility','visible').css("left", "53.75%").addClass('animated fadeInLeft viewed')

    $('.skillmarker-4').addClass('showing').css("height", "47.5%").css("left", "69%")
    $('.skillnumber-4').css('visibility','visible').css("left", "65.5%").addClass('animated fadeInLeft viewed')
    }

  function drawTechScores () {
      $('.skillbar-1').addClass('showing-skill').css("width", "76%")
      $('.skillbar-2').addClass('showing-skill').css("width", "65%")
      $('.skillbar-3').addClass('showing-skill').css("width", "54%")
      $('.skillbar-4').addClass('showing-skill').css("width", "47%")
  }

  function drawLogos() {
    setTimeout( () => {
      $('.logo-skill').addClass('animated fadeInLeft').css("visibility", "visible")
    }, 1500)
  }

  function drawSideTech() {
    setTimeout( () => {
      $('.side-tech-card-1').addClass('animated flipInX').css("visibility", "visible")
    }, 2000)
    setTimeout( () => {
      $('.side-tech-card-2').addClass('animated flipInX').css("visibility", "visible")
    }, 2100)
    setTimeout( () => {
      $('.side-tech-card-3').addClass('animated flipInX').css("visibility", "visible")
    }, 2200)
    setTimeout( () => {
      $('.side-tech-card-4').addClass('animated flipInX').css("visibility", "visible")
    }, 2300)
    setTimeout( () => {
      $('.side-tech-card-5').addClass('animated flipInX').css("visibility", "visible")
    }, 2400)
    setTimeout( () => {
      $('.side-tech-card-6').addClass('animated flipInX').css("visibility", "visible")
    }, 2500)
    setTimeout( () => {
      $('.side-tech-card-7').addClass('animated flipInX').css("visibility", "visible")
    }, 2600)
    setTimeout( () => {
      $('.side-tech-card-8').addClass('animated flipInX').css("visibility", "visible")
    }, 2700)
    setTimeout( () => {
      $('.side-tech-card-9').addClass('animated flipInX').css("visibility", "visible")
    }, 2800)
    setTimeout( () => {
      $('.side-tech-card-10').addClass('animated flipInX').css("visibility", "visible")
    }, 2900)
  }

  function drawWorkUnderline() {
    $('.title-underline').addClass('showing-skill').css("width", "53%")

  }

})
