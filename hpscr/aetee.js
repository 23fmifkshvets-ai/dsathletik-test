
const images = [
    "../../../img/aetee/aet-fw-2.webp",
    "../../../img/aetee/aet-bk.webp",
    "../../../img/aetee/aet-unpk1.jpg",
    "../../../img/aetee/aet-unpk2.jpg",
    "../../../img/aetee/aet-pk.jpg"
];

let currentImage = 0;

function nextImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("product-image").src = images[currentImage];
}

function prevImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("product-image").src = images[currentImage];
}




// COLOR
document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
// SIZE
document.querySelectorAll('.size-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

