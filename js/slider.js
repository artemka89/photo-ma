

const photo = document.querySelectorAll('.tab .photo img');
const tab = document.querySelectorAll('.tab');
const sliderModal = document.querySelector('.slider-modal')

let position = 0;
let width = 600;

const conteiner = document.querySelector('.slider__conteiner')
const track = document.querySelector('.slider__track')
  imageToSlider()
const image = document.querySelectorAll('.slider__track img')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')


photo.forEach(item => {
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
  
      
function init() {
   width = conteiner.clientWidth;
   track.style.width = valuePx(width * image.length);
   image.forEach(item => {
      item.style.width = width + 'px';
      item.style.maxHeight = '800px';
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
   track.style.transform = valueTranslate(position * width);
}

function valuePx(val) {
   return val + 'px'
}

function valueTranslate(val) {
   return `translate(-${valuePx(val)})`
}

function imageToSlider() {
   let imageHtml = '';
   photo.forEach(item => {
      imageHtml += item.outerHTML;
   })
   track.insertAdjacentHTML("beforeend", imageHtml);
   
}
