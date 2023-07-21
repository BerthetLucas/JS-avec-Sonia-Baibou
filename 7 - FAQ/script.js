console.log("connecté!")

const questions = document.querySelectorAll(".question");
console.log(questions);

const tableau = ["Texte 1", "Texte 2", "Texte 3"]; 

questions.forEach((item)=>{
    console.log(item, "item");

    item.addEventListener("click", function(){
        console.log("item cliquée");
        const next = item.nextElementSibling;
        console.log(next);
        next.classList.toggle("visible");
        const icone = item.lastElementChild;
        console.log(icone);
        // voir avec Théo où ça merde
        icone.classList.toggle('fa-chevron-up');
    });
});


