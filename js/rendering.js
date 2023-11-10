import { isEscapeKey } from './getting-data';

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bodyPage = document.querySelector('body');

const closePicture = () => {
  bigPicture.classList.add('hidden');
  bodyPage.classList.remove('modal-open');
  closeButton.removeEventListener('click', closePicture);
};

const closeEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    bodyPage.classList.remove('modal-open');
  }
  document.removeEventListener('keydown', closeEscape);
};

const openPicture = (evt) => {
  if (evt.target.classList.contains('picture__img')) {
    const thumbnail = evt.target.closet('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }
    const thumbnailId = +thumbnail.dataset.thumbnailId;
    const pictureData = pictures.find(({ id }) => id === thumbnailId);
    bigPicture.classList.remove('hidden');
    bodyPage.classList.add('modal-open');

    document.addEventListener('keydown', closeEscape);
    closeButton.addEventListener('click', closePicture);
  }
};

export { openPicture };
