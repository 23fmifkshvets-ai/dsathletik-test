document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("img01");

    let scrollY = 0;

    document.addEventListener('click', (e) => {

        const item = e.target.closest('.item.img');

        if (item) {
            const img = item.querySelector('img');

            if (img) {
                modal.style.display = "flex";
                modalImg.src = img.src;


                scrollY = window.scrollY;
                document.body.style.position = "fixed";
                document.body.style.top = `-${scrollY}px`;
                document.body.style.width = "100%";
            }
        }

        if (e.target.id === "modal" || e.target.classList.contains('close')) {
            modal.style.display = "none";


            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.scrollTo(0, scrollY);
        }
    });
});




const modalContent = document.querySelector('.modal-content');

let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
let isDragging = false;


modalContent.addEventListener('touchstart', (e) => {
    isDragging = true;

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

    modalContent.style.transition = "none";
});

modalContent.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    currentX = e.touches[0].clientX - startX;
    currentY = e.touches[0].clientY - startY;

    modalContent.style.transform = `translate(${currentX}px, ${currentY}px)`;
});

modalContent.addEventListener('touchend', () => {
    isDragging = false;

    modalContent.style.transition = "transform 0.3s ease";
    modalContent.style.transform = "translate(0, 0)";
});
