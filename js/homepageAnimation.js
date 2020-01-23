
window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
})   

function homeload() {
    let homeAnimation = new gsap.timeline({ onComplete: csPrevLoad }, {delay: 1});
        homeAnimation.fromTo(".info-container .info-container--content > *", { opacity: 0, y: 50, }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.3, ease: "power2.out" }, "+=1")
            .fromTo("#social-media__socials > *", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.3, stagger: 0.2, ease: "power3. out" }, "-=0.5")
            .fromTo("#social-media__cvresume", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }, "-=0.2")
            // .from("#main-logo", {x: -50, opacity: 0, duration: .5, ease: "power3.out"}, "-=0.4")

        return homeAnimation;
}

homeload();
    
function csPrevLoad() {
    let anim = new gsap.timeline();
    anim.fromTo(".case", {opacity: 0, y: 50, ease: "power2.in" }, { opacity: 1, y: 0, stagger: 0.3, ease: "power3.in", duration: 0.5});
    // anim.onComplete(anim.set('.case', { clearProps: 'transform' }))
    return anim;
}

$(".case").each(function (index, element){
    var tl = new TimelineLite({paused:true});
    tl.to(element, { scale: 0.95, duration: 0.1, ease: "power.in" })
      .to(element > ".case-hover", {opacity: 1, duration: 0.2})
    element.animation = tl;
  })
  
  $(".case").mouseenter(function(){
    this.animation.play();
  })
  
  $(".case").mouseleave(function(){
    this.animation.reverse();
  })
        // csPrevLoad();
        
document.addEventListener('hashchange', function () {
    if (location.hash === "#home") {
        homeload();
        // csPrevLoad();
        }
    });



    // $(".case").on("hover", function () {
    //     gsap.to(".case", {y: -20, scale: 0.9, duration: 0.5, ease: "power2. out"})
    // })