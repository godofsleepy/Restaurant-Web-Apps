import CONFIG from '../../globals/config';

const itemRestaurantHome = (resto) => `
    <a href="#" class="link-item">
    <article class="post-item">
    <img class="post-item__thumbnail"
         src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}"
         alt="${resto.name}">
    <div class="post-item__content">
        <h1 class="post-item__title">${resto.name}</h1>
        <p class="post-item__date">${resto.city} - ${resto.rating} Stars
        </p>
        <p class="post-item__description">${resto.description}</p>
    </div>
    </article>
    </a>`;

// eslint-disable-next-line import/prefer-default-export
export { itemRestaurantHome };
