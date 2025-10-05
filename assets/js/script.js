'use strict';

// element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
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

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  // Prevent body scroll when modal is open
  document.body.style.overflow = modalContainer.classList.contains("active") ? "hidden" : "";
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    const avatar = this.querySelector("[data-testimonials-avatar]");
    const title = this.querySelector("[data-testimonials-title]");
    const text = this.querySelector("[data-testimonials-text]");
    
    if (avatar) {
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt || "Testimonial avatar";
    }
    if (title) modalTitle.innerHTML = title.innerHTML;
    if (text) modalText.innerHTML = text.innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modalContainer.classList.contains("active")) {
    testimonialsModalFunc();
  }
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Fix typo in dataset name
const selectValueElement = document.querySelector("[data-selecct-value]") || selectValue;

select.addEventListener("click", function () { 
  elementToggleFunc(this); 
});

// Close select when clicking outside
document.addEventListener("click", function (e) {
  if (!select.contains(e.target)) {
    select.classList.remove("active");
  }
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValueElement.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValueElement.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Form validation function
const validateForm = function () {
  let isValid = true;
  
  formInputs.forEach(input => {
    if (!input.checkValidity()) {
      isValid = false;
    }
  });
  
  if (isValid && form.checkValidity()) {
    formBtn.removeAttribute("disabled");
  } else {
    formBtn.setAttribute("disabled", "");
  }
}

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", validateForm);
  formInputs[i].addEventListener("blur", validateForm);
}

// Initialize form validation on page load
validateForm();

// Form submission handler
form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Add loading state
  formBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon><span>Sending...</span>';
  formBtn.setAttribute("disabled", "");
  
  // Simulate form submission (replace with actual form submission)
  setTimeout(() => {
    formBtn.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon><span>Message Sent!</span>';
    setTimeout(() => {
      formBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
      form.reset();
      validateForm();
    }, 2000);
  }, 1500);
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
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

// Smooth scrolling for anchor links
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

// Touch device improvements
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left - close sidebar if open
    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }
  }
}

// Responsive navigation - hide sidebar on resize to desktop
window.addEventListener('resize', function() {
  if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  }
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
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

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Add loading state management
document.addEventListener('DOMContentLoaded', function() {
  // Remove loading class from body if exists
  document.body.classList.remove('loading');
  
  // Initialize all components
  validateForm();
});

// Error handling for missing elements
function safeQuerySelector(selector, fallback = null) {
  try {
    return document.querySelector(selector) || fallback;
  } catch (error) {
    console.warn(`Element not found: ${selector}`);
    return fallback;
  }
}

// Performance optimization - debounce resize events
let resizeTimeout;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function() {
    // Handle resize operations here
    validateForm();
  }, 250);
});

// Add accessibility improvements
document.addEventListener('keydown', function(e) {
  // Close modal with Escape key
  if (e.key === 'Escape') {
    if (modalContainer.classList.contains('active')) {
      testimonialsModalFunc();
    }
    if (select.classList.contains('active')) {
      select.classList.remove('active');
    }
  }
  
  // Navigate select with arrow keys
  if (select.classList.contains('active') && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
    e.preventDefault();
    const currentIndex = Array.from(selectItems).indexOf(document.activeElement);
    let nextIndex;
    
    if (e.key === 'ArrowDown') {
      nextIndex = currentIndex < selectItems.length - 1 ? currentIndex + 1 : 0;
    } else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : selectItems.length - 1;
    }
    
    selectItems[nextIndex].focus();
  }
});

// Focus trap for modal
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });
}

// Initialize focus trap for modal
if (modalContainer) {
  trapFocus(modalContainer);
}
