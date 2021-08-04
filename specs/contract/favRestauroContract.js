/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const itActsAsFavoriteRestauroModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putBook({ id: 1 });
    favoriteRestaurant.putBook({ id: 2 });

    expect(await favoriteRestaurant.getBooked(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getBooked(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getBooked(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putBook({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllBooked()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putBook({ id: 1 });
    favoriteRestaurant.putBook({ id: 2 });

    expect(await favoriteRestaurant.getAllBooked()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putBook({ id: 1 });
    favoriteRestaurant.putBook({ id: 2 });
    favoriteRestaurant.putBook({ id: 3 });

    await favoriteRestaurant.deleteBooked(1);

    expect(await favoriteRestaurant.getAllBooked()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the Restaurant has not been added', async () => {
    favoriteRestaurant.putBook({ id: 1 });
    favoriteRestaurant.putBook({ id: 2 });
    favoriteRestaurant.putBook({ id: 3 });

    await favoriteRestaurant.deleteBooked(4);

    expect(await favoriteRestaurant.getAllBooked()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

export { itActsAsFavoriteRestauroModel };
