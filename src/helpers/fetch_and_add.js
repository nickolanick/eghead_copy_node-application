export const fetch_and_add = (app, endpoint, component) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = `
    <!--<h1>::))</h1>-->
    `
    app.appendChild(tmp);


    fetch(endpoint).then(res => res.json()).then(
        res => {
            app.replaceChild(component(res),tmp);
        }
    ).catch(err => {
        // tmp.outerHTML = `error `
    });
};