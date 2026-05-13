// Fullscreen historical cycle for the Germany calendar.
(function() {
  let currentIndex = 0;

  function langCode() {
    return window.currentLang || localStorage.getItem('cal_lang') || 'de';
  }

  function isRtlLang() {
    return langCode() === 'ar';
  }

  function ui(key) {
    const dict = window.HISTORY_ATLAS_UI || {};
    const lang = langCode();
    return (dict[lang] && dict[lang][key]) || (dict.en && dict.en[key]) || key;
  }

  function pick(value) {
    if (!value) return '';
    if (typeof value === 'string') return value;
    const lang = langCode();
    return value[lang] || value.en || value.de || value.ru || '';
  }

  function periods() {
    return window.HISTORY_ATLAS_PERIODS || [];
  }

  function createHistoryDOM() {
    const app = document.getElementById('app');
    if (!app || document.getElementById('historyAtlasContainer')) return;

    const container = document.createElement('div');
    container.id = 'historyAtlasContainer';
    container.innerHTML = `
      <div id="historyOverlay" aria-hidden="true">
        <div id="historyShell">
          <header id="historyHeader">
            <div>
              <p id="historyKicker"></p>
              <h2 id="historyAtlasTitle"></h2>
            </div>
            <div id="historyHeaderActions">
              <div id="historyHeaderNav"></div>
              <button id="btnHistoryClose" type="button" title=""><i data-lucide="x"></i></button>
            </div>
          </header>
          <div id="historyLayout">
            <aside id="historyTimeline"></aside>
            <main id="historyMain"></main>
          </div>
        </div>
      </div>
    `;
    app.appendChild(container);
    bindEvents();
    updateButtonText();
    if (window.lucide) window.lucide.createIcons();
  }

  function updateButtonText() {
    const btn = document.querySelector('#btnOpenHistory span');
    if (btn) btn.textContent = ui('button');
  }

  function bindEvents() {
    document.addEventListener('click', function(e) {
      const openBtn = e.target.closest('#btnOpenHistory');
      if (openBtn) {
        e.preventDefault();
        openHistory();
        return;
      }

      const periodBtn = e.target.closest('[data-history-period]');
      if (periodBtn) {
        currentIndex = parseInt(periodBtn.dataset.historyPeriod, 10) || 0;
        renderHistory();
        return;
      }

      const prevBtn = e.target.closest('#btnHistoryPrev');
      if (prevBtn) {
        currentIndex = Math.max(0, currentIndex - 1);
        renderHistory();
        return;
      }

      const nextBtn = e.target.closest('#btnHistoryNext');
      if (nextBtn) {
        currentIndex = Math.min(periods().length - 1, currentIndex + 1);
        renderHistory();
      }
    });

    const closeBtn = document.getElementById('btnHistoryClose');
    if (closeBtn) closeBtn.addEventListener('click', closeHistory);

    document.addEventListener('keydown', function(e) {
      const overlay = document.getElementById('historyOverlay');
      if (!overlay || !overlay.classList.contains('active')) return;
      if (e.key === 'Escape') closeHistory();
      if (e.key === 'ArrowLeft') {
        currentIndex = Math.max(0, currentIndex - 1);
        renderHistory();
      }
      if (e.key === 'ArrowRight') {
        currentIndex = Math.min(periods().length - 1, currentIndex + 1);
        renderHistory();
      }
    });

    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.addEventListener('change', function() {
        updateButtonText();
        const overlay = document.getElementById('historyOverlay');
        if (overlay && overlay.classList.contains('active')) renderHistory();
      });
    }
  }

  function openHistory() {
    const overlay = document.getElementById('historyOverlay');
    if (!overlay) return;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    renderHistory();
  }

  function closeHistory() {
    const overlay = document.getElementById('historyOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }

  function renderHistory() {
    const list = periods();
    if (!list.length) return;
    const period = list[currentIndex] || list[0];
    const overlay = document.getElementById('historyOverlay');
    if (overlay) {
      overlay.dir = isRtlLang() ? 'rtl' : 'ltr';
      overlay.classList.toggle('history-rtl', isRtlLang());
    }

    const kicker = document.getElementById('historyKicker');
    const atlasTitle = document.getElementById('historyAtlasTitle');
    const close = document.getElementById('btnHistoryClose');
    if (kicker) kicker.textContent = ui('title');
    if (atlasTitle) atlasTitle.textContent = pick(period.title);
    if (close) close.title = ui('close');

    renderTimeline(list);
    renderPeriod(period, list.length);
    renderHeaderNav(list.length);
    bindImageFallbacks();
    if (window.lucide) window.lucide.createIcons();
  }

  function renderHeaderNav(total) {
    const nav = document.getElementById('historyHeaderNav');
    if (!nav) return;
    nav.innerHTML = `
      <div class="history-nav">
        <button type="button" id="btnHistoryPrev" ${currentIndex === 0 ? 'disabled' : ''}><i data-lucide="chevron-left"></i> ${ui('prev')}</button>
        <button type="button" id="btnHistoryNext" ${currentIndex === total - 1 ? 'disabled' : ''}>${ui('next')} <i data-lucide="chevron-right"></i></button>
      </div>
    `;
  }

  function renderTimeline(list) {
    const timeline = document.getElementById('historyTimeline');
    if (!timeline) return;
    timeline.innerHTML = `
      <div class="history-side-title">${ui('timeline')}</div>
      <div class="history-period-list">
        ${list.map(function(period, index) {
          return `
            <button type="button" class="history-period-btn ${index === currentIndex ? 'active' : ''}" data-history-period="${index}">
              <span>${period.years}</span>
              <strong>${pick(period.title)}</strong>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  function renderPeriod(period, total) {
    const main = document.getElementById('historyMain');
    if (!main) return;

    main.innerHTML = `
      <section class="history-hero">
        <div>
          <div class="history-years">${ui('years')}: ${period.years}</div>
          <h3>${pick(period.title)}</h3>
          <p>${pick(period.summary)}</p>
        </div>
      </section>

      <section class="history-content-grid">
        <article class="history-panel history-article">
          ${renderArticle(period)}
          <p class="history-source">${ui('source')}</p>
        </article>
      </section>

      <section class="history-people">
        <h4>${ui('people')}</h4>
        <div class="history-people-grid">
          ${(period.people || []).map(personCard).join('')}
        </div>
      </section>
    `;
  }

  function renderArticle(period) {
    const body = (period.body && (period.body[langCode()] || period.body.en || period.body.de || period.body.ru)) || [];
    const highlights = (period.highlights && (period.highlights[langCode()] || period.highlights.en || period.highlights.de || period.highlights.ru)) || [];
    const media = period.media || [];
    const symbols = period.symbols || [];
    const leadMedia = media.slice(0, 1);
    const bodyMedia = media.slice(1, 3);
    const closingMedia = media.slice(3);

    return `
      ${renderMediaBlock(leadMedia, symbols, 'history-inline-media-lead')}
      <div class="history-body">
        ${body.map(function(paragraph, index) {
          const afterParagraphMedia = index === 0 && bodyMedia.length ? '<div class="history-inline-media">' + bodyMedia.map(mediaCard).join('') + '</div>' : '';
          return '<p>' + paragraph + '</p>' + afterParagraphMedia;
        }).join('')}
      </div>
      <ul class="history-highlights">
        ${highlights.map(function(item) {
          return '<li>' + item + '</li>';
        }).join('')}
      </ul>
      ${closingMedia.length ? '<div class="history-inline-media history-inline-media-compact">' + closingMedia.map(mediaCard).join('') + '</div>' : ''}
    `;
  }

  function renderMediaBlock(mediaItems, symbols, extraClass) {
    if (!mediaItems.length) return '';
    const mediaHtml = '<div class="history-inline-media ' + (extraClass || '') + '">' + mediaItems.map(mediaCard).join('') + '</div>';
    if (!symbols || !symbols.length) return mediaHtml;

    return `
      <div class="history-media-with-symbols">
        ${mediaHtml}
        <aside class="history-symbols-rail">
          ${symbols.map(symbolCard).join('')}
        </aside>
      </div>
    `;
  }

  function mediaCard(item) {
    const title = pick(item.title);
    return `
      <figure class="history-media-card">
        <img class="history-img" src="${item.image}" alt="${escapeAttr(title)}" loading="lazy" referrerpolicy="no-referrer">
        ${title ? '<figcaption>' + title + '</figcaption>' : ''}
      </figure>
    `;
  }

  function symbolCard(item) {
    return `
      <figure class="history-symbol-card">
        <img class="history-img" src="${item.image}" alt="${escapeAttr(pick(item.title))}" loading="lazy" referrerpolicy="no-referrer">
        <figcaption>${pick(item.title)}</figcaption>
      </figure>
    `;
  }

  function personCard(person) {
    const image = person.image
      ? `<img class="history-img" src="${person.image}" alt="${escapeAttr(person.name)}" loading="lazy" referrerpolicy="no-referrer">`
      : '';
    return `
      <article class="history-person-card ${person.image ? '' : 'no-image'}">
        ${image}
        <div>
          <h5>${person.name}</h5>
          <p>${pick(person.role)}</p>
        </div>
      </article>
    `;
  }

  function escapeAttr(value) {
    return String(value || '').replace(/"/g, '&quot;');
  }

  function bindImageFallbacks() {
    document.querySelectorAll('#historyMain .history-img').forEach(function(image) {
      image.addEventListener('error', function() {
        const card = image.closest('.history-media-card, .history-person-card, .history-symbol-card');
        if (card) card.classList.add('image-missing');
      }, { once: true });
    });
  }

  createHistoryDOM();
  setTimeout(updateButtonText, 250);
  setTimeout(updateButtonText, 900);
})();
