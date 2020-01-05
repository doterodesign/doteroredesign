var navContainer = $('#nav-container');
var children = Array.from($(contentContainer).children());
var noHash = location.hash.replace(/^#/, '');
var activeElement = $(location.hash);
var activeChildren = $(activeElement).children();
var caseStudy = false;


window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
})


function reset() {
    //RESET SCROLL POSITION TO 0
    window.scrollTo(0, 0);


    //RESET CASE STUDY PROGRESS BAR
    caseStudy = false;
    $('#myBar').css({ "width": "0px" });
    

    //HIDE ALL CHILDREN TO LOAD NEXT PAGE
    $(children).hide();

    //SET LOCATION TO HOME IF THERE IS NO HASH OR HASH === #HOME
    if (location.hash == '' || location.hash === '#home') {
        $('#current-section').empty();
        $(navContainer).removeClass('cs-active');
        location.hash = '#home';
        $(location.hash).fadeIn(600);
    } else {
        active();
    }
}
    reset();


//FUNCTION CHANGES ACTIVE CASE STUDY CONTAINER
function active() {
    caseStudy = true;
    $(children).hide();
    $(navContainer).addClass('cs-active');
    $(location.hash).delay(450).fadeIn(600);
}

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}



//EVENT LISTNERS
//ON SCROLL MOVE PROGRESS BAR
window.addEventListener('scroll', function () {
    if (caseStudy) { 
        progressBar();
    }
})

//ON CLICK FNUCTION
    document.addEventListener('click', function (e) {
        //IF TARGET IS CLASS BUTTON, GET DATA ATTRIBUTE HREF
        target = e.target;
        if (target.matches('.case') || target.matches('.case__image') || target.matches('.case__content') || target.matches('.button')) {
            location.hash = target.getAttribute('data-href');
        }

        //IF TARGET IS MAIN-LOGO, LOCATION.HASH = #HOME
        if (target.matches('#main-logo')) {
            location.hash = "#home";
        }

        //SCROLL BACK TO TOP OF PAGE
        if (target.matches('.top-button')) {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }


    
        //IF TARGET MATCHES MOBILE-MENU
        if (target.matches('#mobile-menu')) {
            // TOGGLE NAV ACTIVE
            $('#nav-container').toggleClass('nav-active');
            // TOGGLE CLASS NOSCROLL
            $('body').toggleClass('noScroll');
            // TOGGLE CLASS ACTIVE ON NAV
            $('nav').toggleClass('active');
            // TOGGLE #MYBAR
            $('#myBar').toggle();


            if (!$('#social-media').hasClass('active')) {
                $('#social-media').fadeOut(0).delay(600).appendTo('nav').addClass('active').fadeIn(300);
                $('#content-container').fadeOut(0);
            } else {
                $('#social-media').appendTo('#nav-container .info-container p').removeClass('active');
                $('#content-container').fadeIn(0);
            }
        }
    });

    window.addEventListener('hashchange', function () {
        reset(); 
    });