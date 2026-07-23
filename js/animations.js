/**
 * UBBIM Modern Animations
 * Text scramble, count-up, staggered reveals, magnetic hover, tilt effects
 */

// --- Text Scramble / Decode Effect ---
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="text-slate-500">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// --- Count-Up Animation ---
class CountUp {
  constructor(el, target, duration = 2000, suffix = '') {
    this.el = el;
    this.target = parseInt(target);
    this.duration = duration;
    this.suffix = suffix;
    this.started = false;
  }

  start() {
    if (this.started) return;
    this.started = true;
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(ease * this.target);
      this.el.textContent = current.toLocaleString() + this.suffix;
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.el.textContent = this.target.toLocaleString() + this.suffix;
      }
    };
    requestAnimationFrame(animate);
  }
}

// --- Magnetic Hover Effect ---
function initMagnetic() {
  const isTouch = 'ontouchstart' in window;
  if (isTouch) return;

  document.querySelectorAll('.btn-primary, .btn-outline, .service-card, .agent-card').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

// --- Staggered Reveal for Grid Children ---
function initStaggerReveal() {
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    const children = grid.children;
    Array.from(children).forEach((child, i) => {
      if (child.classList.contains('reveal')) {
        child.style.transitionDelay = `${i * 0.1}s`;
      }
    });
  });
}

// --- Parallax Scroll for Decorative Elements ---
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (parallaxElements.length === 0) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
}

// --- Smooth Scroll for Anchor Links ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.add('hidden');
      }
    });
  });
}

// --- Initialize All Animations ---
document.addEventListener('DOMContentLoaded', () => {
  // Text scramble on hero headings (skip elements that contain i18n keys)
  const heroHeadings = document.querySelectorAll('.page-header h1, .hero h1');
  heroHeadings.forEach(heading => {
    if (heading.querySelector('[data-i18n]')) return;
    const originalText = heading.innerText;
    const fx = new TextScramble(heading);
    setTimeout(() => fx.setText(originalText), 400);
  });

  // Count-up for stats
  const countObservers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = el.dataset.count;
        const suffix = el.dataset.suffix || '';
        if (target) {
          new CountUp(el, target, 2000, suffix).start();
        }
        countObservers.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => {
    countObservers.observe(el);
  });

  // Stagger reveals
  initStaggerReveal();

  // Magnetic hover
  initMagnetic();

  // Parallax
  initParallax();

  // Smooth scroll
  initSmoothScroll();

  // Add floating classes to decorative elements dynamically
  document.querySelectorAll('.aurora-blob').forEach((blob, i) => {
    blob.classList.add(i % 2 === 0 ? 'float-slow' : 'float-medium');
  });

  // Add tilt-card class to glass cards
  document.querySelectorAll('.glass:not(.cert-carousel):not(.modal)').forEach(card => {
    if (!card.classList.contains('rounded-2xl')) return;
    card.classList.add('tilt-card');
  });

  // Add shimmer to gradient text
  document.querySelectorAll('.text-gradient, .text-gradient-agent, .text-gradient-shine').forEach(el => {
    el.classList.add('text-gradient-shine');
  });
});
