const preferedColorScheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light';
const sliderDark = document.getElementById('sliderDark');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

sliderDark.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);