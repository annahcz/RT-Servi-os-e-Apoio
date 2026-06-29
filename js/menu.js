const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    // Alterna a classe 'active' para mostrar/esconder o menu
    navList.classList.toggle('active');

    // Atualiza o estado acessÃ­vel do botÃ£o
    const expanded = mobileMenu.getAttribute('aria-expanded') === 'true';
    mobileMenu.setAttribute('aria-expanded', String(!expanded));
});

// Fecha o menu ao clicar em um link (melhor UX em mobile)
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileMenu.setAttribute('aria-expanded', 'false');
    });
});
