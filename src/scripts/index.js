import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';

const app = new App({
  button: document.getElementsByClassName('navbar-collapse-btn')[0],
  drawer: document.getElementsByClassName('navbar-collapse')[0],
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
