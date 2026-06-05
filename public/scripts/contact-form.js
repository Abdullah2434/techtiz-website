// Commercial contact form — posts to /api/contact/ with reCAPTCHA.

(function () {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const panel = document.querySelector('[data-contact-form-panel]');
  const success = document.querySelector('[data-contact-form-success]');
  const imageCol = document.querySelector('[data-contact-form-image]');
  const submitBtn = document.querySelector('[data-contact-submit]');
  const submitLabel = document.querySelector('[data-contact-submit-label]');
  const recaptchaEl = form.querySelector('[data-contact-recaptcha]');
  const siteKey = window.__CONTACT_FORM_CONFIG__?.siteKey;
  const apiUrl = window.__CONTACT_FORM_CONFIG__?.apiUrl || '/api/contact/';

  const emailFromQuery = new URLSearchParams(window.location.search).get('email')?.trim();
  const emailField = form.querySelector('[name="email"]');
  if (emailFromQuery && emailField) {
    emailField.value = emailFromQuery;
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  let recaptcha = null;
  if (recaptchaEl && siteKey && window.initRecaptchaWidget) {
    recaptcha = window.initRecaptchaWidget(recaptchaEl, siteKey);
  }

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
    ['firstName', 'lastName', 'email', 'phone', 'message', 'recaptcha'].forEach((n) =>
      showError(n, ''),
    );
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

  function showSuccess() {
    if (panel) panel.classList.add('is-hidden');
    if (imageCol) imageCol.classList.add('hidden');
    if (success) {
      success.hidden = false;
      success.classList.add('is-visible');
    }
    success?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;

    const recaptchaToken = recaptcha?.getToken?.() || null;
    if (!recaptchaToken) {
      showError('recaptcha', 'Please complete the reCAPTCHA verification.');
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (submitLabel) submitLabel.textContent = 'Submitting...';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      form.reset();
      recaptcha?.reset?.();
      showSuccess();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      showError('message', message);
      recaptcha?.reset?.();
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = 'Confirm';
    }
  });
})();
