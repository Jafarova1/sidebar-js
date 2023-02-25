"use strict"

 let sidebar = document.querySelector(".sidebar")

 let closeIcon = document.querySelector(".sidebar .close")

 let openIcon = document.querySelector(".sidebar .open")

 let rightbar = document.querySelector(".rightbar")

 let closeIconRight = document.querySelector(".rightbar .close")

 let openIconRight = document.querySelector(".rightbar .open")

 let downbar=document.querySelector(".downbar")

 let closeDown=document.querySelector(".downbar .close")

 let openDown=document.querySelector(".downbar .open")




 openIcon.addEventListener("click", function () {

     sidebar.classList.remove("hide")
     this.classList.add("d-none")
     closeIcon.classList.remove("d-none")

 })

 closeIcon.addEventListener("click", function () {

     sidebar.classList.add("hide")
     this.classList.add("d-none")
     openIcon.classList.remove("d-none")

 })

 openIconRight.addEventListener("click", function () {

    rightbar.classList.remove("hideright")
     this.classList.add("d-none")
     closeIconRight.classList.remove("d-none")

})

 closeIconRight.addEventListener("click", function () {

     rightbar.classList.add("hideright")
     this.classList.add("d-none")
     openIconRight.classList.remove("d-none")

 })

 openDown.addEventListener("click", function () {

     downbar.classList.remove("hiderdown")
     this.classList.add("d-none")
     closeDown.classList.remove("d-none")

 })

 closeDown.addEventListener("click", function () {

     downbar.classList.add("hiderdown")
     this.classList.add("d-none")
     openDown.classList.remove("d-none")

 })




// let button=document.querySelector("button")

// console.log(button.parentNode.parentNode)

// console.log(button.previousElementSibling.innerHTML)

// console.log(button.nextElementSibling.innerHTML)

// let elems=button.parentNode.children;

// for (const item of elems) {
//     if(item.innerText=="Salam"){
//         item.style.color="red"
//     }
    
// }

// console.log(button.closest(".heads"))



// let elemInput=document.querySelector("input")

// function inputEvent(e){
//   if(e.target.value=="c"){
//     console.log("input")
//   }
//   console.log("input event")
// }

// elemInput.addEventListener("change",inputEvent());
// elemInput.addEventListener("focus",inputEvent());
// elemInput.addEventListener("blur",inputEvent());
// elemInput.addEventListener("keyup",inputEvent());
// elemInput.addEventListener("keydown",inputEvent());

// document.getElementById("test").addEventListener("change",function(e){

// console.log("selected")
// console.log(e.value)
// if(e.target.value==1){
//     elemInput.value="html"

// }

// })





// elemInput.addEventListener("keyup",function(e){
//     if(e.keycode==13){
//         document.querySelector("button").click();
//     }
   
 
// })

// document.querySelector("button").addEventListener("click",function(){
//   alert(e.target.previousElementSibling.value)


// })





