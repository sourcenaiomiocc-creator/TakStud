document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const dotsContainer = document.getElementById('indicators');
    const progressBar = document.getElementById('progressBar');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Inicialização dos indicadores
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Atualiza Slides, Bolinhas e Barra de Progresso
    function updateUI() {
        // Slides
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');

        // Dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');

        // Barra de Progresso (Cálculo de porcentagem)
        const progress = ((currentIndex + 1) / totalSlides) * 100;
        progressBar.style.width = `${progress}%`;
    }

    window.goToSlide = function(index) {
        currentIndex = index;
        updateUI();
    }

    window.nextSlide = function() {
        currentIndex++;
        if (currentIndex >= totalSlides) currentIndex = 0;
        updateUI();
    }

    window.prevSlide = function() {
        currentIndex--;
        if (currentIndex < 0) currentIndex = totalSlides - 1;
        updateUI();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Chamada inicial para setar a barra de progresso
    updateUI();
});