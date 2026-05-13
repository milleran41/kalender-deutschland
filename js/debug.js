// === js/debug.js ===
document.addEventListener('DOMContentLoaded', function() {
  // Создаём панель
  var panel = document.createElement('div');
  panel.id = 'debugPanel';
  panel.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:#1e293b;color:#e2e8f0;padding:10px;font-family:monospace;font-size:11px;z-index:9999;display:none';
  panel.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px"><strong>🔍 DEBUG</strong><button id="debugClose" style="background:#6366f1;color:#fff;border:none;padding:2px 8px;border-radius:3px;cursor:pointer">✕ Close</button></div><div id="debugContent"></div>';
  document.body.appendChild(panel);

  // Кнопка закрытия
  document.getElementById('debugClose').onclick = function() {
    panel.style.display = 'none';
  };

  // Логика проверки
  function showDebug() {
    var c = document.getElementById('debugContent');
    var checks = [];
    
    ['app','appTitle','yearDisplay','calendarGrid','modalContainer'].forEach(function(id) {
      checks.push('<span style="color:'+(document.getElementById(id)?'#22c55e':'#ef4444')+'">#'+id+': '+(document.getElementById(id)?'✓':'✗')+'</span>');
    });
    checks.push('<span style="color:'+(typeof LANGS!=='undefined'?'#22c55e':'#ef4444')+'">LANGS: '+(typeof LANGS)+'</span>');
    checks.push('<span style="color:'+(typeof render==='function'?'#22c55e':'#ef4444')+'">render: '+(typeof render)+'</span>');
    checks.push('<span style="color:'+(typeof lucide!=='undefined'?'#22c55e':'#f59e0b')+'">lucide: '+(typeof lucide)+'</span>');
    
    if (chrome?.storage?.local) checks.push('<span style="color:#22c55e">Storage: chrome.storage ✓</span>');
    else if (window.localStorage) checks.push('<span style="color:#f59e0b">Storage: localStorage</span>');
    else checks.push('<span style="color:#ef4444">Storage: NONE ✗</span>');
    
    c.innerHTML = checks.join(' | ');
    panel.style.display = 'block';
  }
  
  setTimeout(showDebug, 2000);
});