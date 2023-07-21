console.log("connecté!")

const postsContainer = document.querySelector(".posts"); 
console.log(postsContainer); 

const post = [{
    titre : "<a target=_blank href = https://twitter.com/home> SEO les bonnes pratiques </a>", 
    hastag : "#SEO",
    extrait : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptate impedit nobis tempora!",
},

{
    titre : "Bien débuter en référencement payant", 
    hastag : "#référencement", 
    extrait : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptate impedit nobis tempora!"
},

{
    titre : "Content Marketing, les bons arguments", 
    hastag : "#contentmarketing",
    extrait : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptate impedit nobis tempora!"
}]; 

console.log(post); 

post.forEach(item=>{
console.log(item); 

// A retenir, ci-dessous création d'une DIV avec un String template (plus pratique que du Json ici)
// Question, comment faire si on veut ajouter un lien qui mène à l'article ? 

const article = `

                    <div class="post">
                        <div class="post-titre"> ${item.titre}</div>
                        <div class="post-hastag"> ${item.hastag}</div>
                        <div class="post-extrait"> ${item.extrait}</div>
                    </div>

                `
console.log(article); 

// ajout du + pour faire une concaténation et ne pas reste le contenu
postsContainer.innerHTML += article;
});