const $visualImg = document.querySelectorAll('.visualImg');
const $slideWrap = document.querySelector('.slideWrap');
const $slides = $slideWrap.querySelectorAll('li');
const originalCenter = $slideWrap.querySelector('.center');
const textNumber = document.querySelector('.visualText span');
// const prevBtn = $slideWrap.querySelector('.prev');
let slidePos = -426;

window.addEventListener('DOMContentLoaded', ()=>{
  createId($slides);
  makeClone();
  setCurrentWidth();
  
  const currentSlides = $slideWrap.querySelectorAll('li');
  
  currentSlides.forEach((slide)=>{
    slide.addEventListener('click', (e)=>{
      const stateCenter = $slideWrap.querySelector('.center');
      
      if(e.currentTarget === stateCenter.nextElementSibling) {
        $slideWrap.style.left = `${slidePos- 142}px`
        slidePos = slidePos - 142;
        currentSlides.forEach((all)=>{
          all.classList.remove('center');
        })
        e.currentTarget.classList.add('center');

        setInit(-852, currentSlides);
        setVisual(e.currentTarget.id, $visualImg)
      } else if (e.currentTarget === stateCenter.previousElementSibling) {
        $slideWrap.style.left = `${slidePos + 142}px`;
        slidePos = slidePos + 142;
        currentSlides.forEach((all)=>{
          all.classList.remove('center');
        })
        e.currentTarget.classList.add('center');

        setInit(0, currentSlides);
        setVisual(e.currentTarget.id, $visualImg)
      }
    })
  })
})

function makeClone() {
  for (let i=$slides.length-1; i>-1; i--){
    let clone = $slides[i].cloneNode(true);
    // clone.classList.add('clone');
    clone.classList.remove('center');
    $slideWrap.prepend(clone);
  }

  for (let i=0; i<$slides.length; i++){
    let clone = $slides[i].cloneNode(true);
    // clone.classList.add('clone');
    clone.classList.remove('center'); 
    $slideWrap.appendChild(clone);
  } 
}

function setCurrentWidth() {
  const currentSlides = $slideWrap.querySelectorAll('li');
  // console.log(`${(currentSlides.length+1)*142}`)
  $slideWrap.style.width = `${(currentSlides.length+1)*142}px`;
}

function setInit(position, slide) {
  if (slidePos === position) {
    slidePos = -426
    setTimeout(()=>{
      $slideWrap.classList.remove('animation');
      $slideWrap.style.left = `${slidePos}px`;
    }, 300);
    setTimeout(()=>{
      $slideWrap.classList.add('animation');
    },310);
    slide.forEach((all)=>{
      all.classList.remove('center');
    })
    originalCenter.classList.add('center')
  }
}

 
function createId(list) {
  for (let i=0;i<list.length;i++){
    list[i].id = `${i+1}`;
  }
}

function setVisual(id, imgList) {
  imgList.forEach((all)=>{
    all.style.opacity = '0';
  });
  imgList[id-1].style.opacity = '1';
  textNumber.style.opacity = '0';
  setTimeout(()=>{
    textNumber.textContent = `0${id}`
    textNumber.style.opacity = '1';
  }, 200)
  
}