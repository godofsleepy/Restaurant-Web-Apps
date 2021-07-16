// import 'regenerator-runtime'; /* for async await transpile */
// import '../styles/main.css';
// import '../styles/responsive.css';
// import data from '../DATA.json';

// data.restaurants.forEach(resto => {
//     posts.innerHTML += `
//     <a href="#" class="link-item">
//     <article class="post-item">
//     <img class="post-item__thumbnail"
//          src="${resto.pictureId}"
//          alt="${resto.name}">
//     <div class="post-item__content">
//         <h1 class="post-item__title">${resto.name}</h1>
//         <p class="post-item__date">${resto.city} - ${resto.rating} Stars
//         </p>
//         <p class="post-item__description">${resto.description}</p>
//     </div>
//     </article>
//     </a>`;
// });
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
