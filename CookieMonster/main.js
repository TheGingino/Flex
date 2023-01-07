const cookie = document.getElementById("js--cookie");
let cookieIsDragged = false;
const eyes = document.getElementsByClassName("cookiemonster_innereye")
const width = window.innerWidth;
const height = window.innerHeight;

window.onmousemove = function(event){
    if(cookieIsDragged === false) return;
    cookie.style.top = event.clientY + "px";
    cookie.style.left = event.clientX + "px";

    let left = event.clientX / width * 100;
    let top = event.clientY / height * 100;
    
    if(left < 0) return;
    if(left > 90) return;
    if(top < 5) return;
    if(top > 100) return;
    
    eyes[0].style.top = top + "%";
    eyes[0].style.left = left + "%";

    eyes[1].style.top = top + "%";
    eyes[1].style.left = left + "%"; 
    
}

cookie.onclick = function(event){
    cookieIsDragged = !cookieIsDragged;
}

