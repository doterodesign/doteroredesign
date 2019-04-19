var navContainer = $('#nav-container');

var children = $(contentContainer).children();
var noHash = location.hash.replace(/^#/, '');
// var activeElement = $(location.hash).attr('id');
var activeElement = $(location.hash);
var activeChildren = $(activeElement).children();

var sectionStart = Array.from(document.querySelectorAll('[data-section-start]'));
var currentSectionPlaceholder = document.querySelector('current-section');


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

// function currentSection(e) {
//     console.log('working ALSO');
//     currentSectionPlaceholder.innerHTML = e;
// }

// window.addEventListener('scroll', function () {

//     for (var i = 0; i < sectionStart.length; i++) {
//         // console.log(sectionStart[i]);
//         // var ypos = window.pageYOffset;
//         // var r = sectionStart[i].getBoundingClientRect();
//         // var top = r.top;
    
//         if (window.scrollY < (sectionStart[this].offsetTop + sectionStart[this].offsetHeight)) {
//             var current = sectionStart[this];
//             console.log(current);
//             // console.log(current);
//             // var data = current.getAttribute('section-name').innerHTML;
//             // currentSection(data);
//         }
//     }
// })


// window.addEventListener('scroll', function () {
//     var ypos = window.pageYOffset;

//     // sectionStart.forEach(function (e) {
//     //     var r = e.getBoundingClientRect();
//     //     console.log(r.top);
//     // });

//     sectionStart.filter(e => {
//         var r = e.getBoundingClientRect();

//         if (r.top <= ypos) {
//             console.log('its working')
//         }
//     });
// });

    




document.addEventListener('click', function (e) {
    target = e.target;
    if (target.matches('.button')) {
        location.hash = target.getAttribute('data-href');
    }
})

window.addEventListener('hashchange', reset, false);

