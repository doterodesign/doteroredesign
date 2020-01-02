function screenIntro() {
    let tl = gsap.timeline({defaults: {opacity: 0}});

    tl.from("#mockup-screen", {opacity: 0, y: 100, duration: 1.2, ease: " power3. out"});

    return tl;
}

var tlScreenIntro = screenIntro();

function coursesOverview() {
   let tl = gsap.timeline({defaults:{opacity: 0, ease: "expo. out", duration: 1}});

      //FINANCES OVERVIEW ANIMATION
      tl.fromTo("#finances-overview", {
        opacity: 0, 
        duration: 1}, {opacity: 0});

    //courses-overview-animation

    tl.fromTo("#course-overview-tooltip, #touch-indicator", {opacity: 0}, {opacity: 0});

    //sections
    tl.from("#section-1, #section-2, #section-3, #section-4", {x:-50, 
    duration: 0.7,
    stagger: 0.2}, "-=0.3");

    //header-title
    tl.from("#header-title", {
    opacity: 0, 
    duration: 1}, "-=1.2");

    //SECTION-HEADER
    tl.from("#section-header", {
    opacity: 0, 
    y:-50, 
    duration: 0.6}, "-=1.3");

    //CLASSES
    tl.from(".class", {
        duration: 0.6,  
        opacity: 0,
        y: -100,
        stagger: 0.1}, "-=1.2");

    //ACTIVE SECTION

    tl.from("#section-background-1, #secondary-navigation-bar", {opacity: 1, width: "0px", duration: 0.4}, "-=0.5");
    tl.from("#secondary-navigation-bar", {fill: "#DEDEDE", duration: 0.2}, "-=0.5");
    tl.from("#section-background-1", {fill: "#fff", duration: 0.4}, "-=0.5");

    return tl;
};

var tlCoursesOverview = coursesOverview();

function touchIndicatorClick() {
    let tl = gsap.timeline();
    
    tl.to(
        "#touch-indicator", {
        keyframes: [
            {opacity: 0.2, duration: 0.5},
            {scale: 0.8},
            {scale:1}
        ]
    })

    return tl;
}

function coursesNav() {
    let tl = gsap.timeline();

    tl.add(touchIndicatorClick)
        .to("#course-overview-tooltip", {opacity: 1, duration: 1}, "+=1")
        .fromTo("#touch-indicator", {x: 5, y: -10}, {x: -20, y: -40, duration: 0.6})
        .add(touchIndicatorClick)
      tl.to("#course-overview-tooltip", {opacity: 0, duration: 1}, "+=1")

    tl.paused( true );
    return tl;
}

var tlCoursesNav = coursesNav();

function financesOverview() {
    let tl = gsap.timeline();

    tl.to("#touch-indicator", {x: -205, y: 413, duration: 0.7})
      .add(touchIndicatorClick)
    //sections
      .to(".class", {
        duration: 0.6,  
        opacity: 0,
        y: -100,
        stagger: 0.1}, "+=1.5")

      .to("#section-1 tspan", {text: "Overview", duration: 0}, "-=1.5")
      .to("#section-2 tspan", {text: "Aid", duration: 0}, "-=1.5")
      .to("#section-3 tspan", {text: "Loans", duration: 0}, "-=1.5")
      .to("#section-4 tspan", {text: "Cost", duration: 0}, "-=1.5")
        
       //SECTION-HEADER
      .to("#section-header", {
        opacity: 0, 
        y:-50, 
        duration: 0.6}, "-=1")

      .to("#main-navigation-bar", {
          x: 94,
          duration: 0.3
      }, "-=1")  
      

    //FINANCE OVERVIEW OPACITY
      .to("#finances-overview", {opacity: 1, duration: 0.6})

       //LOAN AID LEFT

      .from("#loan-aid", { opacity: 0, x: -50, duration: 0.5}, "-=0.4")

        //LOAN AID RIGHT
        
      .from("#loan-aid_2", { opacity: 0, x: 50, duration: 0.5}, "-=0.4")

        //FINANCE DETAILS
      .from(".finance-details", {opacity: 0, y: -50, stagger: 0.2, duration: 0.5}, "-=0.4")


    tl.paused( true );
    return tl;
}

var tlFinancesOverview = financesOverview();

var introAnimation = gsap.timeline();

    introAnimation.add(tlScreenIntro)
                  .add(tlCoursesOverview, ">-1.8")
                  .add(tlCoursesNav.paused(false), ">+2")
                  .add(tlFinancesOverview.paused(false), ">")
                  
    introAnimation.pause(4)