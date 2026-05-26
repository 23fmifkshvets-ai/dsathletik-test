# Очищений та переписаний JavaScript

```javascript
// ===== START =====

console.log("JS START");


document.addEventListener('DOMContentLoaded', () => {

    // ===== Fonts =====

    document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
    });

    // fallback якщо шрифти зависли
    setTimeout(() => {
        document.body.classList.add('fonts-loaded');
    }, 2000);


    // ===== Browser Detect =====

    const ua = navigator.userAgent.toLowerCase();

    if (ua.includes('samsungbrowser')) {
        document.body.classList.add('is-samsung-browser');
    }

    const buggyAgents = [
        'miuibrowser',
        'samsungbrowser',
        'ucbrowser',
        'fbav',
        'instagram'
    ];

    if (buggyAgents.some(agent => ua.includes(agent))) {
        document.body.classList.add('is-buggy-browser');
    }


    // ===== Story Product =====

    const latestProduct = document.querySelector('.products .product-card');

    if (latestProduct) {

        const img = latestProduct.querySelector('img')?.src;
        const name = latestProduct.querySelector('h3')?.textContent;
        const link = latestProduct.querySelector('a')?.href;

        const story = document.getElementById('story1');
        const btn = document.getElementById('story-btn');
        const shirt = document.querySelector('.story1-shirt');
        const label = story?.querySelector('.story-label');


        if (story && btn && shirt && link) {

            // ===== Product Image =====

            if (img) {
                shirt.src = img;
            }


            // ===== Product Name =====

            if (label && name) {
                label.textContent = `New: ${name}`;
            }


            // ===== Button =====

            btn.addEventListener('click', () => {
                window.location.href = link;
            });


            // ===== Random Animation =====

            const random = (min, max) => {
                return Math.random() * (max - min) + min;
            };

            const scale = random(1.5, 2);
            const rotate = random(-20, 20);

            story.style.setProperty('--scale', scale);
            story.style.setProperty('--rotate', `${rotate}deg`);
        }
    }


    // ===== Products Reveal =====

    const products = document.querySelector('.products-reveal');
    const story3 = document.querySelector('.story-3');


    if (products && story3) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    products.classList.add('active');
                    story3.classList.add('darkened');
                }
            });

        }, {
            threshold: 0.15
        });

        observer.observe(products);
    }

});
```
