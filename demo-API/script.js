console.log("connecté!")

// requête
//fetch("https://jsonplaceholder.typicode.com/todos/1")
//résultat arrive, puis conversion du fichier JSON en js. 
//.then(reponse => reponse.json())
// Déclenchement quand la donnée est en js puis action à effectuer
//.then(json => console.log(json))

// pas de point virgule car les lignes se suivent, c'est la technique du "chaining"

try{
async function enAttente(){
   const reponseJSON = await fetch("https://jsonplaceholder.typicode.com/todos/1"); 

const reponseJS = await reponseJSON.json(); 
console.log(reponseJS, "objet js"); 


const item = document.querySelector(".banniere-titre"); 
console.log(item); 

item.innerHTML = `
<h1> ${reponseJS.id} - ${reponseJS.title}</h1>
<p>Terminé: ${reponseJS.completed}</p>
`
; 
}
enAttente(); 
}

catch(error){
    console.log(error, "error"); 
}