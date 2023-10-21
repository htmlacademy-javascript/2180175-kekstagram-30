//getComments
const MIN_INTEGER = 1;
const MAX_INTEGER = 6;

//getMocks(Likes)
const MIN_LIKES_INTEGER = 15;
const MAX_LIKES_INTEGER = 200;

//getMocks(Comments)
const MIN_COMMENTS_INTEGER = 0;
const MAX_COMMENTS_INTEGER = 30;

// Получение рандомного числа в диапазоне(min, max):

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const names = ['Артем', 'Андрей', 'Семён', 'Олег', 'Софья', 'Татьяна', 'Кирилл', 'Александр'];

// Получение рандомного комментария:

const getComments = function (commentsCount) {
  const result = [];
  for (let i = 0; i < commentsCount; i++) {
    result.push({
      id: i + 1,
      avatar: `img/avatar-${getRandomInteger(MIN_INTEGER, MAX_INTEGER)}.svg`,
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
      likes: getRandomInteger(MIN_LIKES_INTEGER, MAX_LIKES_INTEGER),
      comments: getComments(getRandomInteger(MIN_COMMENTS_INTEGER, MAX_COMMENTS_INTEGER))
    });
  }
  return result;
};

console.log(getMocks(25));

