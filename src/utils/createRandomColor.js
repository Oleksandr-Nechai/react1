import randomNumber from './randomNumber';

function createRandomColor() {
  return `rgba(
    ${randomNumber(0, 255)},
    ${randomNumber(0, 255)},
    ${randomNumber(0, 255)},
    ${randomNumber(5, 10) / 10})`;
}

export default createRandomColor;
