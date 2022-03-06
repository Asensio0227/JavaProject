const displayButtons = (BtnContainer, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${activeIndex === pageIndex ? 'active-btn' : 'null'}" data-index="${pageIndex}">
      ${pageIndex + 1}
    </button>`
  })
  btns.unshift(` <button class="prev-btn">
          <i class="fas fa-chevron-left"></i>
        </button>`);
  btns.push(`<button class="next-btn">
          <i class="fas fa-chevron-right"></i>
        </button>`);
  BtnContainer.innerHTML = btns.join('');
}

export default displayButtons;