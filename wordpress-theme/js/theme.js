// JavaScript personalizado do tema
jQuery(document).ready(function($) {
    
    // Smooth scroll para links internos
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });
    
    // Header transparente que fica opaco no scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        
        if (scroll >= 50) {
            $('.site-header').addClass('scrolled');
        } else {
            $('.site-header').removeClass('scrolled');
        }
    });
    
    // Menu mobile toggle (se precisar adicionar)
    $('.mobile-menu-toggle').on('click', function() {
        $('.main-nav').toggleClass('active');
        $(this).toggleClass('active');
    });
    
    // Animação de entrada para elementos
    function animateOnScroll() {
        $('.feature-card, .post-card').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate-in');
            }
        });
    }
    
    // Executar animação no scroll
    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // Executar na carga da página
    
    // Formulário de contato/captura (se existir)
    $('.contact-form, .capture-form').on('submit', function(e) {
        e.preventDefault();
        
        var form = $(this);
        var submitBtn = form.find('button[type="submit"]');
        var originalText = submitBtn.text();
        
        // Loading state
        submitBtn.text('Enviando...').prop('disabled', true);
        
        // Aqui você pode adicionar a lógica de envio do formulário
        // Por exemplo, AJAX para processar o formulário
        
        setTimeout(function() {
            submitBtn.text('Enviado!').removeClass('btn-primary').addClass('btn-success');
            
            // Redirecionar após sucesso (opcional)
            setTimeout(function() {
                window.location.href = '/obrigado';
            }, 1500);
        }, 2000);
    });
    
    // Contador para estatísticas (se houver)
    function animateCounter() {
        $('.counter').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }
    
    // Trigger counter animation when in viewport
    $(window).scroll(function() {
        $('.counter').each(function() {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < viewportBottom && !$(this).hasClass('counted')) {
                $(this).addClass('counted');
                animateCounter();
            }
        });
    });
    
});

// CSS adicional via JavaScript para animações
var additionalCSS = `
    .site-header.scrolled {
        background: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .feature-card, .post-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .feature-card.animate-in, .post-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .btn-success {
        background: #10b981 !important;
        border-color: #10b981 !important;
    }
    
    @media (max-width: 768px) {
        .main-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1rem;
        }
        
        .main-nav.active {
            display: block;
        }
        
        .main-nav ul {
            flex-direction: column;
            gap: 1rem;
        }
        
        .mobile-menu-toggle {
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
        }
    }
`;

// Adicionar CSS ao head
var style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);