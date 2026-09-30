// ==========================================================================
// Fit-Wit™ Delta — Interactive Scripts
// Vanilla JS, Hardware-Accelerated, Zero Bloat
// ==========================================================================

// Global handlers for inline HTML events
function toggleMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (!mobileBtn || !mobileDrawer) return;
  const isOpen = mobileDrawer.classList.toggle('is-open');
  mobileBtn.classList.toggle('is-active', isOpen);
  mobileBtn.setAttribute('aria-expanded', isOpen);
  mobileDrawer.setAttribute('aria-hidden', !isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (!mobileBtn || !mobileDrawer) return;
  mobileDrawer.classList.remove('is-open');
  mobileBtn.classList.remove('is-active');
  mobileBtn.setAttribute('aria-expanded', 'false');
  mobileDrawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openLightbox(title, desc) {
  const lightboxModal = document.getElementById('lightboxModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  if (!lightboxModal || !modalTitle || !modalDesc) return;
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  lightboxModal.classList.add('is-active');
  lightboxModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightboxModal = document.getElementById('lightboxModal');
  if (!lightboxModal) return;
  lightboxModal.classList.remove('is-active');
  lightboxModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function handleLightboxClick(e) {
  const lightboxModal = document.getElementById('lightboxModal');
  if (e.target === lightboxModal) {
    closeLightbox();
  }
}

// Explicit window bindings
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.handleLightboxClick = handleLightboxClick;

// Initialize on DOM ready
function initApp() {
  // Set dynamic current year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu button listener
  const mobileBtn = document.getElementById('mobileMenuBtn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMobileMenu);
  }

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeMobileMenu();
    }
  });

  // Hardware-Accelerated Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
