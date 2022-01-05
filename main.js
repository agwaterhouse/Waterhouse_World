
gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", function(event){
gsap.set("svg", { visibility: "visible" });


gsap.from("canvas", {opacity: 0, y: 500, x:500, duration: 1,});

gsap.from(".heading-font", {opacity: 0, y: 100, delay: 1.6, duration: 1,});

gsap.from(".main-intro", {opacity:0, x:-50, delay: 2, duration:1,})


gsap.from("header", {opacity:0, duration: 1, delay: 3});





gsap.from(".cost-fade", {opacity:0, x:50, duration:1, scrollTigger:".cost-fade"})

gsap.from(".us-fade", {opacity:0, x:-50, duration:1, scrollTrigger:".us-fade"})




});