
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




function page4Animations() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
})

        elemC.addEventListener("mouseleave", function(){
        fixed.style.display = "none";
})

    var elems = document.querySelectorAll(" .elem")
    elems.forEach(function(e){
    e.addEventListener("mouseenter" ,function() {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

}

function swiperAnimations (){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween:100,
    });
    
}


swiperAnimations();
page4Animations();


var  menu = document.querySelector("nav h3");
var full  =  document.querySelector("#full-scr")
var nav =   document.querySelector("nav img")
menu.addEventListener("click",function(){
    full.style.top = 0;
    nav.style.opacity = 0;
})

