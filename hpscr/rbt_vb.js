
const images = [
    "../../../img/rbt_vb/rbt_vb-1.jpg",
    "../../../img/rbt_vb/rbt_vb-2.jpg"
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





document.querySelectorAll('.size-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Прибираємо активний клас у всіх
        document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
        // Додаємо поточному
        button.classList.add('active');
    });
});
