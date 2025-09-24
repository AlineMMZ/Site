    <!-- Schema Markup focado no público brasileiro -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": ["ProfessionalService", "HealthAndBeautyBusiness", "MedicalBusiness"],
        "name": "Aline Medeiros - Psicoterapia Online",
        "alternateName": ["Aline Medeiros Psicoterapeuta", "Psicoterapia para Brasileiras no Exterior"],
        "description": "Atendimento psicológico especializado para mulheres brasileiras no exterior. Psicoterapia online, mentoria emocional e consultoria para imigração.",
        "url": "https://www.psialinemedeiros.com.br",
        "sameAs": [
            "https://wa.me/5512996262275"
        ],
        "serviceType": [
            "Psicoterapia Individual Online",
            "Mentoria Raízes e Recomeços", 
            "Consultoria Emoção em Movimento",
            "Apoio Psicológico para Imigrantes",
            "Terapia em Português"
        ],
        "areaServed": {
            "@type": "Place",
            "name": "Atendimento Online Global para Brasileiras"
        },
        "provider": {
            "@type": "Person",
            "name": "Aline Medeiros",
            "jobTitle": ["Consultora", "Psicoterapeuta", "Mentoria Emocional"],
            "knowsLanguage": ["pt-BR", "pt"],
            "nationality": "Brazilian"
        },
        "offers": [
            {
                "@type": "Offer",
                "name": "Psicoterapia Individual Online",
                "serviceType": "Psychotherapy",
                "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceType": "Online",
                    "availableLanguage": ["pt-BR", "pt"]
                }
            },
            {
                "@type": "Offer", 
                "name": "Mentoria para Brasileiras no Exterior",
                "serviceType": "Mentoring",
                "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceType": "Online",
                    "availableLanguage": ["pt-BR", "pt"]
                }
            }
        ]
    }
            // Navegação Mobile
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            const navLinks = document.querySelectorAll('.nav-menu a');
            
            function toggleMenu() {
                const isActive = navMenu.classList.contains('active');
                navMenu.classList.toggle('active');
                hamburger.setAttribute('aria-expanded', !isActive);
                hamburger.innerHTML = !isActive ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
                
                // Previne scroll do body quando menu está aberto
                document.body.style.overflow = !isActive ? 'hidden' : '';
            }
            
            hamburger.addEventListener('click', toggleMenu);
            
            // Fecha menu ao clicar em link
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('active')) {
                        toggleMenu();
                    }
                });
            });
            
            // Fecha menu ao clicar fora
            document.addEventListener('click', (e) => {
                if (navMenu.classList.contains('active') && 
                    !navMenu.contains(e.target) && 
                    !hamburger.contains(e.target)) {
                    //toggleMenu();
                }
            });
        });

        // Navbar scroll effect otimizado
        let lastScroll = 0;
        const navbar = document.getElementById('navbar');
        
        function handleScroll() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                navbar.classList.remove('scrolled');
                return;
            }
            
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            }
            
            lastScroll = currentScroll;
        }
        
        // Throttle scroll event para performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // FAQ toggle com acessibilidade
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            function toggleFAQ() {
                const isActive = item.classList.contains('active');
                
                // Fecha outras FAQs abertas (opcional)
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    }
                });
                
                // Toggle FAQ atual
                item.classList.toggle('active');
                question.setAttribute('aria-expanded', !isActive);
            }
            
            question.addEventListener('click', toggleFAQ);
            
            // Suporte para teclado
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ();
                }
            });
        });

        // Smooth scrolling para navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

            // Lazy loading para imagens
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Performance: Preload de recursos críticos
        const preloadFont = document.createElement('link');
        preloadFont.rel = 'preload';
        preloadFont.as = 'font';
        preloadFont.type = 'font/woff2';
        preloadFont.crossOrigin = 'anonymous';
        preloadFont.href = 'https://fonts.gstatic.com/s/lora/v23/0QIvMX1D_JOuMw_hK0U4Ks8.woff2';
        document.head.appendChild(preloadFont);
    </script>
