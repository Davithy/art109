let image0 = document.querySelector("#image-0")
let image1 = document.querySelector("#image-1")
let image2 = document.querySelector("#image-2")
let image3 = document.querySelector("#image-3")

image0.addEventListener("click", function () {
    image1.style.visibility = "visible";
})

image1.addEventListener("click", function () {
    image2.style.visibility = "visible";
    image0.style.visibility = "visible";
})

image2.addEventListener("click", function () {
    image3.style.visibility = "visible";
})

image3.addEventListener("click", function () {
    image0.style.visibility = "hidden";
})