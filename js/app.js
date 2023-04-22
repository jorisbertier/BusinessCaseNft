// SLIDE FORMUALIRE

const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});
/* MODE SOMBRE*/

const switchThemeBtn = document.querySelector('.changeTheme')
let toggleTheme = 0;

switchThemeBtn.addEventListener('click', ()=> {
  if(toggleTheme === 0) {
    document.documentElement.style.setProperty('--color-white', '#100E0E');
    document.documentElement.style.setProperty('--color-black', '#FFFF');
    toggleTheme++;

  } else {
    document.documentElement.style.setProperty('--color-white', '#FFFF');
    document.documentElement.style.setProperty('--color-black', '#100E0E');
    toggleTheme--;

  }

})

// REGEXP VALIDATION FORMULAIRE
// Selecteur
let signup = document.querySelector('#signUpForm');
let small = document.querySelectorAll('small');

//Ecouter la soumission du formulaire // remplace le required de HTML
signup.addEventListener('submit', function(e){
  e.preventDefault();
  if(validEmail(signup.email)) {
    console.log('email valide');
  }else {
    console.log('email non valide');
  }
})

//Ecouter la modification de l'email
signup.email.addEventListener('change', function(){
  validEmail(this);
});

//Validation Email
const validEmail = function(inputEmail) {
  //Creation de la reg exp pour validation email
  let emailRegExp = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', 'g');
  let quatreSmall = small[3];

  // On test la reg exp
  if(emailRegExp.test(inputEmail.value) /* equivaut à == true*/){
    quatreSmall.innerHTML = "Email valide";
    quatreSmall.style.color ="green";
    return true;
    //v2
    // small.classList.remove('text-danger');
    // small.classList.remove('text-success');
    
  } else {
    quatreSmall.innerHTML ="Email non valide";
    quatreSmall.style.color ="red";
    return false;
    //v2
    // small.classList.remove('text-success');
    // small.classList.remove('text-danger');
  }
};

/**************** NOM *******************/
signup.nom.addEventListener('change', function() {
  validNom(this);
})

const validNom = function(inputNom) {
  let nomRegExp = new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$', 'g');
  let oneSmall = small[0];

  if(nomRegExp.test(inputNom.value)) {
    oneSmall.innerHTML = "Nom valide";
    oneSmall.style.color = "green";
  } else {
    oneSmall.innerHTML = "Nom non valide";
    oneSmall.style.color = "red";
  }

}

/**************** PRENOM *******************/
signup.prenom.addEventListener ('change', function() {
  validPrenom(this);
});

const validPrenom = function(inputPrenom) {
  let nomRegExp = new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$', 'g');
  let twoSmall = small[1];

  if(nomRegExp.test(inputPrenom.value)) {
    twoSmall.innerHTML = "Prénom valide";
    twoSmall.style.color = "green";
  } else {
    twoSmall.innerHTML = "Prénom non valide";
    twoSmall.style.color = "red";
  }
}
/**************** PASSWORD *******************/
signup.password.addEventListener('change', function(){
  validPassword(this);
})

const validPassword = function(inputPassword) {
  let msg;
  let fourSmall = small[4];
  let valid = false;
  // Au moins 3 caracteres
  if(inputPassword.value.length < 6) {
    msg ="Le mot de passe doit contenir au moins 6 caractéres";
  }
  // Au moins 1 maj
  else if(!/[A-Z]/.test(inputPassword.value)){ // ! pour dire faux (different de ) reg exp tester dans ce que l'utilisateur a saissie comme mdp 
    msg ="Le mot de passe doit contenir au moins 1 majuscule";
  }
  // Au moins 1 min
  else if(!/[a-z]/.test(inputPassword.value)){
    msg ="Le mot de passe doit contenir au moins 1 Minuscule";
  }
  // Au moins 1 chiffre
  else if(!/[0-9]/.test(inputPassword.value)){ 
    msg ="Le mot de passe doit contenir au moins 1 Chiffre";
  } else {
    msg = "Mot de passe Valide"
    valid= true;
  }

  if(valid) {
    fourSmall.innerHTML = msg;
    fourSmall.style.color = "green";
  }else {
    fourSmall.innerHTML = msg;
    fourSmall.style.color = "red";
  }
  
}