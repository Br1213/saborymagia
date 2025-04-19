document.addEventListener('DOMContentLoaded', function() {
  // Funcionalidad de filtro para recetas
  const filterButtons = document.querySelectorAll('.filter-btn');
  const recipesContainer = document.getElementById('recetas-container');
  
  if (filterButtons.length > 0 && recipesContainer) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Quitar clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Añadir clase active al botón clicado
        this.classList.add('active');
        
        // Obtener categoría a filtrar
        const filterValue = this.getAttribute('data-filter');
        
        // Obtener todas las recetas
        const recipes = recipesContainer.querySelectorAll('.receta');
        
        // Filtrar recetas
        recipes.forEach(recipe => {
          if (filterValue === 'all' || recipe.getAttribute('data-category') === filterValue) {
            recipe.style.display = 'flex';
          } else {
            recipe.style.display = 'none';
          }
        });
      });
    });
  }

  // Funcionalidad de filtro para artículos del blog
  const blogFilterButtons = document.querySelectorAll('.filter-btn');
  const articlesContainer = document.querySelector('.articles-grid');
  
  if (blogFilterButtons.length > 0 && articlesContainer) {
    blogFilterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Quitar clase active de todos los botones
        blogFilterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Añadir clase active al botón clicado
        this.classList.add('active');
        
        // Obtener categoría a filtrar
        const filterValue = this.getAttribute('data-filter');
        
        // Obtener todos los artículos
        const articles = articlesContainer.querySelectorAll('.blog-article');
        
        // Filtrar artículos
        articles.forEach(article => {
          if (filterValue === 'all' || article.getAttribute('data-category') === filterValue) {
            article.style.display = 'flex';
          } else {
            article.style.display = 'none';
          }
        });
      });
    });
  }

  // Funcionalidad de búsqueda para recetas
  const searchInput = document.getElementById('search-recipes');
  
  if (searchInput && recipesContainer) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const recipes = recipesContainer.querySelectorAll('.receta');
      
      recipes.forEach(recipe => {
        const title = recipe.querySelector('h3').textContent.toLowerCase();
        const description = recipe.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          recipe.style.display = 'flex';
        } else {
          recipe.style.display = 'none';
        }
      });
    });
  }

  // Funcionalidad de búsqueda para artículos
  const searchBlogInput = document.getElementById('search-blog');
  
  if (searchBlogInput && articlesContainer) {
    searchBlogInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const articles = articlesContainer.querySelectorAll('.blog-article');
      
      articles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        const description = article.querySelector('p:not(.article-meta)').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          article.style.display = 'flex';
        } else {
          article.style.display = 'none';
        }
      });
    });
  }

  // Funcionalidad de preguntas frecuentes
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        // Toggle para el ícono
        const toggle = this.querySelector('.faq-toggle');
        toggle.classList.toggle('active');
        
        // Toggle para la respuesta
        const answer = this.nextElementSibling;
        answer.classList.toggle('active');
      });
    });
  }

  // Funcionalidad de formulario de contacto
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  
  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // En un caso real, aquí iría el código para enviar el formulario
      // Por ahora, solo simulamos el envío
      
      // Ocultar formulario
      contactForm.style.display = 'none';
      
      // Mostrar mensaje de éxito
      formSuccess.style.display = 'block';
      
      // Limpiar formulario
      contactForm.reset();
    });
  }

  // Funcionalidad de carrusel de testimonios
  const testimonialsContainer = document.querySelector('.testimonial-carousel');
  const testimonials = document.querySelectorAll('.testimonial');
  const prevButton = document.querySelector('.carousel-btn.prev');
  const nextButton = document.querySelector('.carousel-btn.next');
  
  if (testimonialsContainer && testimonials.length > 1 && prevButton && nextButton) {
    // Ocultar todos los testimonios excepto el primero
    for (let i = 1; i < testimonials.length; i++) {
      testimonials[i].style.display = 'none';
    }
    
    let currentTestimonial = 0;
    
    // Función para mostrar el siguiente testimonio
    const showNextTestimonial = () => {
      testimonials[currentTestimonial].style.display = 'none';
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      testimonials[currentTestimonial].style.display = 'block';
    };
    
    // Función para mostrar el testimonio anterior
    const showPrevTestimonial = () => {
      testimonials[currentTestimonial].style.display = 'none';
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      testimonials[currentTestimonial].style.display = 'block';
    };
    
    // Eventos para los botones
    nextButton.addEventListener('click', showNextTestimonial);
    prevButton.addEventListener('click', showPrevTestimonial);
    
    // Cambio automático cada 5 segundos
    setInterval(showNextTestimonial, 5000);
  }

  // Funcionalidad de navegación suave (smooth scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Funcionalidad de botón "volver arriba"
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopButton.className = 'scroll-to-top';
  scrollToTopButton.style.position = 'fixed';
  scrollToTopButton.style.bottom = '20px';
  scrollToTopButton.style.right = '20px';
  scrollToTopButton.style.display = 'none';
  scrollToTopButton.style.zIndex = '999';
  scrollToTopButton.style.width = '40px';
  scrollToTopButton.style.height = '40px';
  scrollToTopButton.style.borderRadius = '50%';
  scrollToTopButton.style.backgroundColor = '#ff6f00';
  scrollToTopButton.style.color = 'white';
  scrollToTopButton.style.border = 'none';
  scrollToTopButton.style.cursor = 'pointer';
  scrollToTopButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
  
  document.body.appendChild(scrollToTopButton);
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
});
