setTimeout(() => {
    const savedLang = localStorage.getItem('lang');

    if (savedLang) {
        window.location.href = `./pages/${savedLang}/`;
    } else {
        const lang = navigator.language;

        if (lang.startsWith('de')) {
            window.location.href = './pages/de/index.html';
        } else {
            window.location.href = './pages/en/index.html';
        }
    }
}, 2000); 
