const Video = [
  {
    id: 1,
    name: "man can't be moved",
    Vclip:"./video/video-2"
  },
  {
    id: 2,
    name: "rain",
    Vclip:"./video/video-3"
  },
  {
    id: 3,
    name: "counting stars",
    Vclip:"./video/video-4"
  },
  {
    id: 4,
    name: "swimming",
    Vclip:"./video/video.5"
  },
  {
    id: 5,
    name: "demons",
    Vclip:"./video/video.1"
  },
  {
    id: 6,
    name: "for the first",
    Vclip:"./video/video.mp4"
  },
  {
    id: 7,
    name: "i wasn't expecting that",
    Vclip:"./video/video.7"
  },
]


const preloader = document.querySelector('.preloader');
const video = document.querySelector('.video-container');
const title = document.querySelector('.title');

const btn = document.querySelector('.switch-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let count = 0;

btn.addEventListener('click', () => {
  if (!btn.classList.contains('slide')) {
    btn.classList.add('slide')
    video.pause()
  } else {
    btn.classList.remove('slide')
    video.play()
  }
})


window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader')
});

  window.addEventListener('DOMContentLoaded', () => {
  const venom = Video[count];
  video.src = venom.Vclip;
  title.textContent = venom.name;
});

const showVideo = (clip) => {
  const venom = Video[clip];
  video.src = venom.Vclip;
  title.textContent = venom.name;
}

prevBtn.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = Video.length - 1
  }
  showVideo(count)
});

nextBtn.addEventListener('click', () => {
  count++;
  if (count > Video.length - 1) {
    count = 0
  }
  showVideo(count)
});