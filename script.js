document.addEventListener('DOMContentLoaded', function() {
  // Menú móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.innerHTML = navLinks.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  
  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
  
  // Efecto de scroll en navbar
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.95)';
    } else {
      navbar.style.backgroundColor = 'var(--dark-color)';
    }
  });
  
  // Animación de carga para los proyectos
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  function animatePortfolioItems() {
    portfolioItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }
  
  // Observador de intersección para animaciones
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        if (entry.target.id === 'portfolio') {
          animatePortfolioItems();
        }
      }
    });
  }, { threshold: 0.1 });
  
  // Observar las secciones
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Formulario de contacto
  const contactForm = document.querySelector('.contact-form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simular envío del formulario
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    setTimeout(() => {
      submitBtn.textContent = '¡Mensaje enviado!';
      this.reset();
      
      setTimeout(() => {
        submitBtn.textContent = 'Enviar mensaje';
        submitBtn.disabled = false;
      }, 2000);
    }, 1500);
  });
});