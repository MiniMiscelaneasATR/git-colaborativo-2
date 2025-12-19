// BOTÓN VOLVER ARRIBA
const btnTop = document.getElementById('btnTop');

// Inicialmente oculto
btnTop.style.display = 'none';

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTop.style.display = 'flex';
    } else {
        btnTop.style.display = 'none';
    }
});

// Scroll suave al hacer clic
btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});