(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const loader = document.getElementById('page-loader');
  const hideLoader = () => {
    if (!loader) return;
    loader.classList.add('is-hidden');
  };

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', () => {
      window.setTimeout(hideLoader, 150);
    });
  }

  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  const setMobileNavOpen = (open) => {
    if (!navToggle || !mobileNav) return;
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileNav.hidden = !open;
  };

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      setMobileNavOpen(!open);
    });

    mobileNav.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A') {
        setMobileNavOpen(false);
      }
    });

    document.addEventListener('click', (e) => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      if (!open) return;
      const target = e.target;
      if (!target) return;
      if (mobileNav.contains(target) || navToggle.contains(target)) return;
      setMobileNavOpen(false);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) {
        setMobileNavOpen(false);
      }
    });
  }

  const typingEl = document.getElementById('typing');
  const typingWords = ['Web Design', 'Ecommerce', 'Landing Pages', 'Business Websites'];

  const runTyping = () => {
    if (!typingEl) return;
    if (prefersReducedMotion) {
      typingEl.textContent = typingWords[0];
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let direction = 1;

    const tick = () => {
      const word = typingWords[wordIndex];
      typingEl.textContent = word.slice(0, charIndex);

      if (direction === 1) {
        if (charIndex < word.length) {
          charIndex += 1;
          window.setTimeout(tick, 55);
          return;
        }
        direction = -1;
        window.setTimeout(tick, 900);
        return;
      }

      if (charIndex > 0) {
        charIndex -= 1;
        window.setTimeout(tick, 28);
        return;
      }

      direction = 1;
      wordIndex = (wordIndex + 1) % typingWords.length;
      window.setTimeout(tick, 250);
    };

    tick();
  };

  runTyping();

  const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
  const setVisible = (el) => el.classList.add('is-visible');

  if (prefersReducedMotion) {
    revealEls.forEach(setVisible);
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setVisible(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach(setVisible);
  }

  const animateCounters = () => {
    const counters = Array.from(document.querySelectorAll('[data-counter][data-to]'));
    if (!counters.length) return;

    if (prefersReducedMotion) {
      counters.forEach((el) => {
        const to = Number(el.getAttribute('data-to') || '0');
        el.textContent = String(to);
      });
      return;
    }

    const seen = new WeakSet();

    const start = (el) => {
      if (seen.has(el)) return;
      seen.add(el);

      const to = Number(el.getAttribute('data-to') || '0');
      const duration = 900;
      const startTime = performance.now();

      const frame = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = Math.round(to * eased);
        el.textContent = String(val);
        if (t < 1) requestAnimationFrame(frame);
      };

      requestAnimationFrame(frame);
    };

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            start(entry.target);
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.35 }
      );

      counters.forEach((el) => io.observe(el));
      return;
    }

    counters.forEach(start);
  };

  animateCounters();

  const accordionTriggers = Array.from(document.querySelectorAll('.acc-trigger'));
  accordionTriggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const panel = btn.parentElement?.querySelector('.acc-panel');
      const nextExpanded = !expanded;

      accordionTriggers.forEach((b) => {
        if (b === btn) return;
        b.setAttribute('aria-expanded', 'false');
        const p = b.parentElement?.querySelector('.acc-panel');
        if (p) p.hidden = true;
      });

      btn.setAttribute('aria-expanded', nextExpanded ? 'true' : 'false');
      if (panel) panel.hidden = !nextExpanded;
    });
  });

  const backToTop = document.querySelector('.back-to-top');
  const updateBackToTop = () => {
    if (!backToTop) return;
    const show = window.scrollY > 650;
    backToTop.hidden = !show;
  };

  if (backToTop) {
    updateBackToTop();
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  const form = document.querySelector('form.form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }
})();
