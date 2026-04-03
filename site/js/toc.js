(function () {
  'use strict';

  // --- Inject Styles ---
  const style = document.createElement('style');
  style.textContent = `
    /* TOC Panel — Open State (Desktop) */
    #toc-panel {
      position: fixed;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      width: 180px;
      max-height: 70vh;
      overflow-y: auto;
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(208, 195, 203, 0.15);
      border-radius: 12px;
      padding: 16px;
      z-index: 40;
      transition: opacity 0.3s ease, transform 0.3s ease;
      font-family: 'Manrope', sans-serif;
    }
    #toc-panel::-webkit-scrollbar { width: 3px; }
    #toc-panel::-webkit-scrollbar-thumb { background: rgba(77, 68, 75, 0.2); border-radius: 3px; }

    /* TOC Header */
    #toc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(208, 195, 203, 0.15);
    }
    #toc-header span:first-child {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #546253;
    }
    #toc-close {
      cursor: pointer;
      color: #4d444b;
      font-size: 16px;
      line-height: 1;
      opacity: 0.6;
      transition: opacity 0.2s;
      background: none;
      border: none;
      padding: 2px;
    }
    #toc-close:hover { opacity: 1; }

    /* TOC Links */
    .toc-link {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 5px 0 5px 8px;
      font-size: 11px;
      color: #4d444b;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.2s, border-color 0.2s;
      border-left: 2px solid transparent;
      line-height: 1.3;
    }
    .toc-link:hover { color: #361c36; }
    .toc-link.active {
      color: #361c36;
      font-weight: 700;
      border-left-color: rgba(52, 34, 0, 0.4);
    }
    .toc-link-h3 {
      padding-left: 20px;
      font-size: 10px;
    }

    /* Chevron */
    .toc-chevron {
      font-size: 8px;
      transition: transform 0.2s;
      color: #4d444b;
      flex-shrink: 0;
      user-select: none;
    }
    .toc-chevron.expanded { transform: rotate(90deg); }

    /* h3 sub-list */
    .toc-children {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    .toc-children.expanded { max-height: 500px; }

    /* Minimized State */
    #toc-minimized {
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(208, 195, 203, 0.1);
      border-radius: 8px 0 0 8px;
      padding: 12px 4px;
      cursor: pointer;
      z-index: 40;
      transition: opacity 0.3s ease, background 0.2s;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font-family: 'Manrope', sans-serif;
      font-size: 10px;
      color: #4d444b;
      letter-spacing: 0.05em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 200px;
    }
    #toc-minimized:hover {
      background: rgba(255, 255, 255, 0.6);
      color: #361c36;
    }

    /* Hidden state */
    .toc-hidden { opacity: 0 !important; pointer-events: none !important; }

    /* Mobile Pill */
    #toc-mobile-pill {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(208, 195, 203, 0.2);
      z-index: 40;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(77, 68, 75, 0.1);
      transition: opacity 0.3s ease;
    }
    #toc-mobile-pill .material-symbols-outlined {
      font-size: 20px;
      color: #361c36;
    }

    /* Mobile Overlay */
    #toc-mobile-overlay {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 50;
      flex-direction: column;
      justify-content: flex-end;
    }
    #toc-mobile-overlay.open { display: flex; }
    #toc-mobile-scrim {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.2);
    }
    #toc-mobile-panel {
      position: relative;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-radius: 16px 16px 0 0;
      padding: 24px;
      max-height: 60vh;
      overflow-y: auto;
      z-index: 51;
      font-family: 'Manrope', sans-serif;
    }
    #toc-mobile-panel .toc-link { padding: 8px 0 8px 8px; font-size: 13px; }
    #toc-mobile-panel .toc-link-h3 { padding-left: 24px; font-size: 12px; }
    #toc-mobile-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(208, 195, 203, 0.15);
    }
    #toc-mobile-header span:first-child {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #546253;
      font-weight: 700;
    }
    #toc-mobile-close {
      cursor: pointer;
      color: #4d444b;
      font-size: 20px;
      background: none;
      border: none;
      padding: 4px;
    }

    /* Responsive */
    @media (max-width: 767px) {
      #toc-panel, #toc-minimized { display: none !important; }
    }
    @media (min-width: 768px) {
      #toc-mobile-pill, #toc-mobile-overlay { display: none !important; }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      #toc-panel, #toc-minimized, .toc-children, .toc-chevron,
      #toc-mobile-pill, #toc-mobile-overlay, .toc-link {
        transition: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  // --- Section Discovery ---
  function discoverSections() {
    var sections = [];
    var h2s = document.querySelectorAll('h2[id]');
    h2s.forEach(function (h2) {
      var item = { id: h2.id, text: h2.textContent.trim(), children: [] };
      // Find h3[data-toc] between this h2 and the next h2
      var el = h2.closest('section') || h2.parentElement;
      var tocH3s = el.querySelectorAll('h3[data-toc="true"]');
      tocH3s.forEach(function (h3) {
        item.children.push({ id: h3.id, text: h3.textContent.trim() });
      });
      sections.push(item);
    });
    return sections;
  }

  // --- Build Desktop TOC ---
  function buildDesktopTOC(sections) {
    var panel = document.createElement('div');
    panel.id = 'toc-panel';
    panel.setAttribute('role', 'navigation');
    panel.setAttribute('aria-label', 'Table of contents');

    // Header
    var header = document.createElement('div');
    header.id = 'toc-header';
    header.innerHTML = '<span>On this page</span>';
    var closeBtn = document.createElement('button');
    closeBtn.id = 'toc-close';
    closeBtn.setAttribute('aria-label', 'Minimize table of contents');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function () { minimize(); });
    header.appendChild(closeBtn);
    panel.appendChild(header);

    // Links
    var list = document.createElement('div');
    list.id = 'toc-list';
    sections.forEach(function (section) {
      var linkWrap = document.createElement('div');

      var link = document.createElement('a');
      link.className = 'toc-link';
      link.href = '#' + section.id;
      link.setAttribute('data-target', section.id);
      link.tabIndex = 0;

      if (section.children.length > 0) {
        var chevron = document.createElement('span');
        chevron.className = 'toc-chevron';
        chevron.textContent = '\u25B8';
        chevron.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          toggleChildren(linkWrap);
        });
        link.appendChild(chevron);
      }

      var text = document.createElement('span');
      text.textContent = section.text;
      link.appendChild(text);

      link.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(section.id);
      });
      link.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); scrollToSection(section.id); }
      });
      linkWrap.appendChild(link);

      if (section.children.length > 0) {
        var childList = document.createElement('div');
        childList.className = 'toc-children';
        section.children.forEach(function (child) {
          var childLink = document.createElement('a');
          childLink.className = 'toc-link toc-link-h3';
          childLink.href = '#' + child.id;
          childLink.setAttribute('data-target', child.id);
          childLink.textContent = child.text;
          childLink.tabIndex = 0;
          childLink.addEventListener('click', function (e) {
            e.preventDefault();
            scrollToSection(child.id);
          });
          childLink.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') { e.preventDefault(); scrollToSection(child.id); }
          });
          childList.appendChild(childLink);
        });
        linkWrap.appendChild(childList);
      }

      list.appendChild(linkWrap);
    });
    panel.appendChild(list);
    return panel;
  }

  // --- Build Minimized Label ---
  function buildMinimized() {
    var el = document.createElement('div');
    el.id = 'toc-minimized';
    el.setAttribute('aria-label', 'Expand table of contents');
    el.tabIndex = 0;
    el.textContent = '';
    el.addEventListener('click', function () { expand(); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { expand(); }
    });
    return el;
  }

  // --- Build Mobile Pill ---
  function buildMobilePill() {
    var pill = document.createElement('div');
    pill.id = 'toc-mobile-pill';
    pill.setAttribute('aria-label', 'Open table of contents');
    pill.innerHTML = '<span class="material-symbols-outlined">toc</span>';
    pill.addEventListener('click', function () { openMobileOverlay(); });
    return pill;
  }

  // --- Build Mobile Overlay ---
  function buildMobileOverlay(sections) {
    var overlay = document.createElement('div');
    overlay.id = 'toc-mobile-overlay';

    var scrim = document.createElement('div');
    scrim.id = 'toc-mobile-scrim';
    scrim.addEventListener('click', function () { closeMobileOverlay(); });
    overlay.appendChild(scrim);

    var panel = document.createElement('div');
    panel.id = 'toc-mobile-panel';

    var header = document.createElement('div');
    header.id = 'toc-mobile-header';
    header.innerHTML = '<span>On this page</span>';
    var closeBtn = document.createElement('button');
    closeBtn.id = 'toc-mobile-close';
    closeBtn.setAttribute('aria-label', 'Close table of contents');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function () { closeMobileOverlay(); });
    header.appendChild(closeBtn);
    panel.appendChild(header);

    sections.forEach(function (section) {
      var link = document.createElement('a');
      link.className = 'toc-link';
      link.href = '#' + section.id;
      link.textContent = section.text;
      link.addEventListener('click', function (e) {
        e.preventDefault();
        closeMobileOverlay();
        setTimeout(function () { scrollToSection(section.id); }, 100);
      });
      panel.appendChild(link);

      if (section.children.length > 0) {
        section.children.forEach(function (child) {
          var childLink = document.createElement('a');
          childLink.className = 'toc-link toc-link-h3';
          childLink.href = '#' + child.id;
          childLink.textContent = child.text;
          childLink.addEventListener('click', function (e) {
            e.preventDefault();
            closeMobileOverlay();
            setTimeout(function () { scrollToSection(child.id); }, 100);
          });
          panel.appendChild(childLink);
        });
      }
    });

    overlay.appendChild(panel);
    return overlay;
  }

  // --- State Management ---
  var isMinimized = localStorage.getItem('toc-minimized') === 'true';
  var tocPanel, tocMinimized, tocMobilePill, tocMobileOverlay;
  var currentSection = '';

  function minimize() {
    isMinimized = true;
    localStorage.setItem('toc-minimized', 'true');
    tocPanel.style.opacity = '0';
    tocPanel.style.pointerEvents = 'none';
    tocMinimized.style.opacity = '1';
    tocMinimized.style.pointerEvents = 'auto';
  }

  function expand() {
    isMinimized = false;
    localStorage.setItem('toc-minimized', 'false');
    tocPanel.style.opacity = '1';
    tocPanel.style.pointerEvents = 'auto';
    tocMinimized.style.opacity = '0';
    tocMinimized.style.pointerEvents = 'none';
  }

  function openMobileOverlay() {
    tocMobileOverlay.classList.add('open');
  }

  function closeMobileOverlay() {
    tocMobileOverlay.classList.remove('open');
  }

  // --- Scroll ---
  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var headerOffset = 80;
    var y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // --- Toggle Children ---
  function toggleChildren(linkWrap) {
    var children = linkWrap.querySelector('.toc-children');
    var chevron = linkWrap.querySelector('.toc-chevron');
    if (!children) return;
    children.classList.toggle('expanded');
    if (chevron) chevron.classList.toggle('expanded');
  }

  // --- Set Active Section ---
  function setActiveSection(id) {
    if (currentSection === id) return;
    currentSection = id;

    // Update desktop TOC
    document.querySelectorAll('#toc-panel .toc-link').forEach(function (link) {
      link.classList.remove('active');
    });
    var activeLink = document.querySelector('#toc-panel a[data-target="' + id + '"]');
    if (activeLink) {
      activeLink.classList.add('active');
      // Auto-expand parent if this is an h3
      if (activeLink.classList.contains('toc-link-h3')) {
        var parent = activeLink.closest('.toc-children');
        if (parent && !parent.classList.contains('expanded')) {
          parent.classList.add('expanded');
          var chevron = parent.previousElementSibling.querySelector('.toc-chevron');
          if (chevron) chevron.classList.add('expanded');
        }
      }
    }

    // Update mobile TOC
    document.querySelectorAll('#toc-mobile-panel .toc-link').forEach(function (link) {
      link.classList.remove('active');
    });
    var mobileActive = document.querySelector('#toc-mobile-panel a[href="#' + id + '"]');
    if (mobileActive) mobileActive.classList.add('active');

    // Update minimized label
    var section = sections.find(function (s) { return s.id === id; });
    if (!section) {
      // Check if it's an h3
      for (var i = 0; i < sections.length; i++) {
        for (var j = 0; j < sections[i].children.length; j++) {
          if (sections[i].children[j].id === id) {
            section = sections[i];
            break;
          }
        }
        if (section) break;
      }
    }
    if (tocMinimized && section) {
      tocMinimized.textContent = section.text;
    }
  }

  // --- Scroll Spy (scroll-based for reliability) ---
  function setupScrollSpy() {
    var allTargets = Array.from(document.querySelectorAll('h2[id], h3[data-toc="true"]'));
    if (!allTargets.length) return;

    var headerOffset = 100;
    var ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var scrollPos = window.scrollY + headerOffset;
        var active = null;
        for (var i = allTargets.length - 1; i >= 0; i--) {
          if (allTargets[i].offsetTop <= scrollPos) {
            active = allTargets[i].id;
            break;
          }
        }
        if (active) setActiveSection(active);
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check
  }

  // --- Hero Detection ---
  function setupHeroObserver(wrapper) {
    var hasNoHero = document.querySelector('main[data-no-hero="true"]');
    if (hasNoHero) {
      showTOC(wrapper);
      return;
    }

    var firstSection = document.querySelector('main > section:first-of-type') ||
                       document.querySelector('section:first-of-type');
    if (!firstSection) {
      showTOC(wrapper);
      return;
    }

    var heroObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          hideTOC(wrapper);
        } else {
          showTOC(wrapper);
        }
      });
    }, { threshold: 0.1 });

    heroObserver.observe(firstSection);
  }

  function showTOC(wrapper) {
    if (isMinimized) {
      tocPanel.style.opacity = '0';
      tocPanel.style.pointerEvents = 'none';
      tocMinimized.style.opacity = '1';
      tocMinimized.style.pointerEvents = 'auto';
    } else {
      tocPanel.style.opacity = '1';
      tocPanel.style.pointerEvents = 'auto';
      tocMinimized.style.opacity = '0';
      tocMinimized.style.pointerEvents = 'none';
    }
    tocMobilePill.classList.remove('toc-hidden');
  }

  function hideTOC(wrapper) {
    tocPanel.style.opacity = '0';
    tocPanel.style.pointerEvents = 'none';
    tocMinimized.style.opacity = '0';
    tocMinimized.style.pointerEvents = 'none';
    tocMobilePill.classList.add('toc-hidden');
  }

  // --- Keyboard: Escape to minimize/close ---
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (tocMobileOverlay.classList.contains('open')) {
        closeMobileOverlay();
      } else if (!isMinimized) {
        minimize();
      }
    }
  });

  // --- Init ---
  var sections = discoverSections();
  if (sections.length === 0) return;

  // Build components
  tocPanel = buildDesktopTOC(sections);
  tocMinimized = buildMinimized();
  tocMobilePill = buildMobilePill();
  tocMobileOverlay = buildMobileOverlay(sections);

  // Start hidden
  tocPanel.style.opacity = '0';
  tocPanel.style.pointerEvents = 'none';
  tocMinimized.style.opacity = '0';
  tocMinimized.style.pointerEvents = 'none';
  tocMobilePill.classList.add('toc-hidden');

  // Append to body
  document.body.appendChild(tocPanel);
  document.body.appendChild(tocMinimized);
  document.body.appendChild(tocMobilePill);
  document.body.appendChild(tocMobileOverlay);

  // Setup observers
  setupHeroObserver();
  setupScrollSpy();

})();
