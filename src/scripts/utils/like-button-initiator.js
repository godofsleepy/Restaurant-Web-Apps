import { bookedButton, bookButton } from '../views/components/components';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, resto, repository }) {
    this._likeButtonContainer = likeButtonContainer;
    this._repository = repository;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    if (await this._isRestoExist(this._resto.id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await this._repository.getBooked(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = bookButton();

    const likeButton = document.querySelector('#btn');
    likeButton.addEventListener('click', async () => {
      await this._repository.putBook(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = bookedButton();

    const likeButton = document.querySelector('#btn');
    likeButton.addEventListener('click', async () => {
      await this._repository.deleteBooked(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
