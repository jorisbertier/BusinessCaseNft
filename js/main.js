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
let gif= document.querySelector('.gif');
let point1 = document.querySelector('.point1');
let point2 = document.querySelector('.point2');
let point3 = document.querySelector('.point3');


point1.addEventListener('click', function() {

    changeImg.src = "./img/profil/itachi2.png";
    changeTitle.innerHTML = "MINTING NOW";
    changeTitle2.innerHTML = "ANON KATZ";
    changeText.innerHTML = "bt profilverifie on etherum<br>A curious group of znon katz";
    point1.style.backgroundColor = "black";
    point2.style.backgroundColor = "rgba(255,255,255, 0.3)";
    point3.style.backgroundColor = "rgba(255,255,255, 0.3)";
    gif.src = "./img/profil/naruto.gif";
})

point2.addEventListener('click', function() {
  changeImg.src = "./img/profil/hisokamini.png";
  changeTitle.innerHTML = "Jujustu Collection";
  changeTitle2.innerHTML = "LOREM";
  changeText.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`;
  point2.style.backgroundColor = "black";
  point1.style.backgroundColor = "rgba(255,255,255, 0.3)";
  point3.style.backgroundColor = "rgba(255,255,255, 0.3)";
  gif.src = "./img/profil/hisoka.webp";
})

point3.addEventListener('click', function() {
  changeImg.src = "./img/profil/ichigo.png";
  changeTitle.innerHTML = "Jujustu Collection";
  changeTitle2.innerHTML = "Tkt";
  changeText.innerHTML = `Nouveau texte tkt<br> lopem djdks skdnd,d `;
  point3.style.backgroundColor = "black";
  point1.style.backgroundColor = "rgba(255,255,255, 0.3)";
  point2.style.backgroundColor = "rgba(255,255,255, 0.3)";
  gif.src = "./img/profil/scissorseven.webp";
})