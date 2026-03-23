/* ============================================
   ENES SOYDAN - PORTFOLIO JS
   Neural canvas, scroll reveals, typed text,
   TR/EN language switching, theme switching
   ============================================ */

// --- Theme Switch ---
const themeColors = {
    forest: '16, 185, 129',
    ember:  '230, 126, 34',
    arctic: '56, 189, 248',
    rose:   '244, 63, 94'
};

let currentThemeRgb = themeColors.forest;

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentThemeRgb = themeColors[theme] || themeColors.forest;

    document.querySelectorAll('.theme-dot').forEach(dot => {
        dot.classList.toggle('active', dot.dataset.theme === theme);
    });

    localStorage.setItem('portfolio-theme', theme);
}

(function() {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved && themeColors[saved]) {
        setTheme(saved);
    }

    const themeSwitch = document.getElementById('themeSwitch');
    if (!themeSwitch) return;

    themeSwitch.addEventListener('click', (e) => {
        const dot = e.target.closest('.theme-dot');
        if (!dot || dot.classList.contains('active')) return;
        setTheme(dot.dataset.theme);
    });
})();

// --- i18n Translations ---
const translations = {
    tr: {
        nav_home: "Ana Sayfa",
        nav_about: "Hakkımda",
        nav_projects: "Projeler",
        nav_tech: "Teknolojiler",
        nav_contact: "İletişim",
        hero_badge: "Yapay Zeka & Bilgisayarlı Görme Geliştirici",
        hero_greeting: "Merhaba, ben",
        hero_subtitle: "Derin öğrenme modelleri ile gerçek dünya problemlerini çözüyorum.",
        hero_cta: "Projeleri Gör",
        stat_projects: "Proje",
        stat_tech: "Teknoloji",
        stat_lines: "Satır Kod",
        about_tag: "// HAKKIMDA",
        about_title_1: "Yapay zeka ile",
        about_title_2: "gerçek çözümler",
        about_p1: "Bilgisayarlı görme (Computer Vision) ve derin öğrenme alanlarında çalışıyorum. YOLO tabanlı nesne tespit modelleri, görüntü işleme ve veri etiketleme araçları geliştiriyorum.",
        about_p2: "TEKNOFEST yarışmalarına katılıyor, askeri hedef tespiti için özel modeller eğitiyorum. Projelerimde üretimden deploy'a kadar tüm süreci yönetiyorum.",
        hl1_title: "Gerçek Zamanlı Tespit",
        hl1_desc: "Video akışında canlı nesne tespiti",
        hl2_title: "Masaüstü Uygulamaları",
        hl2_desc: "Çoklu platform native uygulamalar",
        hl3_title: "Model Eğitimi",
        hl3_desc: "Özel veri seti ile YOLO ince ayar",
        proj_tag: "// PROJELER",
        proj_title_1: "Seçilmiş",
        proj_title_2: "çalışmalarım",
        p1_title: "Plaka Tespit Uygulaması",
        p1_desc: "Gerçek zamanlı otomatik plaka tanıma sistemi (ANPR). Video akışında araçların plakalarını tespit edip, OCR ile okuyan ve veritabanına kaydeden uçtan uca bir çözüm. İki aşamalı pipeline: ilk model plakayı tespit eder, ikinci model karakterleri okur.",
        p1_f1: "Canlı kamera / video dosyası desteği",
        p1_f2: "İki aşamalı YOLO + OCR pipeline",
        p1_f3: "Flask web arayüzü + Tkinter masaüstü",
        source_code: "Kaynak Kod",
        p2_desc: "YOLO formatında veri etiketleme aracı. Bounding box ve polygon annotation desteği, sınıf yönetimi, kolay klavye kısayolları ile hızlı etiketleme. Windows ve macOS için native build. Code signing ile dijital imzalı yükleyici.",
        p2_f1: "YOLO format (bbox + polygon) desteği",
        p2_f2: "Windows + macOS çoklu platform",
        p2_f3: "Dijital imzalı yükleyici & Gatekeeper uyumlu",
        p3_desc: "YOLO modelinin nasıl öğrendiğini katman katman gösteren görselleştirme aracı. Feature map'ler, Grad-CAM ısı haritaları, konvolüsyon filtreleri ve t-SNE gömme analizi. Dahili uzman sistem ile model eğitim koçu.",
        p3_f1: "4 farklı görselleştirme modu",
        p3_f2: "Grad-CAM: Model nereye bakıyor?",
        p3_f3: "Kural tabanlı yapay zeka eğitim koçu",
        p4_desc: "YOLO model eğitimi ve inference süreçlerini tek panelden yöneten masaüstü uygulaması. Gerçek zamanlı GPU/VRAM/CPU izleme, eğitim logları ve toplu nesne tespiti. Eğitim ve tespit tek arayüzde.",
        p4_f1: "Gerçek zamanlı GPU/VRAM/CPU izleme",
        p4_f2: "Eğitim ve toplu tespit tek panelde",
        p4_f3: "Sınıf filtresi ve önizleme galerisi",
        tech_tag: "// TEKNOLOJİLER",
        tech_title_1: "Kullandığım",
        tech_title_2: "araçlar",
        tc_dl: "Derin Öğrenme",
        tc_od: "Nesne Tespiti",
        tc_prog: "Programlama",
        tc_ip: "Görüntü İşleme",
        tc_desktop: "Masaüstü Arayüzü",
        tc_web: "Web Sunucusu",
        tc_vc: "Versiyon Kontrol",
        contact_tag: "// İLETİŞİM",
        contact_title_1: "Birlikte",
        contact_title_2: "çalışalım",
        contact_text: "Yeni projeler, iş birlikleri veya sadece merhaba demek için bana ulaşabilirsiniz.",
        contact_email: "İletişime geç",
        typed_phrases: [
            "Nesne tespiti & plaka tanıma",
            "YOLO model eğitimi & ince ayar",
            "Veri etiketleme araçları geliştirme",
            "Model görselleştirme & analiz",
            "TEKNOFEST yarışma projeleri"
        ]
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_tech: "Technologies",
        nav_contact: "Contact",
        hero_badge: "AI & Computer Vision Developer",
        hero_greeting: "Hello, I'm",
        hero_subtitle: "I solve real-world problems with deep learning models.",
        hero_cta: "View Projects",
        stat_projects: "Projects",
        stat_tech: "Technologies",
        stat_lines: "Lines of Code",
        about_tag: "// ABOUT",
        about_title_1: "Real solutions with",
        about_title_2: "artificial intelligence",
        about_p1: "I work in Computer Vision and deep learning. I develop YOLO-based object detection models, image processing pipelines and data annotation tools.",
        about_p2: "I participate in TEKNOFEST competitions and train custom models for military target detection. I manage the entire pipeline from development to deployment.",
        hl1_title: "Real-Time Detection",
        hl1_desc: "Live object detection in video streams",
        hl2_title: "Desktop Applications",
        hl2_desc: "Cross-platform native applications",
        hl3_title: "Model Training",
        hl3_desc: "YOLO fine-tuning with custom datasets",
        proj_tag: "// PROJECTS",
        proj_title_1: "Selected",
        proj_title_2: "works",
        p1_title: "License Plate Detection",
        p1_desc: "Real-time Automatic Number Plate Recognition (ANPR) system. An end-to-end solution that detects vehicle plates in video streams, reads them with OCR and saves to database. Two-stage pipeline: first model detects the plate, second model reads the characters.",
        p1_f1: "Live camera / video file support",
        p1_f2: "Two-stage YOLO + OCR pipeline",
        p1_f3: "Flask web interface + Tkinter desktop",
        source_code: "Source Code",
        p2_desc: "YOLO format data annotation tool. Bounding box and polygon annotation support, class management, fast labeling with keyboard shortcuts. Native build for Windows and macOS. Code-signed installer.",
        p2_f1: "YOLO format (bbox + polygon) support",
        p2_f2: "Windows + macOS cross-platform",
        p2_f3: "Code-signed installer & Gatekeeper compatible",
        p3_desc: "A visualization toolkit that shows how YOLO models learn, layer by layer. Feature maps, Grad-CAM heatmaps, convolution filters and t-SNE embedding analysis. Built-in expert system as a model training coach.",
        p3_f1: "4 different visualization modes",
        p3_f2: "Grad-CAM: Where does the model look?",
        p3_f3: "Rule-based AI training coach",
        p4_desc: "Desktop application for managing YOLO model training and inference from a single panel. Real-time GPU/VRAM/CPU monitoring, training logs and batch object detection. Training and detection in one interface.",
        p4_f1: "Real-time GPU/VRAM/CPU monitoring",
        p4_f2: "Training and batch detection in one panel",
        p4_f3: "Class filter and preview gallery",
        tech_tag: "// TECHNOLOGIES",
        tech_title_1: "Tools",
        tech_title_2: "I use",
        tc_dl: "Deep Learning",
        tc_od: "Object Detection",
        tc_prog: "Programming",
        tc_ip: "Image Processing",
        tc_desktop: "Desktop UI",
        tc_web: "Web Backend",
        tc_vc: "Version Control",
        contact_tag: "// CONTACT",
        contact_title_1: "Let's work",
        contact_title_2: "together",
        contact_text: "Feel free to reach out for new projects, collaborations, or just to say hello.",
        contact_email: "Get in touch",
        typed_phrases: [
            "Object detection & plate recognition",
            "YOLO model training & fine-tuning",
            "Data annotation tool development",
            "Model visualization & analysis",
            "TEKNOFEST competition projects"
        ]
    }
};

let currentLang = 'tr';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Update lang switch active state
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update page title
    document.title = lang === 'tr'
        ? 'Enes Soydan | Yapay Zeka & Bilgisayarlı Görme'
        : 'Enes Soydan | AI & Computer Vision';

    // Restart typed text with new phrases
    restartTypedText();
}


// --- Neural Network Canvas Animation ---
(function() {
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, particles, mouse;

    mouse = { x: -1000, y: -1000 };

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                const force = (150 - dist) / 150;
                this.vx += (dx / dist) * force * 0.02;
                this.vy += (dy / dist) * force * 0.02;
            }

            this.vx *= 0.99;
            this.vy *= 0.99;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${currentThemeRgb},${this.opacity})`;
            ctx.fill();
        }
    }

    function init() {
        resize();
        const count = Math.min(Math.floor((width * height) / 12000), 120);
        particles = Array.from({ length: count }, () => new Particle());
    }

    function drawConnections() {
        const maxDist = 140;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < maxDist) {
                    const opacity = (1 - dist / maxDist) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${currentThemeRgb},${opacity})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        const grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.6);
        grad.addColorStop(0, `rgba(${currentThemeRgb},0.02)`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        if (particles) {
            const count = Math.min(Math.floor((width * height) / 12000), 120);
            while (particles.length < count) particles.push(new Particle());
            while (particles.length > count) particles.pop();
        }
    });

    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    init();
    animate();
})();


// --- Cursor Glow ---
(function() {
    const glow = document.getElementById('cursorGlow');
    if (!glow) return;

    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function animateGlow() {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;
        glow.style.left = currentX + 'px';
        glow.style.top = currentY + 'px';
        requestAnimationFrame(animateGlow);
    }

    animateGlow();

    if ('ontouchstart' in window) {
        glow.style.display = 'none';
    }
})();


// --- Navigation ---
(function() {
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active',
                        link.dataset.section === entry.target.id);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s));

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
})();


// --- Language Switch ---
(function() {
    const langSwitch = document.getElementById('langSwitch');
    if (!langSwitch) return;

    langSwitch.addEventListener('click', (e) => {
        const option = e.target.closest('.lang-option');
        if (!option || option.classList.contains('active')) return;
        setLanguage(option.dataset.lang);
    });
})();




// --- Scroll Reveal ---
(function() {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const nonHeroReveals = Array.from(reveals).filter(el => !el.closest('.hero'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    nonHeroReveals.forEach(el => observer.observe(el));
})();


// --- Typed Text Effect ---
let typedTimeout = null;

function restartTypedText() {
    const el = document.getElementById('typedText');
    if (!el) return;

    if (typedTimeout) clearTimeout(typedTimeout);
    el.textContent = '';

    const phrases = translations[currentLang].typed_phrases;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = phrases[phraseIndex];
        let speed;

        if (isDeleting) {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            speed = 30;
        } else {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            speed = 60;
        }

        if (!isDeleting && charIndex === current.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 500;
        }

        typedTimeout = setTimeout(type, speed);
    }

    typedTimeout = setTimeout(type, 300);
}

// Initial start
setTimeout(() => restartTypedText(), 1000);


// --- Counter Animation ---
(function() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));

    function animateCounter(el, target) {
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            if (target >= 1000) {
                el.textContent = current.toLocaleString('tr-TR');
            } else {
                el.textContent = current;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                if (target >= 1000) {
                    el.textContent = target.toLocaleString('tr-TR');
                } else {
                    el.textContent = target;
                }
            }
        }

        requestAnimationFrame(update);
    }
})();


// --- Smooth Scroll ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
