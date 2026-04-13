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
      let selectedValue = this.innerText.trim();
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
      let selectedValue = this.innerText.trim();
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
    const targetPage = this.innerHTML.toLowerCase();
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
