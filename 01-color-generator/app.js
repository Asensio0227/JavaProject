const colors = ["green", "red", "blue",  "rgba(133,122,200)", "#f15025"];

const value = document.getElementById('color');
const btn = document.querySelector('.btn-hero');
const container = document.querySelector('.container');


btn.addEventListener('click', () => {
  let tossie = randomColor();
  
  container.style.background = colors[tossie];
  value.textContent = colors[tossie];
});

const randomColor = () => {
  return Math.floor(Math.random() * colors.length);
};