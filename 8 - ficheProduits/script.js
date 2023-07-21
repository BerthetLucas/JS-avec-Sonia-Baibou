console.log("connecté!")

const vignettes = document.querySelectorAll(".small"); 
console.log(vignettes); 

const fullImg = document.getElementById("full"); 
console.log(fullImg); 

const btn = document.querySelector(".btn-add"); 

let panier = 0

const panierContainer = document.querySelector(".panier-container")

vignettes.forEach((item)=>{
    console.log("ce message apparait pour chaque item du tableau")
item.addEventListener("click", function(){
console.log("vignette cliquée"); 
let imgSource = item.getAttribute("src");
console.log(imgSource); 
fullImg.setAttribute("src", imgSource);
});
});



btn.addEventListener("click", function(){
    console.log("bouton cliqué"); 
    panier = panier + 1; 
    console.log(panier);

if (panier < 2){
    panierContainer.innerText = "Vous avez" + " " + panier + " " + " article dans votre panier";
}else{
    panierContainer.innerText = "Vous avez" + " " + panier + " " + " articles dans votre panier";
}


});

