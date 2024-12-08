'use strict';

const generateKey = (length, characters) => {
  const key = [];
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * charactersLength);
      key.push(characters[index]);
  }
  return key.join('');
};

module.exports = { generateKey };
