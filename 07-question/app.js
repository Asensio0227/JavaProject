// traversing the Dom
const questions = document.querySelectorAll('.question-btn');

questions.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const btn = e.currentTarget.parentElement.parentElement;
    btn.classList.toggle('show-text');
  })
})


//using selectors inside the element
// const questions = document.querySelectorAll('.question');

// questions.forEach((question) => {
//   const btns = question.querySelector('.question-btn')
//   console.log(btns);

//   btns.addEventListener('click', function () {
//     questions.forEach((item) => {
//       console.log(questions);

//       if (item !== question) {
//         item.classList.remove('show-text')
//       }
//     });
//     question.classList.toggle('show-text');
//   })
// })