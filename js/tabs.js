const content = document.querySelectorAll('.tab');
const tabsBtn = document.querySelectorAll('.gallery__link')


function hideTabContent() {
   content.forEach((item) => {
      item.style.opacity = "0";
      item.style.visibility = 'hidden';

   })
   tabsBtn.forEach((item => {
      item.classList.remove('after-link');
   }))
}

function showTabContent(i = 0) {
   content[i].style.visibility = 'visible';
   content[i].style.opacity = "1";

   tabsBtn[i].classList.add('after-link');


}

hideTabContent();
showTabContent();


tabsBtn.forEach((item, i) => {

   item.addEventListener('click', (e) => {
      hideTabContent();
      showTabContent(i);
   })
})



