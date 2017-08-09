
console.log(window.scrollY);

  window.addEventListener("scroll",function(){
      document.getElementById('verticle-rectangle-2').style.opacity = '0.8';
      if (scrollY > 150){
        document.getElementById('personal-statement').style.opacity = '1';
        document.getElementById('gif-div').style.opacity = '1';
      }
}, false);
