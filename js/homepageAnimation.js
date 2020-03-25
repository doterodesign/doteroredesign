const aboutButton = document.getElementById("about");
const logo = document.getElementById("main-logo");


window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
})   

function homeload() {
    let homeAnimation = new gsap.timeline();
        homeAnimation.to(aboutButton, { duration: 0.2, text: 'about' })
        homeAnimation.fromTo(".info-container .info-container--content > *", { opacity: 0, y: 50, }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.3, ease: "power2.out" }, "+=1")
            .fromTo("#social-media__socials > *", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.3, stagger: 0.2, ease: "power3. out" }, "-=0.5")
            .fromTo("#social-media__cvresume", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }, "-=0.2")
            // .from("#main-logo", {x: -50, opacity: 0, duration: .5, ease: "power3.out"}, "-=0.4")

        return homeAnimation;
}
var tlhomeload = homeload(); 

tlhomeload;
    
function csPrevLoad() {
    let anim = new gsap.timeline();
    anim.fromTo(".case", {opacity: 0, y: 50, ease: "power2.in" }, { opacity: 1, y: 0, stagger: 0.3, ease: "power3.in", duration: 0.5});
    // anim.onComplete(anim.set('.case', { clearProps: 'transform' }))
    return anim;
}
var tlcsPrevLoad = csPrevLoad();

function homepageContent() {
  let anim = new gsap.timeline();

  anim.add(tlhomeload)
  anim.add(tlcsPrevLoad, ">")

  return anim;
}
var tlhomepageContent = homepageContent();

function aboutAnimation() {
  let anim = new gsap.timeline();
    anim.to("#about-info", { display: 'grid', opacity: 1 })
    anim.fromTo("#about__portrait", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5 })
    anim.fromTo("#about__content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 })
  anim.to(aboutButton, { duration: 0.2, text: 'back' })

  return anim
}

function aboutReverse() {
  let anim = new gsap.timeline()
  
  if (aboutButton.innerText === 'about') {
    anim.add(homeload().reverse(true))
    anim.to('#homepage-info', { display: 'none', opacity: 0 }, ">")
    anim.to('#about-info', { display: 'grid', opacity: 0 }, ">")
    anim.add(aboutAnimation().play(), ">-0.3")
  } else {
    anim.add(aboutAnimation().reverse(true))
    anim.to('#about-info', { display: 'none', opacity: 0 })
    anim.to('#homepage-info', { display: 'flex', opacity: 1 }, ">")
    anim.add(homeload().reversed(), ">")
  }
}

aboutButton.addEventListener('click', function () {
  aboutReverse();
});



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
      tlhomepageContent;
        }
    });



    // $(".case").on("hover", function () {
    //     gsap.to(".case", {y: -20, scale: 0.9, duration: 0.5, ease: "power2. out"})
    // })