// Careers application form — posts multipart data to /api/careers/ with reCAPTCHA.

(function () {
  const form = document.querySelector('[data-career-form]');
  if (!form) return;

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const ACCEPTED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  const panel = document.querySelector('[data-career-form-panel]');
  const success = document.querySelector('[data-career-form-success]');
  const imageCol = document.querySelector('[data-career-form-image]');
  const cvInput = form.querySelector('#cv-upload');
  const cvNameEl = form.querySelector('[data-cv-filename]');
  const submitBtn = form.querySelector('[data-career-submit]');
  const submitLabel = form.querySelector('[data-career-submit-label]');
  const recaptchaEl = form.querySelector('[data-career-recaptcha]');
  const siteKey = window.__CAREERS_FORM_CONFIG__?.siteKey;
  const apiUrl = window.__CAREERS_FORM_CONFIG__?.apiUrl || '/api/careers/';

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
    ['firstName', 'lastName', 'email', 'phone', 'cv', 'recaptcha'].forEach((n) =>
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
      company: (form.querySelector('[name="company"]')?.value || '').trim(),
    };
    const file = cvInput?.files?.[0] || null;
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
    if (!file) {
      showError('cv', 'CV upload is required.');
      valid = false;
    } else if (file.size > MAX_FILE_SIZE) {
      showError('cv', 'File size must be less than 5MB.');
      valid = false;
    } else if (!ACCEPTED_TYPES.includes(file.type)) {
      showError('cv', 'File must be a PDF, DOC, or DOCX file.');
      valid = false;
    }

    if (data.company) valid = false;

    return valid ? { data, file } : null;
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

  if (cvInput) {
    cvInput.addEventListener('change', () => {
      const file = cvInput.files?.[0];
      if (cvNameEl) {
        if (file) {
          cvNameEl.textContent = file.name;
          cvNameEl.classList.remove('hidden');
        } else {
          cvNameEl.textContent = '';
          cvNameEl.classList.add('hidden');
        }
      }
      showError('cv', '');
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const result = validate();
    if (!result) return;

    const recaptchaToken = recaptcha?.getToken?.() || null;
    if (!recaptchaToken) {
      showError('recaptcha', 'Please complete the reCAPTCHA verification.');
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (submitLabel) submitLabel.textContent = 'Submitting...';

    try {
      const formData = new FormData();
      Object.entries(result.data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      formData.append('cv', result.file);
      formData.append('recaptchaToken', recaptchaToken);

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error || 'Failed to submit application');
      }

      form.reset();
      if (cvNameEl) {
        cvNameEl.textContent = '';
        cvNameEl.classList.add('hidden');
      }
      recaptcha?.reset?.();
      showSuccess();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      showError('cv', message);
      recaptcha?.reset?.();
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = 'Confirm';
    }
  });
})();
