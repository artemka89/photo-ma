const modal = document.querySelector('.modal');
const btn = document.querySelector('.modal-btn')
const close = document.querySelector('.modal__close')
const modalContent = document.querySelector('.modal__content')
const body = document.body;

btn.addEventListener('click', function () {
   modal.style.display = "block";

   setTimeout(function () {
      modalContent.style.transform = 'none';
      modalContent.style.opacity = '1';
   }, 1);
   body.style.overflow = "hidden";
});


close.addEventListener('click', function () {
   closeModal()
});

window.addEventListener('click', function () {
   if (event.target == modal) {
      closeModal()
   }
});

function closeModal() {
   modalContent.removeAttribute('style');

   setTimeout(function () {
      modal.style.display = "none";
      body.style.overflow = "visible";
   }, 250);

};

const textArea = document.querySelectorAll('[data-avtoresise]');


textArea.forEach(item => {
   let textAreaH = item.offsetHeight;

   item.addEventListener('input', event => {
      let $this = event.target;

      $this.style.height = '23px';
      $this.style.height = $this.scrollHeight + 'px';
   })
})









