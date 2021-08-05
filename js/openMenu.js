const hamBtn = document.querySelector('.hamBtn');
const menuBox = document.querySelector('#menuBox');
const mobileHamBtn = document.querySelector('.mobileHamBtn');
const mobileMenu = document.querySelector('#mobileBox');

hamBtn.addEventListener('click', ()=> {
  menuBox.classList.toggle('show');
})

mobileHamBtn.addEventListener('click', ()=>{
  mobileMenu.classList.toggle('show');
})