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
    },
    fr: {
      button: 'Jour dans l’histoire',
      kicker: 'Allemagne',
      title: 'Jour dans l’histoire',
      subtitle: 'Événements à cette date',
      main: '⭐ Événement principal du jour',
      why: 'Pourquoi c’est important :',
      fact: '📊 Fait intéressant du jour',
      empty: 'Aucun événement vérifié n’a encore été préparé pour cette date.',
      sources: 'Sources',
      close: 'Fermer',
      categories: {
        history: '🏰 Histoire',
        people: '👤 Personnalités connues',
        science: '⚙️ Science et technologie',
        culture: '🎭 Culture',
        sport: '⚽ Sport',
        weather: '🌦️ Météo et nature',
        curiosities: '😄 Curiosités et faits inhabituels'
      }
    },
    es: {
      button: 'Día en la historia',
      kicker: 'Alemania',
      title: 'Día en la historia',
      subtitle: 'Acontecimientos de esta fecha',
      main: '⭐ Acontecimiento principal del día',
      why: 'Por qué es importante:',
      fact: '📊 Dato interesante del día',
      empty: 'Aún no hay acontecimientos verificados preparados para esta fecha.',
      sources: 'Fuentes',
      close: 'Cerrar',
      categories: {
        history: '🏰 Historia',
        people: '👤 Personajes famosos',
        science: '⚙️ Ciencia y tecnología',
        culture: '🎭 Cultura',
        sport: '⚽ Deporte',
        weather: '🌦️ Tiempo y naturaleza',
        curiosities: '😄 Curiosidades y casos inusuales'
      }
    },
    it: {
      button: 'Giorno nella storia',
      kicker: 'Germania',
      title: 'Giorno nella storia',
      subtitle: 'Eventi in questa data',
      main: '⭐ Evento principale del giorno',
      why: 'Perché è importante:',
      fact: '📊 Fatto interessante del giorno',
      empty: 'Per questa data non sono ancora stati preparati eventi verificati.',
      sources: 'Fonti',
      close: 'Chiudi',
      categories: {
        history: '🏰 Storia',
        people: '👤 Personaggi famosi',
        science: '⚙️ Scienza e tecnologia',
        culture: '🎭 Cultura',
        sport: '⚽ Sport',
        weather: '🌦️ Meteo e natura',
        curiosities: '😄 Curiosità e casi insoliti'
      }
    },
    pt: {
      button: 'Dia na história',
      kicker: 'Alemanha',
      title: 'Dia na história',
      subtitle: 'Eventos nesta data',
      main: '⭐ Evento principal do dia',
      why: 'Por que é importante:',
      fact: '📊 Fato interessante do dia',
      empty: 'Ainda não há eventos verificados preparados para esta data.',
      sources: 'Fontes',
      close: 'Fechar',
      categories: {
        history: '🏰 História',
        people: '👤 Personalidades famosas',
        science: '⚙️ Ciência e tecnologia',
        culture: '🎭 Cultura',
        sport: '⚽ Esporte',
        weather: '🌦️ Tempo e natureza',
        curiosities: '😄 Curiosidades e casos incomuns'
      }
    },
    nl: {
      button: 'Dag in de geschiedenis',
      kicker: 'Duitsland',
      title: 'Dag in de geschiedenis',
      subtitle: 'Gebeurtenissen op deze datum',
      main: '⭐ Belangrijkste gebeurtenis van de dag',
      why: 'Waarom dit belangrijk is:',
      fact: '📊 Interessant feit van de dag',
      empty: 'Voor deze datum zijn nog geen gecontroleerde gebeurtenissen voorbereid.',
      sources: 'Bronnen',
      close: 'Sluiten',
      categories: {
        history: '🏰 Geschiedenis',
        people: '👤 Bekende personen',
        science: '⚙️ Wetenschap en technologie',
        culture: '🎭 Cultuur',
        sport: '⚽ Sport',
        weather: '🌦️ Weer en natuur',
        curiosities: '😄 Curiosa en ongewone gevallen'
      }
    },
    pl: {
      button: 'Dzień w historii',
      kicker: 'Niemcy',
      title: 'Dzień w historii',
      subtitle: 'Wydarzenia z tej daty',
      main: '⭐ Najważniejsze wydarzenie dnia',
      why: 'Dlaczego to ważne:',
      fact: '📊 Ciekawostka dnia',
      empty: 'Dla tej daty nie przygotowano jeszcze zweryfikowanych wydarzeń.',
      sources: 'Źródła',
      close: 'Zamknij',
      categories: {
        history: '🏰 Historia',
        people: '👤 Znane osoby',
        science: '⚙️ Nauka i technika',
        culture: '🎭 Kultura',
        sport: '⚽ Sport',
        weather: '🌦️ Pogoda i przyroda',
        curiosities: '😄 Ciekawostki i niezwykłe przypadki'
      }
    },
    tr: {
      button: 'Tarihte bugün',
      kicker: 'Almanya',
      title: 'Tarihte bugün',
      subtitle: 'Bu tarihteki olaylar',
      main: '⭐ Günün ana olayı',
      why: 'Neden önemli:',
      fact: '📊 Günün ilginç bilgisi',
      empty: 'Bu tarih için henüz doğrulanmış olay hazırlanmadı.',
      sources: 'Kaynaklar',
      close: 'Kapat',
      categories: {
        history: '🏰 Tarih',
        people: '👤 Ünlü kişiler',
        science: '⚙️ Bilim ve teknoloji',
        culture: '🎭 Kültür',
        sport: '⚽ Spor',
        weather: '🌦️ Hava ve doğa',
        curiosities: '😄 İlginç ve sıra dışı olaylar'
      }
    },
    zh: {
      button: '历史上的今天',
      kicker: '德国',
      title: '历史上的今天',
      subtitle: '这一天的事件',
      main: '⭐ 今日主要事件',
      why: '为什么重要：',
      fact: '📊 今日趣味事实',
      empty: '此日期尚未准备经过核实的事件。',
      sources: '来源',
      close: '关闭',
      categories: {
        history: '🏰 历史',
        people: '👤 知名人物',
        science: '⚙️ 科学与技术',
        culture: '🎭 文化',
        sport: '⚽ 体育',
        weather: '🌦️ 天气与自然',
        curiosities: '😄 趣闻与特殊事件'
      }
    },
    ja: {
      button: '歴史のこの日',
      kicker: 'ドイツ',
      title: '歴史のこの日',
      subtitle: 'この日の出来事',
      main: '⭐ 今日の主な出来事',
      why: 'なぜ重要か：',
      fact: '📊 今日の興味深い事実',
      empty: 'この日付には、確認済みの出来事がまだ用意されていません。',
      sources: '出典',
      close: '閉じる',
      categories: {
        history: '🏰 歴史',
        people: '👤 有名人',
        science: '⚙️ 科学と技術',
        culture: '🎭 文化',
        sport: '⚽ スポーツ',
        weather: '🌦️ 天気と自然',
        curiosities: '😄 珍しい出来事'
      }
    },
    ko: {
      button: '역사 속 오늘',
      kicker: '독일',
      title: '역사 속 오늘',
      subtitle: '이 날짜의 사건',
      main: '⭐ 오늘의 주요 사건',
      why: '왜 중요한가:',
      fact: '📊 오늘의 흥미로운 사실',
      empty: '이 날짜에 대해 검증된 사건이 아직 준비되지 않았습니다.',
      sources: '출처',
      close: '닫기',
      categories: {
        history: '🏰 역사',
        people: '👤 유명 인물',
        science: '⚙️ 과학과 기술',
        culture: '🎭 문화',
        sport: '⚽ 스포츠',
        weather: '🌦️ 날씨와 자연',
        curiosities: '😄 흥미롭고 특이한 사건'
      }
    },
    hi: {
      button: 'इतिहास में आज का दिन',
      kicker: 'जर्मनी',
      title: 'इतिहास में आज का दिन',
      subtitle: 'इस तारीख की घटनाएँ',
      main: '⭐ दिन की मुख्य घटना',
      why: 'यह क्यों महत्वपूर्ण है:',
      fact: '📊 दिन का रोचक तथ्य',
      empty: 'इस तारीख के लिए अभी कोई सत्यापित घटना तैयार नहीं है।',
      sources: 'स्रोत',
      close: 'बंद करें',
      categories: {
        history: '🏰 इतिहास',
        people: '👤 प्रसिद्ध व्यक्ति',
        science: '⚙️ विज्ञान और तकनीक',
        culture: '🎭 संस्कृति',
        sport: '⚽ खेल',
        weather: '🌦️ मौसम और प्रकृति',
        curiosities: '😄 रोचक और असामान्य घटनाएँ'
      }
    },
    ar: {
      button: 'في مثل هذا اليوم',
      kicker: 'ألمانيا',
      title: 'في مثل هذا اليوم',
      subtitle: 'أحداث في هذا التاريخ',
      main: '⭐ الحدث الأهم في اليوم',
      why: 'لماذا هو مهم:',
      fact: '📊 حقيقة مثيرة في اليوم',
      empty: 'لم يتم إعداد أحداث موثقة لهذا التاريخ بعد.',
      sources: 'المصادر',
      close: 'إغلاق',
      categories: {
        history: '🏰 التاريخ',
        people: '👤 شخصيات معروفة',
        science: '⚙️ العلم والتقنية',
        culture: '🎭 الثقافة',
        sport: '⚽ الرياضة',
        weather: '🌦️ الطقس والطبيعة',
        curiosities: '😄 طرائف وحالات غير عادية'
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
