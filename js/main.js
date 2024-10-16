let sideMenu = document.querySelector('#sideMenu');
let sideArrow = document.querySelector('#sideArrow');
let toggler = document.querySelector('.toggler');
let menuLinks = document.querySelectorAll('.side-menu-link');

function displaySideMenu() {
  if (window.scrollY >= 700) {
    sideMenu.classList.replace('d-none', 'd-block');
  } else {
    sideMenu.classList.replace('d-block', 'd-none');
    closeSideMenu();
  }
}

displaySideMenu();

function openSideMenu() {
  sideMenu.classList.replace('hide-menu', 'show-menu');
  toggler.innerHTML = `<svg fill="#ffffff" viewBox="-4.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" stroke="#ffffff" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.4 17.269a1.026 1.026 0 0 1-.727-.302l-6.801-6.8a1.03 1.03 0 0 1 0-1.456l6.8-6.8a1.03 1.03 0 0 1 1.456 1.455L3.055 9.439l6.073 6.073A1.03 1.03 0 0 1 8.4 17.27z"></path></g></svg>`
}

function closeSideMenu() {
  sideMenu.classList.replace('show-menu', 'hide-menu');
  toggler.innerHTML = `<svg fill="#ffffff" viewBox="-4.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" stroke="#ffffff" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.4 17.269a1.026 1.026 0 0 1-.727-.302l-6.801-6.8a1.03 1.03 0 0 1 0-1.456l6.8-6.8a1.03 1.03 0 0 1 1.456 1.455L3.055 9.439l6.073 6.073A1.03 1.03 0 0 1 8.4 17.27z"></path></g></svg>`
}

window.addEventListener('scroll', displaySideMenu);

sideArrow.addEventListener('click', function () {
  if (sideMenu.classList.contains('hide-menu')) {
    openSideMenu();
  } else {
    closeSideMenu();
  }
})

menuLinks.forEach(link => {
  link.addEventListener('click', closeSideMenu)
})

// Swiper JS Library
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

AOS.init();