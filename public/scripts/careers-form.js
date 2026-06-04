// Careers application form — client validation only (no API yet).

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
  const mailtoLink = document.querySelector('[data-career-mailto]');
  const cvInput = form.querySelector('#cv-upload');
  const cvNameEl = form.querySelector('[data-cv-filename]');
  const submitBtn = form.querySelector('[data-career-submit]');
  const submitLabel = form.querySelector('[data-career-submit-label]');
  const careersEmail = window.__CAREERS_EMAIL__ || 'careers@techtiz.co';

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
    ['firstName', 'lastName', 'email', 'phone', 'cv'].forEach((n) => showError(n, ''));
  }

  function validate() {
    clearErrors();
    const data = {
      firstName: (form.querySelector('[name="firstName"]')?.value || '').trim(),
      lastName: (form.querySelector('[name="lastName"]')?.value || '').trim(),
      email: (form.querySelector('[name="email"]')?.value || '').trim(),
      phone: (form.querySelector('[name="phone"]')?.value || '').trim(),
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

  function showSuccess({ data, file }) {
    const message = (form.querySelector('[name="message"]')?.value || '').trim();
    const subject = encodeURIComponent(`Career Application - ${data.firstName} ${data.lastName}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.firstName} ${data.lastName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        message ? `Cover letter:\n${message}` : '',
        '',
        `Please attach your CV (${file.name}) when sending this email.`,
      ]
        .filter(Boolean)
        .join('\n'),
    );

    if (mailtoLink) {
      mailtoLink.href = `mailto:${careersEmail}?subject=${subject}&body=${body}`;
    }

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

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = validate();
    if (!result) return;

    if (submitBtn) submitBtn.disabled = true;
    if (submitLabel) submitLabel.textContent = 'Submitting...';

    window.setTimeout(() => {
      showSuccess(result);
      if (submitBtn) submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = 'Confirm';
    }, 400);
  });
})();
