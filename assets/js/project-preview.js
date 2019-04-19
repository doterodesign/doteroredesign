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
        </nav>
        </svg>
        <section class="info-container">
            <h1>${p.intro}</h1>
            <p class='semi-bold'>${p.description}</p>
            <p class='love'>${p.love}</p>
            <div>
                <button class="button primary" type='button' data-href="${p.about}">${p.primaryButton}</button>
                <button class="button secondary" type='button' data-href="${p.contact}">${p.secondaryButton}</button>
            </div>
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
homeContainer.innerHTML = templateConstructor(cases);



function caseStudyConstructor(p) {
    let caseStudy = '';
    //CASE STUDY TEMPLATE
    caseStudy +=
        `
    <section class="cs-container">
        <section class="content__full">
            <section id="opening" class="content__block-info ${p.secondaryColor}" data-section-start="">
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


        <section id="spoilers" class="content__block content__block-list" data-section-start="">
            <h2 class="section-name">SPOILERS <title-caption class="${p.secondaryColor}-text"></br>(I understand if you’re in a rush)</title-caption></h2>
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
                    <article>
                        <h4 class=' ${p.secondaryColor}-text'>Prototype</h4>
                        <button class="button primary ${p.buttonColor}" href="${p.proto}" alt="">View Prototype</a>
                    </article>
        </section>

            <div class="image__container-full">
                <img class="" src="images/${p.image1}" alt="">
            </div>


            <article id="introduction" class="content__article" data-section-start="">
                <h2 class="section-name">Introduction</h2>
                <title-caption class="${p.secondaryColor}-text">${p.introductionSub}</title-caption>
                <p>${p.introduction}</p>
            </article>

            <article class="content__article">
            <h2 class="section-name">Why is ${p.project} being tackled?</h2>
            <title-caption class="${p.secondaryColor}-text">Problem and goal</title-caption>
                `
            
            for (m in p.goals.goal) {
                caseStudy +=
                `
                        <p>${p.goals.goal[m].content}</p>
                `
            }      
            caseStudy +=
            
            `    
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

            <h1 id="research" class="section-divider ${p.supportColor}" data-section-start="">RESEARCH</h1>

            <article class="content__article">
                    <h2 class="section-name">User Research</h2>
                    <title-caption class="${p.secondaryColor}-text">${p.urSub}</title-caption>
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
                <h2 class="section-name">Competitor Research</h2>
                <title-caption class="${p.secondaryColor}-text">${p.crSub}</title-caption>
                <p>${p.cr}</p>
            </article>

            <h1 id="features" class="section-divider ${p.supportColor}" data-section-start="features">FEATURES</h1>

            `
                    
        for (n in p.approaches.approach) {
            caseStudy +=
            `
                <article class="content__article">
                    <h2 class="section-name">${p.approaches.approach[n].name}</h2>
                    <title-caption class="${p.secondaryColor}-text">${p.approaches.approach[n].sub}</title-caption>
                    <p>${p.approaches.approach[n].content}</p>
                </article>
            `
                // for (var o in p.approaches.approach[n].image) {
                //     caseStudy +=
                //         `
                //         <div>
                //             <img src="images/${p.approaches.approach[n].image[o].name}" alt="">
                //             <image-caption>${p.approaches.approach[n].image[o].caption}</image-caption>
                //         </div>
                //         </section>
                //         `
                // }
            
            // `
            
        }
        caseStudy +=

        `
            <h1 class="section-divider ${p.supportColor}">FUTURE</br> FEATURES</h1>


    `
    return caseStudy;
};





//INJECT PROJECT PREVIEWS INTO CONTAINER
// function reset(e) {
//     if (location.hash != '#work' && location.hash == '' || location.hash === undefined || location.hash === '#work') {
//         location.hash = '#work';
//         navContainer.classList.remove('cs-active');
//         navContainer.innerHTML = navConstructor(navigation);
//         contentContainer.innerHTML = templateConstructor(cases);
//     } else {
//         nextPage(e);
//     }
// }
// reset();
// contentContainer.innerHTML = caseStudyConstructor(cases[0]);
// var blah = blahContainer.innerHTML = caseStudyConstructor(cases[0]);
// navContainer.innerHTML = navConstructor(navigation);


// //GET HREF OF ELEMENT WITH DATA ATTRIBUTE HREF
// function gethref(e, attr) {
//     return e.getAttribute(attr);
// }

// // //CHANGES LOCATION HREF
// function locationHref(e) {
//     location.hash = `#${e}`; 
// }

// // // //FIND INDEX OF CASE STUDY
// function findCaseIndex(e) {
//     return cases.findIndex(x => x.href === e);
// }

// // //CALLED WHEN BUTTON HAS DATA-CS
// function nextStudy(e) {
//     document.body.scrollTop = 0;
//     navContainer.classList.add('cs-active');
//     contentContainer.innerHTML = caseStudyConstructor(cases[e]);
// }

// function nextPage(e, element) {
//     let next = findCaseIndex(e);
//     let cs = gethref(element, 'data-cs');

//     locationHref(e);
//     //IF IT IS A CASE STUDY
//     if (cs === '') {
//         nextStudy(next);
//     }
// }











// document.addEventListener('click', function (e) {
//     var current = e.target;
//     let href = gethref(current, 'data-href');
//     if (current.matches("button")) {
//         nextPage(href,current);
//     }
// });




// window.addEventListener('beforeunload', function (e) {
//     // e.preventDefault();
//     return reset();
// });

// window.addEventListener('hashchange', reset, false);




//INJECT EACH CASE STUDY INTO A SECTION WITH ITS ID AND DISPLAY NONE ALL OF THEM ON LOAD