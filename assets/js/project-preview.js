//CONSTRUCT NAVIGATION
function navConstructor(p) {
    let nav = '';
        nav +=
        `
        <nav>
            <svg id="mobile-menu" width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.5" x2="40" y2="1.5" stroke="black" stroke-width="3"/>
                <path d="M0 12.2683H27" stroke="black" stroke-width="3"/>
                <path d="M0 23H18" stroke="black" stroke-width="3"/>
            </svg>

            <current-section></current-section>

            <div class="progress-bar" id="myBar"></div>


        <div id="nav__items">
            <a href="#"><h1>Case Studies</h1></a>
            <a href="#"><h1>Visual Design</h1></a>
            <a href="#"><h1>About</h1></a>
        </div>
        </nav>
        <section class="info-container">
            <h1>${p.intro}</h1>
            <p class='semi-bold'>${p.description}</p>

            <div id="social-media">
                <a href="#"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-linkedin"></use></svg></a>
                <a href="#"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-behance"></use></svg></a>
                <a href="#"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-instagram"></use></svg></a>
                <a href="#"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-pinterest"></use></svg></a>
            </div>

            <h4 class="love">Coded with love</h4>
        </section>
        `
    return nav;
}
navContainer.innerHTML = navConstructor(navigation);


//PREVIEW CONSTRUCTOR
function templateConstructor(p) {
    let projects = '';
    for (var i in p) {
        //INTRO PROJECT TEMPLATE
        projects +=
        `
        <section class="project-preview ${p[i].primaryColor}">
        <img class="video" src="images/${p[i].image}" alt="">
            <div class="info-container">
                <h2 class="bold">${p[i].name}</h2>
                <p class="${p[i].descColor}">${p[i].role}</p>

                <svg class="button circle-arrow ${p[i].buttonColor}" data-href="${p[i].href}" width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 20H46M46 20L28 2M46 20L28 38" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </div>
        </section>
        `
    }
    return projects;
};

var csVisual = templateConstructor(visual);
homeContainer.innerHTML = templateConstructor(cases);
homeContainer.insertAdjacentHTML('beforeend',csVisual);


function caseStudyConstructor(p) {
    let caseStudy = '';
    //CASE STUDY TEMPLATE
    caseStudy +=
        `
    <section class="cs-container">
        <section class="content__full" data-section-name="Let's Begin!">
            <section id="opening" class="content__block-info ${p.secondaryColor}">
                <h2>${p.name}</h2>
                <h3>${p.project} <title-caption> (${p.platform})</title-caption></h3>
                <h4>${p.role}</h4>
                <h2 class="section-name">Overview</h2>
                <p>${p.overview}</p>
            </section>
            <section class="image__container-xs ${p.primaryColor}">
            <img class="video" src="images/${p.image}" alt="">
        </section>
    </section>


        <section id="spoilers" class="content__block content__block-list" data-section-name="Spoilers">
            <h2 class="section-name">SPOILERS <title-caption class="${p.secondaryColor}-text"></br>It's okay to skim. I won't notice</title-caption></h2>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text'>Problem</h4>
                        <p>${p.problem}</p>
                    </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text'>Goal</h4>
                        <p>${p.goal}</p>
                    </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text'>Approach</h4>
                        <p>${p.approach}</p>
                    </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text'>Solution</h4>
                        <p>${p.solution}</p>
                    </article>
                    <article>
                        <h4 class=' ${p.secondaryColor}-text'>Lessons</h4>
                            <p>${p.lesson}</p>                    
                        </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text'>Tools Used</h4>
                        `
    //INPUT ALL TOOLS USED IN THE PROJECT
    for (var j in p.tools) {  
        caseStudy +=
    `
    <p class='list-item'>${p.tools[j]}</p>
    `
    }
        caseStudy +=
                        `
                </article>
        </section>

            <div class="image__container-full">
                <img class="" src="images/${p.image1}" alt="">
            </div>


            <article id="introduction" class="content__article" data-section-name="Introduction">
                <h2 class="section-name">${p.introductionSub}</h2>
                <p>${p.introduction}</p>
            </article>

            <article class="content__article">
                <h2 class="section-name">Why is ${p.project} being tackled?</h2>
                <p>${p.goals}</p>
            </article>

            <section class="image__container-md">
            `
            for (var l in p.sketches.image) {
                caseStudy +=
                `
                <div>
                    <img class="" src="images/${p.sketches.image[l].name}" alt="">
                    <image-caption>${p.sketches.image[l].caption}</image-caption>
                </div>
                `
            }
            

            caseStudy +=
                `

            </section>

            <h1 id="research" class="section-divider ${p.supportColor}" data-section-name="Research">RESEARCH</h1>

            <article class="content__article">
                    <h2 class="section-name">${p.urSub}</h2>
                    <p>${p.ur}</p>
            </article>


            <section class="image__container-md">
            `
    var k;
    for (var k in p.urImage.image) {
        caseStudy +=
    `   
        <section class= "">
        <img class="cs-image-contain" src="images/${p.urImage.image[k].name}" alt="">
        <image-caption class="">${p.urImage.image[k].caption}</image-caption>
        </section>
    `
    }
            
        caseStudy+=
            `
            </section>
            <article class="content__article">
                <h2 class="section-name">${p.crSub}</h2>
                <p>${p.cr}</p>
            </article>

            <h1 id="features" class="section-divider ${p.supportColor}" data-section-name="Features">FEATURES</h1>

            `
                    
        for (n in p.approaches.approach) {
            caseStudy +=
            `
                <article class="content__article">
                    <h2 class="section-name">${p.approaches.approach[n].sub}</h2>
                    <p>${p.approaches.approach[n].content}</p>
                </article>
            `
        }
        caseStudy +=

        `
            <h1 class="section-divider ${p.supportColor}" data-section-name="Future Feats">FUTURE FEATS</h1>

            <article class="content__article">
                <h2 class="section-name">${p.futureSub}</h2>
                <p>${p.future}</p>
            </article>

            <h1 class="section-divider ${p.supportColor}" data-section-name="Prototype">PROTOTYPE</h1>

            <article class="content__article">
                <h2 class="section-name">${p.protoSub}</h2>
                <p>${p.protoContent}</p>
            </article>

            <section class="image__container-full">
                <section class="prototype">
                    ${p.proto}
                </section>
            </section>
    `
    return caseStudy;
};



