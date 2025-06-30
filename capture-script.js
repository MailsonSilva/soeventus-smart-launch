
// Máscara para telefone
function maskPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length >= 11) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length >= 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length >= 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
        value = value.replace(/^(\d*)/, '$1');
    }
    
    input.value = value;
}

// Aplicar máscara ao campo de telefone
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    
    phoneInput.addEventListener('input', function() {
        maskPhone(this);
    });
    
    phoneInput.addEventListener('keypress', function(e) {
        // Permite apenas números, backspace, delete, tab, escape, enter
        if ([8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
            // Permite Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
            (e.keyCode === 65 && e.ctrlKey === true) ||
            (e.keyCode === 67 && e.ctrlKey === true) ||
            (e.keyCode === 86 && e.ctrlKey === true) ||
            (e.keyCode === 88 && e.ctrlKey === true)) {
            return;
        }
        // Garante que é um número
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

// Função para rolar até o formulário
function scrollToForm() {
    const form = document.querySelector('.capture-form-container');
    form.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    
    // Destacar o formulário brevemente
    form.style.boxShadow = '0 20px 25px -5px rgba(255, 123, 48, 0.2), 0 10px 10px -5px rgba(255, 123, 48, 0.1)';
    setTimeout(() => {
        form.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    }, 2000);
}

// Validação e envio do formulário
document.getElementById('captureForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Coleta dos dados do formulário
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        eventsMonth: document.getElementById('events-month').value
    };
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.phone || !formData.eventsMonth) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
    
    // Simulação de envio (aqui você integraria com seu backend)
    const submitButton = document.querySelector('.btn-submit');
    const originalText = submitButton.innerHTML;
    
    // Feedback visual de loading
    submitButton.innerHTML = 'Processando...';
    submitButton.disabled = true;
    
    // Simular chamada para API
    setTimeout(() => {
        // Sucesso - redirecionar para página de obrigado
        console.log('Dados do lead:', formData);
        
        // Aqui você enviaria os dados para seu sistema de CRM/Email Marketing
        // Exemplo: sendToAPI(formData);
        
        // Mostrar mensagem de sucesso
        showSuccessMessage();
        
    }, 2000);
});

function showSuccessMessage() {
    const form = document.querySelector('.capture-form');
    form.innerHTML = `
        <div class="success-message">
            <div style="text-align: center; padding: 2rem;">
                <svg style="width: 4rem; height: 4rem; color: var(--green-500); margin: 0 auto 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="16,8 12,12 8,16"/>
                    <polyline points="8,12 12,16 16,8"/>
                </svg>
                <h3 style="color: var(--gray-900); margin-bottom: 1rem;">Parabéns! Seu teste gratuito foi ativado</h3>
                <p style="color: var(--gray-600); margin-bottom: 2rem;">Enviamos as instruções de acesso para seu e-mail. Você receberá também um link para nossa orientação gratuita.</p>
                <div style="background-color: var(--gray-50); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <p style="font-size: 0.875rem; color: var(--gray-600);">
                        <strong>Próximos passos:</strong><br>
                        1. Verifique seu e-mail (inclusive spam)<br>
                        2. Acesse a plataforma<br>
                        3. Agende sua orientação gratuita
                    </p>
                </div>
                <a href="mailto:" style="display: inline-block; background-color: var(--brand-orange); color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 600;">
                    Verificar E-mail
                </a>
            </div>
        </div>
    `;
}

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

// Tracking de eventos (Google Analytics, Facebook Pixel, etc.)
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

// Tracking de interações
document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    trackEvent('page_view', {
        page_title: 'Página de Captura - soEventus',
        page_location: window.location.href
    });
    
    // Track form interactions
    const formInputs = document.querySelectorAll('#captureForm input, #captureForm select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            trackEvent('form_interaction', {
                field_name: this.name || this.id,
                action: 'focus'
            });
        });
    });
    
    // Track CTA clicks
    document.querySelectorAll('.btn-cta-final').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent.trim(),
                location: 'final_cta'
            });
        });
    });
});

// Exit intent detection
let exitIntentShown = false;

document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !exitIntentShown) {
        exitIntentShown = true;
        
        // Scroll para o formulário e destacar
        scrollToForm();
        
        // Track exit intent
        trackEvent('exit_intent', {
            page_location: window.location.href
        });
    }
});

// Contador de tempo na página para tracking
let timeOnPage = 0;
setInterval(() => {
    timeOnPage += 5;
    
    // Track engagement milestones
    if ([30, 60, 120, 300].includes(timeOnPage)) {
        trackEvent('time_on_page', {
            seconds: timeOnPage
        });
    }
}, 5000);
