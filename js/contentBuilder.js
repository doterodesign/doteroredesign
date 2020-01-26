//ALUMINYZE

const aluminyze = (cs) => {

    let mas = master(cs);
    let intro = content__article(cs.introduction);
    let research = content__article(cs.ur);
    let problem = content__article(cs.problem);
    let internalTesting = content__article(cs.internalTesting);
    let mobileApproved = content__article(cs.mobileApproved);
    let handoff = content__article(cs.handoff);
    let lesson = content__article(cs.lesson);
    let proto = content__article(cs.proto);


    // IMAGES
    let img__introduction = images(cs.img.introduction);
    let img__v1Screens = images(cs.img.v1);
    let img__v2Screens = images(cs.img.v2);
    let img__problem = images(cs.img.problem);
    let img__mobileTest = images(cs.img.mobileTest);
    let img__mobileToDesktop = images(cs.img.mobileToDesktop);
    let img__annotation = images(cs.img.annotationExample);
    let protoEmbed = button(cs.proto);
  


    let comp = '';

    comp +=
        `
        ${mas}
        ${protoEmbed}
        ${intro}
        ${img__introduction}
        ${problem}
        ${img__problem}
        ${img__mobileTest}
        ${research}
        ${img__v1Screens}
        ${internalTesting}
        ${img__v2Screens}
        ${mobileApproved}
        ${img__mobileToDesktop}
        ${handoff}
        ${img__annotation}
        ${lesson}
        ${proto}
        ${protoEmbed}
        `
       
    aluminyzeContainer.innerHTML = comp;
}
aluminyze(cs__aluminyze);

const cored = (cs) => {

    let mas = master(cs);
    let intro = content__article(cs.introduction);
    let user = content__article(cs.ur);
    let animation = contentWImage(cs.problem, cs.img.problem);
    // let test = contentWImageOther(cs.foundation, cs.img.sketch);
    // let problem = content__article__no__title(cs.problem);
    let goal = content__article(cs.goal);
    let sneakpeak = content__article(cs.sneakpeak);
    let userflow = content__article(cs.userflow);
    let foundation = content__article(cs.foundation);
    let navigation = content__article(cs.navigation);
    // let navigationFeedback = content__article(cs.navigation.feedback);
    let dynamicContent = content__article(cs.dynamicContent);
    let testing = content__article(cs.testing);
    let lesson = content__article(cs.lesson);
    let proto = content__article(cs.proto);


    // IMAGES
    let img__introduction = images(cs.img.introduction);
    let img__sketch = images(cs.img.sketch);
    let img__problem = images(cs.img.problem);
    let img__sneakpeak = images(cs.img.sneakpeak);
    let img__wireframe = images(cs.img.wireframe);
    let img__userflow = images(cs.img.userflow);
    let img__navigation = images(cs.img.navigation);
    let img__dynamic = images(cs.img.dynamic);
    let img__testing = images(cs.img.testing);
    let protoEmbed = button(cs.proto);
  


    let comp = '';

    comp +=
        `
        ${mas}
        ${protoEmbed}
        ${img__dynamic}
        ${img__sneakpeak}
        ${animation}
        ${foundation}
        ${img__sketch}
        ${img__userflow}
        ${img__wireframe}
        ${img__testing}
        ${navigation}
        ${img__navigation}
        ${dynamicContent}
        ${lesson}
        ${proto}
        ${protoEmbed}
        `
       
    coredContainer.innerHTML = comp;
}
cored(cs__cored);


// const fueltime = (cs) => {

//     let mas = master(cs);
//     let intro = content__article(cs.introduction);
//     let user = content__article(cs.ur);
//     let animation = contentWImage(cs.problem, cs.img.problem);
//     // let problem = content__article__no__title(cs.problem);
//     let goal = content__article(cs.goal);
//     let sneakpeak = content__article(cs.sneakpeak);
//     let userflow = content__article(cs.userflow);
//     let foundation = content__article(cs.foundation);
//     let navigation = content__article(cs.navigation);
//     // let navigationFeedback = content__article(cs.navigation.feedback);
//     let dynamicContent = content__article(cs.dynamicContent);
//     let testing = content__article(cs.testing);
//     let lesson = content__article(cs.lesson);
//     let proto = content__article(cs.proto);


//     // IMAGES
//     let img__introduction = images(cs.img.introduction);
//     let img__sketch = images(cs.img.sketch);
//     let img__problem = images(cs.img.problem);
//     let img__sneakpeak = images(cs.img.sneakpeak);
//     let img__wireframe = images(cs.img.wireframe);
//     let img__userflow = images(cs.img.userflow);
//     let img__navigation = images(cs.img.navigation);
//     let img__dynamic = images(cs.img.dynamic);
//     let img__testing = images(cs.img.testing);
//     let protoEmbed = button(cs.proto);
  


//     let comp = '';

//     comp +=
//         `
//         ${mas}
//         ${protoEmbed}
//         ${img__dynamic}
//         ${img__sneakpeak}
//         ${animation}
//         ${foundation}
//         ${img__sketch}
//         ${img__userflow}
//         ${img__wireframe}
//         ${img__testing}
//         ${navigation}
//         ${img__navigation}
//         ${dynamicContent}
//         ${lesson}
//         ${proto}
//         ${protoEmbed}
//         `
       
//     fueltimeContainer.innerHTML = comp;
// }
// fueltime(cs__fueltime);


const blah = (cs) => {

    let mas = master(cs);
    let intro = content__article(cs.introduction);
    let user = content__article(cs.ur);
    let cr = content__article(cs.cr);
    let goal = content__article(cs.goal);
    let feature1 = content__article(cs.feature1);
    let feature2 = content__article(cs.feature2);
    let future = content__article(cs.future);
    let lesson = content__article(cs.lesson);
    let proto = content__article(cs.proto);
    // let next = content__article(cs.nextProject);


    //IMAGES
    let img__stat = images(cs.img.stat);
    let img__sketch = images(cs.img.sketch);
    let img__cover = images(cs.img.cover);
    let img__prototype = prototype(cs.proto);
    let img__feature1 = images(cs.img.feature1);
    let img__feature2 = images(cs.img.feature2);
    let img__goal = images(cs.img.goal);



    let comp = '';

    comp +=
        `
        ${mas}
        ${proto}
        ${img__prototype}
        ${intro}
        ${user}
        ${img__stat}
        ${cr}
        ${img__goal}
        ${goal}
        ${img__feature1}
        ${feature1}
        ${img__feature2}
        ${feature2}
        ${future}
        ${lesson}
        `
       
    blahContainer.innerHTML = comp;
}

blah(cs__blah);
    



// CUNYFIRST

// const cunyfirst = (cs) => {

//     let mas = master(cs);
//     let intro = content__article(cs.introduction);
//     let user = content__article(cs.ur);
//     let problem = content__article(cs.problem);
//     let goal = content__article(cs.goal);
//     let sneakpeak = content__article(cs.sneakpeak);
//     let userflow = content__article(cs.userflow);
//     let wireframe = content__article(cs.wireframe);
//     let navigation = content__article(cs.navigation);
//     let navigationFeedback = content__article(cs.navigation.feedback);
//     let dynamicContent = content__article(cs.dynamicContent);
//     let testing = content__article(cs.testing);
//     let lesson = content__article(cs.lesson);
//     let proto = content__article(cs.proto);


//     // IMAGES
//     let img__introduction = images(cs.img.introduction);
//     let img__sketch = images(cs.img.sketch);
//     let img__sneakpeak = images(cs.img.sneakpeak);
//     let img__wireframe = images(cs.img.wireframe);
//     let img__userflow = images(cs.img.userflow);
//     let img__navigation = images(cs.img.navigation);
//     let img__dynamic = images(cs.img.dynamic);
//     let img__testing = images(cs.img.testing);
//     let img__prototype = button(cs.proto);
  


//     let comp = '';

//     comp +=
//         `
//         ${mas}
//         ${img__prototype}
//         ${intro}
//         ${user}
//         ${problem}
//         ${img__sketch}
//         ${goal}
//         ${sneakpeak}
//         ${img__sneakpeak}
//         ${userflow}
//         ${img__userflow}
//         ${wireframe}
//         ${img__wireframe}
//         ${navigation}
//         ${img__navigation}
//         ${navigationFeedback}
//         ${dynamicContent}
//         ${img__dynamic}
//         ${testing}
//         ${img__testing}
//         ${lesson}
//         ${proto}
//         ${img__prototype}
//         `
       
//     cunyfirstContainer.innerHTML = comp;
// }



//IPC (INTERNATIONAL PARALYMPIC COMMITTEE
const ipc = (cs) => {
    let mas = master(cs);
    let intro = content__article(cs.introduction);
    let problem = content__article(cs.problem);
    let goal = content__article(cs.goal);
    // let cr = content__article(cs.cr);
    let olympics = content__article(cs.cr.competitors.olympics);
    let lpga = content__article(cs.cr.competitors.lpga);
    let nfl = content__article(cs.cr.competitors.nfl);
    let ur = content__article(cs.ur);
    let journey = content__article(cs.journey);
    let userflow = content__article(cs.userflow);
    let wireframe = content__article(cs.wireframe);
    let designsystem = content__article(cs.designsystem);
    let lesson = content__article(cs.lesson);
    let proto = content__article(cs.proto);

    // IMAGES
    let img__introduction = images(cs.img.introduction);
    let img__goal = images(cs.img.goal);
    let img__persona = images(cs.img.persona);
    let img__nfl = images(cs.img.nfl);
    let img__lpga = images(cs.img.lpga);
    let img__olympic = images(cs.img.olympic);
    let img__journey = images(cs.img.journey);
    let img__sitemap = images(cs.img.sitemap);
    let img__userflow = images(cs.img.userflow);
    let img__wireframe = images(cs.img.wireframe);
    let img__designsystem = button(cs.designsystem);
    let img__proto = button(cs.proto);
    let img__preview = images(cs.img.preview);
    let img__final = images(cs.img.final);

    let comp = '';

    comp +=
        `
        ${mas}
        ${img__proto}
        ${img__introduction}
        ${problem}
        ${img__goal}
        ${goal}
        ${olympics}
        ${img__olympic}
        ${lpga}
        ${img__lpga}
        ${nfl}
        ${img__nfl}
        ${ur}
        ${img__persona}
        ${journey}
        ${img__journey}
        ${userflow}
        ${img__sitemap}
        ${img__userflow}
        ${wireframe}
        ${img__wireframe}
        ${designsystem}
        ${img__designsystem}
        ${proto}
        ${img__proto}
        ${lesson}
        `
    
    ipcContainer.innerHTML = comp;
}

ipc(cs__ipc);

//SALVATION ARMY
// const salvationarmy = (cs) => {
//     let mas = master(cs);
//     let viewMore = content__article(cs.viewMore);
//     let behance = button(cs.viewMore);
//     let img__full = images(cs.img.full);
//     let img__lg = images(cs.img.lg);
//     // let next = content__article(cs.nextProject);

//     let comp = '';

//     comp +=
//         `
//         ${mas}
//         ${behance}
//         ${img__lg}
//         ${viewMore}
//         ${behance}
//         `
    
//     salvationarmyContainer.innerHTML = comp;

// }

// salvationarmy(cs__salvationarmy);
// nextProject(cs__salvationarmy);



//GLADWELL
const gladwell = (cs) => {
    let mas = master(cs);
    let viewMore = content__article(cs.viewMore);
    let behance = button(cs.viewMore);
    let img__full = images(cs.img.full);
    let img__lg = images(cs.img.lg);
    // let next = content__article(cs.nextProject);

    let comp = '';

    comp +=
        `
        ${mas}
        ${behance}
        ${img__lg}
        ${img__full}
        ${viewMore}
        ${behance}
        `
    
    gladwellContainer.innerHTML = comp;

}

gladwell(cs__gladwell);



