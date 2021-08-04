/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import DataRepository from '../../src/scripts/data/data-repository';

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#book-button'),
    repository: DataRepository,
    resto: restaurant,
  });
};

export { createLikeButtonInitiatorWithRestaurant };
