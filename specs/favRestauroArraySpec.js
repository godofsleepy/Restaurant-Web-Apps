/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestauroModel } from './contract/favRestauroContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getBooked(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllBooked() {
    return favoriteRestaurants;
  },

  putBook(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getBooked(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteBooked(id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestaurants = []));

  itActsAsFavoriteRestauroModel(FavoriteRestaurantArray);
});
