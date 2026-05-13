document.addEventListener('DOMContentLoaded', () => {
   
    const latestProduct = document.querySelector('.products .product-card');

    if (!latestProduct) return;

   
    const img = latestProduct.querySelector('img')?.src;
    const name = latestProduct.querySelector('h3')?.textContent;
    const link = latestProduct.querySelector('a')?.href;


    const story = document.getElementById('story1');
    const btn = document.getElementById('story-btn');

    if (!story || !link) return;

    
    if (img) {
      //  story.style.backgroundImage = `url(${img})`;
        story.style.backgroundSize = 'cover';
        story.style.backgroundPosition = 'center';
    }

    
    const label = story.querySelector('.story-label');
    if (label && name) {
        label.textContent = `New: ${name}`;
    }

    const hrf = latestProduct.querySelector('a')?.href;

    const btn_clk = document.getElementById('story-btn');

    if (!btn_clk || !hrf) return;

    btn.addEventListener('click', () => {
        window.location.href = hrf;
    });

   
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

 
    const scale = random(1.2, 1.6);      
    const rotate = random(-15, 15);      
    const posX = random(30, 70);        
    const posY = random(20, 60);         
    
    story.style.setProperty('--bg-url', `url(${img})`);

    const before = window.getComputedStyle(story, '::before');

    
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
  #story1::before {
    background-image: url(${img});
    transform: scale(${scale}) rotate(${rotate}deg);
    background-position: ${posX}% ${posY}%;
    
  }
`, styleSheet.cssRules.length);

});

console.log("JS START");
