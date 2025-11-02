// Menu hamburguesa
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Animación de barras de habilidades al hacer scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 1s forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-progress').forEach(bar => {
    observer.observe(bar);
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulario de contacto
//const contactForm = document.querySelector('.contact-form');

//contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario

//const formData = new FormData(constactForm);
//const data = Object.fromEntries(formData.entries());

    // Por ejemplo, usando fetch para enviar a un servidor
//if (data.nombre && data.email && data.mensaje) {
//	console.log('Datos listos para enviar:', data);

  //  alert('¡Gracias por tu mensaje! Te contactaré pronto.');
   // contactForm.reset();
//});

// Cambiar estilo del navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Añadir animación CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            width: 0;
        }
        to {
            width: var(--target-width);
        }
    }
`;
document.head.appendChild(style);
