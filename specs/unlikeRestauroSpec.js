/* eslint-disable no-undef */
import DataRepository from '../src/scripts/data/data-repository';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = `
  <div id="book-button"></div>`;
};

describe('Unliking a Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await DataRepository.putBook({ id: 1 });
  });

  afterEach(async () => {
    await DataRepository.deleteBooked(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Unlike This Restaurant"]')).toBeTruthy();
  });

  it('should not display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Like This Restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    document
      .querySelector('#btn')
      .dispatchEvent(new Event('click'));

    expect(await DataRepository.getAllBooked()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

    await DataRepository.deleteBooked(1);
    document
      .querySelector('[aria-label="Unlike This Restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await DataRepository.getAllBooked()).toEqual([]);
  });
});
