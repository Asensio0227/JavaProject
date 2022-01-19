let index = 0;
const value = document.getElementById('value');
const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList; 
    if (styles.contains('decrease')) {
      index--;
    }else if (styles.contains('increase')) {
      index++;
    } else {
      index = 0;
    }
    if (index < 0) {
      value.style.color = 'red';
    }
    if (index > 0) {
      value.style.color = 'green';
    }
    if (index === 0) {
      value.style.color = '#222';
    }
    value.textContent = index;
  })
})


