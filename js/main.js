/* MODE SOMBRE*/

const switchThemeBtn = document.querySelector('.changeTheme')
let toggleTheme = 0;

switchThemeBtn.addEventListener('click', ()=> {
  if(toggleTheme === 0) {
    document.documentElement.style.setProperty('--main-color-background', '#100E0E');
    document.documentElement.style.setProperty('--main-color-title', '#D9DAFF');
    toggleTheme++;

  } else {
    document.documentElement.style.setProperty('--main-color-background', '--main-color-background');
    document.documentElement.style.setProperty('--main-color-title', '--main-color-title');
    toggleTheme--;

  }

})

