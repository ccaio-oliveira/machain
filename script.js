// JavaScript para interatividade da página

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animação de contador para números
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            
            if (element.textContent.includes('R$')) {
                element.textContent = `R$ ${start.toLocaleString('pt-BR', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                })}`;
            } else if (element.textContent.includes('US$')) {
                element.textContent = `US$ ${start.toLocaleString('pt-BR', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                })}`;
            } else if (element.textContent.includes('%')) {
                element.textContent = `${Math.round(start)}%`;
            } else {
                element.textContent = Math.round(start);
            }
        }, 16);
    }

    // Observer para animar elementos quando ficam visíveis
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animar contadores quando ficam visíveis
                if (entry.target.classList.contains('hero-visual')) {
                    const counters = entry.target.querySelectorAll('.token-info h3');
                    counters.forEach(counter => {
                        if (counter.textContent.includes('224')) {
                            animateCounter(counter, 224);
                        } else if (counter.textContent.includes('11')) {
                            animateCounter(counter, 11);
                        }
                    });
                }
                
                // Animar dashboard stats
                if (entry.target.classList.contains('dashboard-stats')) {
                    const statValue = entry.target.querySelector('.stat-item p');
                    if (statValue && statValue.textContent.includes('1.247.890.456')) {
                        // Simular animação de valor
                        let currentValue = 0;
                        const targetValue = 1247890456;
                        const duration = 2000;
                        const increment = targetValue / (duration / 50);
                        
                        const timer = setInterval(() => {
                            currentValue += increment;
                            if (currentValue >= targetValue) {
                                currentValue = targetValue;
                                clearInterval(timer);
                            }
                            statValue.textContent = `R$ ${currentValue.toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}`;
                        }, 50);
                    }
                }
            }
        });
    }, { threshold: 0.3 });

    // Observar elementos para animação
    const elementsToAnimate = document.querySelectorAll('.hero-visual, .execution-item, .token-card, .dashboard-stats');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Efeito parallax suave no hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-visual');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Efeito hover nos cards
    const cards = document.querySelectorAll('.token-card, .execution-item, .audience-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Adicionar efeito de brilho nos botões CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Criar efeito de ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Simular ação de agendamento
            showNotification('Obrigado pelo interesse! Nossa equipe entrará em contato em breve.');
        });
    });

    // Função para mostrar notificação
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #ff8c00, #ff6600);
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            z-index: 10000;
            font-weight: 600;
            box-shadow: 0 5px 15px rgba(255, 140, 0, 0.3);
            transform: translateX(400px);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#0a0a0a';
            header.style.backdropFilter = 'none';
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Adicionar loading state nos botões
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Carregando...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });

    // Lazy loading para imagens
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Adicionar efeito de typewriter no hero
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    // Aplicar efeito typewriter no título principal (opcional - descomente para ativar)
    // const heroTitle = document.querySelector('.hero-text h1');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     setTimeout(() => {
    //         typeWriter(heroTitle, originalText, 30);
    //     }, 500);
    // }
});

// CSS adicional para efeitos via JavaScript
const additionalStyles = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .animate {
        animation: slideInUp 0.6s ease-out;
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .header {
        transition: all 0.3s ease;
    }
`;

// Adicionar os estilos ao documento
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
