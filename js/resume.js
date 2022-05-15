(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });

})(jQuery); // End of use strict

let langdata = {
    "languages": {
        "ar": {
            "strings": {
                "Ar": "العربية",
                "En": "الإنجليزية",
                "Fr": "الفرنسية",
                "about": "نبذة مختصرة",
                "experience": "الخبرة",
                "education": "التعليم",
                "skills": "المهارات",
                "interests": "مركز الاهتمام",
                "language": "اللغات",
                "name": "الإدريسي أيمن",
                "email": "email@me.com :البريد الإلكتروني",
                "tel": "02444666666 :الهاتف",
                "age": "السن: 24 سنة"
                    // "abdsdsout": "مهندس إعلاميات متدرب",
            }

        },
        "en": {
            "strings": {
                "Ar": "Arab",
                "En": "English",
                "Fr": "French",
                "title": "Apprentice computer engineer",
                "name": "Mohammed MOQRAN",
                "email": "Email: email@me.com",
                "tel": "Tel: 02444666666",
                "age": "Age: 24 years"
            }
        },
        "fr": {
            "strings": {
                "Ar": "Arabe",
                "En": "Anglais",
                "Fr": "Français",
                "title": "Apprentit ingénieur informatique",
                "name": "Mohammed MOQRAN",
                "email": "Email: email@me.com",
                "tel": "Tel: 02444666666",
                "age": "Age: 24 ans"
            }
        }
    }

}

function changeLang() {

    let langValue = document.getElementById("lang").value;
    console.log("option: ", langValue);
    document.getElementById("cv").lang = langValue;
    console.log("cv: ", document.getElementById("cv").lang);


    //skip the lang value in the HTML tag for this example
    let zones = document.querySelectorAll('html [lang]');
    applyStrings(zones);

    let lang = findLocaleMatch();
    let container = document.querySelector(`html [lang*=${lang}]`);
    if (container)
        container.className = 'lang-match';
}