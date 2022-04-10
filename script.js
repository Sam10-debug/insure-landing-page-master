const hamburger=document.querySelector(".hamburger")
const cancel= document.querySelector(".cancel")
const popUp=document.querySelector(".popUp")
const showPopUp=()=>{
    popUp.classList.toggle("active")
    hamburger.classList.toggle("active")
    cancel.classList.toggle("active")
}
const removePopUp=()=>{
    popUp.classList.remove("active")
    hamburger.classList.remove("active")
    cancel.classList.remove("active")
}

hamburger.addEventListener("click",showPopUp)
cancel.addEventListener("click",removePopUp)