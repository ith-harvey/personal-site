

$(document).ready( function () {

  $('.scrollspy').scrollSpy({scrollOffset: 0});

  var $window = $(window);

  setInterval( function () {
    scrollCheck()
  }, 500)

  function splashPage() {
    const splashConentArr = ['.splash-statement-1', '.splash-statement-2', '.splash-statement-3']

    $('.splash-content-1').css('visibility','visible').addClass('animated bounceinUp');

    setTimeout(function () {
      $('.splash-content-2').css('visibility','visible').addClass('animated bounceinUp');
    }, 600)

    setTimeout(function () {
      splashConentArr.forEach( function(selector, i) {
        (function(selector, i) {
          setTimeout( () => {
            $(selector).css('visibility','visible').addClass('animated fadeInUp')
          }, i * 200)
        })(selector, i)
      })
    }, 1200)

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

    class Marker {
      constructor(selectorNum, left, numberLeft) {
        this.selectorNum = selectorNum
        this.left = left
        this.numberLeft = numberLeft
        this.showSkillMarker()
      }
      showSkillMarker () {
        $(`.skillmarker-${this.selectorNum}`).addClass('showing').css("height", "47.5%").css("left", this.left)
        $(`.skillnumber-${this.selectorNum}`).css('visibility','visible').css("left", this.numberLeft).addClass('animated fadeInLeft viewed')
      }
    }

    new Marker('1',"30%","29%")
    new Marker('2',"43%","40.5%")
    new Marker('3',"56%","53.75%")
    new Marker('4',"69%","65.5%")
    }

  function drawTechScores () {
    function showSkill(selector,widthPercent) {
      $(selector).addClass('showing-skill').css("width", widthPercent)
    }

    showSkill('.skillbar-1',"76%")
    showSkill('.skillbar-2',"65%")
    showSkill('.skillbar-3',"54%")
    showSkill('.skillbar-4',"47%")
  }

  function drawLogos() {
    setTimeout( () => {
      $('.logo-skill').addClass('animated fadeInLeft').css("visibility", "visible")
    }, 1500)
  }

  function drawSideTech() {
    const sideTechArr = ['.side-tech-card-1', '.side-tech-card-2', '.side-tech-card-3', '.side-tech-card-4', '.side-tech-card-5', '.side-tech-card-6', '.side-tech-card-7', '.side-tech-card-8', '.side-tech-card-9', '.side-tech-card-10', '.side-tech-card-11', '.side-tech-card-12', '.side-tech-card-13', '.side-tech-card-14']

    sideTechArr.forEach( function(selector, i) {
      (function(selector, i) {
        setTimeout( () => {
          $(selector).addClass('animated flipInX').css("visibility", "visible")
        }, i * 100)
      })(selector, i)
    })
  }

  function flipInSideTechAnimate (selector) {
    $(selector).addClass('animated flipInX').css("visibility", "visible")
  }

  function drawWorkUnderline() {
    $('.title-underline').addClass('showing-skill').css("width", "53%")
  }

  function scrollCheck() {
    splashPage()

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
})
