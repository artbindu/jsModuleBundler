/**    
 * Copyright 2023-2024 Biswasindhu Mandal
 * Licensed under MIT (https://github.com/artbindu/jsModuleBundler/blob/main/README.md)
 */

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