const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

// navbar
const navToggle = document.querySelector('.nav-toggle');
const container = document.querySelector('.links-container');
const links = document.querySelector('.links');
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const list = document.querySelectorAll('.deadline-format h4');

navToggle.addEventListener('click', () => {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = container.getBoundingClientRect().height;

  if (containerHeight === 0) {
    container.style.height = `${linksHeight}px`;
  } else {
    container.style.height = 0;
  }
});
const futureDay = new Date(2022, 0, 31+27, 08, 30, 0);

let weekday = weekDays[futureDay.getDay()];
let day = futureDay.getDate();
let month = months[futureDay.getMonth()];
let year = futureDay.getFullYear();
let hours = futureDay.getHours();
let minutes = futureDay.getMinutes();

giveaway.textContent = `iPhone giveaway ends on ${weekday} ${day} ${month} ${year}, 0${hours}:${minutes}pm`;

const futureTime = futureDay.getTime();

const fetchData = () => {
  const today = new Date().getTime();

  let total = futureTime - today;
  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMinute = 60 * 1000;

  let days = total / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((total % oneDay) / oneHour);
  let minutes = Math.floor((total % oneHour) / oneMinute);
  let secs = Math.floor((total % oneMinute) / 1000);

  const values = [days, hours, minutes, secs];

  const format = (data) => {
    if (data<10) {
      data=`0${data}`
    }
    return data;
  }

  list.forEach((items, index) => {
    items.innerHTML = format(values[index]);
  });

  if (total < 0) {
    clearInterval(timer)
    deadline.innerHTML='<h4 class="expired" style={{color:red}}>sorry this giveaway has closed</h4>'
  }
}

let timer = setInterval(fetchData, 1000);

fetchData();