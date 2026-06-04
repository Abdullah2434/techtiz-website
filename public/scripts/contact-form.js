// Commercial contact form — client validation only (no API yet).

(function () {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const panel = document.querySelector('[data-contact-form-panel]');
  const success = document.querySelector('[data-contact-form-success]');
  const imageCol = document.querySelector('[data-contact-form-image]');
  const mailtoLink = document.querySelector('[data-contact-mailto]');
  const submitBtn = document.querySelector('[data-contact-submit]');
  const submitLabel = document.querySelector('[data-contact-submit-label]');
  const contactEmail = window.__CONTACT_EMAIL__ || 'contact@techtiz.co';

  function showError(name, message) {
    const field = form.querySelector(`[name="${name}"]`);
    const err = document.querySelector(`[data-error-for="${name}"]`);
    if (field) field.classList.toggle('is-invalid', Boolean(message));
    if (err) {
      err.textContent = message || '';
      err.classList.toggle('hidden', !message);
    }
  }

  function clearErrors() {
    ['firstName', 'lastName', 'email', 'phone', 'message'].forEach((n) => showError(n, ''));
  }

  function validate() {
    clearErrors();
    const data = {
      firstName: (form.querySelector('[name="firstName"]')?.value || '').trim(),
      lastName: (form.querySelector('[name="lastName"]')?.value || '').trim(),
      email: (form.querySelector('[name="email"]')?.value || '').trim(),
      phone: (form.querySelector('[name="phone"]')?.value || '').trim(),
      message: (form.querySelector('[name="message"]')?.value || '').trim(),
      subscribe: form.querySelector('[name="subscribe"]')?.checked || false,
      company: (form.querySelector('[name="company"]')?.value || '').trim(),
    };
    let valid = true;

    if (!data.firstName) {
      showError('firstName', 'First name is required.');
      valid = false;
    }
    if (!data.lastName) {
      showError('lastName', 'Last name is required.');
      valid = false;
    }
    if (!data.email) {
      showError('email', 'Email is required.');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showError('email', 'Email is not valid.');
      valid = false;
    }
    if (!data.phone) {
      showError('phone', 'Phone number is required.');
      valid = false;
    }
    if (!data.message) {
      showError('message', 'Message is required.');
      valid = false;
    }
    if (data.company) valid = false;

    return valid ? data : null;
  }

  function showSuccess(data) {
    const subject = encodeURIComponent(
      `Contact inquiry - ${data.firstName} ${data.lastName}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.firstName} ${data.lastName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Newsletter: ${data.subscribe ? 'Yes' : 'No'}`,
        '',
        'Message:',
        data.message,
      ].join('\n'),
    );

    if (mailtoLink) {
      mailtoLink.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    }

    if (panel) panel.classList.add('is-hidden');
    if (imageCol) imageCol.classList.add('hidden');
    if (success) {
      success.hidden = false;
      success.classList.add('is-visible');
    }
    success?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;

    if (submitBtn) submitBtn.disabled = true;
    if (submitLabel) submitLabel.textContent = 'Submitting...';

    window.setTimeout(() => {
      showSuccess(data);
      if (submitBtn) submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = 'Confirm';
    }, 400);
  });
})();
