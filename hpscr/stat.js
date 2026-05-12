let isZoomed = false;
let isDragging = false;
let startX = 0, startY = 0;
let x = 0, y = 0; // Поточне зміщення

const image = document.querySelector(".image-wrapper img");
const imageWrapper = document.querySelector(".image-wrapper");

// Налаштуємо початкові стилі для руху
image.style.position = "relative";
image.style.transition = "transform 0.3s ease"; // Плавний зум
image.style.cursor = "zoom-in";

function zoomImage() {
  isZoomed = !isZoomed;
  if (isZoomed) {
    image.style.transform = "scale(2)";
    image.style.cursor = "grab";
  } else {
    // Скидаємо все
    image.style.transform = "scale(1)";
    image.style.left = "0px";
    image.style.top = "0px";
    x = 0; y = 0;
    image.style.cursor = "zoom-in";
  }
}

// Додай виклик функції зуму (наприклад, по кліку, якщо у тебе немає окремої кнопки)
image.addEventListener("click", (e) => {
    if (!isDragging) zoomImage();
});

image.addEventListener("mousedown", (e) => {
  if (!isZoomed) return;
  isDragging = true;
  image.style.transition = "none"; // Вимикаємо плавність під час тягнення
  startX = e.clientX - x;
  startY = e.clientY - y;
  image.style.cursor = "grabbing";
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  x = e.clientX - startX;
  y = e.clientY - startY;

  // Обмеження (щоб не вилітала за межі)
  // При scale(2) картинка виходить за межі контейнера на половину своєї ширини/висоти
  const limitX = image.offsetWidth / 2;
  const limitY = image.offsetHeight / 2;

  x = Math.max(-limitX, Math.min(x, limitX));
  y = Math.max(-limitY, Math.min(y, limitY));

  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
  image.style.transition = "transform 0.3s ease";
  image.style.cursor = isZoomed ? "grab" : "zoom-in";
});