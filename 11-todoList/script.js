console.log("connecté!")

const form = document.getElementById("form"); 
console.log("formulaire"); 
const todo = document.getElementById("todo"); 
console.log("todo"); 
const itemList = document.querySelector(".list-items");

form.addEventListener("submit", function(e){
    e.preventDefault(); 
    console.log("bouton cliqué"); 
    const todoValue = todo.value;
    console.log(todoValue); 

    let item = `
                    <div class="item">
                    <p>${todoValue}</p>
                    <button class="btn-delete">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="btn-archive">
                        <i class="fas fa-circle"></i>
                    </button>
                    </div>
                
                `

    itemList.innerHTML+=item;



    const btnDelete = document.querySelectorAll(".btn-delete"); 

    btnDelete.forEach(i=>{
        console.log("bouton delete");
    i.addEventListener("click", function(){
        console.log("bouton delete clické");
    i.parentElement.remove();

    });
    });

    const btnArchive = document.querySelectorAll(".btn-archive"); 
    console.log("bouton archive"); 

    btnArchive.forEach(i=>{
        i.addEventListener("click", function(){
            console.log("bouton archive cliqué"); 
        const parent = i.parentElement; 
        parent.classList.toggle("done")
        })
    });

form.reset();
});
