const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const thumbnailCreate = (url, description, likes, comments, id) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.thumbnailId = id;
  return thumbnail;
};

const renderThumbnails = (pictures, container) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = thumbnailCreate(picture.url, picture.description, picture.likes, picture.comments, picture.id);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export { renderThumbnails };

