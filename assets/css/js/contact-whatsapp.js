'use strict';

// -----------------------------------------------------------------
// Contact form — sends exclusively via WhatsApp (no email/FormSubmit).
//
// Note: WhatsApp does not let a website send a message to your phone
// silently in the background (a WhatsApp/Meta anti-spam rule, not a
// limitation of this code). Instead, when the visitor submits the
// form, we build a WhatsApp chat with your number pre-filled with
// their name, email, and message — they just tap "Send" inside
// WhatsApp to actually deliver it to you.
// -----------------------------------------------------------------

const WHATSAPP_NUMBER = "255743322107"; // no + or spaces

const contactForm = document.querySelector('[data-form]');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameField = contactForm.querySelector('[name="fullname"]');
    const emailField = contactForm.querySelector('[name="email"]');
    const messageField = contactForm.querySelector('[name="message"]');

    const name = nameField ? nameField.value.trim() : '';
    const email = emailField ? emailField.value.trim() : '';
    const message = messageField ? messageField.value.trim() : '';

    const text =
      `New website inquiry:\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Message: ${message}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.location.href = waUrl;
  });
}
