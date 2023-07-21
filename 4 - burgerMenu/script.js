console.log("connecté!")

const icone = document.querySelector(".navbar-mobile i");
console.log("icone"); 

const modal = document.querySelector(".modal"); 
console.log("modal");

icone.addEventListener("click", function(){
    console.log("icone cliquée!");
modal.classList.toggle("change-modal");
icone.classList.toggle("fa-times");
});