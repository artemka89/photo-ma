const vk = document.querySelector('.vk')
const inst = document.querySelector('.inst')
  

vk.addEventListener('mouseover', () => {
   vk.src = "Image/vkOn.png";

})

vk.addEventListener('mouseout', () => {
   vk.src = "Image/vkOff.png";

})

inst.addEventListener('mouseover', () => {
   inst.src = "Image/instOn.png";

})

inst.addEventListener('mouseout', () => {
   inst.src = "Image/instOff.png";
})


