import { isEscapeKey } from './escape';
import { renderComments } from './comment';
const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closePictureButtonElement = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');

const hidePicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

const onClosePictureButtonClick = () => {
  hidePicture();
  document.removeEventListener('click', onClosePictureButtonClick);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePicture();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
}

const renderPicture = ({ url, description, likes }) => {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showPicture = (pictureData) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderComments(pictureData.comments);
  renderPicture(pictureData);
};

closePictureButtonElement.addEventListener('click', onClosePictureButtonClick);
export { showPicture };


