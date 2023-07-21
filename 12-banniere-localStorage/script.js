console.log("connecté!")

const btnSuccess = document.querySelector(".btn-success");
console.log(btnSuccess);

const cookies = document.querySelector(".cookies");
console.log(cookies);

let valeurCle = localStorage.getItem("banniere"); 
console.log(valeurCle, "valeurCle"); 

function check(){
    console.log("déclenchée"); 
}

check();

if (valeurCle){
    console.log("stockage existe")
    cookies.remove(); 
}else{
    console.log("pas de stockage"); 
}; 


btnSuccess.addEventListener("click", function(){
    localStorage.setItem("banniere", "oui");
    console.log("bouton cliqué!");
    cookies.style.opacity = "0";
   
});

