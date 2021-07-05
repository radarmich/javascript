let button =document.querySelector(".button");
let body= document.querySelector(".body");
let zielony = document.querySelector(".zielony")

button = addEventListener("click", () => {
     body.classList.toggle("green");
     

if(body.classList.contains("green")) {
    zielony.innerText = "jasny";
}    else {
        zielony.innerText = "zielony";
    };
}); 
    
