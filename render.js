$(document).ready(function () {
   $(window).scroll(function () {
       // sticky navbar on scroll script
       if (this.scrollY > 20) {
           $('nav').addClass("sticky");
       } else {
           $('nav').removeClass("sticky");
       }
      })
   })