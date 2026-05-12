

setTimeout(() => {

    document.querySelector(".intro").style.display = "none"

}, 2500)



const paragraphs = document.querySelectorAll(".about-text p");

const delay = window.innerWidth <= 768 ? 200 : 2200;

paragraphs.forEach((p, i) => {
    setTimeout(() => {
        p.classList.add("show");
    }, delay + i * 350);
});