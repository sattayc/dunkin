const menuButton = document.querySelector('.menu-toggle');
const sluitButton = document.querySelector('.menu-close');
const nav = document.querySelector('.main-nav');

function openMenu() {
  nav.classList.add('open');
  menuButton.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', openMenu);
sluitButton.addEventListener('click', closeMenu);

// sluit bij klik op link (handig op mobiel)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// sluit met ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
