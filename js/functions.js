function maxLength(string, length) {
  return string.length <= length;
}

// Cтрока короче 20 символов
maxLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
maxLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
maxLength('проверяемая строка', 10); // false

function isPalindrom(rawString) {
  const string = rawString.replaceAll(' ', ' ').toLowerCase();
  const halfStringLenth = string.length / 2;

  for (let i = 0; i < halfStringLenth; i++) {
    const firstChar = string.at(i);
    const lastChar = string.at(-i - 1);
    if (firstChar !== lastChar) {
      return false;
    }
    return true;
  }
}

// Строка является палиндромом
isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false
