import { module } from "./module/module";
import './index.css'; 

function mainBody() { 
    var el = document.createElement("h1");
    el.textContent = "This is First Rollup Project";
    return el;
}
function main() {
    var d = document.getElementById("main");
    d.appendChild(mainBody());
    d.appendChild(module());
}

(function () {
    main(); 
})();