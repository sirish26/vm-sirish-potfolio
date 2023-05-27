/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }
  };
  showMenu('nav-toggle', 'nav-menu');
  
  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll('.nav__link');
  
  function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
  }
  navLink.forEach((n) => n.addEventListener('click', linkAction));
  
  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll('section[id]');
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
  
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id');
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
      } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', scrollActive);
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
  });
  
  sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
  sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
  sr.reveal('.home__social-icon', { interval: 200 });
  sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
  
  // Text Animation
  const names = ['AB CDEFGH', 'VB CDEFGH', 'VM SDEFGH', 'VM SIDEGH', 'VM SIREGH','VM SIRIGk','VM SIRISk','VM SIRISH'];
  const targetName = 'VM SIRISH';
  let currentIndex = 0;
  
  function flipName() {
    const nameFlipElement = document.querySelector('.home__title-color');
    const name = names[currentIndex];
    nameFlipElement.classList.add('flip-animation');
    setTimeout(() => {
      nameFlipElement.textContent = name;
      nameFlipElement.classList.remove('flip-animation');
    }, 500);
    if (name === targetName) {
      clearInterval(intervalId);
    }
    currentIndex++;
  }
  
  const intervalId = setInterval(flipName, 250);
  
  const toggleDarkMode = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleDarkMode.addEventListener('change', () => {
  if (toggleDarkMode.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

// Check the local storage for user preference
const userPreference = localStorage.getItem('dark-mode');

if (userPreference === 'true') {
  toggleDarkMode.checked = true;
  body.classList.add('dark-mode');
} else {
  toggleDarkMode.checked = false;
}
