"use strict";

function logSubmit(event) 



function main() {
    console.log("début");

    document.querySelector('form').addEventListener('submit', logSubmit);

    console.log("fin");
}

window.addEventListener('load', main);

