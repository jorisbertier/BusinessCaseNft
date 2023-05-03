let zone1 = document.querySelector('#zone1');
let zone2 = document.querySelector('#zone2');


let images = [
    {chemin:"img/classique/classique1.jpg",categorie:"Classique", nom: "Livai", prix:20, date: "2022-01-01"},
    {chemin:"img/classique/classique2.jpg",categorie:"Classique", nom: "Onizuka", prix:200, date: "2021-06-15"},
    {chemin:"img/classique/classique3.jpg",categorie:"Classique", nom: "Livai", prix:200, date: "2021-12-31"},
    {chemin:"img/classique/classique4.jpg",categorie:"Classique", nom: "Chainsman", prix:200, date: "2021-12-31"},

    {chemin:"img/naruto/naruto1.jpg",categorie:"Naruto", nom: "Pain", prix:300},
    {chemin:"img/naruto/naruto2.jpg",categorie:"Naruto", nom: "Tobi", prix:300},
    {chemin:"img/naruto/naruto3.jpg",categorie:"Naruto", nom: "Deidara", prix:30},
    {chemin:"img/naruto/naruto4.jpg",categorie:"Naruto", nom: "Minato", prix:30},
    {chemin:"img/naruto/naruto5.jpg",categorie:"Naruto", nom: "Kakashi", prix:50},
    {chemin:"img/naruto/naruto6.jpg",categorie:"Naruto", nom: "Pain", prix:300},
    {chemin:"img/naruto/itachi2.jpg",categorie:"Naruto", nom: "Itachi", prix:60},
    {chemin:"img/naruto/naruto7.jpg",categorie:"Naruto", nom: "Madara", prix:300},
    {chemin:"img/naruto/naruto8.jpg",categorie:"Naruto", nom: "Akatsuki", prix:80},

    {chemin:"img/HunterXHunter/hxh1.jpg",categorie:"HXH", nom: "Duel", prix:10},
    {chemin:"img/HunterXHunter/hxh2.jpg",categorie:"HXH", nom: "Hisoka", prix:100},
    {chemin:"img/HunterXHunter/hxh3.jpg",categorie:"HXH", nom: "Neferpitou", prix:100},
    {chemin:"img/HunterXHunter/hxh4.jpg",categorie:"HXH", nom: "Chrollo", prix:80},
    {chemin:"img/HunterXHunter/hxh5.jpg",categorie:"HXH", nom: "Meruem", prix:100},
    {chemin:"img/HunterXHunter/hxh6.jpg",categorie:"HXH", nom: "Gon", prix:80},

    {chemin:"img/Zelda/link1.jpg",categorie:"Link", nom: "Baby Link", prix:10},
    {chemin:"img/Zelda/link2.jpg",categorie:"Link", nom: "Link", prix:10},
    {chemin:"img/Zelda/link3.jpg",categorie:"Link", nom: "Ganondorf", prix:10},
    {chemin:"img/Zelda/link4.jpg",categorie:"Link", nom: "ZBOW", prix:50},
];

// images.sort(function(a, b) {
//     console.log(a.prix - b.prix);
//     return a.prix - b.prix;
//   });

let i = 0;

function genererImage(chemin,categorie){
    //CREATE ELEMENT
    let card = document.createElement('div');
        let cardInside = document.createElement('div');
            let newImg = document.createElement("img");
        let ajoutPanier = document.createElement('div');
            let lien = document.createElement("a");
                let button = document.createElement('button');
        let details = document.createElement('div');
            let h3 = document.createElement('h3');
            let infoCardGalerie = document.createElement('div');
                let div1 = document.createElement('div');
                let div2 = document.createElement('div');
    
    //Ajout d'attribut
    newImg.setAttribute("src",chemin);             
    newImg.setAttribute("alt","image ");


    //Test

    //Ajout de class
    card.className="spaceElement "+categorie+ " box";
        cardInside.className ="imgGalerie";
        ajoutPanier.className = "ajoutPanier";
            button.className = "btn";
        details.className = "details";
            infoCardGalerie.className = "infoCardGalerie";

    let imageClass = "groupeImage " + categorie + " image-" + i;
    newImg.className = imageClass;

    // insertion dans les balises description
   
    button.innerText = "Ajouter au panier";
    h3.innerHTML = images[i].nom + ` <i class="bi bi-patch-check-fill"></i>`;
        div1.innerHTML = `<h6>Floor</h6><p>0.51 ETH</p>`;
        div2.innerHTML = `<h6>Floor</h6><p>0.51 ETH</p>`;

    //Insertion dans le code HTML // indentation comme HTML
    zone2.appendChild(card);
    card.appendChild(cardInside);
        cardInside.appendChild(newImg);
        ajoutPanier.appendChild(lien);
            lien.appendChild(button);
    card.appendChild(ajoutPanier);
    card.appendChild(details);
        details.appendChild(h3);
        details.appendChild(infoCardGalerie);
            infoCardGalerie.appendChild(div1);
            infoCardGalerie.appendChild(div2);

    i++;
}

images.forEach(function(image,i){
    genererImage(image.chemin,image.categorie,image.nom,image.prix);
});


function majFiltre(select){

    let typeChoisi = select.value;

    // d'abord, on cache tous les éléments
    let tousLesElements = document.querySelectorAll(".spaceElement");
    cacherElements(tousLesElements);

    // ensuite, on affiche les éléments qui ont la classe correspondant au typeChoisi
    let elementsChoisis = document.querySelectorAll("."+typeChoisi);
    afficherElements(elementsChoisis);

}

function cacherElements(elements){
    elements.forEach(function(element,i){
        element.style.display="none";
    });
}

function afficherElements(elements){
    elements.forEach(function(element,i){
        element.style.display="block";
    });
}



//test

function filtreOrdre(select) {
    const value = select.value;
    if (value === "Croissant") {
      images.sort(function(a, b) {
        return a.prix - b.prix;
      });
    } else if (value === "Decroissant") {
      images.sort(function(a, b) {
        return b.prix - a.prix;
      });
    } else if (value === "Nouveautés") {
        images.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        });
    }
    const container = document.querySelector(".spaceImages"); // Sélectionne l'élément HTML dans lequel les images sont affichées
    container.innerHTML = ""; // Supprime les images existantes
    images.forEach(function(image) { // Ajoute de nouvelles images triées en fonction du tri choisi
        genererImage(image.chemin, image.categorie, image.nom, image.prix);
    });
}

console.log(filtreOrdre("Croissant"));
