import { SITE } from '../../../lib/constants/site';

export function initContactIntakeForm(sledEmail: string = SITE.email.sled): void {
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
    return el instanceof HTMLInputElement ? el.value.trim() : '';
  }

  form.addEventListener('submit', (e) => {
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

    const intentEl = form.querySelector('input[name="intent"]:checked');
    const labelEl = intentEl?.closest('.intent-option')?.querySelector('.l');
    const intent =
      labelEl instanceof HTMLElement ? labelEl.textContent?.trim() : '—';

    const lines = [
      'U.S. SLED subcontract inquiry',
      '',
      'Name:        ' + val('name'),
      'Work email:  ' + val('email'),
      'Prime firm:  ' + val('firm'),
      'Role:        ' + val('role'),
      'Vehicle:     ' + val('vehicle'),
      'Timing:      ' + val('timing'),
      'Solicitation: ' + (val('solicitation') || '(not provided)'),
      'Ceiling:     ' + val('ceiling'),
      'Clearance:   ' + val('clearance'),
      'Requesting:  ' + intent,
      '',
      'Description:',
      val('desc') || '(none provided)',
    ];
    const subject =
      'SLED subcontract inquiry — ' + (val('firm') || 'prime contractor');
    window.location.href =
      'mailto:' +
      sledEmail +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(lines.join('\n'));
    form.classList.add('hidden');
    if (success) {
      success.classList.remove('hidden');
      success.classList.add('is-visible', 'flex');
      const y = success.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
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
    });
  }
}
