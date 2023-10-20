//getComments
const minInteger = 1;
const maxInteger = 6;

//getMocks(Likes)
const minLikesInteger = 15;
const maxLikesInteger = 200;

//getMocks(Comments)
const minCommentsInteger = 0;
const maxCommentsInteger = 30;

// Получение рандомного числа в диапазоне(min, max):

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const names = ['Артем', 'Андрей', 'Семён'];

// Получение рандомного комментария:

const getComments = function (commentsCount) {
  const result = [];
  for (let i = 0; i < commentsCount; i++) {
    result.push({
      id: i + 1,
      avatar: `img/avatar-${getRandomInteger(minInteger, maxInteger)}.svg`,
      message: 'В целом всё неплохо. Но не всё.',
      name: names[getRandomInteger(0, names.length - 1)],
    });
  }
  return result;
};

// Дополнения к комментариям:

const getMocks = function (idCount) {
  const result = [];
  for (let i = 0; i < idCount; i++) {
    result.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: 'Красивая фотография',
      likes: getRandomInteger(minLikesInteger, maxLikesInteger),
      comments: getComments(getRandomInteger(minCommentsInteger, maxCommentsInteger))
    });
  }
  return result;
};

console.log(getMocks(25));

