let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },

    }
  });
  // Authentication Logic
document.addEventListener('DOMContentLoaded', function() {
  const authButton = document.getElementById('authButton');

  // Check if the user is logged in (check localStorage)
  const loggedInUser = localStorage.getItem('loggedInUser');

  if (loggedInUser) {
      // User is logged in, show "Logout" button
      authButton.textContent = 'Logout';
      authButton.href = '#'; // Prevent navigating to the login page

      authButton.addEventListener('click', function() {
          // Logout action
          localStorage.removeItem('loggedInUser'); // Clear login status
          window.location.reload(); // Reload the page to reflect changes
      });
  } else {
      // User is not logged in, keep "Login" button
      authButton.textContent = 'Login';
      authButton.href = 'login.html'; // Navigate to the login page
  }
});
