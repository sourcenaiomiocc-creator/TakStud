document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const dotsContainer = document.getElementById('indicators');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Gerar bolinhas de navegação automaticamente
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    window.goToSlide = function(index) {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = index;

        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    window.nextSlide = function() {
        let newIndex = currentIndex + 1;
        if (newIndex >= totalSlides) newIndex = 0;
        goToSlide(newIndex);
    }

    window.prevSlide = function() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = totalSlides - 1;
        goToSlide(newIndex);
    }

    // Eventos de clique
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Navegação pelo teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
});