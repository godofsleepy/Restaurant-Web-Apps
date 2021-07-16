import DataRepository from '../../data/data-repository';
import { itemRestaurantHome } from '../components/components';

const Home = {
  async render() {
    return `
    <div class="hero">
    <div class="hero__inner">
        <h2 class="hero__title">“Modern Cuisine has no Borders and I Present to You My Lovely Art” - Mauro
            Colagreco</h2>
    </div>
    </div>

     <div class="latest">
      <div class="posts">
      </div>
      </div> 
    `;
  },

  async afterRender() {
    const listRestaurant = await DataRepository.list();
    const container = document.querySelector('.posts');
    listRestaurant.forEach((resto) => {
      container.innerHTML += itemRestaurantHome(resto);
    });
  },
};

export default Home;
