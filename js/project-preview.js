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

                <svg id="main-logo" enable-background="new 0 0 60 60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="#231f20" fill-rule="evenodd"><path d="m30 0-30 30 30 30 30-30zm-26.7 30 26.7-26.7 26.7 26.7-26.7 26.7z"/><g transform="translate(23.617021 11.489362)"><path d="m2.4 31.3v-25.5l12.2 12.8-2.1 2.2c.8.2 1.5.6 2.2 1l3.1-3.2-17.7-18.5v36.9l4.9-5.1c-.5-.6-.8-1.4-1.1-2.2z"/><path d="m14.7 21.8-1.6 1.7c1.4.8 2.4 2.4 2.4 4.2 0 2.7-2.2 4.8-4.8 4.8-1.7 0-3.2-.9-4.1-2.3l-1.6 1.7c1.3 1.7 3.3 2.9 5.7 2.9 3.9 0 7.1-3.2 7.1-7.1-.1-2.5-1.3-4.7-3.1-5.9"/><path d="m10.5 22.8 2-2.1c-.6-.2-1.2-.2-1.8-.2-3.9 0-7.1 3.2-7.1 7.1 0 .7.1 1.4.3 2.1l2-2c0-2.7 2.1-4.8 4.6-4.9"/><path d="m5.9 27.7-2 2c.2.8.6 1.5 1.1 2.2l1.6-1.7c-.4-.7-.7-1.6-.7-2.5"/><path d="m10.5 22.8h.2c.9 0 1.7.2 2.4.6l1.6-1.7c-.7-.5-1.4-.8-2.2-1z"/></g></g>
                </svg>

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
        <div class="image__container-md">
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

var csVisual = templateConstructor(visual);
homeContainer.innerHTML = templateConstructor(cases);
homeContainer.insertAdjacentHTML('beforeend',csVisual);




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
    // $(nextPro).attr('data-section-name', `next project: ${$(nextPro).data('project-name')}`)
    let cu = $(`#${ne.href}`);
    return $(nextPro).clone().appendTo(cu);
}

