console.log("connecté!")
const titre = document.getElementById("titre");
console.log(titre);
titre.style.color = "green";

const redBtn = document.getElementById("red-btn");
//console.log(redBtn, "bouton rouge");

const blueBtn = document.getElementById("blue-btn");
//console.log(redBtn, "bouton bleu");

redBtn.addEventListener("click", function(){
    console.log("cliqué")
});

blueBtn.addEventListener("click", function(){
    console.log("cliqué")
});

let compteur = 0;
console.log(compteur, "compteur au démarrage");

function add() {
    compteur = compteur + 1;
    console.log(compteur, "compteur après incrémentation");
    titre.innerText = compteur;
}

redBtn.addEventListener("click", function(){
    add();
});

blueBtn.addEventListener("click", function(){
    add();
});

setTimeout(function(){
    redBtn.remove();
    blueBtn.remove();
    console.log("Fin du chrono")
    chrono.innerText = "Timeout !";
}, 10000);

