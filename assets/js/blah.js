const cs = cases[0];
const mas = master(cs);
const intro = content__article(cs.introduction);
const user = content__article(cs.ur);
const cr = content__article(cs.cr);
const goal = content__article(cs.goal);
const future = content__article(cs.future);
const proto = content__article(cs.proto);
const img__sketch = images(cs.img.sketch);
const img__approach = images(cs.img.approach);
const img__cover = images(cs.img.cover);
const img__prototype = prototype(cs.proto);

    let comp = '';

    comp +=
        `
        ${mas}
        ${img__cover}
        ${intro}
        ${img__sketch}
        ${user}
        ${cr}
        ${img__approach}
        ${goal}
        ${future}
        ${proto}
        ${img__prototype}
        `

blahContainer.innerHTML = comp;

    



