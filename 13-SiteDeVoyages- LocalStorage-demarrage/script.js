console.log('connecté'); 

const form =document.getElementById("form"); 

const pays = document.getElementById("pays"); 
const start = document.getElementById("start"); 
const end = document.getElementById("end"); 

const listeResultat = document.querySelector(".liste-resultats"); 

const voyage = [
    {
        pays : "borabora", 
        prix : 1790, 
        voyageurs : 4 
    }, 

    {
        pays : "bahamas", 
        prix : 1790,
        voyageurs : 4

    }, 

    {
        pays : "bahamas", 
        prix : 1490, 
        voyageurs : 2
    }, 

    {
        pays : "tahiti", 
        prix : 1790, 
        voyageurs : 4

    }
]


form.addEventListener("submit", function (e){
e.preventDefault(); 
console.log("validation cliquée"); 

const choix = {
    pays : pays.value,
    start : start.value,
    end : end.value
};


console.log(choix, "choix"); 

// fonction stringify pour pour incrémenter le JSON dans le local storage 

const choixString = JSON.stringify(choix); 
console.log(choixString); 

localStorage.setItem("details", choixString); 

// rechargement de la page 
window.location.href = window.location.href;  

}); 

function displayDetails (){
    console.log("fonction déclenchée")
    // fonction parse pour aller chercher et afficher dans la consol la valeur de la la clé détail dans le localstorage. 
    const choixObjet = JSON.parse(localStorage.getItem("details")); 
    console.log(choixObjet, "choixObjet"); 

    pays.value = choixObjet.pays; 
    start.value = choixObjet.start; 
    end.value = choixObjet.end; 

    const resultats = voyage.filter((voyage)=>
                                    voyage.pays === pays.value);

    resultats.forEach(resultat=> {
        console.log(resultat, "résultat"); 

    const item = `
                     <div class="item">

                    <p class="item-pays">${resultat.pays}</p>

                    <p> Offre pour ${resultat.voyageurs}</p>

                    <p> prix vol inclus ${resultat.prix}</p>

                    <button>GO ! </button>

                    </div>

                `
    listeResultat.innerHTML += item; 
   
    }); 

}; 

displayDetails(); 



