
// Animações e interações da página de obrigado

document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    trackEvent('thank_you_page_view', {
        page_title: 'Página de Obrigado - soEventus',
        page_location: window.location.href
    });
    
    // Destacar elementos importantes com animação
    animateOnScroll();
    
    // Adicionar interatividade aos botões
    setupButtonInteractions();
    
    // Configurar countdown para próximos passos (opcional)
    setupProgressTracking();
});

// Animações ao fazer scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observar elementos para animação
    const elementsToAnimate = document.querySelectorAll('.feature-card, .info-card, .help-option, .stat-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Configurar interações dos botões
function setupButtonInteractions() {
    // Track clicks nos próximos passos
    document.querySelectorAll('.step-action').forEach(button => {
        button.addEventListener('click', function(e) {
            const stepNumber = this.closest('.step-item').querySelector('.step-number').textContent;
            trackEvent('next_step_click', {
                step_number: stepNumber,
                action_text: this.textContent.trim()
            });
        });
    });

    // Track clicks nas opções de ajuda
    document.querySelectorAll('.help-option').forEach(option => {
        option.addEventListener('click', function(e) {
            const helpType = this.querySelector('h4').textContent;
            trackEvent('help_option_click', {
                help_type: helpType
            });
        });
    });

    // Efeito hover nos cartões
    document.querySelectorAll('.feature-card, .help-option').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Tracking de progresso do usuário
function setupProgressTracking() {
    // Marcar que o usuário chegou na página de obrigado
    localStorage.setItem('soeventus_signup_completed', 'true');
    localStorage.setItem('soeventus_signup_timestamp', new Date().toISOString());
    
    // Adicionar badge de "novo usuário" se necessário
    const isNewUser = !localStorage.getItem('soeventus_returning_user');
    if (isNewUser) {
        trackEvent('new_user_conversion', {
            conversion_type: 'signup_completed'
        });
    }
}

// Função de tracking de eventos
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
    
    console.log('Event tracked:', eventName, eventData);
}

// Mostrar notificação de boas-vindas após alguns segundos
setTimeout(() => {
    showWelcomeNotification();
}, 3000);

function showWelcomeNotification() {
    // Criar notificação toast
    const notification = document.createElement('div');
    notification.className = 'welcome-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <div>
                <strong>Dica:</strong> Que tal criar seu primeiro evento agora?
            </div>
            <button onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Estilos da notificação
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, var(--brand-orange), var(--brand-orange-dark));
        color: white;
        padding: 1rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 25px rgba(255, 123, 48, 0.3);
        z-index: 1000;
        animation: slideInRight 0.5s ease;
        max-width: 300px;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .notification-content svg {
            width: 1.5rem;
            height: 1.5rem;
            flex-shrink: 0;
        }
        
        .notification-content button {
            background: none;
            border: none;
            color: white;
            font-size: 1.25rem;
            cursor: pointer;
            margin-left: auto;
            padding: 0.25rem;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Remover automaticamente após 8 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 8000);
}

// Detectar saída da página para tracking
window.addEventListener('beforeunload', function() {
    const timeOnPage = Date.now() - performance.timing.navigationStart;
    trackEvent('thank_you_page_exit', {
        time_on_page: Math.round(timeOnPage / 1000)
    });
});

// Adicionar classe de carregamento completo
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Pequena animação de confetti (opcional)
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
});

// Scroll suave para links internos
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
