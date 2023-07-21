console.log("connecté!")

const form = document.getElementById("formulaire"); 
const prenom = document.getElementById("prenom"); 
const nom = document.getElementById("nom"); 
const email =  document.getElementById("email"); 
const message = document.getElementById("message"); 
const msgErreur = document.querySelectorAll(".erreur")
const titre = document.getElementById("titre"); 

form.addEventListener("submit", function (e){
    e.preventDefault();
    console.log("submit request");
    const prenomValue = prenom.value.trim();
    console.log(prenomValue.length, "prenom");
    const nomValue = nom.value.trim();
    console.log(nomValue.length, "nom");
    const emailValue = email.value.trim();
    console.log(emailValue, "email");
    const messageValue = message.value.trim();
    console.log(message.length, "message"); 

    msgErreur.forEach(erreur => {
        erreur.classList.add("invisible");
    });

    if(prenomValue.length < 2 || prenomValue.length > 10){
        console.log("error prenom");
        prenom.nextElementSibling.classList.remove("invisible");
    }else if (nomValue.length < 3 || nomValue.length > 15){
        console.log("error nom");
        nom.nextElementSibling.classList.remove("invisible");
    }else if(messageValue.length < 10 || messageValue.length > 100 ){
        console.log("error message");
        message.nextElementSibling.classList.remove("invisible");
    }else{
        console.log("sucess");
        titre.innerText = "Message envoyé !"; 
        form.remove();
    }
});

