import displayButtons from "./displayButtons.js";
import displayfollowers from "./displayFollowers.js";
import fetchfollowers from "./FetchFollowers.js";
import paginate from "./paginate.js";

const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');
const toggleBtn = document.querySelector('.toggle-btn');
const BtnContainer = document.querySelector('.btn-container');
const title = document.querySelector('.section-title h2');

toggleBtn.addEventListener('click', () => {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = links.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

let index = 0;
let pages = [];

const setItem = () => {
  displayButtons(BtnContainer, pages, index);
  displayfollowers(pages[index]);
}

const init = async () => {
  const followers = await fetchfollowers();
  title.textContent = 'pagination';
  pages = paginate(followers);
  setItem(followers);
}

BtnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return;
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
  }
  }
  setItem();
})

window.addEventListener('load', init);