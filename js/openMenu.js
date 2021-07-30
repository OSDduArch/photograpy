const hamBtn = document.querySelector('.hamBtn');
const menuBox = document.querySelector('#menuBox');

hamBtn.addEventListener('click', ()=> {
  menuBox.classList.toggle('show');
})