let zone1 = document.querySelector('#zone1');
let zone2 = document.querySelector('#zone2');


let images = [
    {chemin:"img/allmight.jpg",categorie:"Ombre", nom: "Animal 1", prix:200},
    {chemin:"img/gojo.jpg",categorie:"Ombre", nom: "Animal 2", prix:200},
    {chemin:"img/livai.jpg",categorie:"Ombre", nom: "Livai", prix:200},
    {chemin:"img/mha.jpg",categorie:"Ombre", nom: "Animal 4", prix:200},

    {chemin:"img/naruto/naruto1.jpg",categorie:"naruto", nom: "Pain", prix:300},
    {chemin:"img/naruto/naruto2.jpg",categorie:"naruto", nom: "Tobi", prix:300},
    {chemin:"img/naruto/naruto3.jpg",categorie:"naruto", nom: "Deidara", prix:300},
    {chemin:"img/naruto/naruto4.jpg",categorie:"naruto", nom: "Minato", prix:300},
    {chemin:"img/naruto/naruto5.jpg",categorie:"naruto", nom: "Kakashi", prix:300},
    {chemin:"img/naruto/naruto6.jpg",categorie:"naruto", nom: "Pain", prix:300},
    {chemin:"img/naruto/itachi2.jpg",categorie:"naruto", nom: "Pain", prix:300},
    {chemin:"img/naruto/naruto7.jpg",categorie:"naruto", nom: "Pain", prix:300},
    {chemin:"img/naruto/naruto8.jpg",categorie:"naruto", nom: "Pain", prix:300},

    {chemin:"img/HunterXHunter/hxh1.jpg",categorie:"paysages", nom: "paysage 1", prix:100},
    {chemin:"img/HunterXHunter/hxh2.jpg",categorie:"paysages", nom: "paysage 2", prix:100},
    {chemin:"img/HunterXHunter/hxh3.jpg",categorie:"paysages", nom: "paysage 3", prix:100},
    {chemin:"img/HunterXHunter/hxh4.jpg",categorie:"paysages", nom: "paysage 4", prix:100},
    {chemin:"img/HunterXHunter/hxh5.jpg",categorie:"paysages", nom: "paysage 4", prix:100},
    {chemin:"img/HunterXHunter/hxh6.jpg",categorie:"paysages", nom: "paysage 4", prix:100},
];

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
    h3.innerHTML = images[i].nom;
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