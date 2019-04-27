var sectionStart;


var navContainer = $('#nav-container');


var children = Array.from($(contentContainer).children());
var noHash = location.hash.replace(/^#/, '');
var activeElement = $(location.hash);
var activeChildren = $(activeElement).children();
var caseStudy = false;

var controller = new ScrollMagic.Controller();



function reset() {


    //RESET SCROLL POSITION TO 0
    window.scrollTo(0, 0);


    // $('#current-section').empty();

    //RESET CASE STUDY PROGRESS BAR
    caseStudy = false;
    $('#myBar').css({ "width": "0px" });
    
    //GET ALL DATA-SECTION-NAMES FROM CURRENT CASE STUDY
    sectionStart = Array.from(document.querySelectorAll(`${location.hash} [data-section-name]`));

    //HIDE ALL CHILDREN TO LOAD NEXT PAGE
    $(children).hide();

    //SET LOCATION TO HOME IF THERE IS NO HASH OR HASH === #HOME
    if (location.hash == '' || location.hash === '#home') {
        $(navContainer).removeClass('cs-active');
        location.hash = '#home';
        $(location.hash).show();
    } else {
        active();
    }
}
reset();

function active() {
    caseStudy = true;
    $(children).hide();
    $(navContainer).addClass('cs-active');
    $(location.hash).show();

    setCurrentSection();
}

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


function setCurrentSection() {
       //CURRENT SECTION INDICATOR
       sectionStart.forEach(function (el) {
        var sectionName = new ScrollMagic.Scene({
            triggerElement: el,
            triggerHook: .4,
            reverse: true
        })
            .addTo(controller);
        
           sectionName.on("enter", function () {
               let name = $(el).data('section-name');
               $('#current-section').html(name);
           });
           sectionName.on("leave", function () {
               let name = $(el).data('section-name');
               $('#current-section').html(name);
           });
        //    sectionName.on("hashchange", function () {
        //        $('#current-section').empty();
        //    });
    });
}




//EVENT LISTNERS

window.addEventListener('scroll', function () {
    if (caseStudy) { 
        progressBar();
    }
})


document.addEventListener('click', function (e) {
    
    target = e.target;
    if (target.matches('.button')) {
        location.hash = target.getAttribute('data-href');
    }

    if (target.matches('#main-logo')) {
        location.hash = "#home";
    }

    if (target.matches('#mobile-menu')) {
        $('#nav-container').toggleClass('nav-active');
        $('body').toggleClass('noScroll');
        $('nav').toggleClass('active');
        $('#myBar').toggle();


        if (!$('#social-media').hasClass('active')) {
            $('#social-media').fadeOut(0).delay(600).appendTo('nav').addClass('active').fadeIn(300);
            $('#content-container').fadeOut(0);
        } else {
            $('#social-media').appendTo('#nav-container .info-container p').removeClass('active');
            $('#content-container').fadeIn(0);
        }
    }
})

window.addEventListener('hashchange', function () {
    reset();
});


