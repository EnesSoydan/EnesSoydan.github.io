/* ==========================================================
   Enes Soydan — Portfolio
   TR/EN language, mobile menu, active section in nav.
   ========================================================== */

const translations = {
    tr: {
        _title: "Enes Soydan | Yapay Zeka & Bilgisayarlı Görme",
        skip: "İçeriğe geç",
        nav_home: "Ana sayfa",
        nav_projects: "Projeler",
        nav_about: "Hakkımda",
        nav_tools: "Araçlar",
        nav_contact: "İletişim",
        hero_eyebrow: "Bilgisayarlı Görme · Yapay Zeka",
        hero_lede: "Kameranın gördüğünü anlamlı veriye dönüştüren sistemler geliştiriyorum: nesne tespiti, model eğitimi ve bu modelleri gerçekten kullanılabilir kılan araçlar.",
        cta_projects: "Projeleri incele",
        cta_contact: "İletişime geç",
        stat_projects: "Proje",
        stat_open: "Açık kaynak",
        stat_focus: "Odak",
        card_contact: "İletişim",
        email: "E-posta",

        proj_title: "Seçilmiş çalışmalar",
        proj_note: "Görselin üzerine gelince ikinci kare görünür.",
        fig: "Şekil",
        source_code: "Kaynak kod",
        private_repo: "Repo özel",

        p1_title: "Plaka Tespit Uygulaması",
        p1_cap: "Canlı tespit / uygulama arayüzü",
        p1_desc: "Gerçek zamanlı otomatik plaka tanıma sistemi (ANPR). Video akışında araçların plakalarını tespit edip, OCR ile okuyan ve veritabanına kaydeden uçtan uca bir çözüm. İki aşamalı pipeline: ilk model plakayı tespit eder, ikinci model karakterleri okur.",
        p1_f1: "Canlı kamera / video dosyası desteği",
        p1_f2: "İki aşamalı YOLO + OCR pipeline",
        p1_f3: "Flask web arayüzü + Tkinter masaüstü",

        p2_cap: "Etiketleme ekranı / uygulama simgesi",
        p2_desc: "YOLO formatında veri etiketleme aracı. Bounding box ve polygon annotation desteği, sınıf yönetimi, kolay klavye kısayolları ile hızlı etiketleme. Windows ve macOS için native build. Code signing ile dijital imzalı yükleyici.",
        p2_f1: "YOLO format (bbox + polygon) desteği",
        p2_f2: "Windows + macOS çoklu platform",
        p2_f3: "Dijital imzalı yükleyici & Gatekeeper uyumlu",

        p3_cap: "Grad-CAM / t-SNE gömmeleri",
        p3_desc: "YOLO modelinin nasıl öğrendiğini katman katman gösteren görselleştirme aracı. Feature map'ler, Grad-CAM ısı haritaları, konvolüsyon filtreleri ve t-SNE gömme analizi. Dahili uzman sistem ile model eğitim koçu.",
        p3_f1: "4 farklı görselleştirme modu",
        p3_f2: "Grad-CAM: Model nereye bakıyor?",
        p3_f3: "Kural tabanlı yapay zeka eğitim koçu",

        p4_cap: "Eğitim paneli / toplu tespit",
        p4_desc: "YOLO model eğitimi ve inference süreçlerini tek panelden yöneten masaüstü uygulaması. Gerçek zamanlı GPU/VRAM/CPU izleme, eğitim logları ve toplu nesne tespiti. Eğitim ve tespit tek arayüzde.",
        p4_f1: "Gerçek zamanlı GPU/VRAM/CPU izleme",
        p4_f2: "Eğitim ve toplu tespit tek panelde",
        p4_f3: "Sınıf filtresi ve önizleme galerisi",

        p5_title: "Temassız Parmak İzi Kalite Analizi",
        p5_cap: "Canlı OBB tespiti / kalite analizi hattı",
        p5_desc: "Telefon kamerasından alınan parmak ucu görüntülerini YOLO OBB ile tespit eden; homografiyle kanonik ROI'ye hizalayıp segmentation, ridge/minutiae analizi ve yerel 1:N eşleştirme yapan mobil araştırma prototipi.",
        p5_f1: "Cihaz üzerinde YOLO OBB + ONNX inference",
        p5_f2: "Ridge, skeleton ve minutiae kalite analizi",
        p5_f3: "Şifreli yerel enrollment ve 1:N eşleştirme",

        p6_title: "İSTİKLAL — TEKNOFEST Hava Savunma Sistemi",
        p6_cap: "Balon tespiti / hava aracı takibi",
        p6_desc: "TEKNOFEST hava savunma senaryoları için geliştirilen, canlı kamerada hava araçları ve balonları tespit edip takip eden komuta-kontrol sistemi. Projedeki katkım; temiz veri seti oluşturma, nesne tespiti modelleri, makine öğrenmesi ve OpenCV tabanlı görüntü/renk filtreleriydi.",
        p6_f1: "YOLO ile çok sınıflı gerçek zamanlı nesne tespiti",
        p6_f2: "Veri temizleme, etiket doğrulama ve model eğitimi",
        p6_f3: "OpenCV/HSV renk filtreleri ve hedef ayrımı",

        p7_cap: "İki aşamalı SAHI tespiti / güç puanı",
        p7_desc: "Unity 3D ile üretilen sentetik verilerden savaş gemilerini ve üzerlerindeki silah sistemlerini iki aşamalı YOLO hattıyla tespit eden masaüstü uygulaması. SAHI ile küçük donanımları bulur ve her gemi için sayısal bir güç puanı hesaplar.",
        p7_f1: "4 gemi ve 3 donanım sınıfı",
        p7_f2: "Unity ile sentetik, otomatik etiketli veri üretimi",
        p7_f3: "Gemi mAP@0.5: 0.995 · Donanım: 0.982",

        p8_title: "GeoLens — Açıklanabilir Görsel Konumlandırma",
        p8_cap: "Retrieval hattı / MSLS sonuçları",
        p8_desc: "Bir sokak fotoğrafını DINOv2 + SALAD ile 8.448 boyutlu embedding'e dönüştürüp FAISS indeksinde en benzer referansları arayan retrieval-first sistem. Koordinat tahminini haritada ve Eigen-CAM ısı haritasıyla açıklanabilir biçimde sunar.",
        p8_f1: "DINOv2 + SALAD ve FAISS benzerlik araması",
        p8_f2: "Eigen-CAM ile açıklanabilir konum tahmini",
        p8_f3: "MSLS-val: R@1: %91,9 · R@5: %96,4 · medyan 8 m",

        about_title: "Hakkımda",
        about_p1: "Merhaba, ben Enes. Bilgisayarlı görme ve derin öğrenme üzerine çalışıyorum; çoğunlukla YOLO tabanlı nesne tespiti.",
        about_p2: "Projelerimde genelde işin tamamını yapıyorum: veriyi hazırlıyorum, modeli eğitiyorum, sonra da kullanılabilmesi için bir masaüstü ya da mobil uygulamaya dönüştürüyorum. Annotie, YOLO Monitor ve YOLO Visualizer da bu sürecin parçaları için yazdığım araçlar: etiketleme, eğitimi takip etme ve modelin neye baktığını görme.",
        about_p3: "TEKNOFEST'te İSTİKLAL ekibinde veri seti hazırlama ve tespit modelleri tarafında çalıştım.",
        about_p4: "Şu sıralar gerçek zamanlı tespit, sentetik veri üretimi ve Grad-CAM, Eigen-CAM gibi açıklanabilirlik yöntemleriyle ilgileniyorum.",

        tools_title: "Araçlar",
        tg_ml: "Derin öğrenme",
        tg_cv: "Görüntü işleme",
        tg_app: "Uygulama",
        tg_tools: "Altyapı",

        contact_title: "İletişim",
        contact_text: "Yeni projeler, iş birlikleri veya sadece merhaba demek için yazabilirsiniz.",
        back_top: "Başa dön"
    },
    en: {
        _title: "Enes Soydan | AI & Computer Vision",
        skip: "Skip to content",
        nav_home: "Home",
        nav_projects: "Projects",
        nav_about: "About",
        nav_tools: "Tools",
        nav_contact: "Contact",
        hero_eyebrow: "Computer Vision · AI",
        hero_lede: "I build systems that turn what a camera sees into meaningful data: object detection, model training, and the tools that make those models actually usable.",
        cta_projects: "View projects",
        cta_contact: "Get in touch",
        stat_projects: "Projects",
        stat_open: "Open source",
        stat_focus: "Focus",
        card_contact: "Contact",
        email: "Email",

        proj_title: "Selected work",
        proj_note: "Hover an image to see a second frame.",
        fig: "Fig.",
        source_code: "Source code",
        private_repo: "Private repository",

        p1_title: "License Plate Detection",
        p1_cap: "Live detection / application UI",
        p1_desc: "Real-time Automatic Number Plate Recognition (ANPR) system. An end-to-end solution that detects vehicle plates in video streams, reads them with OCR and saves to database. Two-stage pipeline: first model detects the plate, second model reads the characters.",
        p1_f1: "Live camera / video file support",
        p1_f2: "Two-stage YOLO + OCR pipeline",
        p1_f3: "Flask web interface + Tkinter desktop",

        p2_cap: "Labeling view / app icon",
        p2_desc: "YOLO format data annotation tool. Bounding box and polygon annotation support, class management, fast labeling with keyboard shortcuts. Native build for Windows and macOS. Code-signed installer.",
        p2_f1: "YOLO format (bbox + polygon) support",
        p2_f2: "Windows + macOS cross-platform",
        p2_f3: "Code-signed installer & Gatekeeper compatible",

        p3_cap: "Grad-CAM / t-SNE embeddings",
        p3_desc: "A visualization toolkit that shows how YOLO models learn, layer by layer. Feature maps, Grad-CAM heatmaps, convolution filters and t-SNE embedding analysis. Built-in expert system as a model training coach.",
        p3_f1: "4 different visualization modes",
        p3_f2: "Grad-CAM: Where does the model look?",
        p3_f3: "Rule-based AI training coach",

        p4_cap: "Training panel / batch detection",
        p4_desc: "Desktop application for managing YOLO model training and inference from a single panel. Real-time GPU/VRAM/CPU monitoring, training logs and batch object detection. Training and detection in one interface.",
        p4_f1: "Real-time GPU/VRAM/CPU monitoring",
        p4_f2: "Training and batch detection in one panel",
        p4_f3: "Class filter and preview gallery",

        p5_title: "Contactless Fingerprint Quality Analysis",
        p5_cap: "Live OBB detection / quality pipeline",
        p5_desc: "A mobile research prototype that detects fingertips from a phone camera with YOLO OBB, maps them to a canonical ROI through homography, and performs segmentation, ridge/minutiae quality analysis and local 1:N matching.",
        p5_f1: "On-device YOLO OBB + ONNX inference",
        p5_f2: "Ridge, skeleton and minutiae quality analysis",
        p5_f3: "Encrypted local enrollment and 1:N matching",

        p6_title: "İSTİKLAL — TEKNOFEST Air Defense System",
        p6_cap: "Balloon detection / aircraft tracking",
        p6_desc: "A command-and-control system developed for TEKNOFEST air-defense scenarios that detects and tracks aircraft and balloons from a live camera. My contribution focused on clean dataset creation, object detection models, machine learning, and OpenCV-based image and color filters.",
        p6_f1: "Real-time multi-class object detection with YOLO",
        p6_f2: "Data cleaning, label validation and model training",
        p6_f3: "OpenCV/HSV color filters and target classification",

        p7_cap: "Two-stage SAHI detection / power rating",
        p7_desc: "A desktop application that detects warships and their weapon systems from Unity 3D synthetic data with a two-stage YOLO pipeline. It uses SAHI to locate small equipment and calculates a numerical power rating for each ship.",
        p7_f1: "4 ship classes and 3 equipment classes",
        p7_f2: "Synthetic, automatically labeled data from Unity",
        p7_f3: "Ship mAP@0.5: 0.995 · Equipment: 0.982",

        p8_title: "GeoLens — Explainable Visual Geo-Localization",
        p8_cap: "Retrieval pipeline / MSLS results",
        p8_desc: "A retrieval-first system that converts a street photo into an 8,448-dimensional embedding with DINOv2 + SALAD and searches a FAISS index for the most similar references. It explains the coordinate prediction on a map and with an Eigen-CAM heatmap.",
        p8_f1: "DINOv2 + SALAD with FAISS similarity search",
        p8_f2: "Explainable location prediction with Eigen-CAM",
        p8_f3: "MSLS-val: R@1 91.9% · R@5 96.4% · median 8 m",

        about_title: "About",
        about_p1: "Hi, I'm Enes. I work on computer vision and deep learning, mostly YOLO-based object detection.",
        about_p2: "In my projects I usually handle the whole thing: I prepare the data, train the model, and then turn it into a desktop or mobile app so it can actually be used. Annotie, YOLO Monitor and YOLO Visualizer are tools I wrote for parts of that process: labeling, tracking training, and seeing what the model looks at.",
        about_p3: "At TEKNOFEST I worked on dataset preparation and detection models in the İSTİKLAL team.",
        about_p4: "Lately I've been looking into real-time detection, synthetic data generation, and explainability methods like Grad-CAM and Eigen-CAM.",

        tools_title: "Tools",
        tg_ml: "Deep learning",
        tg_cv: "Image processing",
        tg_app: "Applications",
        tg_tools: "Infrastructure",

        contact_title: "Contact",
        contact_text: "Feel free to reach out for new projects, collaborations, or just to say hello.",
        back_top: "Back to top"
    }
};

const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* ignore */ } }
};

// --- Language ---
function setLanguage(lang) {
    const t = translations[lang] || translations.tr;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = t[el.dataset.i18n];
        if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const active = btn.dataset.lang === lang;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
    });

    document.documentElement.lang = lang;
    document.title = t._title;
    storage.set('portfolio-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const savedLang = storage.get('portfolio-lang');
if (savedLang && savedLang !== 'tr' && translations[savedLang]) setLanguage(savedLang);

// --- Mobile menu ---
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

function closeMenu() {
    nav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// --- Active section in nav ---
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = ['projects', 'about', 'tools', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

function updateActiveLink() {
    const probe = window.scrollY + window.innerHeight * 0.35;
    let current = 'top';
    for (const section of sections) {
        if (section.offsetTop <= probe) current = section.id;
    }
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = 'contact';
    navLinks.forEach(link => link.classList.toggle('is-active', link.dataset.section === current));
}

let ticking = false;
window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateActiveLink(); ticking = false; });
}, { passive: true });
updateActiveLink();

// --- Footer year ---
document.getElementById('year').textContent = new Date().getFullYear();
