// Shared reCAPTCHA v2 widget helper for commercial forms.

(function () {
  function loadScript() {
    return new Promise((resolve) => {
      if (window.grecaptcha) {
        resolve();
        return;
      }

      const existing = document.querySelector('script[src*="recaptcha/api.js"]');
      if (existing) {
        const poll = window.setInterval(() => {
          if (window.grecaptcha) {
            window.clearInterval(poll);
            resolve();
          }
        }, 100);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }

  window.initRecaptchaWidget = function initRecaptchaWidget(container, siteKey) {
    if (!container || !siteKey) return null;

    let widgetId = null;

    loadScript().then(() => {
      if (!window.grecaptcha || widgetId !== null) return;
      window.grecaptcha.ready(() => {
        widgetId = window.grecaptcha.render(container, { sitekey: siteKey });
        container.__recaptchaWidgetId = widgetId;
      });
    });

    return {
      getToken() {
        const id = container.__recaptchaWidgetId;
        if (id === null || id === undefined || !window.grecaptcha) return null;
        try {
          return window.grecaptcha.getResponse(id) || null;
        } catch {
          return null;
        }
      },
      reset() {
        const id = container.__recaptchaWidgetId;
        if (id === null || id === undefined || !window.grecaptcha) return;
        try {
          window.grecaptcha.reset(id);
        } catch {
          /* ignore */
        }
      },
    };
  };
})();
