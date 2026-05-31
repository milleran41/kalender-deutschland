// Day-specific historical notes for Germany.
(function() {
  var selectedDate = null;
  var cache = {};
  var categoryOrder = ['history', 'people', 'science', 'culture', 'sport', 'weather', 'curiosities'];

  var ui = {
    de: {
      button: 'Tag der Geschichte',
      kicker: 'Deutschland',
      title: 'Tag der Geschichte',
      subtitle: 'Ereignisse an diesem Datum',
      main: '⭐ Wichtigstes Ereignis des Tages',
      why: 'Warum interessant:',
      fact: '📊 Interessanter Fakt des Tages',
      empty: 'Für dieses Datum sind noch keine geprüften Ereignisse vorbereitet.',
      sources: 'Quellen',
      close: 'Schließen',
      categories: {
        history: '🏰 Geschichte',
        people: '👤 Bekannte Persönlichkeiten',
        science: '⚙️ Wissenschaft und Technik',
        culture: '🎭 Kultur',
        sport: '⚽ Sport',
        weather: '🌦️ Wetter und Natur',
        curiosities: '😄 Kurioses und ungewöhnliche Fälle'
      }
    },
    en: {
      button: 'Day in History',
      kicker: 'Germany',
      title: 'Day in History',
      subtitle: 'Events on this date',
      main: '⭐ Main event of the day',
      why: 'Why it matters:',
      fact: '📊 Interesting fact of the day',
      empty: 'No verified events have been prepared for this date yet.',
      sources: 'Sources',
      close: 'Close',
      categories: {
        history: '🏰 History',
        people: '👤 Famous people',
        science: '⚙️ Science and technology',
        culture: '🎭 Culture',
        sport: '⚽ Sport',
        weather: '🌦️ Weather and nature',
        curiosities: '😄 Curiosities and unusual cases'
      }
    },
    ru: {
      button: 'День в истории',
      kicker: 'Германия',
      title: 'День в истории',
      subtitle: 'События на эту дату',
      main: '⭐ Главное событие дня',
      why: 'Почему это важно:',
      fact: '📊 Интересный факт дня',
      empty: 'Для этой даты события ещё не подготовлены.',
      sources: 'Источники',
      close: 'Закрыть',
      categories: {
        history: '🏰 История',
        people: '👤 Известные личности',
        science: '⚙️ Наука и техника',
        culture: '🎭 Культура',
        sport: '⚽ Спорт',
        weather: '🌦️ Погода и природа',
        curiosities: '😄 Курьёзы и необычные случаи'
      }
    }
  };

  function langCode() {
    return window.currentLang || localStorage.getItem('cal_lang') || 'de';
  }

  function text(key) {
    var lang = langCode();
    var pack = ui[lang] || ui.en;
    return pack[key] || ui.en[key] || key;
  }

  function categoryLabel(key) {
    var lang = langCode();
    var pack = ui[lang] || ui.en;
    return (pack.categories && pack.categories[key]) || ui.en.categories[key] || key;
  }

  function pick(value) {
    if (!value) return '';
    if (typeof value === 'string') return value;
    var lang = langCode();
    return value[lang] || value.en || value.de || value.ru || '';
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, function(ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
    });
  }

  function formatDate(date) {
    var lang = LANGS[langCode()] || LANGS.de;
    return date.getDate() + ' ' + (lang.months ? lang.months[date.getMonth()] : '');
  }

  function pad(num) {
    return String(num).padStart(2, '0');
  }

  function dateKey(date) {
    return pad(date.getMonth() + 1) + '-' + pad(date.getDate());
  }

  function currentDefaultDate() {
    var today = new Date();
    return new Date(window.currentYear || today.getFullYear(), today.getMonth(), today.getDate());
  }

  function setSelectedDateFromString(dateStr) {
    if (!dateStr) return;
    var parts = dateStr.split('-');
    if (parts.length !== 3) return;
    selectedDate = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  }

  async function loadData(key) {
    if (cache[key]) return cache[key];
    try {
      var response = await fetch('data/on-this-day/' + key + '.json');
      if (!response.ok) return null;
      var data = await response.json();
      cache[key] = data;
      return data;
    } catch (err) {
      return null;
    }
  }

  function ensureDom() {
    if (document.getElementById('onThisDayOverlay')) return;
    var container = document.createElement('div');
    container.id = 'onThisDayContainer';
    container.innerHTML = [
      '<div id="onThisDayOverlay" aria-hidden="true">',
      '  <div id="onThisDayShell">',
      '    <header id="onThisDayHeader">',
      '      <div>',
      '        <p id="onThisDayKicker"></p>',
      '        <h2 id="onThisDayTitle"></h2>',
      '      </div>',
      '      <button id="btnOnThisDayClose" type="button"><i data-lucide="x"></i></button>',
      '    </header>',
      '    <main id="onThisDayMain"></main>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(container);
  }

  function updateButtonText() {
    var btn = document.querySelector('#btnOpenOnThisDay span');
    if (btn) btn.textContent = text('button');
  }

  async function openOnThisDay() {
    ensureDom();
    var date = selectedDate || currentDefaultDate();
    var key = dateKey(date);
    var data = await loadData(key);
    var overlay = document.getElementById('onThisDayOverlay');
    if (!overlay) return;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    render(date, data);
  }

  function closeOnThisDay() {
    var overlay = document.getElementById('onThisDayOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }

  function render(date, data) {
    var overlay = document.getElementById('onThisDayOverlay');
    if (overlay) {
      var rtl = langCode() === 'ar';
      overlay.dir = rtl ? 'rtl' : 'ltr';
      overlay.classList.toggle('otd-rtl', rtl);
    }

    var close = document.getElementById('btnOnThisDayClose');
    var kicker = document.getElementById('onThisDayKicker');
    var title = document.getElementById('onThisDayTitle');
    var main = document.getElementById('onThisDayMain');
    if (close) close.title = text('close');
    if (kicker) kicker.textContent = text('kicker');
    if (title) title.textContent = text('title') + ': ' + formatDate(date);
    if (!main) return;

    if (!data) {
      main.innerHTML = '<div class="otd-wrap"><div class="otd-empty">' + escapeHtml(text('empty')) + '</div></div>';
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    var html = '<div class="otd-wrap">';
    if (data.main) {
      html += '<section class="otd-main-event"><h3 class="otd-main-title">' + escapeHtml(text('main')) + '</h3>' + eventCard(data.main) + '</section>';
    }

    categoryOrder.forEach(function(category) {
      var list = (data.categories && data.categories[category]) || [];
      if (!list.length) return;
      html += '<section class="otd-section"><h3 class="otd-section-title">' + escapeHtml(categoryLabel(category)) + '</h3><div class="otd-list">';
      html += list.map(eventCard).join('');
      html += '</div></section>';
    });

    if (data.fact) {
      html += '<section class="otd-fact"><h3 class="otd-fact-title">' + escapeHtml(text('fact')) + '</h3><p>' + escapeHtml(pick(data.fact)) + '</p></section>';
    }

    html += sourceLine(data);
    html += '</div>';
    main.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  }

  function eventCard(event) {
    return [
      '<article class="otd-card">',
      '  <div class="otd-year">' + escapeHtml(event.year) + '</div>',
      '  <div>',
      '    <h4>' + escapeHtml(pick(event.title)) + '</h4>',
      '    <p>' + escapeHtml(pick(event.description)) + '</p>',
      '    <p class="otd-why"><strong>' + escapeHtml(text('why')) + '</strong> ' + escapeHtml(pick(event.importance)) + '</p>',
      '  </div>',
      '</article>'
    ].join('');
  }

  function sourceLine(data) {
    var sources = data.sources || [];
    if (!sources.length) return '';
    return '<p class="otd-source-line">' + escapeHtml(text('sources')) + ': ' + sources.map(function(source) {
      return '<a href="' + escapeHtml(source.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(source.label) + '</a>';
    }).join(' · ') + '</p>';
  }

  function bind() {
    document.addEventListener('click', function(e) {
      var day = e.target.closest('.day-cell, .day-cell-lg');
      if (day && day.dataset.date) setSelectedDateFromString(day.dataset.date);
    }, true);

    document.addEventListener('click', function(e) {
      var btn = e.target.closest('#btnOpenOnThisDay');
      if (btn) {
        e.preventDefault();
        openOnThisDay();
      }

      var close = e.target.closest('#btnOnThisDayClose');
      if (close) {
        e.preventDefault();
        closeOnThisDay();
      }

      var overlay = e.target.id === 'onThisDayOverlay' ? e.target : null;
      if (overlay) closeOnThisDay();
    });

    document.addEventListener('keydown', function(e) {
      var overlay = document.getElementById('onThisDayOverlay');
      if (overlay && overlay.classList.contains('active') && e.key === 'Escape') closeOnThisDay();
    });

    var langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.addEventListener('change', function() {
        updateButtonText();
        var overlay = document.getElementById('onThisDayOverlay');
        if (overlay && overlay.classList.contains('active')) render(selectedDate || currentDefaultDate(), cache[dateKey(selectedDate || currentDefaultDate())]);
      });
    }
  }

  ensureDom();
  bind();
  setTimeout(updateButtonText, 250);
  setTimeout(updateButtonText, 900);
})();
