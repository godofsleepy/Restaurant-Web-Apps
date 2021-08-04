/* eslint-disable no-undef */
import DataRepository from '../src/scripts/data/data-repository';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = `
  <div id="book-button"></div>`;
};

describe('Liking or Adding a Restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Like This Restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Unlike This Restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    document.querySelector('#btn').dispatchEvent(new Event('click'));
    const restaurant = await DataRepository.getBooked(1);

    expect(restaurant).toEqual({ id: 1 });
    DataRepository.deleteBooked(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    await DataRepository.putBook({ id: 1 });
    document.querySelector('#btn').dispatchEvent(new Event('click'));
    expect(await DataRepository.getAllBooked()).toEqual([{ id: 1 }]);

    DataRepository.deleteBooked(1);
  });
});
