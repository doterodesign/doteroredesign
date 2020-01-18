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
    

    //HIDE ALL contentContainerChildren TO LOAD NEXT PAGE
    $(contentContainerChildren).hide();

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
    $(contentContainerChildren).hide();
    $(navContainer).addClass('cs-active');
    $(location.hash).delay(450).fadeIn(600);
}

window.addEventListener('hashchange', function () {
    reset(); 
});