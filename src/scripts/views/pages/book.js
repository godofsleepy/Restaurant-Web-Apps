import DataRepository from '../../data/data-repository';
import { itemRestaurantHome } from '../components/components';

const Book = {
  async render() {
    return `
     <div class="latest">
      <div class="posts">
      </div>
      </div> 
    `;
  },

  async afterRender() {
    const listRestaurant = await DataRepository.getAllBooked();
    const container = document.querySelector('.posts');
    listRestaurant.forEach((resto) => {
      container.innerHTML += itemRestaurantHome(resto);
    });
  },
};

export default Book;
