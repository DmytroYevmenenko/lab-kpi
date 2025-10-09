"use strict";

const generateKey = (length, characters) => {
  const possibleLength = characters.length;

  let key = "";

  for (let i = 0; i <= length - 1; i++) {
    const index = Math.floor(Math.random() * possibleLength);
    key += characters[index];
  }
  return key;
};
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);
console.log(key);
