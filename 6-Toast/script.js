console.log("connecté!")

const button = document.querySelector(".btn"); 
console.log("btn"); 

const notif = document.querySelector(".container-notifications"); 
console.log("notif");

button.addEventListener("click", function(){
    console.log("bouton cliqué");
    

    const notification = document.createElement("div"); 
    notification.classList.add("toast");
    notification.innerText = "Votre document est enregistré";
    notif.appendChild(notification);
    console.log("notification");

    setTimeout (function (){
    notification.remove();
    },2000);

});

