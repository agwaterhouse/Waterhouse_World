
gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", function(event){
gsap.set("svg", { visibility: "visible" });


gsap.from("canvas", {opacity: 0, y: 500, x:500, duration: 1,});

gsap.from(".heading-font", {opacity: 0, y: 100, delay: 1.6, duration: 1,});

gsap.from(".main-intro", {opacity:0, x:-50, delay: 2, duration:1,})

gsap.from("header", {opacity:0, duration: 1, delay: 3});




const containers = gsap.utils.toArray(".container");
containers.forEach((container) => {
  gsap.to(container, {
    autoAlpha: 1,
    ease: "power1.in",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: true
    }
  });
});









});



function pageOne() {
 console.log("Hello")
 gsap.from(".main-intro", {opacity:0, x:-50, delay: 0, duration:1,})
 gsap.to(".changeText", {opacity:0, x:-50, delay: 0, duration:1,})
 gsap.to("canvas", {opacity:0, x:-50, delay: 0, duration:1,})  
 gsap.to(".about-image", {opacity:1, duration: 1.5, delay: 0});
 document.getElementById("changeTextPar1").innerHTML = "The code and concepts" +"<a href='https://www.google.com'> Google </a>" + "should be understandable even if you’ve never used GSAP most out of this article,.";
 document.getElementsByClassName("changeTextPar2").innerHTML = "Doneca fermentum suscipit massa a feugiat.";
 document.getElementsByClassName("changeTextPar3").innerHTML = "Phasellus ut elit eleifeibero bibendum dictum in et neque. Proin malesuada ultricies mi, id interdum risus pretium id. ";
document.getElementsByClassName("readMore").innerHTML = "Whoop";
var elem = document.getElementById("readMore");
elem.classList.add("em2");

}

          


function pageTwo() {
 console.log("Hello")
 gsap.from(".main-intro", {opacity:0, x:-50, delay: 0, duration:1,})
 gsap.to(".changeText", {opacity:0, x:-50, delay: 0, duration:1,})
 gsap.to("canvas", {opacity:0, x:-50, delay: 0, duration:1,})  
 gsap.to(".about-image", {opacity:1, duration: 1.5, delay: 0});
 document.getElementById("changeTextPar1").innerHTML = "The code and concepts" +"<a href='https://www.google.com'> Google </a>" + "should be understandable even if you’ve never used GSAP most out of this article,.";
 document.getElementById("changeTextPar2").innerHTML = "Doneca fermentum suscipit massa a feugiat.";
 document.getElementById("changeTextPar3").innerHTML = "Phasellus ut elit eleifeibero bibendum dictum in et neque. Proin malesuada ultricies mi, id interdum risus pretium id. ";
}



const box = document.getElementsByTagName("canvas")[0];



// ✅ Remove all Styles from Element

box.style.opaicty = null;

