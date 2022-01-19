const closeBtn = document.querySelector('.close-btn');
const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');

navToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar")
});

closeBtn.addEventListener("click", () => {
  if (sidebar.classList.contains('show-sidebar')) {
    sidebar.classList.remove("show-sidebar")
  } else {
    sidebar.classList.add("show-sidebar")
  }
});