// Start Header Section
const headerSection = document.querySelector('.header-section');
const headerLinks = document.querySelector('.header-links');
const mobileMenu = document.querySelector('.mobile-menu');

window.onscroll = function () {
  // Fix The Header Section On Scrolling
  const docScrollTop = document.documentElement.scrollTop;

  if (docScrollTop > 400) {
    headerSection.classList.add('fixed-header');
  } else {
    headerSection.classList.remove('fixed-header');
  }
};

mobileMenu.addEventListener('click', function () {
  headerLinks.classList.toggle('active');
});

// End Header Section
