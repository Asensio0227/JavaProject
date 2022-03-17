const toggleBtn=document.querySelector('.toggle-btn');
const links=document.querySelector('.links');
const linksContainer=document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height =`${linksHeight}px`
  } else {
    linksContainer.style.height = 0;
  }
})