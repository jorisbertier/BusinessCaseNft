let caractereRestant = document.querySelector('.caractereRestant');
let profilTextArea = document.querySelector('#profilTextArea');

console.log(profilTextArea);
caracterRestant.addEventListener('keyup', function() {
    let restant = 250 - profilTextArea.length;
    caracterRestant.innerHTML = restant;
    console.log(restant);
})

function reste(texte)
{
    
    var restants = 250-texte.length;
    caractereRestant.innerHTML = `${restants} `;
    if(restants < 0){
        nbrCaractere.style.color = "red";
    } else {
        nbrCaractere.style.color = "green";
    }
}