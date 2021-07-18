import CONFIG from '../../globals/config';

function itemRestaurantHome(resto) {
  let star = '*';
  for (let i = 0; i < Math.round(resto.rating); i += 1) {
    star += '*';
  }

  return `<a href="${`#/detail/${resto.id}`}" class="link-item">
    <article class="post-item">
    <img class="post-item__thumbnail"
         src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}"
         alt="${resto.name}">
    <div class="post-item__content">
        <h1 class="post-item__title">${resto.name}</h1>
        <p>${star}</p>
        <p class="post-item__description">${resto.description}</p>
    </div>
    </article>
    </a>`;
}

function itemDetailRestaurant(resto) {
  let categories = '';
  if (resto.categories.length > 0) {
    categories = `/ ${resto.categories[0].name}`;
  }

  let star = '*';
  for (let i = 0; i < Math.round(resto.rating); i += 1) {
    star += '*';
  }

  let foods = '';
  for (let i = 0; i < resto.menus.foods.length; i += 1) {
    foods += `<div class="grid-item">${resto.menus.foods[i].name}</div>`;
  }

  let drinks = '';
  for (let i = 0; i < resto.menus.drinks.length; i += 1) {
    drinks += `<div class="grid-item">${resto.menus.drinks[i].name}</div>`;
  }

  let reviews = '';
  if (resto.customerReviews.length >= 5) {
    for (let i = 0; i < 5; i += 1) {
      reviews += `<p>${resto.customerReviews[i].review} -<span class="review-name">${resto.customerReviews[i].name}</span><br><span class="review-date">${resto.customerReviews[i].date}</span></p><br>`;
    }
  } else {
    for (let i = 0; i < resto.customerReviews.length; i += 1) {
      reviews += `<p>${resto.customerReviews[i].review} -<span class="review-name">${resto.customerReviews[i].name}</span><br><span class="review-date">${resto.customerReviews[i].date}</span></p><br>`;
    }
  }

  return `
  <div class="detail-item">    
    <img src="https://restaurant-api.dicoding.dev/images/small/${resto.pictureId}" alt="detail">
    <h2 class="detail-title">${resto.name} <span class="detail-type"><i>${categories}</i></span></h2>
    <p>${star}</p>
    <br>
    <p>${resto.city} - ${resto.address}</p>
    <p class="detail-description">${resto.description}</p>
    <br>
    <p class="detail-headline">Menus</p>
    <br>
    <div class="grid-container">
      ${foods}
     </div>
     <br>
    <p>~~~~~~~~~~~~~~~~~</p>
    <br>
    <div class="grid-container">
     ${drinks}
     </div>
     <br>
     <p class="detail-headline">Review</p>
     <br>
     ${reviews}
</div>
    `;
}

// eslint-disable-next-line import/prefer-default-export
export { itemRestaurantHome, itemDetailRestaurant };
