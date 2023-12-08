
import { module } from "./module";
import './styles/style.css';

function mainBody() {
    var el = document.createElement("h1");
    el.className = "cl1";
    el.textContent = "This is First webpack Project";
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