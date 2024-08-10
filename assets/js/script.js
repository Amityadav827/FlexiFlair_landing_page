$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.header_area').addClass('stickyHeader');
    } else {
       $('.header_area').removeClass('stickyHeader');
    }
});



 // JavaScript for magnifier functionality
 document.addEventListener("DOMContentLoaded", function () {
   const bottle = document.getElementById("bottle");
   const magnifier = document.getElementById("magnifier");
   
   bottle.addEventListener("mousemove", function (e) {
     // Show magnifier on mouse move
     magnifier.style.display = "block";
     
     // Calculate mouse position relative to the image
     const bottleRect = bottle.getBoundingClientRect();
     const posX = e.clientX - bottleRect.left;
     const posY = e.clientY - bottleRect.top;
     
     // Calculate magnifier position
     const magnifierSize = magnifier.offsetWidth / 2;
     magnifier.style.left = `${posX - magnifierSize}px`;
     magnifier.style.top = `${posY - magnifierSize}px`;
     
     // Set background position for magnified image
     const bgPosX = -posX * 2 + magnifierSize;
     const bgPosY = -posY * 2 + magnifierSize;
     magnifier.style.backgroundImage = `url(${bottle.src})`;
     magnifier.style.backgroundSize = `${bottle.width * 2}px ${bottle.height * 2}px`;
     magnifier.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
   });
   
   bottle.addEventListener("mouseleave", function () {
     // Hide magnifier when mouse leaves the image
     magnifier.style.display = "none";
   });
 });


// pull image script
 document.getElementById('slider').addEventListener('input', function (event) {
   var value = event.target.value;
   var image = document.querySelector('.image-2');
   console.log(value)
   // image.style.clip = `rect(0, 300px, ${300 - value * 3}px, 0)`;
   image.style.height = `${value}%`;
});



//  Owl Carousel Blog SLider 
$(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    nav: false
  });
});