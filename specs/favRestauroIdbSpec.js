/* eslint-disable no-undef */
import { itActsAsFavoriteRestauroModel } from './contract/favRestauroContract';
import DataRepository from '../src/scripts/data/data-repository';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await DataRepository.getAllBooked()).forEach(async (restaurant) => {
      await DataRepository.deleteBooked(restaurant.id);
    });
  });

  itActsAsFavoriteRestauroModel(DataRepository);
});
