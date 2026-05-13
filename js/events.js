// === EVENTS DELEGATION FOR EXTENSION CSP ===
// Intercepts data-onclick, data-onchange, etc. since inline scripts are forbidden by CSP.

function executeAction(code, event, target) {
  if (!code) return;
  
  if (code.includes('changeYear(-1)')) changeYear(-1);
  else if (code.includes('changeYear(1)')) changeYear(1);
  else if (code.includes('openGotoModal()')) openGotoModal();
  else if (code.includes('openWorkModeModal()')) openWorkModeModal();
  else if (code.includes('window.print()')) window.print();
  else if (code.includes('toggleTheme()')) toggleTheme();
  else if (code.includes('openAddEvent()')) openAddEvent();
  else if (code.includes('toggleZodiacMenu()')) toggleZodiacMenu();
  else if (code.includes('closeModal()')) {
    if (code.includes('if(event.target===this)')) {
      if (event.target === target) closeModal();
    } else {
      closeModal();
    }
  }
  else if (code.includes('goToToday()')) goToToday();
  else if (code.includes('goToSelectedDate()')) goToSelectedDate();
  else if (code.includes('applyWorkModeSettings()')) applyWorkModeSettings();
  
  else if (code.startsWith('toggleFilter')) {
    var match = code.match(/toggleFilter\('([^']+)'\)/);
    if(match) toggleFilter(match[1]);
  }
  else if (code.startsWith('event.stopPropagation();selectZodiac')) {
    event.stopPropagation();
    var match = code.match(/selectZodiac\('([^']+)','([^']+)'\)/);
    if(match) selectZodiac(match[1], match[2]);
  }
  else if (code.startsWith('openMonthDetail')) {
    var match = code.match(/openMonthDetail\((\d+)\)/);
    if(match) openMonthDetail(parseInt(match[1], 10));
  }
  else if (code.startsWith('event.stopPropagation(); openEventDetail')) {
    event.stopPropagation();
    var match = code.match(/openEventDetail\('([^']+)'\)/);
    if(match) openEventDetail(match[1]);
  }
  else if (code.startsWith('initDeleteConfirm')) {
    var match = code.match(/initDeleteConfirm\('([^']+)'\)/);
    if(match) initDeleteConfirm(match[1]);
  }
  else if (code.startsWith('pickIcon')) {
    var match = code.match(/pickIcon\(this,'([^']+)'\)/);
    if(match) pickIcon(target, match[1]);
  }
  else if (code.startsWith('toggleWorkDay')) {
    var match = code.match(/toggleWorkDay\((\d+)\)/);
    if(match) toggleWorkDay(parseInt(match[1], 10));
  }
}

document.addEventListener('click', function(e) {
  var target = e.target;
  var el = target.closest && target.closest('[data-onclick]');
  if (el) {
    if (!el.getAttribute('data-onclick').includes('event.stopPropagation')) {
        // e.preventDefault();
    }
    var code = el.getAttribute('data-onclick');
    executeAction(code, e, el);
  }
});

document.addEventListener('change', function(e) {
  var el = e.target;
  if (el.matches && el.matches('[data-onchange]')) {
    var code = el.getAttribute('data-onchange');
    if (code.includes('setRegion')) setRegion(el.value);
    else if (code.includes('setLang')) setLang(el.value);
    else if (code.includes('toggleRecurringOnUnknownYear')) toggleRecurringOnUnknownYear();
    else if (code.includes('onWorkModeTypeChange')) onWorkModeTypeChange(el.value);
    else if (code.includes('onWorkHoursChange')) onWorkHoursChange(el.value);
  }
});

document.addEventListener('mouseover', function(e) {
  var el = e.target.closest && e.target.closest('[data-onmouseenter]');
  if (el) {
    var code = el.getAttribute('data-onmouseenter');
    if (code.startsWith('highlightZodiac')) {
      var match = code.match(/highlightZodiac\('([^']+)'\)/);
      if(match) highlightZodiac(match[1]);
    }
  }
});

document.addEventListener('mouseout', function(e) {
  var el = e.target.closest && e.target.closest('[data-onmouseleave]');
  if (el) {
    var code = el.getAttribute('data-onmouseleave');
    if (code.includes('clearZodiacHover')) clearZodiacHover();
  }
});

document.addEventListener('submit', function(e) {
  var el = e.target;
  if (el.matches && el.matches('[data-onsubmit]')) {
    var code = el.getAttribute('data-onsubmit');
    if (code.startsWith("saveEvent")) {
      e.preventDefault();
      var match = code.match(/saveEvent\(event,'([^']*)'\)/);
      if (match) saveEvent(e, match[1]);
      else saveEvent(e, '');
    }
  }
});
