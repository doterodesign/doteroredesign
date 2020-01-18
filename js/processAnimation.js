window.onload = function () {

    // Get the Object by ID
    var a = document.getElementById("process-animation")
    var pAnim = a.contentDocument;
    let research = pAnim.getElementById("research__scroll");
    let userflows = pAnim.getElementById("process-userflows");
    let collaboration = pAnim.getElementById("process__collaboration");
    let wireframes = pAnim.querySelectorAll(".phone-wireframe");
    let sidebar = pAnim.getElementById("site-sidebar");
    // let children = pAnim.childNodes;
    // var mainContent = children[1].childNodes;
    // var userflowContainer = mainContent[5].childNodes
    // var userflows = userflowContainer[1]
    // var wires = userflowContainer[2]
    // var collab = mainContainer.getElementById("content__collaboration");
    // var research = mainContainer.getElementById("content__research");
    // var tabs = mainContainer.getElementById("process__tabBar");
    // var progress = mainContainer.getElementById("progress-bar");
    // var navbar = mainContainer.getElementById("process__navbar");

    // Get the SVG document inside the Object tag
    // var pAnimation = a.contentDocument;
    // Get one of the SVG items by ID;
    // var svgItem = pAnimation.getElementById("svgItem");
    // Set the colour to something else
    a.setAttribute("height", "40%");
    a.setAttribute("width", "100%");
    console.log(research)

    function pSetup() {
        let setup = gsap.timeline({ defaults: { opacity: 0 } })
        setup.to(research, {opacity: 0})
             .to(collaboration, {opacity: 0})
             .to(userflows, {opacity: 0})
             .to(wireframes, {opacity: 0})
             .to(sidebar, {opacity: 0})
            .fromTo(research, { y: 50 }, { y: 0, opacity: 1, duration: 2 })
            .to(research, {opacity: 1, y: -270,  ease: "power4. inOut", duration: 2 })
        
        return setup;
    }
    
    pSetup()
}