/* MODE SOMBRE*/

const switchThemeBtn = document.querySelector('.changeTheme')
let toggleTheme = 0;

switchThemeBtn.addEventListener('click', ()=> {
  if(toggleTheme === 0) {
    document.documentElement.style.setProperty('--main-color-background', '#100E0E');
    document.documentElement.style.setProperty('--main-color-title', '#D9DAFF');
    toggleTheme++;

  } else {
    document.documentElement.style.setProperty('--main-color-background', '#D0D1FB');
    document.documentElement.style.setProperty('--main-color-title', '#000000');
    toggleTheme--;

  }

})



// Creation animation scroll reveal par fleche
const scroll = document.querySelector(".scrollHigth");


scroll.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})

window.addEventListener("scroll", function() {
 
  if (window.pageYOffset >= 350) {
     scroll.style.display = "block";
     
  } else {
     scroll.style.display = "none";
  }
});

//Creation carousel click

let changeImg = document.querySelector('.changeImg img');
let changeTitle = document.querySelector('.changeTitle');
let changeTitle2 = document.querySelector('.changeTitle2');
let changeText= document.querySelector('.changeText');
let fleche = document.querySelector('.changeFleche');

let currentImage = 1;

fleche.addEventListener('click', function() {
  if (currentImage === 1) {
    changeImg.src = "./img/Jujustu/jujustu2.jpg";
    changeTitle.innerHTML = "Jujustu Collection";
    changeTitle2.innerHTML = "Tkt";
    changeText.innerHTML = `Nouveau texte tkt<br> lopem djdks skdnd,d `;
    currentImage = 2;
  } else {
    changeImg.src = "./img/hisoka.jpg";
    changeTitle.innerHTML = "MINTING NOW";
    changeTitle2.innerHTML = "ANON KATZ";
    changeText.innerHTML = "bt profilverifie on etherum<br>A curious group of znon katz";
    currentImage = 1;
  }
});