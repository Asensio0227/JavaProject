import sublinks from "./data.js";

const closeBtn = document.querySelector('.close-btn');
const navToggle = document.querySelector('.toggle-btn');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  sidebarWrapper.classList.add('show')
});
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show')
});

sidebar.innerHTML = sublinks
  .map((items) => {
    const { page, links } = items;
    return `
    <article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
    ${links.map((link) => {
      return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`
    }).join('')}
    </div></article>`
  })
  .join('\n');

linkBtns.forEach((btn) => {
  btn.addEventListener('mouseover', (e) => {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    const tempPage = sublinks.find((link) => link.page === text);

    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;

      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3';
      }
      if (links.length > 3) {
        columns = 'col-4';
      }

      submenu.innerHTML = `<section>
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links.map((link) => {
        return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`
      })
          .join('')}</div>
      </section>`
    }
  })
});

hero.addEventListener('mouseover', function () {
  submenu.classList.remove('show');
});

nav.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
})