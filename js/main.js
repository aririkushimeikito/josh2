/* ==========================================================================
   SHIPLEY PEDIATRICS — Prototype JavaScript (vanilla, no dependencies)
   ----------------------------------------------------------------------------
   Everything here is a progressive enhancement. All content is in the HTML
   and the site remains fully usable if this file never runs.

   Wix mapping:
     • Mobile menu        → Wix Mobile Menu (native)
     • Resources dropdown → Wix Menu submenu (native)
     • Sticky header      → Wix Header "Freeze position" setting
     • FAQ accordion      → Wix Accordion (native) — HTML already uses <details>
     • Contact form       → Wix Forms (native validation + success message)
     • Reveal animation   → Wix "Reveal / Fade in" entrance animations
   ========================================================================== */
(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');

  /* ---------- 1. Sticky header shadow ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 2. Mobile navigation ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  function setMenu(open) {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileNav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  }

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        setMenu(false);
        toggle.focus();
      }
    });
    // Close when resizing back to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1040) setMenu(false);
    });
  }

  /* ---------- 3. Resources dropdown (click + keyboard; hover is CSS) ---------- */
  var dropdownItems = document.querySelectorAll('.nav__item--dropdown');
  dropdownItems.forEach(function (item) {
    var btn = item.querySelector('.nav__dropdown-btn');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var open = !item.classList.contains('is-open');
      dropdownItems.forEach(function (i) { i.classList.remove('is-open'); });
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  });
  document.addEventListener('click', function (e) {
    dropdownItems.forEach(function (item) {
      if (!item.contains(e.target)) {
        item.classList.remove('is-open');
        var btn = item.querySelector('.nav__dropdown-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ---------- 4. Scroll reveal (respects prefers-reduced-motion) ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 5. Contact form: pre-select interest from URL + validation ---------- */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    // Pre-populate the "What are you interested in?" dropdown from ?interest=
    // Service-specific CTAs link to contact.html?interest=dpc|expanded|pans|existing
    try {
      var params = new URLSearchParams(window.location.search);
      var interest = params.get('interest');
      var select = form.querySelector('#interest');
      if (interest && select) {
        var option = select.querySelector('option[data-key="' + interest + '"]');
        if (option) { select.value = option.value; }
      }
      // Optional: scroll to the form when arriving from a service CTA
      if (interest && window.location.hash === '#message') {
        form.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      }
    } catch (err) { /* URLSearchParams unsupported — ignore */ }

    var fields = form.querySelectorAll('[required]');

    function validateField(input) {
      var wrapper = input.closest('.field');
      var valid = input.checkValidity();
      if (input.type === 'email' && input.value) {
        valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
      }
      if (wrapper) wrapper.classList.toggle('is-invalid', !valid);
      input.setAttribute('aria-invalid', String(!valid));
      return valid;
    }

    fields.forEach(function (input) {
      input.addEventListener('blur', function () { validateField(input); });
      input.addEventListener('input', function () {
        var wrapper = input.closest('.field');
        if (wrapper && wrapper.classList.contains('is-invalid')) validateField(input);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var allValid = true;
      var firstInvalid = null;
      fields.forEach(function (input) {
        var ok = validateField(input);
        if (!ok) {
          allValid = false;
          if (!firstInvalid) firstInvalid = input;
        }
      });
      if (!allValid) {
        firstInvalid.focus();
        return;
      }
      // Prototype only: no email is sent. In Wix this becomes a native Wix Form
      // with a success message and email notification to the practice.
      var success = document.querySelector('[data-form-success]');
      form.classList.add('is-submitted');
      if (success) {
        success.classList.add('is-visible');
        success.setAttribute('tabindex', '-1');
        success.focus();
      }
    });
  }

  /* ---------- 6. Mark external / placeholder links ---------- */
  // Links whose destination is still to be confirmed carry data-placeholder.
  // In the prototype they open a small explanatory page; nothing else needed here.
})();
