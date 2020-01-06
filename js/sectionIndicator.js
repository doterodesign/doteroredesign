var current = new ScrollMagic.Scene();

function resetScrollMagic() {
    sectionStart = null;
    current = current.destroy(true);
    current = null;
    current = new ScrollMagic.Scene();
    controller = controller.destroy(true);
    controller = null;
    controller = new ScrollMagic.Controller();
}

function scrollMagic() {
    $('#current-section').empty();
    var sectionStart = Array.from(document.querySelectorAll(`${location.hash} [data-section-name]`));

    //SCROLLMAGIC INITIALIZATION AND RULES
    sectionStart.forEach(e => {

    //BUILD SCENE
    current = new ScrollMagic.Scene({
            triggerElement: e,
            triggerHook: 0,
            reverse: true,
            offset: 10,
            refreshInterval: 100
        })
        // .addIndicators({
        //     name: 'trig',
        //     indent: 100,
        //     colorStart: 'blue',
        //     colorTrigger: 'green'
        //     })
            .addTo(controller)
        
                current.on("enter", function () {
                    $('#current-section').empty();
                    let name = $(e).data('section-name');
                    $('#current-section').html(name);
                });

                current.on("leave", function () {
                            $('#current-section').empty();
                            let name = $(e).data('section-name');
                            $('#current-section').html(name);
                });
    });
}
// scrollMagic();

// window.addEventListener('DOMContentLoaded', function () { 
    resetScrollMagic();
    scrollMagic();
// })

        //ON HASHCHANGE, LOAD SCROLLMAGIC AND RESET
window.addEventListener('hashchange', function () {
    resetScrollMagic();
    scrollMagic();
});

