var topHeader = document.querySelector('.contact_header');
var menuHeader = document.querySelector('.nav_menu_header');
var appearingMenu = document.querySelector('.sticky-nav-bar');
var designHeader = document.querySelector('.design-header');
var hostingHeader = document.querySelector('.hosting-header');
var seoHeader = document.querySelector('.seo-header');
var srHeader = document.querySelector('.sr-header');
var rdHeader = document.querySelector('.rd-header');
var ldHeader = document.querySelector('.ld-header');


window.addEventListener('scroll', function(){
    if (window.pageYOffset >= 50) {
        // topHeader.classList += " gone";
        menuHeader.classList += " small";
    } else {
        // topHeader.classList = "contact_header";
        menuHeader.classList = "nav_menu_header";
    }
})

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset > 170) {
        appearingMenu.classList += " appear";
        // menuHeader.classList += " logo_gone";
    } else {
        appearingMenu.classList = "sticky-nav-bar";
        // menuHeader.classList = "nav_menu_header";
    }
});

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset > 100) {
        designHeader.classList += " design-header-small";
        // menuHeader.classList += " logo_gone";
    } else {
        designHeader.classList = "design-header";
        // menuHeader.classList = "nav_menu_header";
    }
});


var current = 0,
slides = document.querySelectorAll('.feedback_quotes__quote');

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 5000); 

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset > 100) {
        hostingHeader.classList += " hosting-header-small";
        // menuHeader.classList += " logo_gone";
    } else {
        hostingHeader.classList = "hosting-header";
        // menuHeader.classList = "nav_menu_header";
    }
});

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset > 100) {
        seoHeader.classList += " seo-header-small";
        // menuHeader.classList += " logo_gone";
    } else {
        seoHeader.classList = "seo-header";
        // menuHeader.classList = "nav_menu_header";
    }
});

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset > 100) {
        srHeader.classList += " sr-header-small";
        // menuHeader.classList += " logo_gone";
    } else {
        srHeader.classList = "sr-header";
        // menuHeader.classList = "nav_menu_header";
    }
});

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset > 100) {
        rdHeader.classList += " rd-header-small";
        // menuHeader.classList += " logo_gone";
    } else {
        rdHeader.classList = "rd-header";
        // menuHeader.classList = "nav_menu_header";
    }
});

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset > 100) {
        ldHeader.classList += " ld-header-small";
        // menuHeader.classList += " logo_gone";
    } else {
        ldHeader.classList = "ld-header";
        // menuHeader.classList = "nav_menu_header";
    }
});