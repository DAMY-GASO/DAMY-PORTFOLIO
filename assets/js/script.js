'use strict';

// element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });

  // Close sidebar when clicking on a nav link (mobile)
  const navLinks = document.querySelectorAll("[data-nav-link]");
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("active");
      }
    });
  });
}

// ... (code nyingine za juu za main.js) ...

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // 1. Kutafsiri maandishi ya kawaida
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (!entry) return;
    const value = entry[lang] || entry.en;
    if (value.indexOf('<br>') !== -1) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  // 2. Kutafsiri placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const entry = translations[key];
    if (!entry) return;
    el.setAttribute('placeholder', entry[lang] || entry.en);
  });

  // 3. HAPA NDIPO UNAPOWEKA HIYO LOGIC YA FILTER (Dropdown)
  const selectValueEl = document.querySelector('[data-select-value]');
  // Tunahakikisha inasoma tafsiri sahihi ya kile kilichochaguliwa sasa hivi
  const activeFilterBtn = document.querySelector('[data-filter-btn].active');
  
  if (selectValueEl) {
    if (activeFilterBtn) {
      // Kama kuna filter iliyochaguliwa, ionyeshe kwa lugha husika
      const filterKey = activeFilterBtn.getAttribute('data-i18n');
      if (filterKey && translations[filterKey]) {
        selectValueEl.textContent = translations[filterKey][lang];
      } else {
        selectValueEl.textContent = activeFilterBtn.textContent;
      }
    } else {
      // Kama hakuna iliyochaguliwa, rudisha kwenye default
      selectValueEl.textContent = translations['select_default'][lang];
    }
  }

  // 4. Update toggle button active states
  document.querySelectorAll('[data-lang-toggle] .lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}


// custom select variables (portfolio filter)
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

// Filter function – case‑insensitive and trim
const filterFunc = function (selectedValue) {
  const lowerSelected = selectedValue.trim().toLowerCase();
  for (let i = 0; i < filterItems.length; i++) {
    const itemCategory = filterItems[i].dataset.category;
    if (lowerSelected === "all") {
      filterItems[i].classList.add("active");
    } else if (itemCategory && itemCategory.toLowerCase() === lowerSelected) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

if (select && selectValue) {
  select.addEventListener("click", function () { 
    elementToggleFunc(this); 
  });

  // Close select when clicking outside
  document.addEventListener("click", function (e) {
    if (select && !select.contains(e.target)) {
      select.classList.remove("active");
    }
  });

  // add event to all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.dataset.filterValue || this.innerText.trim();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }
}

// add event to all filter button items for large screen
if (filterBtn.length && selectValue) {
  let lastClickedBtn = filterBtn[0];
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.dataset.filterValue || this.innerText.trim();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Form validation function (enables/disables submit button)
const validateForm = function () {
  if (!formBtn) return;
  let isValid = true;
  
  formInputs.forEach(input => {
    if (!input.checkValidity()) {
      isValid = false;
    }
  });
  
  if (form && isValid && form.checkValidity()) {
    formBtn.removeAttribute("disabled");
  } else {
    formBtn.setAttribute("disabled", "");
  }
}

// add event to all form input fields
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", validateForm);
  formInputs[i].addEventListener("blur", validateForm);
}

// initial validation on page load
validateForm();

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    // Remove active class from all pages and links
    for (let j = 0; j < pages.length; j++) {
      pages[j].classList.remove("active");
      navigationLinks[j].classList.remove("active");
    }
    
    // Add active class to current page and link
    const targetPage = this.dataset.target || this.innerHTML.toLowerCase();
    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        this.classList.add("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      }
    }
  });
}

// Smooth scrolling for any anchor links (if added later)
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

// Responsive navigation – hide sidebar on resize to desktop
window.addEventListener('resize', function() {
  if (sidebar && window.innerWidth > 768 && sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  }
});

// Optional: lazy loading for images (only if you add data-src attributes)
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[data-src]');
  if (lazyImages.length) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

// Utility to safely query selector (avoids console errors)
function safeQuerySelector(selector, fallback = null) {
  try {
    return document.querySelector(selector) || fallback;
  } catch (error) {
    console.warn(`Element not found: ${selector}`);
    return fallback;
  }
}

// -----------------------------------------------------------------
// Graphics Design gallery lightbox
// Clicking any "Graphics Design" project opens a full gallery viewer
// with all graphics work, browsable with prev/next.
// -----------------------------------------------------------------
(function () {
  const lightbox = document.querySelector('[data-lightbox]');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('[data-lightbox-img]');
  const lightboxCaption = lightbox.querySelector('[data-lightbox-caption]');
  const lightboxCounter = lightbox.querySelector('[data-lightbox-counter]');
  const closeBtn = lightbox.querySelector('[data-lightbox-close]');
  const prevBtn = lightbox.querySelector('[data-lightbox-prev]');
  const nextBtn = lightbox.querySelector('[data-lightbox-next]');

  const graphicsItems = Array.from(
    document.querySelectorAll('.project-item[data-category="Graphics Design"]')
  );

  const gallery = graphicsItems.map((item) => {
    const img = item.querySelector('img');
    const titleEl = item.querySelector('.project-title');
    return {
      src: img ? img.getAttribute('src') : '',
      alt: img ? img.getAttribute('alt') : '',
      title: titleEl ? titleEl.textContent : ''
    };
  });

  let currentIndex = 0;

  function showImage(index) {
    if (!gallery.length) return;
    currentIndex = (index + gallery.length) % gallery.length;
    const item = gallery[currentIndex];
    lightboxImg.setAttribute('src', item.src);
    lightboxImg.setAttribute('alt', item.alt);
    lightboxCaption.textContent = item.title;
    lightboxCounter.textContent = `${currentIndex + 1} / ${gallery.length}`;
  }

  function openLightbox(index) {
    showImage(index);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  graphicsItems.forEach((item, index) => {
    const link = item.querySelector('a[data-lightbox-trigger]');
    if (!link) return;
    link.addEventListener('click', function (e) {
      e.preventDefault();
      openLightbox(index);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
})();
