$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // drop down
    $('.dropdown-content a').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Product Designer", "Product Photographer", "3d Modler"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
//java script

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = n - 1;
    }
    if (n < 1) { slideIndex = 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" act", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("act");
}
//
var slideIndex2 = 1;
showSlides2(slideIndex2);
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var design = document.getElementsByClassName("mydesign");
    var dots2 = document.getElementsByClassName("dot2");
    if (n > design.length) {
        slideIndex2 = n - 1;
    }
    if (n < 1) { slideIndex2 = 1 }
    for (i = 0; i < design.length; i++) {
        design[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" act", "");
    }
    design[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].classList.add("act");
}
//
var slideIndex3 = 1;
showSlides3(slideIndex3);
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    var i;
    var d = document.getElementsByClassName("drender");
    var dots3 = document.getElementsByClassName("dot3");
    if (n > d.length) {
        slideIndex3 = 1;
    }
    if (n < 1) { slideIndex3 = d.length - 1 }
    for (i = 0; i < d.length; i++) {
        d[i].style.display = "none";
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" act", "");
    }
    d[slideIndex3 - 1].style.display = "block";
    dots3[slideIndex3 - 1].classList.add("act");
}
//drop
function drop() {
    let q = document.querySelector(".dropdown-content")
    q.classList.toggle('active');
}
//back
function back() {
    let q = document.querySelector(".dropdown-content")
    q.classList.toggle('active');
}
//form submition
document.getElementById('contactForm').addEventListener('submit', submitform)

function submitform(e) {
    e.preventDefault()
    document.querySelector(".alert").style.display = "block"
    let name = getInputId('name')
    let mail = getInputId('mail')
    let sub = getInputId('sub')
    let ta = getInputId('ta')
    saveMsg(name, mail, sub, ta)
    setTimeout(
        () => {
            document.querySelector(".alert").style.display = "none"
        }, 2000)
    document.getElementById("contactForm").reset()
}
function getInputId(i) {
    return document.getElementById(i).value
}
