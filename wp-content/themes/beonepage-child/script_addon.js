// ============================================================================= //
//                                FOOTER
//                   Remplacement du lien "Build with"
// ============================================================================= //

var theme_link = document.querySelector(".container-socials");
theme_link.parentNode.removeChild(theme_link.nextSibling);
var theme_link_text = theme_link.firstChild;
var new_text = document.createTextNode('Brainmade by Labdev');
theme_link.replaceChild(new_text, theme_link_text);

// ============================================================================= //
//                                ACCUEIL
//              Changement de bckgd au survol du slider-btn
// ============================================================================= //

if (window.location.href.indexOf("http://labdev.fr/accueil/") > -1) {

var slider_btn = document.querySelector("div.slider-btn").firstElementChild;
var full_screen = document.querySelector(".full-screen");

var opacity = full_screen.style.opacity;
var loaded = false;

fade(full_screen);

function fade(obj) {
    if (opacity < 1) {
        if (opacity == '') {
            opacity = 0;
        }

        opacity += 0.1;
        // alert(opacity);
        obj.style.opacity = opacity;
    } else {
        loaded = true;
    }
}

setInterval(function() {
    if (!loaded) {
        fade(full_screen);
    }
}, 200);

/*
slider_btn.addEventListener('mouseover', function() {
    fade(full_screen);
    full_screen.classList.add('my-photo');
    full_screen.classList.remove('full-screen');
});
slider_btn.addEventListener('mouseout', function() {
    full_screen.classList.add('full-screen');
    full_screen.classList.remove('my-photo');
});
*/
    
slider_btn.addEventListener('click', function() {
    if (full_screen.classList.contains('full-screen')) {
        full_screen.classList.add('my-photo');
        full_screen.classList.remove('full-screen');
        slider_btn.classList.remove('btn-light-white');
    } else {
        full_screen.classList.add('full-screen');
        full_screen.classList.remove('my-photo');
        slider_btn.classList.add('btn-light-white');
    }
});

// ============================================================================= //
//                                ACCUEIL
//            Remplacement du sous-titre slider avec lettres en jaune
// ============================================================================= //

var subtitle = document.querySelector(".slider-caption p");
subtitle.innerHTML ='<span>With </span><span class=\'yellow\'>F</span><span>riendly </span><span class=\'yellow\'>R</span><span>esponsive </span><span class=\'yellow\'>E</span><span>-<span class=\'yellow\'>D</span>evice </span><span class=\'yellow\'>LAB</span><span>el</span>';

    // ============================================================================= //
//                                ACCUEIL
//                                MOBILES
//                       Scrolling section/section
// ============================================================================= //

  jQuery(function($) {
    if ($(window).width() < 480 || $(window).height() < 480) {
        new fullpage('#fullpage', {
            autoScrolling:true,
            scrollHorizontally: true
        });
        $("#footer-mobile").css("display", "block");
        $("#go-to-top").css("display", "none");
    }
  });
    
}

// ============================================================================= //
//                                EQUIPE
//                     Open/Close Top large layer au click
// ============================================================================= //

                        //      Image 1     //
else if (window.location.href.indexOf("http://labdev.fr/equipe/") > -1) {
    
var cross_close1 = document.querySelector(".close.img1");
cross_close1.addEventListener('click', function(e) {
    var layer1 = document.querySelector(".block-size.parent.one-half.block-grid-team.user-block.tracker.normal.img1.active");
    layer1.classList.remove('active');
    e.stopPropagation();
});
    
var layer1 = document.querySelector(".block-size.parent.one-half.block-grid-team.user-block.tracker.normal.img1");
layer1.addEventListener('click', function(e) {
    layer1.classList.add('active');
    e.stopPropagation();
});

                         //      Image 2     //
var cross_close2 = document.querySelector(".close.img2");
cross_close2.addEventListener('click', function(e) {
    var layer2 = document.querySelector(".block-size.parent.one-half.block-grid-team.user-block.tracker.normal.img2.active");
    layer2.classList.remove('active');
    e.stopPropagation();
});
    
var layer2 = document.querySelector(".block-size.parent.one-half.block-grid-team.user-block.tracker.normal.img2");
layer2.addEventListener('click', function(e) {
    layer2.classList.add('active');
    e.stopPropagation();
});
    
                         //      Image 3     //
var cross_close3 = document.querySelector(".close.img3");
cross_close3.addEventListener('click', function(e) {
    var layer3 = document.querySelector(".block-size.parent.one-half.block-grid-team.user-block.tracker.reverse.img3.active");
    layer3.classList.remove('active');
    e.stopPropagation();
});
    
var layer3 = document.querySelector(".block-size.parent.one-half.block-grid-team.user-block.tracker.reverse.img3");
layer3.addEventListener('click', function(e) {
    layer3.classList.add('active');
    e.stopPropagation();
});
    
                         //      Image 4     //
var cross_close4 = document.querySelector(".close.img4");
cross_close4.addEventListener('click', function(e) {
    var layer4 = document.querySelector(".block-size.parent.one-half.block-grid-team.user-block.tracker.reverse.img4.active");
    layer4.classList.remove('active');
    e.stopPropagation();
});
    
var layer4 = document.querySelector(".block-size.parent.one-half.block-grid-team.user-block.tracker.reverse.img4");
layer4.addEventListener('click', function(e) {
    layer4.classList.add('active');
    e.stopPropagation();
});
 
                         //      Image 5     //
var cross_close5 = document.querySelector(".close.img5");
cross_close5.addEventListener('click', function(e) {
    var layer5 = document.querySelector(".block-size.parent.one-half.block-grid-team.user-block.tracker.normal.img5.active");
    layer5.classList.remove('active');
    e.stopPropagation();
});
    
var layer5 = document.querySelector(".block-size.parent.one-half.block-grid-team.user-block.tracker.normal.img5");
layer5.addEventListener('click', function(e) {
    layer5.classList.add('active');
    e.stopPropagation();
});
    
}

// ============================================================================= //
//                                METIERS
//                     Open/Close Top large layer au click
// ============================================================================= //

                        //      Image 1     //
else if (window.location.href.indexOf("http://labdev.fr/metiers/") > -1) {

    var soft_skills = document.querySelector("#soft-skills");
    soft_skills.addEventListener('click', function(e) {
        soft_skills.classList.add('active');
        e.stopPropagation();
    });

    var hard_skills = document.querySelector("#hard-skills");
    hard_skills.addEventListener('click', function(e) {
        hard_skills.classList.add('active');
        e.stopPropagation();
    });

    var no_skills = document.querySelector("#no-skills");
    no_skills.addEventListener('click', function(e) {
        no_skills.classList.add('active');
        e.stopPropagation();
    });

    var graduate = document.querySelector("#graduate");
    graduate.addEventListener('click', function(e) {
        graduate.classList.add('active');
        e.stopPropagation();
    });
    var pop_skills = document.querySelector("#pop-skills");
    pop_skills.addEventListener('click', function(e) {
        pop_skills.classList.add('active');
        e.stopPropagation();
    });
     
}

else if (window.location.href.indexOf("http://labdev.fr/article") > -1) {

// ============================================================================= //
//                                ARTICLE
//                    Remplacement des textes des articles
// ============================================================================= //

var postedOn = document.querySelector(".posted-on");
postedOn.firstChild.nodeValue ='Publié le ';
var postedBy = document.querySelector(".byline");
postedBy.firstChild.nodeValue =' par ';
    
}

// ============================================================================= //
//                        MOBILE MENU ANIMATION BURGER
// ============================================================================= //

var burger = document.getElementById("mobile-menu");
burger.insertAdjacentHTML("beforeend", "<span class=\'hamburger-box\'><span class=\'hamburger-inner\'></span></span>");
   
/*
// ============================================================================= //
//                             CONTACT FORM
//                   Remplacement du Placeholder si error
// ============================================================================= //

var SubmitButton = document.querySelector('.wpcf7-submit');
SubmitButton.addEventListener('click', function() {
var nameError= document.getElementsByName('your-name');
if (nameError[0].getAttribute('aria-invalid')== 'false') {
    document.getElementsByName('your-name')[0].placeholder='Ce champ est nécessaire';
    document.getElementsByName('your-name')[0].classList.add('red');
}
var emailError= document.getElementsByName('your-email');
if (emailError[0].getAttribute('aria-invalid')== 'false') {
    document.getElementsByName('your-email')[0].placeholder='Ce champ est nécessaire';
    document.getElementsByName('your-email')[0].classList.add('red');
}
var telError= document.getElementsByName('your-tel');
if (telError[0].getAttribute('aria-invalid')== 'false') {
    document.getElementsByName('your-tel')[0].placeholder='Ce champ est nécessaire';
    document.getElementsByName('your-tel')[0].classList.add('red');
}
var subjectError= document.getElementsByName('your-subject');
if (subjectError[0].getAttribute('aria-invalid')== 'false') {
    document.getElementsByName('your-subject')[0].placeholder='Ce champ est nécessaire';
    document.getElementsByName('your-subject')[0].classList.add('red');
}
var messageError= document.getElementsByName('your-message');
if (messageError[0].getAttribute('aria-invalid')== 'false') {
    document.getElementsByName('your-message')[0].placeholder='Ce champ est nécessaire';
    document.getElementsByName('your-message')[0].classList.add('red');
}
});

var nameInput = document.getElementsByName('your-name')[0];
nameInput.addEventListener('click', function() {
    document.getElementsByName('your-name')[0].placeholder='Nom';
    document.getElementsByName('your-name')[0].classList.remove('red');
});

var emailInput = document.getElementsByName('your-email')[0];
emailInput.addEventListener('click', function() {
    document.getElementsByName('your-email')[0].placeholder='Email';
    document.getElementsByName('your-email')[0].classList.remove('red');
});

var telInput = document.getElementsByName('your-tel')[0];
telInput.addEventListener('click', function() {
    document.getElementsByName('your-tel')[0].placeholder='Tel';
    document.getElementsByName('your-tel')[0].classList.remove('red');
});

var subjectInput = document.getElementsByName('your-subject')[0];
subjectInput.addEventListener('click', function() {
    document.getElementsByName('your-subject')[0].placeholder='Objet';
    document.getElementsByName('your-subject')[0].classList.remove('red');
});

var messageInput = document.getElementsByName('your-message')[0];
messageInput.addEventListener('click', function() {
    document.getElementsByName('your-message')[0].placeholder='Message';
    document.getElementsByName('your-message')[0].classList.remove('red');
});

// ============================================================================= //
//                 délai pour voir animation des liens au click
// ============================================================================= //

var link = document.getElementById('link');
    link.addEventListener('click', function(event) {
      setTimeout(function() {
        document.getElementById('trigger').click();
      }, 3000);
    })
*/


/*
    if ( $('body').hasClass('home')) {
    
var body = document.querySelector('.page');

if (body.classList.contains('home')) {
*/