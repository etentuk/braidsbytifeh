const updateTheme = ({ matches }) => {
  const themeAttribute = 'app-theme';
  const colorScheme = matches ? 'dark' : 'light';

  document.documentElement.setAttribute(themeAttribute, colorScheme);
};

const themeListener = window.matchMedia('(prefers-color-scheme: dark)');

themeListener.addEventListener('change', updateTheme);
