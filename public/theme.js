const themeInLocalStorage = localStorage.getItem('theme');

document.documentElement.setAttribute('app-theme', themeInLocalStorage || 'dark');
