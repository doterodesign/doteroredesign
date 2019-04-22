function csVisualConstructor(p) {
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


        <section id="spoilers" class="content__block content__block-list" data-section-name="Project Summary">
            <h2 class="section-name">Project Summary <title-caption class="${p.secondaryColor}-text"></br>Even visuals need some context</title-caption></h2>
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
                        <h4 class='bold ${p.secondaryColor}-text' data-section-name="Pretty pictures">Tools Used</h4>
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

        <section class="image__container-full ${p.href}">
        `
    
        for (var j in p.images) {  
            caseStudy +=
        `
            <picture>

                <source media="(min-width: 789px)"
                            srcset= "images/${p.images[j]}.png 1x, 
                                     images/${p.images[j]}-2x.png 2x" />

                <source media="(min-width: 540px)"
                        srcset="images/${p.images[j]}-sm.png 1x, 
                                images/${p.images[j]}-sm-2x.png 2x" />
            
                <img src="images/${p.images[j]}-sm.png">
            </picture>
        `
        }
        caseStudy +=
                
        `
        </section>
        `
    return caseStudy;
}

