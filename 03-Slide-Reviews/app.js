// local reviews data
const people = [
  {
    id: 1,
    name: "galaxy",
    job: "web developer",
    img:
      "./tree.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "motivation",
    job: "web designer",
    img:
      "./madrid.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter ",
    job: "intern",
    img:
      "kwon-junho.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill",
    job: "the boss",
    img:
      "./brett.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const author = document.getElementById('author');
const job = document.getElementById('job');
const img = document.getElementById('person-img');
const info = document.getElementById('info');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

let index = 0;

window.addEventListener('DOMContentLoad', () => {
  const venom = people[index];
  img.src = venom.img;
  author.textContent = venom.name;
  job.textContent = venom.job;
  info.textContent=venom.text
})

const showPerson = (person) => {
  const venom = people[person];
  img.src = venom.img;
  author.textContent = venom.name;
  job.textContent = venom.job;
  info.textContent=venom.text
}

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = people.length - 1;
  }
  showPerson(index)
});

nextBtn.addEventListener("click", () => {
  index++;
  if (index > people.length - 1) {
    index = 0;
  }
  showPerson(index)
});

randomBtn.addEventListener('click', () => {
  index = Math.floor(Math.random() * people.length);
  showPerson(index)
})