import data from "./data.js";

const navToggle=document.querySelector('.nav-toggle');
const navbar = document.querySelector('nav');
const links = document.querySelector('.links');
const container = document.querySelector('.links-container');
const article = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

navToggle.addEventListener('click', () => {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = container.getBoundingClientRect().height;

  if (containerHeight === 0) {
    container.style.height = `${linksHeight}px`;
  } else {
    container.style.height = 0;
  }
});

window.addEventListener('scroll', () => {
  const scrollheight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollheight > navHeight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav');
  }
});

if (data.length === 1) {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
}

let people = [ ...data ];
if (data.legnth === 2) {
  people = [...data, ...data];
}

article.innerHTML = people.map((person, personIndex) => {
  const { img, name, text, job } = person;
  let position = "next";
  if (personIndex === 0) {
    position = "active";
  }
  if (personIndex === people.length - 1) {
    position = "last";
  }
  if (data.length <= 1) {
    position = "active";
  }
  return `<article class="slide ${position}">
        <img src="${img}" alt="${name}" class="img">
        <h4>${name}</h4>
        <p class="title">${job}</p>
        <p class="text">
          ${text}
        </p>
        <div class="quote-icon">
          <i class="fas fa-quote-right"></i>
        </div>
      </article>`
})
  .join("");

const startView = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = article.firstElementChild;
  };
  next.classList.remove("next");
  last.classList.remove("last");
  active.classList.remove("active");

  if (type === "prev") {
    active.classList.add("last");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = article.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  startView();
});

prevBtn.addEventListener("click", () => {
  startView("prev")
});