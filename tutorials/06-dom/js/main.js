console.log("Hello World");

let pageTitle = document.querySelector("#page-title");
let pageBody = document.querySelector("header");

// Javascript Timeout Changes h1 title color after 3 seconds
setTimeout(function () {
    pageTitle.style.color = "pink";
    // console.log("timeout worked!");
}, 3000)

// Click event on header changes background color
pageBody.onclick = function () {
    // console.log("clicked header");
    document.querySelector("body").style.backgroundColor = "lightblue";
}