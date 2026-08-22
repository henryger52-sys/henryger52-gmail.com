// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Enquiry form submission via FormSubmit (https://formsubmit.co) AJAX endpoint
const form = document.getElementById('enquiryForm');
const submitBtn = document.getElementById('submitBtn');
const statusBox = document.getElementById('formStatus');

function showStatus(message, type) {
  statusBox.textContent = message;
  statusBox.className = `form-status show ${type}`;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const actionUrl = form.getAttribute('action');
  const targetEmail = actionUrl.split('/').pop();
  const ajaxUrl = `https://formsubmit.co/ajax/${targetEmail}`;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  statusBox.className = 'form-status';

  try {
    const formData = new FormData(form);
    const response = await fetch(ajaxUrl, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    if (!response.ok) throw new Error('Request failed');

    showStatus("Thanks! Your enquiry has been sent — we'll be in touch within one business day.", 'success');
    form.reset();
  } catch (err) {
    showStatus('Something went wrong sending your enquiry. Please try again or email us directly.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Enquiry';
  }
});
