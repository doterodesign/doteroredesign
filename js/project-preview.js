//CONSTRUCT NAVIGATION
function navConstructor(p) {
    let nav = '';
        nav +=
        `
        <nav>
            <div class="menu-nav">
                <svg id="mobile-menu" width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1.5" x2="40" y2="1.5" stroke="black" stroke-width="3"/>
                    <path d="M0 12.2683H27" stroke="black" stroke-width="3"/>
                    <path d="M0 23H18" stroke="black" stroke-width="3"/>
                </svg>

        <svg id="main-logo" viewBox="0 0 468.36 468.36" xmlns="http://www.w3.org/2000/svg"><path d="m186.77 94.94v138.9a193.84 193.84 0 0 0 22.38-2v-85.35l27.32 25.51q9.53-6.52 19.53-12.36z" fill="#cd3137"/><path d="m283.61 312.61a27.6 27.6 0 0 1 -41.86-20.55 26.17 26.17 0 0 1 -.16-3 27.62 27.62 0 0 1 27.31-27.59 172.69 172.69 0 0 0 -11.54-21 50.07 50.07 0 0 0 -38.16 48.63 49.56 49.56 0 0 0 4.23 20.09l-14.28 13.33v-129.6q-11.68 9.95-22.38 21v160.15l50.14-46.85a49.91 49.91 0 0 0 48.09 9.29c0-.5 0-1 0-1.5a176.21 176.21 0 0 0 -1.39-22.4z" fill="#eab331"/><path d="m283.61 312.61a27.6 27.6 0 0 1 -41.86-20.55 26.17 26.17 0 0 1 -.16-3 27.62 27.62 0 0 1 27.31-27.59 172.69 172.69 0 0 0 -11.54-21 50.07 50.07 0 0 0 -38.16 48.63 49.56 49.56 0 0 0 4.23 20.09l-14.28 13.33v-131.78a173.78 173.78 0 0 0 -22.38-13.08v196.41l50.14-46.85a49.91 49.91 0 0 0 48.09 9.29c0-.5 0-1 0-1.5a176.21 176.21 0 0 0 -1.39-22.4z" fill="#455fa8"/><path d="m283.61 312.61a27.6 27.6 0 0 1 -41.86-20.55 26.17 26.17 0 0 1 -.16-3 27.62 27.62 0 0 1 27.31-27.59 172.69 172.69 0 0 0 -11.54-21 50.07 50.07 0 0 0 -38.16 48.63 49.56 49.56 0 0 0 4.23 20.09l-14.28 13.33v-176l27.32 25.48q9.53-6.52 19.53-12.36l-69.25-64.7v279.13l50.14-46.85a49.91 49.91 0 0 0 48.11 9.29c0-.5 0-1 0-1.5a176.21 176.21 0 0 0 -1.39-22.4zm-74.46-119.69v129.6l14.28-13.33a49.56 49.56 0 0 1 -4.23-20.09 50.07 50.07 0 0 1 38.16-48.57" fill="none"/><path d="m234.18 0-184.69 184.69a197.45 197.45 0 0 0 19.09 14.85l33.09-33.09 132.51-132.51 94.45 94.45q13.41-3.91 27.27-6.67z" fill="#cd3137"/><path d="m234.18 434.42-115.74-115.74q-5 12.27-8.92 25l124.66 124.68 15.26-15.26a174.44 174.44 0 0 0 35.31-69.25z" fill="#eab331"/><path d="m234.18 434.42-200.24-200.24 34.64-34.64 33.09-33.09a174 174 0 0 0 -42.54 8.6l-59.13 59.13 234.18 234.18 15.26-15.26a174.44 174.44 0 0 0 35.31-69.25z" fill="#455fa8"/><path d="m101.67 166.45 132.51-132.51 94.45 94.45q13.41-3.91 27.27-6.67l-121.72-121.72-234.18 234.18 234.18 234.18 15.26-15.26a174.44 174.44 0 0 0 35.31-69.25l-50.57 50.57-200.24-200.24 34.64-34.64z" fill="none"/><g fill="#eab331"><path d="m468.36 234.18-218.92 218.92a174.44 174.44 0 0 0 35.31-69.25l149.67-149.67-89.22-89.18-16.57-16.57q13.41-3.91 27.27-6.67z"/><path d="m309.42 259.47a50 50 0 0 1 -24.4 77c0-.5 0-1 0-1.5a176.21 176.21 0 0 0 -1.42-22.4 27.59 27.59 0 0 0 -9.6-50.64 26.32 26.32 0 0 0 -4.81-.43h-.29a172.69 172.69 0 0 0 -11.54-21 49.9 49.9 0 0 1 35 4.27l11-10.3-27.21-25.42-30-28-9.7-9.06q9.55-6.51 19.55-12.35l5.43 5.08 34.18 31.94 40.5 37.84z"/></g></svg>                          
                <h2 id="current-section"></h2>
            </div>

            <div class="progress-bar" id="myBar"></div>


        <div id="nav__items">
            <a href="#"><h1>Work</h1>
                <a href="#blah">BLAH</a>
                <a href="#cunyfirst">CUNYfirst</a>
                <a href="#salvationarmy">Salvation Army</a>
                <a href="#safesex">STD Awareness</a>
                <a href="#gladwell">Gladwell: Book Covers</a>
            </a>
            <a href="#"><h1>About</h1></a>
        </div>
        </nav>
        <section class="info-container">

            <div>
                <h4 class="all-caps bold ">Dimitri Otero</h4>
                <h4>Product Designer</h4>
            </div>
            <div class="info-container--content"><h2 class="cr-blue-base">Hi, I'm Dimitri!</h2> <h5 class="cr-blue-base">A Product Designer based in NYC with a passion for design systems, user-testing, and designing intuitive experiences for users.</h5>

            </div>
            
            
            <div id="social-media">
                <div id="social-media__socials">
                    <a href="https://www.linkedin.com/in/dimitri-otero/" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Linkedin"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-linkedin"></use></svg></a>
                    <a href="https://www.behance.net/doterodesign" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Behance"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-behance"></use></svg></a>
                    <a href="https://www.instagram.com/doterodesign/" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Instagram"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-instagram"></use></svg></a>
                    <a href="https://www.pinterest.com/doterodesign/" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Pinterest"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-pinterest"></use></svg></a>
                </div>
                <div id="social-media__cvresume">
                    <a href="http://bit.ly/2VkqHlr" class="text-button" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Resume and CV">Download Resume/CV</a> 
                </div>
            </div>
            
        </section>
        `
    return nav;
}
navContainer.innerHTML = navConstructor(navigation);


//PREVIEW CONSTRUCTOR
function templateConstructor(p) {
    let projects = '';
    projects +=
    `
    <article id="preview-content">
    `
    for (var i in p) {
        //INTRO PROJECT TEMPLATE
        // <section class="project-preview ${p[i].primaryColor}" data-project-name='${p[i].href}'>
        // <div class="image__container-lg">
        //     <img src="images/${p[i].image}" alt="">
        // </div>
        //     <div class="info-container">
        //         <h2 class="bold">${p[i].name}</h2>
        //         <p class="${p[i].descColor}">${p[i].role}</p>
        //         <svg class="button circle-arrow ${p[i].buttonColor}" data-href="${p[i].href}" width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path d="M2 20H46M46 20L28 2M46 20L28 38" stroke-width="4" stroke-linecap="round"/>
        //         </svg>
        //     </div>
        // </section>
        projects +=
        `
            <section class="case" data-project-name='${p[i].href}' data-href="${p[i].href}">
                <img class="case__image ${p[i].primaryColor}" src="images/${p[i].image}" alt="" data-href="${p[i].href}">
                <div class="case__content" data-href="${p[i].href}">
                    <p class="cr-bold-12 all-caps bold cr-neutral-600">${p[i].role}</p>
                    <h4 class="content__description title-case">${p[i].name}</h4>
                    <p class="case__name cr-reg-14 bold cr-neutral-700">${p[i].project}</p> 
                </div>
            </section>
        `
    }
        projects +=
        `
        </article>
        `
    return projects;
};

homeContainer.innerHTML = templateConstructor(cases);




const master = (p) => {
    let caseStudy = '';
    //CASE STUDY TEMPLATE
    caseStudy +=
        // GOES BELOW THE BUTTON CIRCLE-ARROW NEXT-BUTTON

//     <section class="content__full" data-section-name="Let's Begin!">
//     <section class="content__block-info ${p.secondaryColor}">
//         <h2>${p.name}</h2>
//         <h3>${p.project} <title-caption> (${p.platform})</title-caption></h3>
//         <h4>${p.role}</h4>
//         <h2 class="section-name">Overview</h2>
//         <p>${p.summary.overview}</p>
//     </section>
/* <h2 class="section-name">SPOILERS <title-caption class="${p.secondaryColor}-text"></br>It's okay to skim. I won't notice</title-caption></h2> */
        `
    <section class="cs-container">
    <svg class="circle-arrow top-button ${p.buttonColor}" width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20H46M46 20L28 2M46 20L28 38" stroke-width="4" stroke-linecap="round"/>
    </svg>
    <svg class="button circle-arrow back-button ${p.buttonColor}" data-href="#${p.prev}" width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20H46M46 20L28 2M46 20L28 38" stroke-width="4" stroke-linecap="round"/>
    </svg>
    <svg class="button circle-arrow next-button ${p.buttonColor}" data-href="#${p.next}" width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20H46M46 20L28 2M46 20L28 38" stroke-width="4" stroke-linecap="round"/>
    </svg>
        <section class="content__full" data-section-name="Let's begin!">
            <section class="image__container-lg ${p.primaryColor}">
                <img class="video" src="images/${p.image}" alt="">
            </section>
        </section>
        <article class="content__article" data-section-name="Let's Begin!">
        <h2 class="section-name section-name--project-name">${p.project} <title-caption></title-caption></h2>
        <h2 class="section-name">${p.name}</h2>
        <p>${p.summary.overview}</p>
        </article>

        <section class="content__block content__block-list" data-section-name="Spoilers">
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text cr-bold-12 all-caps'>Problem</h4>
                        <p class="cr-reg-12">${p.summary.problem}</p>
                    </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text cr-bold-12 all-caps'>Goal</h4>
                        <p class="cr-reg-12">${p.summary.goal}</p>
                    </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text cr-bold-12 all-caps'>Approach</h4>
                        <p class="cr-reg-12">${p.summary.approach}</p>
                    </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text cr-bold-12 all-caps'>Solution</h4>
                        <p class="cr-reg-12">${p.summary.solution}</p>
                    </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text cr-bold-12 all-caps'>Lessons</h4>
                            <p class="cr-reg-12">${p.summary.lesson}</p>                    
                        </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text cr-bold-12 all-caps'>Tools Used</h4>
                        `
    //INPUT ALL TOOLS USED IN THE PROJECT
    for (var j in p.tools) {
        caseStudy +=
            `
    <p class='list-item cr-reg-12'>${p.tools[j]}</p>
    `
    }
    caseStudy +=
        `
                </article>
        </section>
    `
    return caseStudy;
};



const content__article = (section) => {
    return `
    <article class="content__article" data-section-name="${section.name}">
        <h2 class="section-name">${section.heading}</h2>
        <p class="cr-neutral-800">${section.content}</p>
    </article>
   `
}

const content__article__no__title = (section) => {
    return `
    <article class="content__article" data-section-name="${section.name}">
        <p class="cr-neutral-800">${section.content}</p>
    </article>
   `
}

const images = (section) => {
    let c = '';
    let img = section.images;
    c +=
        
    `
    <section class="image__container-${section.size}">
    `
    for (let i in img) {
        c +=
        `
            <section>
                <img src="images/${img[i].name}" alt="">
                <image-caption class="">${img[i].caption}</image-caption>
            </section>
            `
    }  
    c +=
    `
    </section>
    `

    return c;
}


const prototype = (section) => {
    return `
    <section class="image__container-full">
        <section class="prototype">
            ${section.p}
        </section>
    </section>
    `
}

const button = (section) => {
    return `
    <a href="${section.p}" class="text-button" target="_blank" rel=”noreferrer”>${section.name}</a> 
    `
}


var nextProject = (ne) => {
    projectPreviews = Array.from(document.querySelectorAll('.project-preview'))
    let nextPro = projectPreviews.find(n => ne.next == $(n).attr('data-project-name'));
    // $(nextPro).attr('data-section-name', `next p-roject: ${$(nextPro).data('project-name')}`)
    let cu = $(`#${ne.href}`);
    return $(nextPro).clone().appendTo(cu);
}

const imageEmbed = (image) => {
    let c = '';
    let img = image.images;

    c +=
    `
    <section class="image__container-${image.size}">
    `
    for (let i in img) {
        c +=
        `
           ${img[i].name}
        `
    }  
    c +=
    `
    </section>
    `
    return c;
}

const contentWImage = (section, image) => {
    return `
    <section id="${section.id}" class="content-w-image" data-section-name="${section.name}">
        <article class="content__article">
            <h2 class="section-name">${section.heading}</h2>
            <p class="cr-neutral-800">${section.content}</p>
        </article>
        ${imageEmbed(image)}
    </section>
   `
}


function coredAnimation() {
    let n = '';
    n +=
        `
        <section class="content-w-image" data-section-name="Problems">
            <article class="content__article">
                <h2 class="section-name">Hitting the pain points</h2>
                <p class="cr-neutral-800">The main pain points of users I've gathered speaking to various users are a non-responsive design, hard to access information, and not knowing if you qualify to take a course until very moment you go to apply. Nothing a little information re-organization can't fix!</p>
            </article>
            <section class="image__container-lg">
                <svg id="mockup-screen" viewBox="0 0 453 890" fill="none">
                <g filter="url(#filter0_dd)">
                <g id="Mask Group">
                <g id="courses">
                <g clip-path="url(#clip0)">
                <path d="M42 53C42 33.1177 58.1177 17 78 17H375C394.882 17 411 33.1177 411 53V793C411 812.882 394.882 829 375 829H78C58.1178 829 42 812.882 42 793V53Z" fill="#FCFCFC"></path>
                <g id="courses-overview">
                <g id="class-expand" class="class">
                <g id="Card/primary--default">
                <rect id="background" x="42" y="211" width="369" height="88" fill="#F7F7F8"></rect>
                <g id="text-row-2">
                <text id="primary-text" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="235.844">Spanish 120</tspan></text>
                <g id="secondary-text">
                <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="257.988">NAC 521
                </tspan></text>
                <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="279.988">Mon–Thu 10:00 AM–12:00 PM</tspan></text>
                </g>
                </g>
                <g id="Button/more-options">
                <path d="M371 213H411V297H371V213Z" fill="#FCFCFC"></path>
                <g id="basic/more-vertical/inactive">
                <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M389 248C389 249.105 389.895 250 391 250C392.105 250 393 249.105 393 248C393 246.895 392.105 246 391 246C389.895 246 389 246.895 389 248ZM391 257C389.895 257 389 256.105 389 255C389 253.895 389.895 253 391 253C392.105 253 393 253.895 393 255C393 256.105 392.105 257 391 257ZM391 264C389.895 264 389 263.105 389 262C389 260.895 389.895 260 391 260C392.105 260 393 260.895 393 262C393 263.105 392.105 264 391 264Z" fill="#A8ADB1"></path>
                </g>
                </g>
                <g id="status-bar">
                <g id="status">
                <rect id="bar" width="2" height="84" transform="matrix(-1 0 0 1 51 213)" fill="#EEEEEE"></rect>
                <rect id="status_2" x="46" y="236" width="8" height="38" rx="4" fill="#FFC502"></rect>
                </g>
                </g>
                <line id="Border_bottom" x1="42" y1="297" x2="411" y2="297" stroke="#E8E8E8" stroke-width="2"></line>
                <line id="Border_top" x1="42" y1="212" x2="411" y2="212" stroke="#E8E8E8" stroke-width="2"></line>
                </g>
                </g>
                <g class="class">
                <g id="Card/primary--default_2">
                <rect id="background_2" x="42" y="296" width="369" height="88" fill="#F7F7F8"></rect>
                <g id="text-row-2_2">
                <text id="primary-text_2" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="320.844">Design for Developers</tspan></text>
                <g id="secondary-text_2">
                <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="342.988">Comp Goeth CG121
                </tspan></text>
                <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="364.988">Mon–Tue 2:00 PM – 4:50 PM </tspan></text>
                </g>
                </g>
                <g id="Button/more-options_2">
                <path d="M371 298H411V382H371V298Z" fill="#FCFCFC"></path>
                <g id="basic/more-vertical/inactive_2">
                <path id="icon_2" fill-rule="evenodd" clip-rule="evenodd" d="M389 333C389 334.105 389.895 335 391 335C392.105 335 393 334.105 393 333C393 331.895 392.105 331 391 331C389.895 331 389 331.895 389 333ZM391 342C389.895 342 389 341.105 389 340C389 338.895 389.895 338 391 338C392.105 338 393 338.895 393 340C393 341.105 392.105 342 391 342ZM391 349C389.895 349 389 348.105 389 347C389 345.895 389.895 345 391 345C392.105 345 393 345.895 393 347C393 348.105 392.105 349 391 349Z" fill="#A8ADB1"></path>
                </g>
                </g>
                <g id="status-bar_2">
                <g id="status_3">
                <rect id="bar_2" width="2" height="84" transform="matrix(-1 0 0 1 51 298)" fill="#EEEEEE"></rect>
                <rect id="status_4" x="46" y="321" width="8" height="38" rx="4" fill="#FFC502"></rect>
                </g>
                </g>
                <line id="Border_bottom_2" x1="42" y1="382" x2="411" y2="382" stroke="#E8E8E8" stroke-width="2"></line>
                <line id="Border_top_2" x1="42" y1="297" x2="411" y2="297" stroke="#E8E8E8" stroke-width="2"></line>
                </g>
                </g>
                <g class="class">
                <g id="primary/primary--double">
                <g id="Card/primary--default_3">
                <rect id="background_3" x="42" y="381" width="369" height="88" fill="#F7F7F8"></rect>
                <g id="text-row-2_3">
                <text id="primary-text_3" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="405.844">Electronic Design 1</tspan></text>
                <g id="secondary-text_3">
                <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="427.988">Comp Goeth  CG521
        </tspan></text>
                <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="449.988">Wed 6:15 PM – 9:15 PM</tspan></text>
                </g>
                </g>
                <g id="Button/more-options_3">
                <path d="M371 383H411V467H371V383Z" fill="#FCFCFC"></path>
                <g id="basic/more-vertical/inactive_3">
                <path id="icon_3" fill-rule="evenodd" clip-rule="evenodd" d="M389 418C389 419.105 389.895 420 391 420C392.105 420 393 419.105 393 418C393 416.895 392.105 416 391 416C389.895 416 389 416.895 389 418ZM391 427C389.895 427 389 426.105 389 425C389 423.895 389.895 423 391 423C392.105 423 393 423.895 393 425C393 426.105 392.105 427 391 427ZM391 434C389.895 434 389 433.105 389 432C389 430.895 389.895 430 391 430C392.105 430 393 430.895 393 432C393 433.105 392.105 434 391 434Z" fill="#A8ADB1"></path>
                </g>
                </g>
                <g id="status-bar_3">
                <g id="status_5">
                <rect id="bar_3" width="2" height="84" transform="matrix(-1 0 0 1 51 383)" fill="#EEEEEE"></rect>
                <rect id="status_6" x="46" y="406" width="8" height="38" rx="4" fill="#FFC502"></rect>
                </g>
                </g>
                <line id="Border_bottom_3" x1="42" y1="467" x2="411" y2="467" stroke="#E8E8E8" stroke-width="2"></line>
                <line id="Border_top_3" x1="42" y1="382" x2="411" y2="382" stroke="#E8E8E8" stroke-width="2"></line>
                </g>
                </g>
                </g>
                <g class="class">
                <g id="Card/primary--default_4">
                <rect id="background_4" x="42" y="466" width="369" height="88" fill="#F7F7F8"></rect>
                <g id="text-row-2_4">
                <text id="primary-text_4" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" letter-spacing="0px"><tspan x="65" y="490.844">Programming for Artists</tspan></text>
                <g id="secondary-text_4">
                <text fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="512.988">Comp Goeth CG119
        </tspan></text>
                <text fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="65" y="534.988">Mon – Thu 10:00 AM – 12:00 PM</tspan></text>
                </g>
                </g>
                <g id="Button/more-options_4">
                <path d="M371 468H411V552H371V468Z" fill="#FCFCFC"></path>
                <g id="basic/more-vertical/inactive_4">
                <path id="icon_4" fill-rule="evenodd" clip-rule="evenodd" d="M389 503C389 504.105 389.895 505 391 505C392.105 505 393 504.105 393 503C393 501.895 392.105 501 391 501C389.895 501 389 501.895 389 503ZM391 512C389.895 512 389 511.105 389 510C389 508.895 389.895 508 391 508C392.105 508 393 508.895 393 510C393 511.105 392.105 512 391 512ZM391 519C389.895 519 389 518.105 389 517C389 515.895 389.895 515 391 515C392.105 515 393 515.895 393 517C393 518.105 392.105 519 391 519Z" fill="#A8ADB1"></path>
                </g>
                </g>
                <g id="status-bar_4">
                <g id="status_7">
                <rect id="bar_4" width="2" height="84" transform="matrix(-1 0 0 1 51 468)" fill="#EEEEEE"></rect>
                <rect id="status_8" x="46" y="491" width="8" height="38" rx="4" fill="#FFC502"></rect>
                </g>
                </g>
                <line id="Border_bottom_4" x1="42" y1="552" x2="411" y2="552" stroke="#E8E8E8" stroke-width="2"></line>
                <line id="Border_top_4" x1="42" y1="467" x2="411" y2="467" stroke="#E8E8E8" stroke-width="2"></line>
                </g>
                </g>
                <g id="section-header">
                <path id="Rectangle" d="M42 163H410V211H42V163Z" fill="#FCFCFC"></path>
                <text id="Spring 2019" fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="58" y="193.836">Spring 2019</tspan></text>
                </g>
                </g>
                <g id="finances-overview">
                <g id="loan-aid" filter="url(#filter1_i)">
                <rect x="42" y="163" width="188" height="97" fill="#FCFCFC"></rect>
                <g id="balance-module/--default">
                <text id="$5123.00" fill="#1077D1" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="25" font-weight="bold" letter-spacing="0px"><tspan x="82.1182" y="233.045">$5123.00</tspan></text>
                </g>
                <text id="Loans Balance" fill="black" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="82.4609" y="196.469">Loans Balance</tspan></text>
                </g>
                <g id="loan-aid_2" filter="url(#filter2_i)">
                <rect x="230" y="163" width="187" height="97" fill="#FCFCFC"></rect>
                <g id="balance-module/--default_2">
                <text id="$3919.24" fill="#1077D1" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="25" font-weight="bold" letter-spacing="0px"><tspan x="269.618" y="233.045">$3919.24</tspan></text>
                </g>
                <text id="Aid Received" fill="black" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="276.156" y="196.469">Aid Recieved</tspan></text>
                </g>
                <g class="finance-details">
                    <path id="Rectangle_2" d="M42 260H410V308H42V260Z" fill="#FCFCFC"></path>
                    <text id="Loan Disbursement" fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="58" y="290.836">Loan Disbursement</tspan></text>
                </g>
                <g class="finance-details">
                <g id="background_5" filter="url(#filter3_ii)">
                <rect x="42" y="308" width="375" height="41" fill="white"></rect>
                </g>
                <text id="May 12 2019" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="308.406" y="334.469">May 12 2019</tspan></text>
                <text id="Fall 2019" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="332.785">Fall 2019</tspan></text>
                </g>
                <g class="finance-details">
                <g id="background_6" filter="url(#filter4_ii)">
                <rect x="42" y="346" width="375" height="41" fill="white"></rect>
                </g>
                <text id="October 29 2019" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="281.781" y="372.469">October 29 2019</tspan></text>
                <text id="Spring 2020" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="370.785">Spring 2020</tspan></text>
                </g>
                <g class="finance-details">
                    <path id="Rectangle_3" d="M42 387H410V435H42V387Z" fill="#FCFCFC"></path>
                    <text id="Financial Aid Disbursement" fill="#0E5390" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="58" y="417.836">Financial Aid Disbursement</tspan></text>
                </g>
                <g class="finance-details">
                <g id="background_7" filter="url(#filter5_ii)">
                <rect x="42" y="435" width="375" height="41" fill="white"></rect>
                </g>
                <text id="May 12 2019_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="308.406" y="461.469">May 12 2019</tspan></text>
                <text id="Fall 2019_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="459.785">Fall 2019</tspan></text>
                </g>
                <g class="finance-details">
                <g id="background_8" filter="url(#filter6_ii)">
                <rect x="42" y="473" width="375" height="41" fill="white"></rect>
                </g>
                <text id="October 29 2019_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="281.781" y="499.469">October 29 2019</tspan></text>
                <text id="Spring 2020_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="58" y="497.785">Spring 2020</tspan></text>
                </g>
                </g>
                <g id="navigation">
                <g class="sections">
                <g id="section">
                <path d="M319 115H411V163H319V115Z" fill="#FCFCFC"></path>
                <rect id="section-background-4" x="319" y="115" width="92" height="48" fill="white"></rect>
                <g id="status-bar_5">
                <rect id="inactive" x="319" y="162" width="92" height="1" fill="#DEDEDE"></rect>
                </g>
                <text id="section-4" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="343.282" y="143.785">Search</tspan></text>
                </g>
                </g>
                <g class="sections">
                <g id="section_2">
                <path d="M227 115H319V163H227V115Z" fill="#FCFCFC"></path>
                <rect id="section-background-3" x="227" y="115" width="92" height="48" fill="white"></rect>
                <g id="status-bar_6">
                <rect id="inactive_2" x="227" y="162" width="92" height="1" fill="#DEDEDE"></rect>
                </g>
                <text id="section-3" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="244.993" y="143.785">Calendar</tspan></text>
                </g>
                </g>
                <g class="sections">
                <g id="section_3">
                <path d="M134 115H226V163H134V115Z" fill="#FCFCFC"></path>
                <rect id="section-background-2" x="134" y="115" width="92" height="48" fill="white"></rect>
                <g id="status-bar_7">
                <rect id="inactive_3" x="134" y="162" width="92" height="1" fill="#DEDEDE"></rect>
                </g>
                <text id="section-2" fill="#05111A" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="166.677" y="143.785">Cart</tspan></text>
                </g>
                </g>
                <g class="sections">
                <g id="section_4">
                <path d="M42 115H134V163H42V115Z" fill="#FCFCFC"></path>
                <rect id="section-background-1" x="42" y="115" width="92" height="48" fill="#DDF5FD"></rect>
                <g id="status-bar_8">
                <rect id="inactive_4" x="42" y="162" width="92" height="1" fill="#DEDEDE"></rect>
                </g>
                <text id="section-1" fill="#0A1974" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="14" font-weight="500" letter-spacing="0px"><tspan x="62.0986" y="143.785">Courses</tspan></text>
                </g>
                </g>
                <rect id="secondary-navigation-bar" x="42" y="161" width="92" height="2" fill="#6BC1F2"></rect>
                </g>
                <g id="screen-category-name">
                <rect id="background_9" x="42" y="53" width="369" height="65" fill="#1077D1"></rect>
                <g id="center">
                <text id="header-title" fill="white" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="20" font-weight="bold" letter-spacing="0px"><tspan x="144.338" y="93.8359">Courses Overview</tspan></text>
                </g>
                </g>
                <g id="phone-defaults">
                <g id="__mobile-navigation">
                <g id="mobile/container">
                <g id="mobile/--active/course">
                <g id="menu-button__core/master">
                <path d="M42 749H134.496V797H42V749Z" fill="#FCFCFC"></path>
                <rect id="Rectangle_4" x="42" y="749" width="92" height="48" fill="#FCFCFC"></rect>
                <rect id="navigation-bar" x="42" y="749" width="92" height="2" fill="#E8E8E8"></rect>
                <g id="basic/table">
                <path id="icon_5" fill-rule="evenodd" clip-rule="evenodd" d="M84.1819 762.5H99.4545C100.86 762.5 102 763.606 102 764.971V781.029C102 782.394 100.86 783.5 99.4545 783.5H84.1819H81.6364H76.5455C75.1396 783.5 74 782.394 74 781.029V764.971C74 763.606 75.1396 762.5 76.5455 762.5H81.6364H84.1819ZM81.6364 764.971H76.5455V768.676H81.6364V764.971ZM84.1819 768.676V764.971H99.4546V768.676H84.1819ZM81.6364 771.147H76.5455V774.853H81.6364V771.147ZM84.1819 774.853V771.147H99.4546V774.853H84.1819ZM81.6364 777.324H76.5455V781.029H81.6364V777.324ZM84.1819 781.029V777.324H99.4546V781.029H84.1819Z" fill="#666D80"></path>
                </g>
                </g>
                </g>
                <g id="mobile/--inactive/finance">
                <path d="M134.496 749H226.992V797H134.496V749Z" fill="#FCFCFC"></path>
                <g id="menu-button__core/master_2">
                <path d="M134.496 749H226.992V797H134.496V749Z" fill="#FCFCFC"></path>
                <rect id="Rectangle_5" x="134.496" y="749" width="92" height="48" fill="#FCFCFC"></rect>
                <rect id="Rectangle_6" x="134.496" y="749" width="92" height="2" fill="#E8E8E8"></rect>
                <g id="finance/strongbox">
                <path id="icon_6" fill-rule="evenodd" clip-rule="evenodd" d="M189.496 761.95H171.496C170.391 761.95 169.496 762.931 169.496 764.14V781.664C169.496 782.874 170.391 783.855 171.496 783.855H172.796V784.95H174.996V783.855H185.996V784.95H188.196V783.855H189.496C190.601 783.855 191.496 782.874 191.496 781.664V764.14C191.496 762.931 190.601 761.95 189.496 761.95ZM171.696 781.664V764.14H189.296V766.331H188.196V768.521H189.296V777.283H188.196V779.474H189.296V781.664H171.696ZM186.774 777.604L185.218 779.153L182.731 776.677C182.076 777.062 181.312 777.283 180.496 777.283C179.68 777.283 178.916 777.062 178.261 776.677L175.774 779.153L174.218 777.604L176.705 775.128C176.318 774.475 176.096 773.715 176.096 772.902C176.096 772.09 176.318 771.329 176.705 770.677L174.218 768.201L175.774 766.652L178.261 769.128C178.916 768.742 179.68 768.521 180.496 768.521C181.312 768.521 182.076 768.742 182.731 769.128L185.218 766.652L186.774 768.201L184.287 770.677C184.674 771.329 184.896 772.09 184.896 772.902C184.896 773.715 184.674 774.476 184.287 775.128L186.774 777.604ZM182.696 772.902C182.696 774.112 181.711 775.093 180.496 775.093C179.281 775.093 178.296 774.112 178.296 772.902C178.296 771.692 179.281 770.712 180.496 770.712C181.711 770.712 182.696 771.692 182.696 772.902Z" fill="#A8ADB1"></path>
                </g>
                </g>
                </g>
                <g id="mobile/--inactive/academics">
                <path d="M226.992 749H318.504V797H226.992V749Z" fill="#FCFCFC"></path>
                <g id="mobile/__master/master">
                <path d="M226.992 749H318.504V797H226.992V749Z" fill="#FCFCFC"></path>
                <rect id="Rectangle_7" x="226.992" y="749" width="92" height="48" fill="#FCFCFC"></rect>
                <rect id="Rectangle_8" x="226.992" y="749" width="92" height="2" fill="#E8E8E8"></rect>
                <g id="basic/book">
                <path id="icon_7" fill-rule="evenodd" clip-rule="evenodd" d="M283.492 784.667H265.992C264.059 784.667 262.492 783.1 262.492 781.167V764.833C262.492 762.9 264.059 761.333 265.992 761.333H283.492V780C282.848 780 282.325 780.522 282.325 781.167C282.325 781.811 282.848 782.333 283.492 782.333V784.667ZM279.992 781.167C279.992 780.758 280.062 780.365 280.191 780H265.992C265.348 780 264.825 780.522 264.825 781.167C264.825 781.811 265.348 782.333 265.992 782.333H280.191C280.062 781.968 279.992 781.576 279.992 781.167ZM265.992 763.667H281.159V777.667H265.992C265.583 777.667 265.19 777.737 264.825 777.866V764.833C264.825 764.189 265.348 763.667 265.992 763.667Z" fill="#A8ADB1"></path>
                </g>
                </g>
                </g>
                <g id="mobile/--inactive/account">
                <path d="M318.504 749H411V797H318.504V749Z" fill="#FCFCFC"></path>
                <g id="mobile/__master/master_2">
                <path d="M318.504 749H411V797H318.504V749Z" fill="#FCFCFC"></path>
                <rect id="Rectangle_9" x="318.504" y="749" width="92" height="48" fill="#FCFCFC"></rect>
                <rect id="Rectangle_10" x="318.504" y="749" width="92" height="2" fill="#E8E8E8"></rect>
                <g id="basic/user">
                <path id="icon_8" fill-rule="evenodd" clip-rule="evenodd" d="M364.504 785.833C357.416 785.833 351.671 780.088 351.671 773C351.671 765.912 357.416 760.167 364.504 760.167C371.592 760.167 377.337 765.912 377.337 773C377.337 780.088 371.592 785.833 364.504 785.833ZM373.137 778.979C374.314 777.282 375.004 775.222 375.004 773C375.004 767.201 370.303 762.5 364.504 762.5C358.705 762.5 354.004 767.201 354.004 773C354.004 775.222 354.694 777.282 355.871 778.979C357.184 777.244 360.27 776.5 364.504 776.5C368.738 776.5 371.824 777.244 373.137 778.979ZM371.463 780.863C371.121 779.635 368.668 778.833 364.504 778.833C360.34 778.833 357.887 779.635 357.545 780.863C359.398 782.504 361.835 783.5 364.504 783.5C367.173 783.5 369.61 782.504 371.463 780.863ZM364.504 776.5C361.892 776.5 359.837 774.665 359.837 770.667C359.837 768.048 361.68 766 364.504 766C367.321 766 369.171 768.242 369.171 770.9C369.171 774.726 367.092 776.5 364.504 776.5ZM362.171 770.667C362.171 773.314 363.125 774.167 364.504 774.167C365.878 774.167 366.837 773.348 366.837 770.9C366.837 769.442 365.922 768.333 364.504 768.333C363.027 768.333 362.171 769.285 362.171 770.667Z" fill="#A8ADB1"></path>
                </g>
                </g>
                </g>
                </g>
                </g>
                <rect id="main-navigation-bar" x="42" y="749" width="88" height="2" fill="#FFC502"></rect>
                <g id="Status Bar">
                <rect x="42" y="17" width="369" height="44" fill="#1077D1"></rect>
                <g id="Action">
                <text id="â†³ Time" fill="white" xml:space="preserve" style="white-space: pre" font-family="SF Pro Text" font-size="15" font-weight="600" letter-spacing="-0.165px"><tspan x="73.2167" y="45.2822">9:41</tspan></text>
                </g>
                <g id="Container">
                <g id="Battery">
                <path id="Rectangle_11" fill-rule="evenodd" clip-rule="evenodd" d="M371.589 34.1599H386.411C387.659 34.1599 388.111 34.2899 388.568 34.5339C389.024 34.7779 389.382 35.136 389.626 35.5923C389.87 36.0486 390 36.5012 390 37.7494V42.0705C390 43.3186 389.87 43.7712 389.626 44.2275C389.382 44.6838 389.024 45.0419 388.568 45.2859C388.111 45.53 387.659 45.6599 386.411 45.6599H371.589C370.341 45.6599 369.889 45.53 369.432 45.2859C368.976 45.0419 368.618 44.6838 368.374 44.2275C368.13 43.7712 368 43.3186 368 42.0705V37.7494C368 36.5012 368.13 36.0486 368.374 35.5923C368.618 35.136 368.976 34.7779 369.432 34.5339C369.889 34.2899 370.341 34.1599 371.589 34.1599ZM371.589 35.1599C370.602 35.1599 370.258 35.2264 369.904 35.4157C369.622 35.5665 369.407 35.7819 369.256 36.0639C369.067 36.4178 369 36.7624 369 37.7494V42.0705C369 43.0575 369.067 43.402 369.256 43.7559C369.407 44.0379 369.622 44.2533 369.904 44.4041C370.258 44.5934 370.602 44.6599 371.589 44.6599H386.411C387.398 44.6599 387.742 44.5934 388.096 44.4041C388.378 44.2533 388.593 44.0379 388.744 43.7559C388.933 43.402 389 43.0575 389 42.0705V37.7494C389 36.7624 388.933 36.4178 388.744 36.0639C388.593 35.7819 388.378 35.5665 388.096 35.4157C387.742 35.2264 387.398 35.1599 386.411 35.1599H371.589ZM392.5 39.8499C392.5 41.0865 391 41.8499 391 41.8499V37.8499C391 37.8499 392.5 38.6133 392.5 39.8499Z" fill="white"></path>
                <rect id="Rectangle_12" x="370" y="36.0767" width="18" height="7.66667" rx="1.6" fill="white"></rect>
                </g>
                <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M339.623 35.5657C339.6 35.6817 339.6 35.8211 339.6 36.0999V43.7999C339.6 44.0786 339.6 44.218 339.623 44.334C339.718 44.81 340.09 45.1821 340.566 45.2768C340.682 45.2999 340.821 45.2999 341.1 45.2999C341.379 45.2999 341.518 45.2999 341.634 45.2768C342.11 45.1821 342.482 44.81 342.577 44.334C342.6 44.218 342.6 44.0786 342.6 43.7999V36.0999C342.6 35.8211 342.6 35.6817 342.577 35.5657C342.482 35.0897 342.11 34.7176 341.634 34.6229C341.518 34.5999 341.379 34.5999 341.1 34.5999C340.821 34.5999 340.682 34.5999 340.566 34.6229C340.09 34.7176 339.718 35.0897 339.623 35.5657ZM334.9 38.4999C334.9 38.2211 334.9 38.0817 334.923 37.9657C335.018 37.4897 335.39 37.1176 335.866 37.0229C335.982 36.9999 336.121 36.9999 336.4 36.9999C336.679 36.9999 336.818 36.9999 336.934 37.0229C337.41 37.1176 337.782 37.4897 337.877 37.9657C337.9 38.0817 337.9 38.2211 337.9 38.4999V43.7999C337.9 44.0787 337.9 44.218 337.877 44.334C337.782 44.81 337.41 45.1821 336.934 45.2768C336.818 45.2999 336.679 45.2999 336.4 45.2999C336.121 45.2999 335.982 45.2999 335.866 45.2768C335.39 45.1821 335.018 44.81 334.923 44.334C334.9 44.218 334.9 44.0787 334.9 43.7999V38.4999ZM330.323 40.2657C330.3 40.3817 330.3 40.5211 330.3 40.7999V43.7999C330.3 44.0787 330.3 44.218 330.323 44.334C330.418 44.81 330.79 45.1821 331.266 45.2768C331.382 45.2999 331.521 45.2999 331.8 45.2999C332.079 45.2999 332.218 45.2999 332.334 45.2768C332.81 45.1821 333.182 44.81 333.277 44.334C333.3 44.218 333.3 44.0787 333.3 43.7999V40.7999C333.3 40.5211 333.3 40.3817 333.277 40.2657C333.182 39.7897 332.81 39.4176 332.334 39.3229C332.218 39.2999 332.079 39.2999 331.8 39.2999C331.521 39.2999 331.382 39.2999 331.266 39.3229C330.79 39.4176 330.418 39.7897 330.323 40.2657ZM325.523 42.2657C325.5 42.3817 325.5 42.5211 325.5 42.7999V43.7999C325.5 44.0787 325.5 44.218 325.523 44.334C325.618 44.81 325.99 45.1821 326.466 45.2768C326.582 45.2999 326.721 45.2999 327 45.2999C327.279 45.2999 327.418 45.2999 327.534 45.2768C328.01 45.1821 328.382 44.81 328.477 44.334C328.5 44.218 328.5 44.0787 328.5 43.7999V42.7999C328.5 42.5211 328.5 42.3817 328.477 42.2657C328.382 41.7897 328.01 41.4176 327.534 41.3229C327.418 41.2999 327.279 41.2999 327 41.2999C326.721 41.2999 326.582 41.2999 326.466 41.3229C325.99 41.4176 325.618 41.7897 325.523 42.2657Z" fill="white"></path>
                <path id="Wi-Fi" fill-rule="evenodd" clip-rule="evenodd" d="M355.3 36.6963C357.535 36.6964 359.684 37.5549 361.303 39.0945C361.425 39.2133 361.62 39.2118 361.74 39.0911L362.906 37.9147C362.967 37.8535 363 37.7705 363 37.6842C362.999 37.5979 362.965 37.5154 362.903 37.4549C358.653 33.3816 351.947 33.3816 347.697 37.4549C347.635 37.5154 347.601 37.5979 347.6 37.6842C347.599 37.7705 347.633 37.8534 347.694 37.9147L348.86 39.0911C348.98 39.212 349.175 39.2135 349.297 39.0945C350.917 37.5548 353.066 36.6963 355.3 36.6963V36.6963ZM355.3 40.5236C356.528 40.5236 357.712 40.9799 358.622 41.8039C358.745 41.9209 358.939 41.9183 359.059 41.7982L360.223 40.6218C360.285 40.5601 360.319 40.4764 360.318 40.3894C360.317 40.3024 360.281 40.2194 360.218 40.159C357.447 37.5812 353.156 37.5812 350.385 40.159C350.322 40.2194 350.286 40.3024 350.286 40.3895C350.285 40.4765 350.319 40.5602 350.38 40.6218L351.544 41.7982C351.664 41.9183 351.858 41.9209 351.981 41.8039C352.891 40.9804 354.074 40.5242 355.3 40.5236V40.5236ZM357.538 43.3312C357.6 43.2701 357.635 43.186 357.633 43.0988C357.631 43.0116 357.593 42.9289 357.529 42.8704C356.242 41.7825 354.358 41.7825 353.072 42.8704C353.008 42.9289 352.97 43.0115 352.968 43.0987C352.966 43.186 353 43.2701 353.063 43.3312L355.077 45.3638C355.136 45.4235 355.216 45.4571 355.3 45.4571C355.384 45.4571 355.465 45.4235 355.524 45.3638L357.538 43.3312Z" fill="white"></path>
                </g>
                </g>
                <g id="â€¢ iPhone X / Home Indicator">
                <rect id="Line" x="159" y="818" width="135" height="5" rx="2.5" fill="black"></rect>
                </g>
                </g>
                <g id="course-overview-tooltip">
                    <rect id="course-overview-overlay" x="42" y="17" width="375" height="812" fill="#05111A" fill-opacity="0.1"></rect>
                    <g id="course-overview-tooltip-items" fill="#FCFCFC" filter="">
                    <g class="course-tooltip">
                    <rect id="course-tooltip-background-3" x="79" y="443" width="320" height="42" fill="#FCFCFC"></rect>
                    <text id="text" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="95" y="469.469">Drop Course</tspan></text>
                    </g>
                    <g class="course-tooltip">
                    <rect id="course-tooltip-background-2" x="79" y="401" width="320" height="42" fill="#FCFCFC"></rect>
                    <text id="text_2" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="95" y="427.469">Swap Course</tspan></text>
                    </g>
                    <g class="course-tooltip">
                    <rect id="course-tooltip-background-1" x="79" y="359" width="320" height="42" fill="#FCFCFC"></rect>
                    <text id="text_3" fill="#666D80" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="16" font-weight="bold" letter-spacing="0px"><tspan x="95" y="385.469">Course Details</tspan></text>
                    </g>
                    </g>
                    </g>
                    <g id="touch-indicator" opacity="0.2" filter="">
                    <circle cx="384" cy="359" r="20" fill="#1077D1"></circle>
                    </g>
                </g>
                </g>
                </g>
                <g id="phone-outline">
                <path id="stroke" d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="#F0F1F2" stroke-width="4"></path>
                <g id="stroke_2">
                <path d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="url(#paint0_radial)" stroke-width="6"></path>
                <path d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="url(#paint1_radial)" stroke-width="6"></path>
                </g>
                <g id="stroke_3" opacity="0.3" filter="url(#filter7_f)">
                <path d="M39 456V226V791C39 811.816 56.1648 829 77 829H376C396.835 829 414 811.816 414 791V448V55C414 34.1838 396.835 17 376 17H331H121H111H101H92C91.7157 17 86.9233 17 77 17C56.1648 17 39 34.1838 39 55V231" stroke="url(#paint2_linear)" stroke-width="2"></path>
                </g>
                </g>
                </g>
                <defs>
                <filter id="filter0_dd" x="0" y="0" width="453" height="890" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                <feOffset dy="22"></feOffset>
                <feGaussianBlur stdDeviation="18"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                <feOffset dy="3"></feOffset>
                <feGaussianBlur stdDeviation="3.5"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend>
                </filter>
                <filter id="filter1_i" x="42" y="163" width="188" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="-2"></feOffset>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.4 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
                </filter>
                <filter id="filter2_i" x="230" y="163" width="187" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="-2"></feOffset>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0 0.870588 0 0 0 0.4 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
                </filter>
                <filter id="filter3_ii" x="42" y="308" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="-2"></feOffset>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="2"></feOffset>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"></feBlend>
                </filter>
                <filter id="filter4_ii" x="42" y="346" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="-2"></feOffset>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="2"></feOffset>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"></feBlend>
                </filter>
                <filter id="filter5_ii" x="42" y="435" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="-2"></feOffset>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="2"></feOffset>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"></feBlend>
                </filter>
                <filter id="filter6_ii" x="42" y="473" width="375" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="-2"></feOffset>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 0 0.917647 0 0 0 1 0"></feColorMatrix>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                <feOffset dy="2"></feOffset>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                <feColorMatrix type="matrix" values="0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 0 0.917031 0 0 0 1 0"></feColorMatrix>
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"></feBlend>
                </filter>
                <filter id="filter7_f" x="37" y="15" width="379" height="816" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"></feGaussianBlur>
                </filter>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-1241.5 411.5) rotate(0.279667) scale(2356.03 1088.07)">
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="#C8C8C8"></stop>
                <stop offset="1" stop-color="#FDFDFD"></stop>
                </radialGradient>
                <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(184.5 1417.5) rotate(-88.8985) scale(2158.9 997.028)">
                <stop stop-color="#F2F2F2"></stop>
                <stop offset="1" stop-color="#C8C8C8"></stop>
                <stop offset="1" stop-color="white"></stop>
                </radialGradient>
                <linearGradient id="paint2_linear" x1="-10" y1="377" x2="16.5" y2="376.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C9C9C9"></stop>
                <stop offset="1" stop-color="#EFEFEF"></stop>
                <stop offset="1" stop-color="white"></stop>
                </linearGradient>
                <clipPath id="clip0">
                <path d="M42 53C42 33.1177 58.1177 17 78 17H375C394.882 17 411 33.1177 411 53V793C411 812.882 394.882 829 375 829H78C58.1178 829 42 812.882 42 793V53Z" fill="white"></path>
                </clipPath>
                </defs>
                </svg>
            </section>
        </section>
        `
        return n;
    }

funcCoredAnimation = coredAnimation();