const navMenu=document.querySelector(".navigation"),navButton=document.querySelector("#navigation-button");let isMenuActive=!1;const navButtonLinks=document.querySelectorAll(".navigation li a");navButtonLinks.forEach((e=>{e.addEventListener("click",(()=>{navButton.innerHTML='<i class="bi bi-list"></i>',isMenuActive=!1,navMenu.classList.remove("show"),navMenu.classList.remove("animate__animated"),navMenu.classList.remove("animate__bounceInLeft")}))})),navButton.addEventListener("click",(()=>{if(isMenuActive){const e='<i class="bi bi-list"></i>';navButton.innerHTML=e,isMenuActive=!1}else{const e='<i class="bi bi-x-lg"></i>';navButton.innerHTML=e,isMenuActive=!0}navMenu.classList.toggle("show"),navMenu.classList.toggle("animate__animated"),navMenu.classList.toggle("animate__bounceInLeft")}));const splide=new Splide(".splide",{type:"loop",direction:"ltr",width:"72%",height:"40rem",autoplay:!0,perPage:1,breakpoints:{1100:{height:"42rem",width:"90%"},720:{height:"46rem",width:"100%"},400:{height:"50rem"}}});splide.mount(),ScrollReveal().reveal(".about",{delay:300}),ScrollReveal().reveal(".testimonials",{delay:300}),ScrollReveal().reveal(".contact",{delay:300});
var elList = document.querySelector(".top");
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 500) {
        // green
       elList.classList.add("top-none");
    }
     else ("");
}