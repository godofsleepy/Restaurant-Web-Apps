import UrlParser from '../../routes/url-parser';
import DataRepository from '../../data/data-repository';
import { itemDetailRestaurant } from '../components/components';

const Detail = {
  async render() {
    return `
    <div id="detail-resto" class=""> </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DataRepository.detailRestaurants(url.id);
    const restoContainer = document.querySelector('#detail-resto');
    restoContainer.innerHTML = itemDetailRestaurant(resto);
  },
};

export default Detail;
