function progressBar() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
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
    document.addEventListener('click', function (event) {
        //IF TARGET IS CLASS BUTTON, GET DATA ATTRIBUTE HREF
        let target = event.target;
        let disabled = target.getAttribute('data-disable');

        if (disabled === 'true') {
             console.log("working")
            return;
        }

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
