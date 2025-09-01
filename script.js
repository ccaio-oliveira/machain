// Animações de Scroll para Machain
document.addEventListener('DOMContentLoaded', function() {
    
    // Configuração das animações
    const animationOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Observer para seções 1-6 (fade-in simples)
    const simpleFadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-simple');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observer para elementos das seções 1-6 (fade-in básico)
    const simpleElementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('simple-fade-in');
                
                // Delay escalonado para cards (mesmo das seções 1-6, mas apenas opacity)
                if (entry.target.classList.contains('simple-stagger')) {
                    const cards = entry.target.querySelectorAll('.process-card, .card, .benefit-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('simple-fade-in');
                        }, index * 150);
                    });
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    // Criar observer para seções
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.classList.remove('animate-out');
            }
        });
    }, animationOptions);

    // Criar observer para elementos individuais
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Adicionar delay escalonado para cards em grid
                if (entry.target.classList.contains('stagger-animation')) {
                    const cards = entry.target.querySelectorAll('.process-card, .audience-card, .benefit-card');
                    cards.forEach((card, index) => {
                        card.style.animationDelay = `${index * 0.1}s`;
                        card.classList.add('slide-up');
                    });
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    // Selecionar seções 1-6 para fade-in simples
    const simpleFadeSections = document.querySelectorAll('.section-1, .section-2, .section-3, .section-4, .section-5, .section-6');
    simpleFadeSections.forEach((section, index) => {
        section.classList.add(`section-${index + 1}-fade`);
        simpleFadeObserver.observe(section);
    });

    // Elementos das seções 1-6 para fade-in básico
    const simpleElements = document.querySelectorAll(
        '.section-1 .title, .section-1 .subtitle, .section-1 .description, .section-1 .btn,' +
        '.section-2 .title, .section-2 .subtitle, .section-2 .description, .section-2 .card,' +
        '.section-3 .title, .section-3 .description, .section-3 .result-box, .section-3 .phone-mockup,' +
        '.section-4 .title, .section-4 .description, .section-4 .btn, .section-4 .building-images,' +
        '.section-5 .title, .section-5 .process-card,' +
        '.section-6 .title, .section-6 .benefit-card, .section-6 .dashboard-preview'
    );
    
    simpleElements.forEach(element => {
        element.classList.add('sections-1-6-element');
        simpleElementObserver.observe(element);
    });

    // Grids das seções 1-6 com animação escalonada simples
    const simpleGrids = document.querySelectorAll('.section-5 .cards-grid, .section-6 .benefits-list');
    simpleGrids.forEach(grid => {
        grid.classList.add('sections-1-6-element', 'simple-stagger');
        simpleElementObserver.observe(grid);
    });

    // Selecionar apenas seções 7-10 para animação avançada
    const animatedSections = document.querySelectorAll('.section-7, .section-8, .section-9, .section-10');
    animatedSections.forEach(section => {
        section.classList.add('section-animate');
        sectionObserver.observe(section);
    });

    // Elementos específicos para animação individual - apenas nas seções 7-10
    const animatedElements = document.querySelectorAll(
        '.section-7 .title, .section-7 .subtitle, .section-7 .description, .section-7 .card, .section-7 .benefit-card, .section-7 .process-card, .section-7 .audience-card, .section-7 .governance-item,' +
        '.section-8 .title, .section-8 .subtitle, .section-8 .description, .section-8 .card, .section-8 .benefit-card, .section-8 .process-card, .section-8 .audience-card, .section-8 .governance-item,' +
        '.section-9 .title, .section-9 .subtitle, .section-9 .description, .section-9 .card, .section-9 .benefit-card, .section-9 .process-card, .section-9 .audience-card, .section-9 .governance-item,' +
        '.section-10 .title, .section-10 .subtitle, .section-10 .description, .section-10 .card, .section-10 .benefit-card, .section-10 .process-card, .section-10 .audience-card, .section-10 .governance-item'
    );
    
    animatedElements.forEach(element => {
        element.classList.add('element-animate');
        elementObserver.observe(element);
    });

    // Adicionar classe especial para grids que precisam de animação escalonada - apenas seções 7-10
    const gridsWithStagger = document.querySelectorAll(
        '.section-7 .cards-grid, .section-7 .target-audience-grid, .section-7 .benefits-list,' +
        '.section-8 .cards-grid, .section-8 .target-audience-grid, .section-8 .benefits-list,' +
        '.section-9 .cards-grid, .section-9 .target-audience-grid, .section-9 .benefits-list,' +
        '.section-10 .cards-grid, .section-10 .target-audience-grid, .section-10 .benefits-list'
    );
    gridsWithStagger.forEach(grid => {
        grid.classList.add('stagger-animation');
        elementObserver.observe(grid);
    });

    // Animação especial para os gráficos e dashboard
    const chartElements = document.querySelectorAll('.chart-card-image, .dashboard-card');
    chartElements.forEach((element, index) => {
        element.classList.add('chart-animate');
        element.style.animationDelay = `${index * 0.2}s`;
        elementObserver.observe(element);
    });

    // Animação para o botão do dashboard
    const dashboardButton = document.querySelector('.expand-dashboard');
    if (dashboardButton) {
        dashboardButton.classList.add('pulse-animate');
        elementObserver.observe(dashboardButton);
    }

    // Remover paralaxe que pode estar causando problemas
    // Paralaxe desabilitado para evitar sobreposições

    // Smooth scroll para botões de CTA
    const ctaButtons = document.querySelectorAll('.btn a');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                
                // Adicionar efeito de ripple no clique
                const ripple = document.createElement('span');
                ripple.classList.add('ripple-effect');
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                // Scroll suave para a próxima seção (exemplo)
                const nextSection = this.closest('[class*="section-"]').nextElementSibling;
                if (nextSection) {
                    nextSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Animação especial para números/valores
    const valueElements = document.querySelectorAll('.card-value, .value');
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                
                // Detectar se é um número para animação de contagem
                const numberMatch = text.match(/[\d,\.]+/);
                if (numberMatch) {
                    element.classList.add('number-animate');
                    animateNumber(element, numberMatch[0]);
                }
            }
        });
    }, { threshold: 0.5 });

    valueElements.forEach(element => {
        numberObserver.observe(element);
    });

    // Função para animar números
    function animateNumber(element, finalNumber) {
        const cleanNumber = finalNumber.replace(/[,\.]/g, '');
        const isDecimal = finalNumber.includes('.');
        const hasSeparator = finalNumber.includes(',');
        
        if (!isNaN(cleanNumber) && cleanNumber.length <= 10) {
            const finalValue = parseInt(cleanNumber);
            const duration = 2000;
            const steps = 60;
            const stepValue = finalValue / steps;
            const stepTime = duration / steps;
            
            let currentValue = 0;
            let currentStep = 0;
            
            const timer = setInterval(() => {
                currentStep++;
                currentValue += stepValue;
                
                if (currentStep >= steps) {
                    currentValue = finalValue;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(currentValue).toString();
                
                // Reformatar número com separadores
                if (hasSeparator && displayValue.length > 3) {
                    displayValue = displayValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                }
                
                // Manter o formato original
                element.textContent = element.textContent.replace(/[\d,\.]+/, displayValue);
            }, stepTime);
        }
    }

    // Otimização de performance - pausar animações quando não visível
    let isPageVisible = true;
    
    document.addEventListener('visibilitychange', function() {
        isPageVisible = !document.hidden;
        
        if (isPageVisible) {
            // Reativar animações
            document.body.classList.remove('animations-paused');
        } else {
            // Pausar animações
            document.body.classList.add('animations-paused');
        }
    });

    // Adicionar efeito de hover melhorado para cards
    const interactiveCards = document.querySelectorAll(
        '.process-card, .audience-card, .benefit-card, .dashboard-card'
    );
    
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });

    console.log('🚀 Animações de scroll da Machain carregadas com sucesso!');
});

// Função para reinicializar animações se necessário
function reinitializeAnimations() {
    document.dispatchEvent(new Event('DOMContentLoaded'));
}

// Exportar função para uso externo se necessário
window.MachainAnimations = {
    reinitialize: reinitializeAnimations
};
