// document.addEventListener("DOMContentLoaded", function () {
//     function loadCdn(filename) {
//         var fileref = document.createElement('script')
//         fileref.setAttribute("type", "text/javascript")
//         fileref.setAttribute("src", filename)
//         fileref.setAttribute("defer", "defer")
//         document.getElementsByTagName("head")[0].appendChild(fileref)
//     }
    
//     loadCdn("https://code.jquery.com/jquery-3.4.1.min.js")
//     loadCdn("https://cdn.jsdelivr.net/npm/gsap@3.0.4/dist/CSSRulePlugin.min.js")
//     loadCdn("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.4/TextPlugin.min.js")
//     loadCdn("http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js")
//     loadCdn("http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js")
// })


function dynamicContent() {
    window.addEventListener("load", function () {
        function loadjscssfile(filename, filetype) {
            if (filetype == "js") { //if filename is a external JavaScript file
                var fileref = document.createElement('script')
                fileref.setAttribute("type", "text/javascript")
                fileref.setAttribute("src", filename)
                fileref.setAttribute("defer", "defer")
                fileref.setAttribute("async", "false")
            }
            // else if (filetype == "css") { //if filename is an external CSS file
            //     var fileref = document.createElement("link")
            //     fileref.setAttribute("rel", "stylesheet")
            //     fileref.setAttribute("type", "text/css")
            //     fileref.setAttribute("href", filename)
            // }
            if (typeof fileref != "undefined") { }
            document.getElementsByTagName("head")[0].appendChild(fileref)
        }
    
        loadjscssfile("js/loading.js", "js")
        loadjscssfile("js/globals.js", "js")
        loadjscssfile("js/contentTemplates.js", "js")
        loadjscssfile("js/contentBuilder.js", "js")
        loadjscssfile("js/reset.js", "js")
        loadjscssfile("js/navigation.js", "js")
        loadjscssfile("js/sectionIndicator.js", "js")
        loadjscssfile("js/coredAnimation.js", "js")
    })


}

dynamicContent()
