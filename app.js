// $(document).ready(function() {
//
// console.log("document is ready");
//
//
//   $( ".card" ).hover(
//   function() {
//     $(this).addClass('shadow-custom');
//   }, function() {
//     $(this).removeClass('shadow-custom');
//
//   }
// );
//
//
// });


const toggle = document.getElementByClassName("toggle-button")[0];
const navbarLinks = document.getElementByClassName("nav-links")[0];

toggle.addEventListener("click",function(){
  navbarLinks.classList.toggle("active");
});
