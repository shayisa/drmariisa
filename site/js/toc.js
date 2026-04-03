(function () {
  'use strict';

  // --- Site Map: All pages and their sections ---
  var siteMap = [
    {
      page: 'index.html',
      label: 'Home',
      sections: [
        { id: 'integrated-scholar', text: 'Integrated Scholar' },
        { id: 'vulnerable-identities', text: 'About' },
        { id: 'laboratory-experience', text: 'Laboratory Experience' },
        { id: 'the-arid-lab', text: 'The ARID Lab' },
        { id: 'key-research', text: 'Key Research' }
      ]
    },
    {
      page: 'research.html',
      label: 'Research',
      sections: [
        { id: 'active-investigations', text: 'Active Investigations' },
        { id: 'fractography-book', text: 'FBI Fractography Guide' },
        { id: 'selected-publications', text: 'Publications (12)' },
        { id: 'books-and-chapters', text: 'Books & Chapters (4)' },
        { id: 'research-reports', text: 'Research Reports' },
        { id: 'conference-activity', text: 'Conference Activity (35)' },
        { id: 'research-funding', text: 'Research Funding' }
      ]
    },
    {
      page: 'teaching.html',
      label: 'Teaching',
      sections: [
        { id: 'curriculum-excellence', text: 'Courses (9)' },
        { id: 'student-mentorship', text: 'Student Mentorship (24)' }
      ]
    },
    {
      page: 'service-impact.html',
      label: 'Service & Impact',
      sections: [
        { id: 'professional-leadership', text: 'Professional Leadership' },
        { id: 'workshops-lectures', text: 'Workshops & Lectures' },
        { id: 'advocacy-community', text: 'Advocacy & Community' },
        { id: 'archaeological-fieldwork', text: 'Archaeological Fieldwork' },
        { id: 'university-service', text: 'University Service' },
        { id: 'peer-review', text: 'Peer Review' },
        { id: 'casework', text: 'Casework Record (61)' }
      ]
    },
    {
      page: 'arid-lab.html',
      label: 'ARID Lab',
      sections: [
        { id: 'our-mission', text: 'Mission' },
        { id: 'affiliated-faculty', text: 'Affiliated Faculty' },
        { id: 'notable-publications', text: 'Notable Publications' },
        { id: 'join-the-lab', text: 'Join the Lab' }
      ]
    },
    {
      page: 'privacy.html',
      label: 'Privacy Policy',
      sections: []
    }
  ];

  // Detect current page
  var path = window.location.pathname;
  var currentFile = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  // --- Inject Styles ---
  var style = document.createElement('style');
  style.textContent = `
    #toc-panel {
      position: fixed;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      width: 210px;
      max-height: 75vh;
      overflow-y: auto;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      border: 1px solid rgba(208, 195, 203, 0.06);
      border-radius: 12px;
      padding: 16px;
      z-index: 40;
      transition: opacity 0.3s ease;
      font-family: 'Manrope', sans-serif;
    }
    #toc-panel::-webkit-scrollbar { width: 3px; }
    #toc-panel::-webkit-scrollbar-thumb { background: rgba(77, 68, 75, 0.15); border-radius: 3px; }

    #toc-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(208, 195, 203, 0.12);
    }
    #toc-header span:first-child {
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #546253;
    }
    #toc-close {
      cursor: pointer;
      color: #4d444b;
      font-size: 14px;
      line-height: 1;
      opacity: 0.5;
      transition: opacity 0.2s;
      background: none;
      border: none;
      padding: 2px;
    }
    #toc-close:hover { opacity: 1; }

    /* Page-level links */
    .toc-page {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 4px 0 4px 6px;
      font-size: 13px;
      font-weight: 600;
      color: #361c36;
      text-decoration: none;
      cursor: pointer;
      border-left: 2px solid transparent;
      line-height: 1.3;
      transition: color 0.2s;
    }
    .toc-page:hover { color: #4e314d; }
    .toc-page.current-page {
      color: #361c36;
      border-left-color: rgba(52, 34, 0, 0.4);
    }

    /* Section links */
    .toc-section {
      display: block;
      padding: 3px 0 3px 18px;
      font-size: 12px;
      color: #4d444b;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.2s, font-weight 0.1s;
      line-height: 1.3;
    }
    .toc-section:hover { color: #361c36; }
    .toc-section.active {
      color: #361c36;
      font-weight: 700;
    }

    /* Expandable children container */
    .toc-children {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    .toc-children.expanded { max-height: 600px; }

    /* Chevron */
    .toc-chevron {
      font-size: 8px;
      transition: transform 0.2s;
      color: #4d444b;
      flex-shrink: 0;
      user-select: none;
      cursor: pointer;
    }
    .toc-chevron.expanded { transform: rotate(90deg); }

    /* Page separator */
    .toc-page-group { margin-bottom: 2px; }
    .toc-page-group + .toc-page-group { margin-top: 0; }

    /* Minimized State */
    #toc-minimized {
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 28px;
      background: rgba(54, 28, 54, 0.12);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      border: 1px solid rgba(54, 28, 54, 0.15);
      border-right: none;
      border-radius: 8px 0 0 8px;
      padding: 14px 5px;
      cursor: pointer;
      z-index: 40;
      transition: opacity 0.3s ease, background 0.2s, width 0.2s;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font-family: 'Manrope', sans-serif;
      font-size: 11px;
      font-weight: 600;
      color: #361c36;
      letter-spacing: 0.08em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 200px;
      box-shadow: -2px 0 8px rgba(54, 28, 54, 0.08);
    }
    #toc-minimized:hover {
      background: rgba(54, 28, 54, 0.18);
      width: 32px;
      color: #361c36;
    }

    .toc-hidden { opacity: 0 !important; pointer-events: none !important; }

    /* Mobile Pill */
    #toc-mobile-pill {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(208, 195, 203, 0.15);
      z-index: 40;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(77, 68, 75, 0.08);
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
      max-height: 70vh;
      overflow-y: auto;
      z-index: 51;
      font-family: 'Manrope', sans-serif;
    }
    #toc-mobile-panel .toc-page { font-size: 14px; padding: 6px 0 6px 8px; }
    #toc-mobile-panel .toc-section { font-size: 12px; padding: 4px 0 4px 24px; }
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

    @media (max-width: 767px) {
      #toc-panel, #toc-minimized { display: none !important; }
    }
    @media (min-width: 768px) {
      #toc-mobile-pill, #toc-mobile-overlay { display: none !important; }
    }
    @media (prefers-reduced-motion: reduce) {
      #toc-panel, #toc-minimized, .toc-children, .toc-chevron,
      #toc-mobile-pill, #toc-mobile-overlay, .toc-section, .toc-page {
        transition: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  // --- Build Desktop TOC ---
  function buildDesktopTOC() {
    var panel = document.createElement('div');
    panel.id = 'toc-panel';
    panel.setAttribute('role', 'navigation');
    panel.setAttribute('aria-label', 'Site table of contents');

    var header = document.createElement('div');
    header.id = 'toc-header';
    header.innerHTML = '<span>Explore</span>';
    var closeBtn = document.createElement('button');
    closeBtn.id = 'toc-close';
    closeBtn.setAttribute('aria-label', 'Minimize navigation');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function () { minimize(); });
    header.appendChild(closeBtn);
    panel.appendChild(header);

    var list = document.createElement('div');
    list.id = 'toc-list';

    siteMap.forEach(function (pageInfo) {
      if (pageInfo.sections.length === 0 && pageInfo.page !== currentFile) return;

      var group = document.createElement('div');
      group.className = 'toc-page-group';

      var isCurrentPage = (pageInfo.page === currentFile);

      // Page-level link
      var pageLink = document.createElement('a');
      pageLink.className = 'toc-page' + (isCurrentPage ? ' current-page' : '');
      pageLink.href = isCurrentPage ? '#' : pageInfo.page;
      pageLink.tabIndex = 0;

      if (pageInfo.sections.length > 0) {
        var chevron = document.createElement('span');
        chevron.className = 'toc-chevron' + (isCurrentPage ? ' expanded' : '');
        chevron.textContent = '\u25B8';
        chevron.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var children = group.querySelector('.toc-children');
          if (children) {
            children.classList.toggle('expanded');
            chevron.classList.toggle('expanded');
          }
        });
        pageLink.appendChild(chevron);
      }

      var label = document.createElement('span');
      label.textContent = pageInfo.label;
      pageLink.appendChild(label);

      if (!isCurrentPage) {
        pageLink.addEventListener('click', function (e) {
          // Let browser navigate — don't preventDefault
        });
      } else {
        pageLink.addEventListener('click', function (e) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
      group.appendChild(pageLink);

      // Section children
      if (pageInfo.sections.length > 0) {
        var childList = document.createElement('div');
        childList.className = 'toc-children' + (isCurrentPage ? ' expanded' : '');

        pageInfo.sections.forEach(function (sec) {
          var secLink = document.createElement('a');
          secLink.className = 'toc-section';
          secLink.textContent = sec.text;
          secLink.tabIndex = 0;

          if (isCurrentPage) {
            secLink.href = '#' + sec.id;
            secLink.setAttribute('data-target', sec.id);
            secLink.addEventListener('click', function (e) {
              e.preventDefault();
              scrollToSection(sec.id);
            });
            secLink.addEventListener('keydown', function (e) {
              if (e.key === 'Enter') { e.preventDefault(); scrollToSection(sec.id); }
            });
          } else {
            secLink.href = pageInfo.page + '#' + sec.id;
          }

          childList.appendChild(secLink);
        });
        group.appendChild(childList);
      }

      list.appendChild(group);
    });

    panel.appendChild(list);
    return panel;
  }

  // --- Build Minimized Label ---
  function buildMinimized() {
    var el = document.createElement('div');
    el.id = 'toc-minimized';
    el.setAttribute('aria-label', 'Expand navigation');
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
    pill.setAttribute('aria-label', 'Open site navigation');
    pill.innerHTML = '<span class="material-symbols-outlined">toc</span>';
    pill.addEventListener('click', function () { openMobileOverlay(); });
    return pill;
  }

  // --- Build Mobile Overlay ---
  function buildMobileOverlay() {
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
    header.innerHTML = '<span>Explore This Site</span>';
    var closeBtn = document.createElement('button');
    closeBtn.id = 'toc-mobile-close';
    closeBtn.setAttribute('aria-label', 'Close navigation');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function () { closeMobileOverlay(); });
    header.appendChild(closeBtn);
    panel.appendChild(header);

    siteMap.forEach(function (pageInfo) {
      if (pageInfo.sections.length === 0 && pageInfo.page !== currentFile) return;

      var isCurrentPage = (pageInfo.page === currentFile);

      var pageLink = document.createElement('a');
      pageLink.className = 'toc-page' + (isCurrentPage ? ' current-page' : '');
      pageLink.href = isCurrentPage ? '#' : pageInfo.page;
      pageLink.textContent = pageInfo.label;
      if (isCurrentPage) {
        pageLink.addEventListener('click', function (e) {
          e.preventDefault();
          closeMobileOverlay();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      } else {
        pageLink.addEventListener('click', function () {
          closeMobileOverlay();
        });
      }
      panel.appendChild(pageLink);

      pageInfo.sections.forEach(function (sec) {
        var secLink = document.createElement('a');
        secLink.className = 'toc-section';
        secLink.textContent = sec.text;

        if (isCurrentPage) {
          secLink.href = '#' + sec.id;
          secLink.addEventListener('click', function (e) {
            e.preventDefault();
            closeMobileOverlay();
            setTimeout(function () { scrollToSection(sec.id); }, 100);
          });
        } else {
          secLink.href = pageInfo.page + '#' + sec.id;
          secLink.addEventListener('click', function () { closeMobileOverlay(); });
        }
        panel.appendChild(secLink);
      });
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

  function openMobileOverlay() { tocMobileOverlay.classList.add('open'); }
  function closeMobileOverlay() { tocMobileOverlay.classList.remove('open'); }

  // --- Scroll ---
  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var headerOffset = 80;
    var y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // --- Set Active Section ---
  function setActiveSection(id) {
    if (currentSection === id) return;
    currentSection = id;

    document.querySelectorAll('#toc-panel .toc-section').forEach(function (link) {
      link.classList.remove('active');
    });
    var activeLink = document.querySelector('#toc-panel a[data-target="' + id + '"]');
    if (activeLink) activeLink.classList.add('active');

    document.querySelectorAll('#toc-mobile-panel .toc-section').forEach(function (link) {
      link.classList.remove('active');
    });
    var mobileActive = document.querySelector('#toc-mobile-panel a[href="#' + id + '"]');
    if (mobileActive) mobileActive.classList.add('active');

    // Update minimized label — show current page + section
    var currentPageInfo = siteMap.find(function (p) { return p.page === currentFile; });
    var sectionInfo = currentPageInfo ? currentPageInfo.sections.find(function (s) { return s.id === id; }) : null;
    if (tocMinimized && sectionInfo) {
      tocMinimized.textContent = sectionInfo.text;
    } else if (tocMinimized && currentPageInfo) {
      tocMinimized.textContent = currentPageInfo.label;
    }
  }

  // --- Scroll Spy ---
  function setupScrollSpy() {
    var allTargets = Array.from(document.querySelectorAll('h2[id]'));
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
    onScroll();
  }

  // --- Hero Detection ---
  function setupHeroObserver() {
    var hasNoHero = document.querySelector('main[data-no-hero="true"]');
    if (hasNoHero) {
      showTOC();
      return;
    }

    var firstSection = document.querySelector('main > section:first-of-type') ||
                       document.querySelector('section:first-of-type');
    if (!firstSection) {
      showTOC();
      return;
    }

    var heroObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          hideTOC();
        } else {
          showTOC();
        }
      });
    }, { threshold: 0.1 });

    heroObserver.observe(firstSection);
  }

  function showTOC() {
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

  function hideTOC() {
    tocPanel.style.opacity = '0';
    tocPanel.style.pointerEvents = 'none';
    tocMinimized.style.opacity = '0';
    tocMinimized.style.pointerEvents = 'none';
    tocMobilePill.classList.add('toc-hidden');
  }

  // --- Keyboard ---
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
  tocPanel = buildDesktopTOC();
  tocMinimized = buildMinimized();
  tocMobilePill = buildMobilePill();
  tocMobileOverlay = buildMobileOverlay();

  // Set initial minimized label
  var currentPageInfo = siteMap.find(function (p) { return p.page === currentFile; });
  if (currentPageInfo) tocMinimized.textContent = currentPageInfo.label;

  // Start hidden
  tocPanel.style.opacity = '0';
  tocPanel.style.pointerEvents = 'none';
  tocMinimized.style.opacity = '0';
  tocMinimized.style.pointerEvents = 'none';
  tocMobilePill.classList.add('toc-hidden');

  document.body.appendChild(tocPanel);
  document.body.appendChild(tocMinimized);
  document.body.appendChild(tocMobilePill);
  document.body.appendChild(tocMobileOverlay);

  setupHeroObserver();
  setupScrollSpy();

})();
