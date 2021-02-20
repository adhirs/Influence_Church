// NAVBAR
const toggle = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggle.addEventListener("click",function(){
  navbarLinks.classList.toggle("active");
  return false;
});


// INTERSECTION OBSERVER

// const header = document.querySelector(".navbar");
// const sectionOne = document.querySelector(".church-image");
//
// const sectionOneOptions = {
//   rootMargin: "-15% 0%"
// };
//
// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("navbar-intersecting");
//     } else {
//       header.classList.remove("navbar-intersecting");
//     }
//   });
// },
// sectionOneOptions);
//
// sectionOneObserver.observe(sectionOne);

// EMAILJS FORM

$(document).ready(function() {
  var len = 0;
  var maxchar = 200;

$( "#remainingC" ).html( "Remaining characters: 200");



  $( "#msg" ).keyup(function(){
    len = this.value.length


    if(len > maxchar){
        return false;
    }
    else if (len >= 0) {
        $( "#remainingC" ).html( "Remaining characters: " +( maxchar - len ) );
    }
    else {
        $( "#remainingC" ).html( "Remaining characters: " +( maxchar ) );
    }
  })
});




const errorElement = document.getElementById('error');

function sendMail(params){
  var templateParams = {
    from_name:document.getElementById("fromName").value,
    to_name:document.getElementById("toName").value,
message:document.getElementById("msg").value
  };



  emailjs.send('service_lmz8mb8', 'template_r3cpqa5', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);

      });


      document.getElementById('fromName').value=null;
      document.getElementById('toName').value=null;
      document.getElementById('msg').value=null;
      $( "#remainingC" ).html( "Remaining characters: 200");
      return false;


}

// const button = document.querySelector(".bttn");
// const modalBg = document.querySelector(".modal-bg");
// const modalClose = document.querySelector(".modal-close");
//
// button.addEventListener("click",function(){
//   modalBg.classList.add("bg-active");
//   disableScroll();
// });
//
// modalClose.addEventListener("click",function(){
//   modalBg.classList.remove("bg-active");
//   enableScroll();
// });

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

// let slidePosition = 0;
// const slides = document.getElementsByClassName("carousel__item");
// const totalSlides = slides.length;
//
//
// document.getElementById("carousel__button--next").addEventListener("click",function(){
// moveToNextSlide();
// });
//
// document.getElementById("carousel__button--prev").addEventListener("click",function(){
// moveToPrevSlide();
// });
//
// function updateSlidePosition(){
//   for (let slide of slides){
//     slide.classList.remove("carousel__item--visible");
//     slide.classList.add("carousel__item--hidden");
//   }
//   slides[slidePosition].classList.add("carousel__item--visible");
//
// }
//
//
//
//
//
// function moveToNextSlide(){
//   if (slidePosition === totalSlides -1){
//     slidePosition =0;
//   }
//   else{
//     slidePosition++;
//   }
//   updateSlidePosition();
// }
//
// function moveToPrevSlide(){
// if(slidePosition === 0){
//   slidePosition = totalSlides -1;
//   console.log("WE are moving");
// }
// else{
//   slidePosition--;
// }
// updateSlidePosition();
// }
