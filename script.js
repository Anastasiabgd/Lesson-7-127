"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

let acc = document.querySelectorAll(".acc");

// acc.forEach(function(item){
//     item.addEventListener("click", function(){
//         this.classList.toggle('active');
//     });
// });

for(let item of acc){
    item.addEventListener('click', function(){
        this.classList.toggle('active')
    })
}