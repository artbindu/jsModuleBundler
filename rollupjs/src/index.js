function mainContaint() {
    var el = document.createElement("h1");
    el.textContent = "This is First Rollup Project";
    return el;
}

document.getElementById("main").appendChild(mainContaint());