const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const value = document.getElementById('color');
const btn = document.querySelector('.btn-hero');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomColor()];
  }

  container.style.background = hexColor;
  value.textContent = hexColor;
})

const randomColor = () => {
  return Math.floor(Math.random() * hex.length);
};