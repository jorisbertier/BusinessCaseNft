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