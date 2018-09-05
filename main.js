var topHeader = document.querySelector('.contact_header');
var menuHeader = document.querySelector('.nav_menu_header');
var appearingMenu = document.querySelector('.sticky-nav-bar');
var homeHeader = document.querySelector('.home-header');
var designHeader = document.querySelector('.design-header');
var hostingHeader = document.querySelector('.hosting-header');
var seoHeader = document.querySelector('.seo-header');
var srHeader = document.querySelector('.sr-header');
var rdHeader = document.querySelector('.rd-header');
var ldHeader = document.querySelector('.ld-header');
var ctHeader = document.querySelector('.ct-header');
const menuButton = document.querySelector('.home-header-main-nav__icon');
const homeNav = document.querySelector('.home-header-main-nav');
const doo = document.querySelector('.do');
const proj = document.querySelector('.proj');
const about = document.querySelector('.about');
const cont = document.querySelector('.cont');
const tog = document.querySelector('.tog');

menuButton.addEventListener('click', () => {
    homeNav.classList.toggle('responsive');
    doo.style.visibility = "visible";
    proj.style.visibility = "visible";
    about.style.visibility = "visible";
    cont.style.visibility = "visible";
    tog.style.visibility = "visible";
});

// menuButton.addEventListener('click', () => {
//     if (homeNav.style.gridAutoRows = "0rem") {
//     homeNav.classList += " responsive";
//     doo.style.visibility = "visible";
//     proj.style.visibility = "visible";
//     about.style.visibility = "visible";
//     cont.style.visibility = "visible";
//     tog.style.visibility = "visible";
//     } else {
//     // if (homeNav.classList = "home-header-main-nav responsive") {
//         homeNav.classList.remove(" responsive");
//         doo.style.visibility = "hidden";
//         proj.style.visibility = "hidden";
//         about.style.visibility = "hidden";
//         cont.style.visibility = "hidden";
//         tog.style.visibility = "hidden";
//     }
// });

// menuButton.addEventListener('click', () => {
// if (homeNav.classList.contains(" responsive")) {
//     homeNav.classList.remove("responsive");
//         doo.style.visibility = "hidden";
//         proj.style.visibility = "hidden";
//         about.style.visibility = "hidden";
//         cont.style.visibility = "hidden";
//         tog.style.visibility = "hidden";
// } else {
//     homeNav.classList += " responsive";
//     doo.style.visibility = "visible";
//     proj.style.visibility = "visible";
//     about.style.visibility = "visible";
//     cont.style.visibility = "visible";
//     tog.style.visibility = "visible";
// }

// });

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
        homeHeader.classList += " home-header-small";
        // menuHeader.classList += " logo_gone";
    } else {
        homeHeader.classList = "home-header";
        // menuHeader.classList = "nav_menu_header";
    }

    if (this.window.pageYOffset > 400) {
        homeHeader.style.backgroundColor = "white";
    } else {
        homeHeader.style.backgroundColor = "#DEDDE0";
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


// var current = 0,
// slides = document.querySelectorAll('.feedback_quotes__quote');

// setInterval(function() {
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;
//   }
//   current = (current != slides.length - 1) ? current + 1 : 0;
//   slides[current].style.opacity = 1;
// }, 5000); 

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

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset > 100) {
        ctHeader.classList += " ct-header-small";
        // menuHeader.classList += " logo_gone";
    } else {
        ctHeader.classList = "ct-header";
        // menuHeader.classList = "nav_menu_header";
    }
});