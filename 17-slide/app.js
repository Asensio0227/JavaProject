// buttons
const navtoggle = document.querySelector('.nav-toggle');
const closebar = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// body 
const sidebar = document.querySelector('.sidebar');
const slides = document.querySelectorAll('.slide');

// sidebar
navtoggle.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});

closebar.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
});

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let count = 0;

prevBtn.addEventListener("click",function () {
  count--;
  carsoul();
})

nextBtn.addEventListener("click",function () {
  count++;
  carsoul();
})

function carsoul() {
  if (count < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }

  if (count > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  })
}

prevBtn.style.display = "none";