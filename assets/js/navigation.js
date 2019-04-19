var navContainer = $('#nav-container');

var children = $(contentContainer).children();
var noHash = location.hash.replace(/^#/, '');
// var activeElement = $(location.hash).attr('id');
activeElement = $(location.hash);
activeChildren = $(activeElement).children();

function reset() {
    window.scrollTo(0,0);
    $(children).hide();
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
    $(children).hide();
    $(navContainer).addClass('cs-active');
    $(location.hash).show();
}
// active();

// function currentSection() {

// }




document.addEventListener('click', function (e) {
    target = e.target;
    if (target.matches('.button')) {
        location.hash = target.getAttribute('data-href');
    }
})

window.addEventListener('hashchange', reset, false);

