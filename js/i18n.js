(function() {
  'use strict';

  const translations = {
    en: {
      // Navigation
      'nav-services': 'Services',
      'nav-projects': 'Projects',
      'nav-esg': 'ESG',
      'nav-awards': 'Awards',
      'nav-whistleblower': 'Whistleblower',
      'nav-digital': 'UBBIM Digital',
      'nav-contact': 'Contact Us',
      'nav-services-mobile': 'Services',
      'nav-projects-mobile': 'Projects',
      'nav-esg-mobile': 'ESG',
      'nav-awards-mobile': 'Awards',
      'nav-digital-mobile': 'UBBIM Digital',
      'nav-contact-mobile': 'Contact Us',

      // Hero
      'hero-badge': 'Since 2004 — Over 20 Years of Excellence',
      'hero-title-1': 'Integrated Solutions',
      'hero-title-2': 'for the Built Environment',
      'hero-desc-1': 'From construction excellence to cutting-edge digital innovation, ',
      'hero-desc-strong': 'UBBIM delivers comprehensive services',
      'hero-desc-2': ' that shape the future of industries.',
      'hero-cta-1': 'Explore Our Services',
      'hero-cta-2': 'View Projects',
      'hero-scroll': 'Scroll',

      // Marquee
      'marquee-1': 'DESIGN & BUILD',
      'marquee-2': 'DIGITAL SOLUTIONS',
      'marquee-3': '3D SCANNING',
      'marquee-4': 'AERIAL ANALYTICS',

      // Video
      'video-label': 'Discover UBBIM',
      'video-title': 'Our Story in Motion',

      // About
      'about-label': 'About Us',
      'about-title-1': 'Experience, Expertise, and a',
      'about-title-2': 'Commitment to Excellence',
      'about-card-1': 'UBBIM is a leading construction project management company with over 20 years of experience in the industry. We provide comprehensive solutions for construction projects, including design-build services, project management, progress monitoring, and data analytics.',
      'about-card-2': 'At UBBIM, we are continuously looking for ways to improve our services through technology adoption. We utilize advanced digital technologies such as Building Information Modeling (BIM), virtual reality (VR), and other digital tools to optimize project performance and delivery.',
      'about-card-3': 'Our team brings a wealth of experience and expertise to every project, providing expert guidance and support throughout the project lifecycle. We are committed to delivering projects on time, on budget, and to the highest standards of quality.',

      // Services
      'services-label': 'What We Do',
      'services-title': 'Our',
      'services-title-gradient': 'Services',
      'service-1-title': 'Built Environment Services',
      'service-1-desc': 'Our Built Environment Services encompass every phase of construction and infrastructure development, from design and build to maintenance and refurbishment. We specialize in delivering high-quality, sustainable solutions.',
      'service-2-title': 'Digital Solutions',
      'service-2-desc': 'Our Digital Solutions integrate advanced technologies like aerial analytics, 3D scanning, and virtual design coordination to transform how projects are planned, executed, and managed.',
      'service-3-title': 'Training & Development',
      'service-3-desc': 'UBBIM powers ACPM Academy — a CPD learning and development platform for ACPM members and construction professionals. Continuous training to stay ahead in the built environment.',
      'learn-more': 'Learn More',

      // Certifications
      'certs-label': 'Credentials',
      'certs-title': 'Licenses &',
      'certs-title-gradient': 'Certifications',

      // Partners
      'partners-label': 'Partners',
      'partners-title': 'We Are Trusted By',

      // Contact
      'contact-label': 'Get in Touch',
      'contact-title': 'Contact',
      'contact-title-gradient': 'Us',
      'contact-address': 'Address',
      'contact-phone': 'Phone',
      'contact-email': 'Email',

      // Footer
      'footer-tagline': 'Integrated Solutions for the Built Environment.',
      'footer-hq': 'Seremban HQ',
      'footer-penang': 'Penang',
      'footer-kl': 'Bangsar South',
      'footer-services': 'Services',
      'footer-projects': 'Projects',
      'footer-awards': 'Awards',
      'footer-contact': 'Contact',
      'footer-copyright': '© 2024 UBBIM - All Rights Reserved',

      // Dropdown
      'dropdown-built': 'Built Environment Services',
      'dropdown-digital': 'Digital Solutions',
      'dropdown-training': 'Training & Development',

      // Page headers
      'page-bes-badge': 'Services',
      'page-bes-title-1': 'Built Environment ',
      'page-bes-title-2': 'Services',
      'page-bes-subtitle': 'Comprehensive Solutions for Every Stage of Construction and Infrastructure Development',
      'page-digital-badge': 'Services',
      'page-digital-title-1': 'Digital ',
      'page-digital-title-2': 'Solutions',
      'page-digital-subtitle': 'Innovative Technology Solutions for the Built Environment',
      'page-training-badge': 'Services',
      'page-training-title-1': 'Training & ',
      'page-training-title-2': 'Development',
      'page-training-subtitle': 'Empowering Construction Professionals Through Continuous CPD Learning',
      'page-projects-badge': 'Portfolio',
      'page-projects-title-1': 'Our ',
      'page-projects-title-2': 'Projects',
      'page-projects-subtitle': 'Explore Our Success Stories in the Built Environment and Digital Innovation',
      'page-esg-badge': 'Environmental, Social & Governance',
      'page-esg-title-1': 'Building a ',
      'page-esg-title-2': 'Better Tomorrow',
      'page-esg-subtitle': 'At UBBIM, sustainability is not a buzzword — it is embedded in how we operate, how we give back, and how we govern.',
      'page-awards-badge': 'Recognition',
      'page-awards-title-1': 'Awards & ',
      'page-awards-title-2': 'Recognition',
      'page-awards-subtitle': 'At UBBIM Resources, every milestone reflects our unwavering commitment to innovation, sustainability, and digital transformation in the built environment.',

      // Toggle
      'lang-en': 'EN',
      'lang-ms': 'BM',
      'lang-label': 'Language switcher'
    },
    ms: {
      // Navigation
      'nav-services': 'Perkhidmatan',
      'nav-projects': 'Projek',
      'nav-esg': 'ESG',
      'nav-awards': 'Anugerah',
      'nav-whistleblower': 'Whistleblower',
      'nav-digital': 'UBBIM Digital',
      'nav-contact': 'Hubungi Kami',
      'nav-services-mobile': 'Perkhidmatan',
      'nav-projects-mobile': 'Projek',
      'nav-esg-mobile': 'ESG',
      'nav-awards-mobile': 'Anugerah',
      'nav-digital-mobile': 'UBBIM Digital',
      'nav-contact-mobile': 'Hubungi Kami',

      // Hero
      'hero-badge': 'Sejak 2004 — Lebih 20 Tahun Kecemerlangan',
      'hero-title-1': 'Penyelesaian Bersepadu',
      'hero-title-2': 'untuk Persekitaran Binaan',
      'hero-desc-1': 'Daripada kecemerlangan pembinaan kepada inovasi digital terkini, ',
      'hero-desc-strong': 'UBBIM menghasilkan perkhidmatan komprehensif',
      'hero-desc-2': ' yang membentuk masa depan industri.',
      'hero-cta-1': 'Terokai Perkhidmatan Kami',
      'hero-cta-2': 'Lihat Projek',
      'hero-scroll': 'Tatal',

      // Marquee
      'marquee-1': 'REKA & BINA',
      'marquee-2': 'PENYELESAIAN DIGITAL',
      'marquee-3': 'IMBASAN 3D',
      'marquee-4': 'ANALITIK UDARA',

      // Video
      'video-label': 'Temui UBBIM',
      'video-title': 'Kisah Kami dalam Gerakan',

      // About
      'about-label': 'Tentang Kami',
      'about-title-1': 'Pengalaman, kepakaran, dan',
      'about-title-2': 'Komitmen kepada Kecemerlangan',
      'about-card-1': 'UBBIM ialah syarikat pengurusan projek pembinaan terkemuka dengan pengalaman lebih 20 tahun dalam industri. Kami menyediakan penyelesaian komprehensif untuk projek pembinaan, termasuk perkhidmatan reka dan bina, pengurusan projek, pemantauan kemajuan, dan analitik data.',
      'about-card-2': 'Di UBBIM, kami sentiasa mencari cara untuk meningkatkan perkhidmatan kami melalui penggunaan teknologi. Kami menggunakan teknologi digital termaju seperti Building Information Modeling (BIM), realiti maya (VR), dan alat digital lain untuk mengoptimumkan prestasi dan penghantaran projek.',
      'about-card-3': 'Pasukan kami membawa kekayaan pengalaman dan kepakaran kepada setiap projek, memberikan panduan dan sokongan pakar sepanjang kitaran hayat projek. Kami komited untuk menghantar projek tepat pada masanya, dalam bajet, dan kepada standard kualiti tertinggi.',

      // Services
      'services-label': 'Apa yang Kami Lakukan',
      'services-title': 'Perkhidmatan',
      'services-title-gradient': 'Kami',
      'service-1-title': 'Perkhidmatan Persekitaran Binaan',
      'service-1-desc': 'Perkhidmatan Persekitaran Binaan kami merangkumi setiap fasa pembinaan dan pembangunan infrastruktur, daripada reka dan bina hingga penyelenggaraan dan pengubahsuaian. Kami pakar dalam menghasilkan penyelesaian berkualiti tinggi dan mampan.',
      'service-2-title': 'Penyelesaian Digital',
      'service-2-desc': 'Penyelesaian Digital kami mengintegrasikan teknologi termaju seperti analitik udara, imbasan 3D, dan koordinasi reka maya untuk mengubah cara projek dirancang, dilaksanakan, dan diuruskan.',
      'service-3-title': 'Latihan & Pembangunan',
      'service-3-desc': 'UBBIM memacu Akademi ACPM — platform pembelajaran dan pembangunan CPD untuk ahli ACPM dan profesional pembinaan. Latihan berterusan untuk kekal relevan dalam persekitaran binaan.',
      'learn-more': 'Ketahui Lebih Lanjut',

      // Certifications
      'certs-label': 'Kelayakan',
      'certs-title': 'Lesen &',
      'certs-title-gradient': 'Pensijilan',

      // Partners
      'partners-label': 'Rakan Kongsi',
      'partners-title': 'Kami Dipercayai Oleh',

      // Contact
      'contact-label': 'Hubungi Kami',
      'contact-title': 'Hubungi',
      'contact-title-gradient': 'Kami',
      'contact-address': 'Alamat',
      'contact-phone': 'Telefon',
      'contact-email': 'E-mel',

      // Footer
      'footer-tagline': 'Penyelesaian Bersepadu untuk Persekitaran Binaan.',
      'footer-hq': 'Ibu Pejabat Seremban',
      'footer-penang': 'Pulau Pinang',
      'footer-kl': 'Bangsar South',
      'footer-services': 'Perkhidmatan',
      'footer-projects': 'Projek',
      'footer-awards': 'Anugerah',
      'footer-contact': 'Hubungi',
      'footer-copyright': '© 2024 UBBIM - Hak Cipta Terpelihara',

      // Dropdown
      'dropdown-built': 'Perkhidmatan Persekitaran Binaan',
      'dropdown-digital': 'Penyelesaian Digital',
      'dropdown-training': 'Latihan & Pembangunan',

      // Toggle
      'lang-en': 'EN',
      'lang-ms': 'BM',
      'lang-label': 'Penukar bahasa'
    }
  };

  const STORAGE_KEY = 'ubbim-lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  function setLang(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'ms' ? 'ms' : 'en';
    document.body.classList.toggle('lang-ms', lang === 'ms');
    updateToggles();
    translatePage();
  }

  function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const text = translations[currentLang][key];
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.dataset.i18nAlt;
      const text = translations[currentLang][key];
      if (text) el.alt = text;
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.dataset.i18nTitle;
      const text = translations[currentLang][key];
      if (text) el.title = text;
    });
  }

  function updateToggles() {
    document.querySelectorAll('.lang-toggle').forEach(toggle => {
      toggle.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === currentLang);
        opt.setAttribute('aria-pressed', opt.dataset.lang === currentLang ? 'true' : 'false');
      });
    });
  }

  function createToggle() {
    const toggle = document.createElement('div');
    toggle.className = 'lang-toggle';
    toggle.setAttribute('role', 'group');
    toggle.setAttribute('aria-label', translations[currentLang]['lang-label'] || 'Language switcher');
    toggle.innerHTML =
      '<button class="lang-option" data-lang="en" aria-pressed="false">' + (translations[currentLang]['lang-en'] || 'EN') + '</button>' +
      '<button class="lang-option" data-lang="ms" aria-pressed="false">' + (translations[currentLang]['lang-ms'] || 'BM') + '</button>';
    toggle.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        setLang(btn.dataset.lang);
      });
    });
    return toggle;
  }

  function injectToggles() {
    document.querySelectorAll('nav').forEach(nav => {
      if (nav.querySelector('.lang-toggle')) return;

      const toggle = createToggle();
      const mobileBtn = nav.querySelector('#mobile-menu-btn');
      const contactBtn = nav.querySelector('a[href="#contact"]');

      if (mobileBtn && mobileBtn.parentNode) {
        mobileBtn.parentNode.insertBefore(toggle, mobileBtn);
      } else if (contactBtn && contactBtn.parentNode) {
        contactBtn.parentNode.insertBefore(toggle, contactBtn);
      } else {
        const container = nav.querySelector('.max-w-7xl > div');
        if (container) container.appendChild(toggle);
      }
    });
  }

  function init() {
    injectToggles();
    setLang(currentLang);
  }

  window.i18n = { setLang, getLang: () => currentLang };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
