import { openDB } from 'idb';
import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

class DataRepository {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async getBooked(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  }

  static async getAllBooked() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  }

  static async putBook(movie) {
    return (await dbPromise).put(OBJECT_STORE_NAME, movie);
  }

  static async deleteBooked(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  }
}

export default DataRepository;
