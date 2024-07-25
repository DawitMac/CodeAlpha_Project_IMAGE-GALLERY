import { gallery } from './images/data.js'

const constainer = document.getElementById("container")

gallery.map((item)=>{
    const image = new Image()
    image.src = item.image;
    constainer.appendChild(image)
})

const buttons = document.querySelectorAll(".btn")
buttons.forEach((button)=>{
    button.addEventListener("click" , ()=>{
        const selectedItems = gallery.filter((item) => item.name === button.innerText)
        constainer.innerHTML = ""
        selectedItems.map((item)=>{
        const image = new Image()
        image.src = item.image;
        image.loading = 'lazy'
        constainer.appendChild(image)
        constainer.classList.toggle("active")
    })
       
    })
})
constainer.addEventListener("click" , ()=>{
    const imageUrl = event.target.src
    const modifiedUrl = imageUrl.replace(/^http:\/\/127\.0\.0\.1:5500/, '');
    console.log(modifiedUrl)
    showPopup(modifiedUrl)
})

const popupContainer = document.querySelector(".popup-container")
popupContainer.addEventListener("click", function(){
    if(event.target == event.currentTarget){
        popupContainer.style.display = 'none';
    }
})

function showPopup(imageSrc) {
    const popupImage = document.querySelector('.popup-image');
    popupImage.src = imageSrc;
    const popupContainer = document.querySelector('.popup-container');
    popupContainer.style.display = 'block';
  }

  const menuIcon = document.querySelector(".menu-icon")
  const dropdownMenu = document.querySelector(".dropdown-menu")
  menuIcon.addEventListener("click", function(e){
    e.preventDefault();
     dropdownMenu.classList.toggle("active");
  })
  dropdownMenu.addEventListener("click" , function(e){
    dropdownMenu.classList.toggle("active");
  } )
//   linkIcon.addEventListener("click", function(){
//     alert("clicked")
//     dropdownMenu.classList.toggle("active");
//  })

