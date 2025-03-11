// Função para ajustar o header ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const scrollPosition = window.scrollY + headerHeight;

    // Verifica se o header está sobre uma seção com fundo preto (.black)
    const blackSections = document.querySelectorAll('.black');
    let isOverDark = false;

    blackSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Ajuste para considerar a altura do header
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            isOverDark = true;
        }
    });

    // Aplica ou remove a classe .header-dark com base no fundo
    if (isOverDark) {
        header.classList.add('header-dark');
    } else {
        header.classList.remove('header-dark');
    }

    // Reduz o tamanho do header ao rolar
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Executa uma vez ao carregar para corrigir o estado inicial
window.dispatchEvent(new Event('scroll'));