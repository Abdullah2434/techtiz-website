// Consultation scheduler — UI only; confirm opens mailto (no API yet).

(function () {
  const root = document.querySelector('[data-contact-scheduler]');
  if (!root) return;

  const CONFIG = {
    maxFutureMonths: 12,
    businessHours: { start: 12, end: 18 },
    timeSlotDuration: 30,
    bookedSlots: [],
  };

  const DAY_NAMES = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const contactEmail = window.__CONTACT_EMAIL__ || 'contact@techtiz.co';

  const monthLabel = root.querySelector('[data-scheduler-month-label]');
  const dayNamesEl = root.querySelector('[data-scheduler-day-names]');
  const daysEl = root.querySelector('[data-scheduler-days]');
  const timesEl = root.querySelector('[data-scheduler-times]');
  const timesEmpty = root.querySelector('[data-scheduler-times-empty]');
  const timesNone = root.querySelector('[data-scheduler-times-none]');
  const panel = root.querySelector('[data-scheduler-panel]');
  const success = root.querySelector('[data-scheduler-success]');
  const mailtoLink = root.querySelector('[data-scheduler-mailto]');
  const animateWrap = root.querySelector('[data-scheduler-animate]');
  const step1 = root.querySelector('[data-scheduler-step="1"]');
  const step2 = root.querySelector('[data-scheduler-step="2"]');
  const confirmBtn = root.querySelector('[data-scheduler-confirm]');
  const confirmLabel = root.querySelector('[data-scheduler-confirm-label]');

  let viewMonth = new Date();
  viewMonth.setDate(1);
  let selectedDay = null;
  let selectedTime = null;
  let currentStep = 1;

  function generateTimeSlots() {
    const slots = [];
    const { start, end } = CONFIG.businessHours;
    const { timeSlotDuration } = CONFIG;
    for (let hour = start; hour < end; hour += 1) {
      for (let minute = 0; minute < 60; minute += timeSlotDuration) {
        const time = new Date();
        time.setHours(hour, minute, 0, 0);
        slots.push(
          time.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          }),
        );
      }
    }
    return slots;
  }

  const timeSlots = generateTimeSlots();

  function formatMonth(date) {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' }).toUpperCase();
  }

  function isDateDisabled(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const check = new Date(date);
    check.setHours(0, 0, 0, 0);
    if (check < today) return true;
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + CONFIG.maxFutureMonths);
    if (check > maxDate) return true;
    return false;
  }

  function canNavigateToMonth(target) {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + CONFIG.maxFutureMonths);
    const firstOfTarget = new Date(target.getFullYear(), target.getMonth(), 1);
    if (firstOfTarget < new Date(today.getFullYear(), today.getMonth(), 1)) return false;
    if (firstOfTarget > maxDate) return false;
    return true;
  }

  function parseTimeSlot(timeSlot) {
    const [time, period] = timeSlot.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let hour24 = hours;
    if (period === 'PM' && hours !== 12) hour24 += 12;
    if (period === 'AM' && hours === 12) hour24 = 0;
    return { hour24, minutes };
  }

  function isTimeSlotDisabled(timeSlot) {
    if (selectedDay == null) return true;
    const selectedDate = new Date(
      viewMonth.getFullYear(),
      viewMonth.getMonth(),
      selectedDay,
    );
    const today = new Date();
    if (selectedDate.toDateString() === today.toDateString()) {
      const { hour24, minutes } = parseTimeSlot(timeSlot);
      const slotTime = new Date();
      slotTime.setHours(hour24, minutes, 0, 0);
      if (slotTime <= new Date()) return true;
    }
    const dateString = selectedDate.toISOString().split('T')[0];
    return CONFIG.bookedSlots.some(
      (slot) => slot.date === dateString && slot.time === timeSlot,
    );
  }

  function showSchedulerError(key, message) {
    const err = root.querySelector(`[data-scheduler-error="${key}"]`);
    if (err) {
      err.textContent = message || '';
      err.classList.toggle('hidden', !message);
    }
  }

  function showFieldError(key, message) {
    const field = root.querySelector(`[data-scheduler-field="${key}"]`);
    const err = root.querySelector(`[data-scheduler-field-error="${key}"]`);
    if (field) field.classList.toggle('is-invalid', Boolean(message));
    if (err) {
      err.textContent = message || '';
      err.classList.toggle('hidden', !message);
    }
  }

  function updateStepper() {
    root.querySelectorAll('[data-scheduler-step-dot]').forEach((dot) => {
      const id = Number(dot.getAttribute('data-scheduler-step-dot'));
      const active = currentStep >= id;
      dot.classList.toggle('is-active', active);
      dot.classList.toggle('is-inactive', !active);
    });
    root.querySelectorAll('[data-scheduler-step-label]').forEach((label) => {
      const id = Number(label.getAttribute('data-scheduler-step-label'));
      const active = currentStep >= id;
      label.classList.toggle('is-active', active);
      label.classList.toggle('is-inactive', !active);
    });
  }

  function renderDayNames() {
    if (!dayNamesEl) return;
    dayNamesEl.innerHTML = DAY_NAMES.map(
      (day) =>
        `<div class="py-2 pl-[9px] text-left text-[18px] font-normal text-[#9E9E9E]">${day}</div>`,
    ).join('');
  }

  function renderCalendar() {
    if (monthLabel) monthLabel.textContent = formatMonth(viewMonth);

    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const cells = [];

    for (let i = 0; i < startingDayOfWeek; i += 1) cells.push(null);
    for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);

    if (!daysEl) return;
    daysEl.innerHTML = cells
      .map((day, index) => {
        if (!day) {
          return `<span class="invisible h-10 w-10" aria-hidden="true"></span>`;
        }
        const dayDate = new Date(year, month, day);
        const disabled = isDateDisabled(dayDate);
        const selected = selectedDay === day;
        const classes = [
          'h-10 w-10 rounded-full text-[18px] font-medium transition-all duration-200',
          !day ? 'invisible' : '',
          selected ? 'contact-scheduler-day is-selected' : '',
          !selected && !disabled ? 'contact-scheduler-day is-available text-[#101010]' : '',
          disabled ? 'contact-scheduler-day is-disabled' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return `<button type="button" class="${classes}" data-scheduler-day="${day}" ${
          disabled ? 'disabled' : ''
        }>${day}</button>`;
      })
      .join('');

    daysEl.querySelectorAll('[data-scheduler-day]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const day = Number(btn.getAttribute('data-scheduler-day'));
        const dayDate = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day);
        if (isDateDisabled(dayDate)) return;
        selectedDay = day;
        selectedTime = null;
        showSchedulerError('date', '');
        renderCalendar();
        renderTimeSlots();
      });
    });

    const prevBtn = root.querySelector('[data-scheduler-prev-month]');
    const nextBtn = root.querySelector('[data-scheduler-next-month]');
    const prevTarget = new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1);
    const nextTarget = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1);
    if (prevBtn) prevBtn.disabled = !canNavigateToMonth(prevTarget);
    if (nextBtn) nextBtn.disabled = !canNavigateToMonth(nextTarget);
  }

  function renderTimeSlots() {
    if (!timesEl) return;

    if (selectedDay == null) {
      timesEl.innerHTML = '';
      timesEmpty?.classList.remove('hidden');
      timesNone?.classList.add('hidden');
      return;
    }

    timesEmpty?.classList.add('hidden');
    const available = timeSlots.filter((slot) => !isTimeSlotDisabled(slot));

    if (available.length === 0) {
      timesEl.innerHTML = '';
      timesNone?.classList.remove('hidden');
      return;
    }

    timesNone?.classList.add('hidden');
    timesEl.innerHTML = available
      .map((time) => {
        const disabled = isTimeSlotDisabled(time);
        const selected = selectedTime === time;
        const classes = [
          '!px-[24px] !py-[9px] rounded-[4px] text-[18px] font-normal transition-all duration-200 border',
          selected
            ? 'contact-scheduler-time is-selected'
            : !disabled
              ? 'contact-scheduler-time is-available bg-cyan/20 text-[#1E1E1E] border-cyan cursor-pointer'
              : 'contact-scheduler-time is-disabled bg-cyan/20 border-[#9E9E9E]',
        ].join(' ');
        return `<button type="button" class="${classes}" data-scheduler-time="${time}" ${
          disabled ? 'disabled' : ''
        }>${time}</button>`;
      })
      .join('');

    timesEl.querySelectorAll('[data-scheduler-time]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const time = btn.getAttribute('data-scheduler-time');
        if (!time || isTimeSlotDisabled(time)) return;
        selectedTime = time;
        showSchedulerError('time', '');
        renderTimeSlots();
      });
    });
  }

  function goToStep(step) {
    if (animateWrap) animateWrap.classList.add('contact-scheduler-animate', 'is-fading');
    window.setTimeout(() => {
      currentStep = step;
      step1?.classList.toggle('is-visible', step === 1);
      step1?.classList.toggle('is-hidden', step !== 1);
      step2?.classList.toggle('is-visible', step === 2);
      step2?.classList.toggle('is-hidden', step !== 2);
      updateStepper();
      if (animateWrap) animateWrap.classList.remove('is-fading');
    }, 280);
  }

  function validateStep1() {
    let valid = true;
    if (selectedDay == null) {
      showSchedulerError('date', 'Please select a date');
      valid = false;
    }
    if (!selectedTime) {
      showSchedulerError('time', 'Please select a time slot');
      valid = false;
    }
    return valid;
  }

  function getFieldValue(key) {
    return (root.querySelector(`[data-scheduler-field="${key}"]`)?.value || '').trim();
  }

  function validateStep2() {
    const data = {
      firstName: getFieldValue('firstName'),
      lastName: getFieldValue('lastName'),
      email: getFieldValue('email'),
      phone: getFieldValue('phone'),
      company: getFieldValue('company'),
    };
    let valid = true;
    ['firstName', 'lastName', 'email', 'phone'].forEach((k) => showFieldError(k, ''));

    if (!data.firstName) {
      showFieldError('firstName', 'First name is required');
      valid = false;
    }
    if (!data.lastName) {
      showFieldError('lastName', 'Last name is required');
      valid = false;
    }
    if (!data.email) {
      showFieldError('email', 'Email is required');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showFieldError('email', 'Please enter a valid email address');
      valid = false;
    }
    if (!data.phone) {
      showFieldError('phone', 'Phone number is required');
      valid = false;
    } else if (data.phone.replace(/\D/g, '').length < 10) {
      showFieldError('phone', 'Please enter a valid phone number (at least 10 digits)');
      valid = false;
    }
    if (data.company) valid = false;

    return valid ? data : null;
  }

  function showBookingSuccess(data) {
    const selectedDate = new Date(
      viewMonth.getFullYear(),
      viewMonth.getMonth(),
      selectedDay,
    );
    const subject = encodeURIComponent('Consultation request - Techtiz');
    const body = encodeURIComponent(
      [
        `Name: ${data.firstName} ${data.lastName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Preferred date: ${selectedDate.toDateString()}`,
        `Preferred time: ${selectedTime}`,
        '',
        'Please confirm this slot by reply email.',
      ].join('\n'),
    );

    if (mailtoLink) {
      mailtoLink.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    }

    if (panel) panel.classList.add('is-hidden');
    if (success) {
      success.hidden = false;
      success.classList.add('is-visible');
    }
    success?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  root.querySelector('[data-scheduler-prev-month]')?.addEventListener('click', () => {
    const target = new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1);
    if (!canNavigateToMonth(target)) return;
    viewMonth = target;
    renderCalendar();
    renderTimeSlots();
  });

  root.querySelector('[data-scheduler-next-month]')?.addEventListener('click', () => {
    const target = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1);
    if (!canNavigateToMonth(target)) return;
    viewMonth = target;
    renderCalendar();
    renderTimeSlots();
  });

  root.querySelector('[data-scheduler-next]')?.addEventListener('click', () => {
    if (!validateStep1()) return;
    goToStep(2);
  });

  root.querySelector('[data-scheduler-back]')?.addEventListener('click', () => {
    goToStep(1);
  });

  confirmBtn?.addEventListener('click', () => {
    const data = validateStep2();
    if (!data) return;
    if (confirmBtn) confirmBtn.disabled = true;
    if (confirmLabel) confirmLabel.textContent = 'Confirming...';
    window.setTimeout(() => {
      showBookingSuccess(data);
      if (confirmBtn) confirmBtn.disabled = false;
      if (confirmLabel) confirmLabel.textContent = 'Confirm';
    }, 400);
  });

  renderDayNames();
  renderCalendar();
  renderTimeSlots();
  updateStepper();
})();
