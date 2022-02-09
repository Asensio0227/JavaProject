const load = document.querySelector('.loading');
const slides = document.querySelectorAll('.slide');
const navToggle = document.querySelector('.nav-toggle');
const closebar = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const btns = document.querySelectorAll('.btn');

navToggle.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
});

closebar.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})

window.addEventListener('DOMContentLoaded', () => {
  load.classList.add('remove-loader')
});

let showQuotes = () => {
  let active = document.querySelectorAll('.active');
  let i = 1;
  function repeat() {
    setTimeout(() => {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      })

      slides.forEach((slide) => {
        slide.classList.remove('active');
      });

      btns.forEach((btn) => {
        btn.classList.remove('active');
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return
      }
      repeat();
    }, 10000);
  }
  repeat();
}
showQuotes();