// NAVBAR
const toggle = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggle.addEventListener("click",function(){
  navbarLinks.classList.toggle("active");
});



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

// document.getElementById('fromName').value=null;
// document.getElementById('toName').value=null;
// document.getElementById('msg').value=null;
// $( "#remainingC" ).html( "Remaining characters: 200");
}

// const name = document.getElementById("name");
// const form = document.getElementById("form");

// onclick="sendMail()"
//
//  const toname = document.getElementById("toName").value;
// const errorElement = document.getElementById('error');
// const form = document.getElementById('form');
// form.addEventListener("submit",(e) => {
//   if (to_name ===''|| to_name === null){
//     e.preventDefault();
//     console.log("This was a failure");
//   }
//
//   else{
//     console.log("Success!");
//   }
// });


// form.addEventListener("submit", (e) =>{
// let messages=[];
// if(toname === ''){
// messages.push('Name is required for this field');
// }
//   if(messages.length >0){
//     e.preventDefault();
//     errorElement.innerText = messages.join(',');
//   }
// });

// const name = document.getElementById('name');
// const password = document.getElementById('password');
// const form = document.getElementById('form');
// const errorElement = document.getElementById('error');
//


// function myFormHandler(){
//   form.addEventListener('submit', (e) => {
//     let messages = [];
//
//     if (name.value === '' || name.value == null) {
//       messages.push('Name is required');
//     }
//
//     if (password.value.length <= 6) {
//       messages.push('Password must be longer than 6 characters');
//     }
//
//     if (password.value.length >= 20) {
//       messages.push('Password must be less than 20 characters');
//     }
//
//     if (password.value === 'password') {
//       messages.push('Password cannot be password');
//     }
//
//     if (messages.length > 0) {
//       e.preventDefault();
//       errorElement.innerText = messages.join(', ');
//     }
//   });
// }
