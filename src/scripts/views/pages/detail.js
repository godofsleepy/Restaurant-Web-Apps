import UrlParser from '../../routes/url-parser';
import DataRepository from '../../data/data-repository';
import { itemDetailRestaurant } from '../components/components';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="detail-resto" class=""> 
    
    </div>
    
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoData = await DataRepository.detailRestaurants(url.id);
    const restoContainer = document.querySelector('#detail-resto');
    restoContainer.innerHTML = itemDetailRestaurant(restoData);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#book-button'),
      resto: restoData,
      repository: DataRepository,
    });
  },
};

export default Detail;
