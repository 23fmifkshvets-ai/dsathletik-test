document.addEventListener('DOMContentLoaded', () => {
    const switchBtn = document.getElementById('lang-switch');
    if (!switchBtn) return;

    const path = window.location.pathname;
    const flag = switchBtn.querySelector('.lang-flag');

    const isDE = path.includes('/de/');
    const isEN = path.includes('/en/');

    if (isDE) {
        flag.src = '../../../img/elements/uk-flag.svg';
    } else {
        flag.src = '../../../img/elements/de-flag.svg';
    }

    switchBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let newPath;

        if (isDE) {
            newPath = path.replace('/de/', '/en/');
            localStorage.setItem('lang', 'en');
        } else if (isEN) {
            newPath = path.replace('/en/', '/de/');
            localStorage.setItem('lang', 'de');
        } else {
            // fallback (якщо щось не так)
            newPath = '/pages/en/';
        }

        window.location.href = newPath;
    });
});
