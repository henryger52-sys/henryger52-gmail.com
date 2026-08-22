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

// Shared FormSubmit (https://formsubmit.co) AJAX submit handler
async function submitToFormSubmit(form, statusBox, submitBtn, busyLabel, idleLabel) {
  const actionUrl = form.getAttribute('action');
  const targetEmail = actionUrl.split('/').pop();
  const ajaxUrl = `https://formsubmit.co/ajax/${targetEmail}`;

  submitBtn.disabled = true;
  submitBtn.textContent = busyLabel;
  statusBox.className = 'form-status';

  try {
    const formData = new FormData(form);
    const response = await fetch(ajaxUrl, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    if (!response.ok) throw new Error('Request failed');
    return true;
  } catch (err) {
    statusBox.textContent = 'Something went wrong. Please try again or email us directly.';
    statusBox.className = 'form-status show error';
    return false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = idleLabel;
  }
}

// Enquiry form
const form = document.getElementById('enquiryForm');
const submitBtn = document.getElementById('submitBtn');
const statusBox = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const ok = await submitToFormSubmit(form, statusBox, submitBtn, 'Sending...', 'Send Enquiry');
  if (ok) {
    statusBox.textContent = "Thanks! Your enquiry has been sent — we'll be in touch within one business day.";
    statusBox.className = 'form-status show success';
    form.reset();
  }
});

// Checklist lead-magnet gate
const checklistForm = document.getElementById('checklistForm');
const checklistBtn = document.getElementById('checklistBtn');
const checklistStatus = document.getElementById('checklistStatus');
const gateSuccess = document.getElementById('gateSuccess');

checklistForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const ok = await submitToFormSubmit(checklistForm, checklistStatus, checklistBtn, 'Sending...', 'Get the Checklist');
  if (ok) {
    checklistForm.hidden = true;
    gateSuccess.hidden = false;
  }
});

// Subtle scroll reveal for section headings (respects reduced motion)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  document.querySelectorAll('.section-eyebrow, main h2').forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}
