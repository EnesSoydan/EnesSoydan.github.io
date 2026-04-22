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


// --- CNN Computation Background ---
// Conceptually: a never-ending convolutional network flowing from right to left.
// Layers spawn on the right, scroll leftward, and retire on the left.
// Neurons in adjacent layers exchange animated "values" (packets) with weights;
// when a packet arrives at a neuron, the neuron flashes white and activation updates.
// Active neurons fire new packets downstream → chain reaction.
(function() {
    const canvas = document.getElementById('cnnCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, DPR;
    const LAYER_GAP = 230;           // px between consecutive layers
    const SCROLL_SPEED = 14;         // px/sec leftward drift
    const NEURON_R = 7;
    const LAYER_TYPES = ['Conv', 'ReLU', 'Pool', 'Conv', 'BN', 'Conv', 'FC', 'Softmax'];
    let typeCursor = 0;

    let layers = [];
    let packets = [];
    let layerIdCounter = 0;
    let lastTime = performance.now();
    let rafId = null;

    function resize() {
        DPR = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width  = Math.floor(W * DPR);
        canvas.height = Math.floor(H * DPR);
        canvas.style.width  = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function makeLayer(x) {
        const count = 4 + Math.floor(Math.random() * 4); // 4..7 neurons
        const padding = Math.max(60, H * 0.12);
        const usable = H - padding * 2;
        const step = count > 1 ? usable / (count - 1) : 0;
        const neurons = [];
        for (let i = 0; i < count; i++) {
            neurons.push({
                y: padding + i * step + (Math.random() - 0.5) * 12,
                activation: Math.random() * 0.4,
                glow: 0,            // 0..1, decays
                fireCooldown: 0     // ms, before it can fire again
            });
        }
        const type = LAYER_TYPES[typeCursor % LAYER_TYPES.length];
        typeCursor++;
        return {
            id: layerIdCounter++,
            x,
            neurons,
            type,
            // random "filter grid" shown below label for Conv layers
            kernel: (type === 'Conv') ? randomKernel() : null
        };
    }

    function randomKernel() {
        // 3x3 grid of random small values
        const k = [];
        for (let i = 0; i < 9; i++) k.push((Math.random() * 2 - 1));
        return k;
    }

    function initLayers() {
        layers = [];
        packets = [];
        typeCursor = 0;
        let x = -LAYER_GAP * 0.5;
        while (x < W + LAYER_GAP * 2) {
            layers.push(makeLayer(x));
            x += LAYER_GAP;
        }
    }

    function layerById(id) {
        for (let i = 0; i < layers.length; i++) if (layers[i].id === id) return layers[i];
        return null;
    }

    function spawnPacket(srcLayer, srcIdx, dstLayer, dstIdx) {
        if (!srcLayer || !dstLayer) return;
        if (!srcLayer.neurons[srcIdx] || !dstLayer.neurons[dstIdx]) return;
        const weight = (Math.random() * 2 - 1);
        const inputVal = srcLayer.neurons[srcIdx].activation;
        // value propagated (simple w*x squashed to [0,1])
        let raw = weight * inputVal + (Math.random() * 0.2 - 0.1);
        const outVal = 1 / (1 + Math.exp(-raw * 3));   // sigmoid-ish
        packets.push({
            srcLayerId: srcLayer.id,
            dstLayerId: dstLayer.id,
            srcIdx, dstIdx,
            t: 0,
            duration: 900 + Math.random() * 700,
            value: outVal,
            weight: weight
        });
    }

    function fireFromLayer(layerIdx, fanout = 1) {
        if (layerIdx + 1 >= layers.length) return;
        const src = layers[layerIdx];
        const dst = layers[layerIdx + 1];
        if (!src || !dst) return;
        const srcIdx = Math.floor(Math.random() * src.neurons.length);
        // fire to `fanout` distinct destinations
        const picks = new Set();
        while (picks.size < Math.min(fanout, dst.neurons.length)) {
            picks.add(Math.floor(Math.random() * dst.neurons.length));
        }
        picks.forEach(dstIdx => spawnPacket(src, srcIdx, dst, dstIdx));
    }

    function fireFromNeuron(layerIdx, srcIdx) {
        if (layerIdx + 1 >= layers.length) return;
        const src = layers[layerIdx];
        const dst = layers[layerIdx + 1];
        if (!src || !dst) return;
        const fanout = 1 + Math.floor(Math.random() * 2);
        const picks = new Set();
        while (picks.size < Math.min(fanout, dst.neurons.length)) {
            picks.add(Math.floor(Math.random() * dst.neurons.length));
        }
        picks.forEach(dstIdx => spawnPacket(src, srcIdx, dst, dstIdx));
    }

    function tick(now) {
        const dt = Math.min(now - lastTime, 60);
        lastTime = now;

        // Scroll layers leftward
        const dx = SCROLL_SPEED * dt / 1000;
        for (const l of layers) l.x -= dx;

        // Drop off-screen layers on the left
        while (layers.length && layers[0].x < -LAYER_GAP * 0.8) {
            layers.shift();
        }
        // Spawn new layers on the right
        while (layers.length && layers[layers.length - 1].x < W + LAYER_GAP) {
            const lastX = layers[layers.length - 1].x;
            layers.push(makeLayer(lastX + LAYER_GAP));
        }

        // Advance packets
        for (let i = packets.length - 1; i >= 0; i--) {
            const p = packets[i];
            p.t += dt;
            if (p.t >= p.duration) {
                // Activate destination neuron
                const dstLayer = layerById(p.dstLayerId);
                if (dstLayer && dstLayer.neurons[p.dstIdx]) {
                    const n = dstLayer.neurons[p.dstIdx];
                    n.glow = 1;
                    n.activation = p.value;
                    // Chain fire: find layer index
                    if (n.fireCooldown <= 0) {
                        const dstLayerIdx = layers.indexOf(dstLayer);
                        if (dstLayerIdx >= 0) {
                            // delay slightly by scheduling with small negative start t?
                            // simplest: spawn immediately
                            setTimeout(() => {
                                if (layers.indexOf(dstLayer) >= 0) {
                                    fireFromNeuron(dstLayerIdx, p.dstIdx);
                                }
                            }, 120 + Math.random() * 180);
                            n.fireCooldown = 500 + Math.random() * 400;
                        }
                    }
                }
                packets.splice(i, 1);
            }
        }

        // Decay glow + cooldowns
        for (const l of layers) {
            for (const n of l.neurons) {
                n.glow = Math.max(0, n.glow - dt / 900);
                n.fireCooldown = Math.max(0, n.fireCooldown - dt);
            }
        }

        // Periodic spontaneous firing from leftmost-ish layers (keeps chain alive)
        if (Math.random() < dt / 450) {
            const idx = Math.floor(Math.random() * Math.max(1, layers.length - 1));
            fireFromLayer(idx, 1 + Math.floor(Math.random() * 2));
        }

        render();
        rafId = requestAnimationFrame(tick);
    }

    function render() {
        ctx.clearRect(0, 0, W, H);

        // Draw connections (consecutive layers)
        for (let li = 0; li < layers.length - 1; li++) {
            const a = layers[li];
            const b = layers[li + 1];
            if (b.x < -40 || a.x > W + 40) continue;
            for (const na of a.neurons) {
                for (const nb of b.neurons) {
                    const glowBoost = Math.min(na.glow, nb.glow);
                    const opacity = 0.035 + glowBoost * 0.18;
                    ctx.beginPath();
                    ctx.moveTo(a.x, na.y);
                    ctx.lineTo(b.x, nb.y);
                    ctx.strokeStyle = `rgba(${currentThemeRgb},${opacity})`;
                    ctx.lineWidth = 0.5 + glowBoost * 0.6;
                    ctx.stroke();
                }
            }
        }

        // Draw packets (travelling values)
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        for (const p of packets) {
            const a = layerById(p.srcLayerId);
            const b = layerById(p.dstLayerId);
            if (!a || !b) continue;
            const na = a.neurons[p.srcIdx];
            const nb = b.neurons[p.dstIdx];
            if (!na || !nb) continue;

            const t = p.t / p.duration;
            // ease-in-out
            const et = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            const x = a.x + (b.x - a.x) * et;
            const y = na.y + (nb.y - na.y) * et;

            // trail
            const tailT = Math.max(0, et - 0.18);
            const tx = a.x + (b.x - a.x) * tailT;
            const ty = na.y + (nb.y - na.y) * tailT;
            const grad = ctx.createLinearGradient(tx, ty, x, y);
            grad.addColorStop(0, `rgba(${currentThemeRgb},0)`);
            grad.addColorStop(0.6, `rgba(${currentThemeRgb},0.5)`);
            grad.addColorStop(1, `rgba(255,255,255,0.95)`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(x, y);
            ctx.stroke();

            // head dot with glow
            ctx.shadowColor = `rgba(${currentThemeRgb},0.9)`;
            ctx.shadowBlur = 12;
            ctx.beginPath();
            ctx.arc(x, y, 2.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,0.95)`;
            ctx.fill();
            ctx.shadowBlur = 0;

            // value label (floating)
            const labelAlpha = Math.min(1, Math.sin(t * Math.PI) * 1.4);
            ctx.fillStyle = `rgba(255,255,255,${0.55 * labelAlpha})`;
            ctx.fillText(p.value.toFixed(2), x, y - 9);

            // mid-flight tiny computation hint: w=... (shown only near middle)
            if (t > 0.3 && t < 0.7) {
                const mAlpha = 1 - Math.abs(t - 0.5) * 2;
                ctx.font = '8px "JetBrains Mono", monospace';
                ctx.fillStyle = `rgba(${currentThemeRgb}, ${0.7 * mAlpha})`;
                ctx.fillText(`w=${p.weight.toFixed(2)}`, x, y + 13);
                ctx.font = '10px "JetBrains Mono", monospace';
            }
        }

        // Draw neurons
        for (const l of layers) {
            for (const n of l.neurons) {
                // Halo for glowing neurons
                if (n.glow > 0.04) {
                    const haloR = NEURON_R + 22 * n.glow;
                    const hg = ctx.createRadialGradient(l.x, n.y, 0, l.x, n.y, haloR);
                    hg.addColorStop(0, `rgba(255,255,255,${0.45 * n.glow})`);
                    hg.addColorStop(0.4, `rgba(${currentThemeRgb},${0.35 * n.glow})`);
                    hg.addColorStop(1, 'transparent');
                    ctx.fillStyle = hg;
                    ctx.beginPath();
                    ctx.arc(l.x, n.y, haloR, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Body — gradient core
                const g = ctx.createRadialGradient(l.x - 2, n.y - 2, 0, l.x, n.y, NEURON_R);
                const w = n.glow; // 0..1
                g.addColorStop(0, `rgba(255,255,255,${0.55 + 0.45 * w})`);
                g.addColorStop(1, `rgba(${currentThemeRgb},${0.28 + 0.5 * w})`);
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(l.x, n.y, NEURON_R, 0, Math.PI * 2);
                ctx.fill();

                // Ring
                ctx.strokeStyle = `rgba(${currentThemeRgb},${0.45 + 0.5 * w})`;
                ctx.lineWidth = 1;
                ctx.stroke();

                // Activation number inside
                ctx.font = '8px "JetBrains Mono", monospace';
                ctx.textAlign = 'center';
                ctx.fillStyle = `rgba(255,255,255,${0.3 + 0.6 * w})`;
                ctx.fillText(n.activation.toFixed(2), l.x, n.y + 2.5);
            }

            // Layer label at top
            ctx.font = '9px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';
            ctx.fillStyle = `rgba(${currentThemeRgb},0.45)`;
            ctx.fillText(`[${l.type}]`, l.x, Math.max(18, l.neurons[0].y - 24));

            // Kernel grid for Conv layers (below the layer) — small 3x3 viz
            if (l.kernel) {
                const cellSize = 4;
                const totalSize = 3 * cellSize + 2; // with gaps
                const startX = l.x - totalSize / 2;
                const bottomY = l.neurons[l.neurons.length - 1].y + 18;
                for (let i = 0; i < 9; i++) {
                    const col = i % 3;
                    const row = Math.floor(i / 3);
                    const v = l.kernel[i]; // -1..1
                    const intensity = Math.abs(v);
                    const isPos = v > 0;
                    ctx.fillStyle = isPos
                        ? `rgba(${currentThemeRgb},${0.15 + intensity * 0.5})`
                        : `rgba(255,255,255,${0.08 + intensity * 0.25})`;
                    ctx.fillRect(
                        startX + col * (cellSize + 1),
                        bottomY + row * (cellSize + 1),
                        cellSize, cellSize
                    );
                }
            }
        }
    }

    function start() {
        resize();
        initLayers();
        lastTime = performance.now();
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(tick);
    }

    window.addEventListener('resize', () => {
        // Keep continuity — only resize, re-spread layer y's
        const prevH = H;
        resize();
        // Re-distribute neuron y positions proportionally
        for (const l of layers) {
            const padding = Math.max(60, H * 0.12);
            const usable = H - padding * 2;
            const count = l.neurons.length;
            const step = count > 1 ? usable / (count - 1) : 0;
            l.neurons.forEach((n, i) => {
                n.y = padding + i * step;
            });
        }
    });

    // Pause while tab hidden (saves battery)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = null;
        } else if (!rafId) {
            lastTime = performance.now();
            rafId = requestAnimationFrame(tick);
        }
    });

    start();
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


// --- Scroll Progress Bar ---
(function() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    function update() {
        const h = document.documentElement;
        const scrolled = h.scrollTop;
        const max = h.scrollHeight - h.clientHeight;
        const pct = max > 0 ? (scrolled / max) * 100 : 0;
        bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
})();


// --- Card Tilt + Spotlight ---
(function() {
    const cards = document.querySelectorAll('[data-tilt]');
    if (!cards.length) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const max = 6; // degrees

    cards.forEach(card => {
        let raf = null;
        let targetRX = 0, targetRY = 0, curRX = 0, curRY = 0;
        let mx = 50, my = 50;

        function onMove(e) {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top)  / r.height;
            targetRY = (px - 0.5) * max * 2;   // rotateY
            targetRX = -(py - 0.5) * max * 2;  // rotateX
            mx = px * 100;
            my = py * 100;
            if (!raf) raf = requestAnimationFrame(tick);
        }

        function onLeave() {
            targetRX = 0;
            targetRY = 0;
            if (!raf) raf = requestAnimationFrame(tick);
        }

        function tick() {
            curRX += (targetRX - curRX) * 0.12;
            curRY += (targetRY - curRY) * 0.12;
            card.style.transform =
                `perspective(1100px) rotateX(${curRX.toFixed(2)}deg) rotateY(${curRY.toFixed(2)}deg) translateY(-4px)`;
            card.style.setProperty('--mx', mx + '%');
            card.style.setProperty('--my', my + '%');

            if (Math.abs(targetRX - curRX) > 0.05 || Math.abs(targetRY - curRY) > 0.05) {
                raf = requestAnimationFrame(tick);
            } else {
                raf = null;
                if (targetRX === 0 && targetRY === 0) {
                    card.style.transform = '';
                }
            }
        }

        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);
    });
})();


// --- Parallax for Aurora / Orbs ---
(function() {
    const blobs = document.querySelectorAll('.aurora-blob');
    const orbs  = document.querySelectorAll('.orb');
    if (!blobs.length && !orbs.length) return;

    let ty = 0;

    function onScroll() {
        ty = window.scrollY;
        blobs.forEach((b, i) => {
            const speed = (i + 1) * 0.04;
            b.style.translate = `0 ${ty * speed}px`;
        });
        orbs.forEach((o, i) => {
            const speed = (i % 3 + 1) * 0.08;
            o.style.translate = `0 ${-ty * speed}px`;
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
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
