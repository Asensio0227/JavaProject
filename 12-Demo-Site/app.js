// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

const date = document.getElementById('date');
const navbar = document.getElementById('nav');
const scrollLinks = document.querySelectorAll('.scroll-link');
const links = document.querySelector('.links');
const container = document.querySelector('.links-container');
const topLink = document.querySelector('.top-link');
const navToggle = document.querySelector('.nav-toggle');

// date 
date.innerHTML = new Date().getFullYear();
// toggle 
navToggle.addEventListener('click', () => {
  // container.classList.toggle('show-links')

  const containerHeight = container.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  
  if (containerHeight === 0) {
    container.style.height = `${linksHeight}px`;
  } else {
    container.style.height = 0;
  }
});
// fixed nav 
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
});
// smooth scroll 
scrollLinks.forEach((linkBtn) => {
  linkBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = container.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    })

    container.style.height = 0;
  })
})
