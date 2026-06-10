const SLED_CONTACT_API = '/api/sled-contact/';

export function initContactIntakeForm(): void {
  document.querySelectorAll('.intent-option').forEach((opt) => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.intent-option').forEach((o) => o.classList.remove('on'));
      opt.classList.add('on');
      const input = opt.querySelector('input');
      if (input instanceof HTMLInputElement) input.checked = true;
    });
  });

  const form = document.getElementById('intakeForm');
  const success = document.getElementById('formSuccess');
  if (!(form instanceof HTMLFormElement)) return;

  function val(id: string): string {
    const el = document.getElementById(id);
    if (el instanceof HTMLSelectElement || el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      return el.value.trim();
    }
    return '';
  }

  function getIntentLabel(): string {
    const intentEl = form.querySelector('input[name="intent"]:checked');
    const labelEl = intentEl?.closest('.intent-option')?.querySelector('.l');
    return labelEl instanceof HTMLElement ? labelEl.textContent?.trim() || '—' : '—';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let ok = true;
    ['name', 'email', 'firm'].forEach((id) => {
      const el = document.getElementById(id);
      if (el instanceof HTMLInputElement && !el.value.trim()) {
        el.style.borderColor = 'var(--color-amber)';
        ok = false;
      } else if (el instanceof HTMLInputElement) {
        el.style.borderColor = '';
      }
    });
    if (!ok) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn instanceof HTMLButtonElement) {
      submitBtn.disabled = true;
    }

    const payload = {
      name: val('name'),
      email: val('email'),
      firm: val('firm'),
      role: val('role'),
      vehicle: val('vehicle'),
      timing: val('timing'),
      intent: getIntentLabel(),
      desc: val('desc'),
      website: (form.querySelector('[name="website"]') as HTMLInputElement | null)?.value || '',
    };

    try {
      const response = await fetch(SLED_CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit inquiry');
      }

      form.classList.add('hidden');
      if (success) {
        success.classList.remove('hidden');
        success.classList.add('is-visible', 'flex');
        const y = success.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      const descEl = document.getElementById('desc');
      if (descEl instanceof HTMLTextAreaElement) {
        descEl.style.borderColor = 'var(--color-amber)';
        descEl.setAttribute('aria-invalid', 'true');
        descEl.title = message;
      }
    } finally {
      if (submitBtn instanceof HTMLButtonElement) {
        submitBtn.disabled = false;
      }
    }
  });

  const reset = document.getElementById('formReset');
  if (reset) {
    reset.addEventListener('click', (e) => {
      e.preventDefault();
      if (success) {
        success.classList.remove('is-visible', 'flex');
        success.classList.add('hidden');
      }
      form.reset();
      form.classList.remove('hidden');
      document.querySelectorAll('.intent-option').forEach((o, i) => {
        o.classList.toggle('on', i === 0);
      });
    });
  }
}
