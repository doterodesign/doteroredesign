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
            <h1>${p.intro}</h1>
            <p class='semi-bold'>${p.description}</p>
            <p>Message me at <a href="mailto:doterodesign@gmail.com">doterodesign@gmail.com</a></p>
            <div id="social-media">
                <a href="https://www.linkedin.com/in/dimitri-otero/" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Linkedin"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-linkedin"></use></svg></a>
                <a href="https://www.behance.net/doterodesign" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Behance"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-behance"></use></svg></a>
                <a href="https://www.instagram.com/doterodesign/" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Instagram"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-instagram"></use></svg></a>
                <a href="https://www.pinterest.com/doterodesign/" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Pinterest"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-pinterest"></use></svg></a>
            </div>
            <h4 class="love">Hand-coded with love</h4>
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
        <section class="project-preview ${p[i].primaryColor}" data-project-name='${p[i].href}'>
        <div class="image__container-lg">
            <img src="images/${p[i].image}" alt="">
        </div>
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




const master = (p) => {
    let caseStudy = '';
    //CASE STUDY TEMPLATE
    caseStudy +=
        `
    <section class="cs-container">
    <svg class="button circle-arrow back-button ${p.buttonColor}" data-href="#${p.prev}" width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20H46M46 20L28 2M46 20L28 38" stroke-width="4" stroke-linecap="round"/>
    </svg>
    <svg class="button circle-arrow next-button ${p.buttonColor}" data-href="#${p.next}" width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20H46M46 20L28 2M46 20L28 38" stroke-width="4" stroke-linecap="round"/>
    </svg>
        <section class="content__full" data-section-name="Let's Begin!">
            <section class="content__block-info ${p.secondaryColor}">
                <h2>${p.name}</h2>
                <h3>${p.project} <title-caption> (${p.platform})</title-caption></h3>
                <h4>${p.role}</h4>
                <h2 class="section-name">Overview</h2>
                <p>${p.summary.overview}</p>
            </section>
            <section class="image__container-lg ${p.primaryColor}">
            <img class="video" src="images/${p.image}" alt="">
        </section>
    </section>

        <section class="content__block content__block-list" data-section-name="Spoilers">
            <h2 class="section-name">SPOILERS <title-caption class="${p.secondaryColor}-text"></br>It's okay to skim. I won't notice</title-caption></h2>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text'>Problem</h4>
                        <p>${p.summary.problem}</p>
                    </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text'>Goal</h4>
                        <p>${p.summary.goal}</p>
                    </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text'>Approach</h4>
                        <p>${p.summary.approach}</p>
                    </article>
                    <article>
                        <h4 class='bold ${p.secondaryColor}-text'>Solution</h4>
                        <p>${p.summary.solution}</p>
                    </article>
                    <article>
                        <h4 class=' ${p.secondaryColor}-text'>Lessons</h4>
                            <p>${p.summary.lesson}</p>                    
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
    `
    return caseStudy;
};



const content__article = (section) => {
    return `
    <article class="content__article" data-section-name="${section.name}">
        <h2 class="section-name">${section.heading}</h2>
        <p>${section.content}</p>
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

