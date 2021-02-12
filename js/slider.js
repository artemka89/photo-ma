const photo = document.querySelectorAll('.tab .photo img');
const tab = document.querySelectorAll('.tab');
const sliderModal = document.querySelector('.slider-modal')


photo.forEach((item, i) => {
   item.addEventListener('click', () => {
      sliderModal.style.visibility = 'visible';
      sliderModal.style.opacity = '1';
      document.body.style.overflow = "hidden"; 

   })
})

sliderModal.addEventListener('click', (e) => {
   if (e.target == sliderModal) {
      sliderModal.style.opacity = '0';
      sliderModal.style.visibility = 'hidden';
      document.body.style.overflow = "";

   }
})


let position = 0;
let width = 600;

const conteiner = document.querySelector('.slider__conteiner');
const track = document.querySelector('.slider__track');
const image = document.querySelectorAll('.slider__item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

function init() {
   console.log('resize');
   width = conteiner.clientWidth;
   track.style.width = width * image.length + 'px';
   image.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
      rollSlider();
   })
}

window.addEventListener('resize', init);
init();

btnNext.addEventListener('click', () => {
   position++;
   if (position >= image.length) {
      position = 0;
   }
   rollSlider();
})

btnPrev.addEventListener('click', () => {
   position--;
   if (position < 0) {
      position = image.length - 1;
   }
   rollSlider();
})

function rollSlider() {
   track.style.transform = 'translate(-' + position * width + 'px)';
}







