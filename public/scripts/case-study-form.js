(() => {
  const cfg = window.__CS_DOWNLOAD_FORM__;
  const form = document.querySelector("[data-cs-download-form]");
  if (!form || !cfg) return;

  const submitBtn = form.querySelector(".cs-form-submit");
  const statusEl = form.querySelector("[data-cs-form-status]");
  const recaptchaEl = form.querySelector("[data-cs-recaptcha]");
  let recaptchaWidgetId = null;

  const showError = (field, message) => {
    const el = form.querySelector(`[data-error="${field}"]`);
    if (!el) return;
    if (message) {
      el.textContent = message;
      el.classList.add("is-visible");
      el.classList.remove("hidden");
    } else {
      el.textContent = "";
      el.classList.remove("is-visible");
      el.classList.add("hidden");
    }
  };

  const clearErrors = () => {
    ["firstName", "lastName", "email", "phone", "consent", "recaptcha"].forEach(
      (f) => showError(f, ""),
    );
    form.querySelectorAll(".cs-form-input").forEach((input) => {
      input.classList.remove("cs-input-invalid");
    });
  };

  const validate = () => {
    clearErrors();
    const data = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      consent: form.consent.checked,
    };

    let valid = true;

    if (!data.firstName) {
      showError("firstName", "First Name is required");
      form.firstName.classList.add("cs-input-invalid");
      valid = false;
    }
    if (!data.lastName) {
      showError("lastName", "Last Name is required");
      form.lastName.classList.add("cs-input-invalid");
      valid = false;
    }
    if (!data.email) {
      showError("email", "Email is required");
      form.email.classList.add("cs-input-invalid");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showError("email", "Invalid Email");
      form.email.classList.add("cs-input-invalid");
      valid = false;
    }
    if (!data.phone) {
      showError("phone", "Phone Number is required");
      form.phone.classList.add("cs-input-invalid");
      valid = false;
    }
    if (!data.consent) {
      showError(
        "consent",
        "Please check the box to agree with our privacy policy before submitting.",
      );
      valid = false;
    }

    return { valid, data };
  };

  const getRecaptchaToken = () => {
    if (recaptchaWidgetId === null || !window.grecaptcha) return null;
    try {
      return window.grecaptcha.getResponse(recaptchaWidgetId) || null;
    } catch {
      return null;
    }
  };

  const resetRecaptcha = () => {
    if (recaptchaWidgetId !== null && window.grecaptcha) {
      try {
        window.grecaptcha.reset(recaptchaWidgetId);
      } catch {
        /* ignore */
      }
    }
  };

  const triggerPdfDownload = async () => {
    if (!cfg.pdfUrl) return;

    const response = await fetch(cfg.pdfUrl);
    if (!response.ok) {
      throw new Error("Failed to generate PDF");
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = cfg.pdfFilename || "techtiz-case-study.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  };

  const setStatus = (message, isError = false) => {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.classList.toggle("hidden", !message);
    statusEl.classList.toggle("bg-cyan/10", !isError);
    statusEl.classList.toggle("text-yale", !isError);
    statusEl.classList.toggle("bg-red-50", isError);
    statusEl.classList.toggle("text-red-700", isError);
  };

  const initRecaptcha = () => {
    if (!recaptchaEl || !window.grecaptcha) return;

    window.grecaptcha.ready(() => {
      if (recaptchaWidgetId !== null) return;
      recaptchaWidgetId = window.grecaptcha.render(recaptchaEl, {
        sitekey: cfg.siteKey,
      });
    });
  };

  const loadRecaptchaScript = () => {
    if (window.grecaptcha) {
      initRecaptcha();
      return;
    }
    if (document.querySelector('script[src*="recaptcha/api.js"]')) {
      const poll = window.setInterval(() => {
        if (window.grecaptcha) {
          window.clearInterval(poll);
          initRecaptcha();
        }
      }, 100);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = initRecaptcha;
    document.head.appendChild(script);
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("");

    const { valid, data } = validate();
    if (!valid) return;

    const recaptchaToken = getRecaptchaToken();
    if (!recaptchaToken) {
      showError("recaptcha", "Please complete the reCAPTCHA verification");
      return;
    }

    const labelEl = submitBtn?.querySelector("[data-submit-label]");
    if (submitBtn) {
      submitBtn.disabled = true;
      if (labelEl) labelEl.textContent = cfg.loadingLabel;
    }

    try {
      const response = await fetch(cfg.apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      await triggerPdfDownload();
      setStatus(
        "Form submitted successfully. Your download should begin shortly.",
      );
      form.reset();
      clearErrors();
      resetRecaptcha();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      if (cfg.pdfUrl && message.includes("Failed to fetch")) {
        try {
          await triggerPdfDownload();
          setStatus(
            "Download started. Form submission will be available when the API is connected.",
          );
        } catch {
          setStatus(message, true);
        }
      } else {
        setStatus(message, true);
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        if (labelEl) labelEl.textContent = cfg.submitLabel;
      }
    }
  });

  loadRecaptchaScript();
})();
