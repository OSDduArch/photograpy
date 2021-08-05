
window.addEventListener('DOMContentLoaded', () => {
  const $head = document.querySelector('#header');
  window.addEventListener('scroll',() => {
    // console.log(window.pageYOffset);
    if(window.pageYOffset>= 80){
      $head.classList.add('sticky');
    } else {
      $head.classList.remove('sticky');
    }
  })
})