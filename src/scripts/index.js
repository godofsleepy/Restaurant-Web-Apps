import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json'

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const posts = document.querySelector('.posts');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});



data.restaurants.forEach(resto => {
    posts.innerHTML += `
    <article class="post-item">
    <img class="post-item__thumbnail"
         src="${resto.pictureId}"
         alt="${resto.pictureId}">
    <div class="post-item__content">
        <p class="post-item__date">Kota : ${resto.city} Rate ${resto.rating}
        </p>
        <h1 class="post-item__title">${resto.name}</h1>
        <p class="post-item__description">${resto.description}</p>
    </div>
</article>
    `
})