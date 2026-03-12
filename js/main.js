/* js/main.js — Mobile nav, active link, external links */

(function () {
  'use strict';

  // ── 1. Mobile nav toggle ────────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.getElementById('site-nav');

  function openNav() {
    document.body.classList.add('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      document.body.classList.contains('nav-open') ? closeNav() : openNav();
    });
  }

  // Close nav when a nav link is clicked (mobile)
  if (nav) {
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  // Close nav when clicking outside
  document.addEventListener('click', function (e) {
    if (document.body.classList.contains('nav-open')) {
      if (nav && !nav.contains(e.target) && e.target !== toggle) {
        closeNav();
      }
    }
  });

  // ── 2. Active nav link ──────────────────────────────────────
  var path = window.location.pathname;
  // Normalise: ensure trailing slash
  if (!path.endsWith('/') && !path.includes('.')) path += '/';

  document.querySelectorAll('.site-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    // Root link: exact match
    if (href === '/' || href === './') {
      if (path === '/' || path === '') link.classList.add('active');
    } else if (href && path.includes(href.replace(/^\.\.\//, '/').replace(/^\.\//, '/'))) {
      link.classList.add('active');
    }
  });

  // ── 3. External links → new tab + rel ──────────────────────
  document.querySelectorAll('a[href]').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href) return;
    try {
      var url = new URL(href, window.location.href);
      var isExternal = (url.protocol === 'http:' || url.protocol === 'https:') &&
                       url.hostname !== 'bentownsend.com' &&
                       url.hostname !== window.location.hostname;
      if (isExternal) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    } catch (_) {
      // Relative or malformed href — skip
    }
  });

})();
