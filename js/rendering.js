import { isEscapeKey } from './getting-data';

const picture = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');

picture.addEventLestener('click', () => {
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });
});
