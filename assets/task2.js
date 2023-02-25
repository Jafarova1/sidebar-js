"use strict"

let input=document.querySelector("input")
let p=document.querySelector("p")


debugger
input.addEventListener("change",function(){
    let inputValue=input.value;
    if(inputValue==""){

        p.classList.remove("d-none")
    
       
    }
    else{
        alert("Login oldunuz")
        
        p.classList.add("d-none")

        
     
        
        
        
    
    }


})