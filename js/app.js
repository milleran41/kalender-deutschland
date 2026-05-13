// === js/app.js ===
// === FINAL VERSION: EDITING IN MONTH MODAL + ALL FIXES ===

// === UNIVERSAL BROWSER API POLYFILL ===
(function(){
  if (typeof browser !== 'undefined' && typeof chrome === 'undefined') { window.chrome = browser; }
  if (window.chrome && window.chrome.storage) {
    window.universalStorage = {
      get: function(keys) { return new Promise(function(resolve) { window.chrome.storage.local.get(keys, function(result) { resolve(result); }); }); },
      set: function(data) { return new Promise(function(resolve) { window.chrome.storage.local.set(data, function() { resolve(); }); }); },
      remove: function(key) { return new Promise(function(resolve) { window.chrome.storage.local.remove(key, function() { resolve(); }); }); }
    };
  }
})();

// === GLOBAL STATE ===
var currentYear = new Date().getFullYear();
var currentRegion = 'BY';
var currentLang = 'de';
var isDark = true;
var userEvents = [];
var filters = { national: true, regional: true, church: true, user: true, moon: false };
var selectedZodiac = null;
var zodiacMenuOpen = false;
var workMode = { type: 'vollzeit', workDays: [1,2,3,4,5], hoursPerDay: 8 };

// === FALLBACKS FOR MISSING DATA ===
if (typeof LANGS === 'undefined') window.LANGS = { de: { name: 'Deutsch', months: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'], days: ['Mo','Di','Mi','Do','Fr','Sa','So'] } };
if (typeof REGIONS === 'undefined') window.REGIONS = { BY: { de: 'Bayern' }, BW: { de: 'Baden-Württemberg' }, BE: { de: 'Berlin' }, NW: { de: 'Nordrhein-Westfalen' } };
if (typeof HISTORY_TEXTS === 'undefined') window.HISTORY_TEXTS = { 1: { title: { de: 'Kalender', ru: 'Календарь' }, regime: { de: 'Standard', ru: 'Стандарт' }, fact: { de: 'Info', ru: 'Инфо' } } };

var WORK_MODE_PRESETS = {
  vollzeit: { workDays: [1,2,3,4,5], hoursPerDay: 8 },
  teilzeit: { workDays: [1,2,3,4], hoursPerDay: 5 },
  minijob:  { workDays: [6], hoursPerDay: 4 },
  shift:    { workDays: [1,2,3,4,5,6], hoursPerDay: 8 },
  custom:   null
};

var ZODIAC_SIGNS = [
  {id:'capricorn',symbol:'♑',name:{de:'Steinbock',ru:'Козерог',en:'Capricorn'}},
  {id:'aquarius',symbol:'♒',name:{de:'Wassermann',ru:'Водолей',en:'Aquarius'}},
  {id:'pisces',symbol:'♓',name:{de:'Fische',ru:'Рыбы',en:'Pisces'}},
  {id:'aries',symbol:'♈',name:{de:'Widder',ru:'Овен',en:'Aries'}},
  {id:'taurus',symbol:'♉',name:{de:'Stier',ru:'Телец',en:'Taurus'}},
  {id:'gemini',symbol:'♊',name:{de:'Zwillinge',ru:'Близнецы',en:'Gemini'}},
  {id:'cancer',symbol:'♋',name:{de:'Krebs',ru:'Рак',en:'Cancer'}},
  {id:'leo',symbol:'♌',name:{de:'Löwe',ru:'Лев',en:'Leo'}},
  {id:'virgo',symbol:'♍',name:{de:'Jungfrau',ru:'Дева',en:'Virgo'}},
  {id:'libra',symbol:'♎',name:{de:'Waage',ru:'Весы',en:'Libra'}},
  {id:'scorpio',symbol:'♏',name:{de:'Skorpion',ru:'Скорпион',en:'Scorpio'}},
  {id:'sagittarius',symbol:'♐',name:{de:'Schütze',ru:'Стрелец',en:'Sagittarius'}}
];

// === SAFE DOM HELPERS ===
function safeGet(id) { return document.getElementById(id); }
function safeSetText(id, text) { var el = safeGet(id); if (el) el.textContent = text; }
function safeSetHTML(id, html) { var el = safeGet(id); if (el) el.innerHTML = html; }

// === HELPER FUNCTIONS ===
function getZodiacSign(month, day) {
  if ((month===1&&day>=20)||(month===2&&day<=18)) return 'aquarius';
  if ((month===2&&day>=19)||(month===3&&day<=20)) return 'pisces';
  if ((month===3&&day>=21)||(month===4&&day<=19)) return 'aries';
  if ((month===4&&day>=20)||(month===5&&day<=20)) return 'taurus';
  if ((month===5&&day>=21)||(month===6&&day<=20)) return 'gemini';
  if ((month===6&&day>=21)||(month===7&&day<=22)) return 'cancer';
  if ((month===7&&day>=23)||(month===8&&day<=22)) return 'leo';
  if ((month===8&&day>=23)||(month===9&&day<=22)) return 'virgo';
  if ((month===9&&day>=23)||(month===10&&day<=22)) return 'libra';
  if ((month===10&&day>=23)||(month===11&&day<=21)) return 'scorpio';
  if ((month===11&&day>=22)||(month===12&&day<=21)) return 'sagittarius';
  return 'capricorn';
}

// === ZODIAC LOGIC ===
function toggleZodiacMenu() {
  var dd = document.getElementById('zodiacDropdown');
  if (!dd) return;
  if (selectedZodiac) {
    selectedZodiac = null;
    var iconLarge = document.getElementById('zodiacIconLarge');
    if (iconLarge) { iconLarge.textContent = ''; iconLarge.classList.add('hidden'); }
    document.querySelectorAll('.day-cell.zodiac-highlight').forEach(function(el) { el.classList.remove('zodiac-highlight'); });
    dd.style.display = 'none';
    zodiacMenuOpen = false;
    var btn = document.getElementById('zodiacBtn');
    if (btn) btn.classList.remove('active');
    renderCalendarGrid();
  } else {
    if (zodiacMenuOpen) { dd.style.display = 'none'; zodiacMenuOpen = false; }
    else { dd.style.display = 'grid'; zodiacMenuOpen = true; }
  }
}

function highlightZodiac(id) {
  document.querySelectorAll('.day-cell.zodiac-highlight').forEach(function(el) { el.classList.remove('zodiac-highlight'); });
  document.querySelectorAll('.day-cell[data-zodiac="'+id+'"]').forEach(function(el) { el.classList.add('zodiac-highlight'); });
}

function clearZodiacHover() {
  if (!selectedZodiac) {
    document.querySelectorAll('.day-cell.zodiac-highlight').forEach(function(el) { el.classList.remove('zodiac-highlight'); });
  }
}

function selectZodiac(id, symbol) {
  selectedZodiac = id;
  var iconLarge = document.getElementById('zodiacIconLarge');
  if (iconLarge) { iconLarge.textContent = symbol; iconLarge.classList.remove('hidden'); }
  var dd = document.getElementById('zodiacDropdown');
  if (dd) dd.style.display = 'none';
  zodiacMenuOpen = false;
  var btn = document.getElementById('zodiacBtn');
  if (btn) btn.classList.add('active');
  highlightZodiac(id);
}

// === WORK MODE ===
function loadWorkMode(){ try { var raw = localStorage.getItem('workMode'); if (!raw) return; var obj = JSON.parse(raw); if (!obj || !obj.type || !Array.isArray(obj.workDays) || typeof obj.hoursPerDay !== 'number') return; workMode = obj; } catch(e){} }
function saveWorkMode(){ try { localStorage.setItem('workMode', JSON.stringify(workMode)); } catch(e){} }

// === DATE HELPERS ===
function getMoonPhase(date){var y=date.getFullYear(),m=date.getMonth()+1,d=date.getDate();if(m<3){y--;m+=12}++m;var jd=(365.25*y+30.6*m+d-694039.09)/29.5305882;var b=Math.round((jd-Math.floor(jd))*8)%8;var icons=['🌑','🌒','🌓','🌔','','🌖','','🌘'];var names={ru:['Новолуние','Растущая','1-я четверть','Прибывающая','Полнолуние','Убывающая','Последняя четверть','Старая'],de:['Neumond','Zunehmende Sichel','Erstes Viertel','Zunehmender Mond','Vollmond','Abnehmender Mond','Letztes Viertel','Abnehmende Sichel']};var list=names[currentLang]||['New Moon','Waxing Crescent','First Quarter','Waxing Gibbous','Full Moon','Waning Gibbous','Third Quarter','Waning Crescent'];return{icon:icons[b],name:list[b],phase:b}}
function computeEaster(year){var a=year%19,b=Math.floor(year/100),c=year%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),month=Math.floor((h+l-7*m+114)/31),day=((h+l-7*m+114)%31)+1;return new Date(year,month-1,day)}
function addDays(d,n){var r=new Date(d);r.setDate(r.getDate()+n);return r}
function fmtDate(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}

function getHolidays(year,region){
  var easter=computeEaster(year);
  var karfreitag=addDays(easter,-2),ostermontag=addDays(easter,1),himmelfahrt=addDays(easter,39),pfingstmontag=addDays(easter,50),fronleichnam=addDays(easter,60),bussbet=getBussUndBettag(year);
  
  var palmsonntag=addDays(easter,-7);
  var gruendonnerstag=addDays(easter,-3);
  var karsamstag=addDays(easter,-1);
  var erntedankfest=new Date(year,9,1+(7-new Date(year,9,1).getDay())%7);
  var dec25=new Date(year,11,25), d25dow=dec25.getDay(), diff=(d25dow===0?7:d25dow);
  var advent4=addDays(dec25,-diff);
  var advent1=addDays(advent4,-21), advent2=addDays(advent4,-14), advent3=addDays(advent4,-7);

  var national=[
    {date:year+'-01-01',name:{de:'Neujahr',en:'New Year',ru:'Новый год'},type:'national'},
    {date:fmtDate(karfreitag),name:{de:'Karfreitag',en:'Good Friday',ru:'Страстная пятница'},type:'national'},
    {date:fmtDate(ostermontag),name:{de:'Ostermontag',en:'Easter Monday',ru:'Пасхальный понедельник'},type:'national'},
    {date:year+'-05-01',name:{de:'Tag der Arbeit',en:'Labour Day',ru:'День труда'},type:'national'},
    {date:fmtDate(himmelfahrt),name:{de:'Christi Himmelfahrt',en:'Ascension Day',ru:'Вознесение'},type:'national'},
    {date:fmtDate(pfingstmontag),name:{de:'Pfingstmontag',en:'Whit Monday',ru:'Духов день'},type:'national'},
    {date:year+'-10-03',name:{de:'Tag der Deutschen Einheit',en:'German Unity Day',ru:'День единства Германии'},type:'national'},
    {date:year+'-12-25',name:{de:'1. Weihnachtstag',en:'Christmas Day',ru:'Рождество'},type:'national'},
    {date:year+'-12-26',name:{de:'2. Weihnachtstag',en:'St. Stephen\'s Day',ru:'2-й день Рождества'},type:'national'}
  ];
  var regional=[];
  var regH={
    'heilige3k':{date:year+'-01-06',name:{de:'Heilige Drei Könige',en:'Epiphany',ru:'Богоявление'},regions:['BW','BY','ST']},
    'frauentag':{date:year+'-03-08',name:{de:'Internationaler Frauentag',en:'International Women\'s Day',ru:'Женский день'},regions:['BE','MV']},
    'fronleichnam':{date:fmtDate(fronleichnam),name:{de:'Fronleichnam',en:'Corpus Christi',ru:'Праздник Тела Христова'},regions:['BW','BY','HE','NW','RP','SL','SN','TH']},
    'maria':{date:year+'-08-15',name:{de:'Mariä Himmelfahrt',en:'Assumption of Mary',ru:'Успение Богородицы'},regions:['BY','SL']},
    'weltkindt':{date:year+'-09-20',name:{de:'Weltkindertag',en:'World Children\'s Day',ru:'День детей'},regions:['TH']},
    'reformtag':{date:year+'-10-31',name:{de:'Reformationstag',en:'Reformation Day',ru:'День Реформации'},regions:['BB','HB','HH','MV','NI','SN','ST','SH','TH']},
    'allerheiligen':{date:year+'-11-01',name:{de:'Allerheiligen',en:'All Saints\'s Day',ru:'День всех святых'},regions:['BW','BY','NW','RP','SL']},
    'bussbet':{date:fmtDate(bussbet),name:{de:'Buß- und Bettag',en:'Repentance Day',ru:'День покаяния'},regions:['SN']}
  };
  for(var key in regH){var h=regH[key];if(h.regions.includes(region))regional.push({date:h.date,name:h.name,type:'regional'})}
  var church=[
    {date:fmtDate(palmsonntag),name:{de:'Palmsonntag',en:'Palm Sunday',ru:'Вербное воскресенье'},type:'church'},
    {date:fmtDate(gruendonnerstag),name:{de:'Gründonnerstag',en:'Maundy Thursday',ru:'Зелёный четверг'},type:'church'},
    {date:fmtDate(karsamstag),name:{de:'Karsamstag',en:'Holy Saturday',ru:'Великая суббота'},type:'church'},
    {date:fmtDate(easter),name:{de:'Ostersonntag',en:'Easter Sunday',ru:'Пасха'},type:'church'},
    {date:fmtDate(addDays(easter,49)),name:{de:'Pfingstsonntag',en:'Whit Sunday',ru:'Троица'},type:'church'},
    {date:fmtDate(erntedankfest),name:{de:'Erntedankfest',en:'Harvest Festival',ru:'Праздник урожая'},type:'church'},
    {date:fmtDate(advent1),name:{de:'1. Advent',en:'1st Advent',ru:'1-й Адвент'},type:'church'},
    {date:fmtDate(advent2),name:{de:'2. Advent',en:'2nd Advent',ru:'2-й Адвент'},type:'church'},
    {date:fmtDate(advent3),name:{de:'3. Advent',en:'3rd Advent',ru:'3-й Адвент'},type:'church'},
    {date:fmtDate(advent4),name:{de:'4. Advent',en:'4th Advent',ru:'4-й Адвент'},type:'church'},
    {date:year+'-06-24',name:{de:'Johannistag',en:'St. John\'s Day',ru:'Рождество Иоанна Крестителя'},type:'church'},
    {date:year+'-11-02',name:{de:'Allerseelen',en:'All Souls\' Day',ru:'День всех усопших'},type:'church'},
    {date:year+'-12-06',name:{de:'Nikolaustag',en:'St. Nicholas Day',ru:'День святого Николая'},type:'church'},
    {date:year+'-12-24',name:{de:'Heiligabend',en:'Christmas Eve',ru:'Сочельник'},type:'church'},
    {date:year+'-12-31',name:{de:'Silvester',en:'New Year\'s Eve',ru:'Новогодняя ночь'},type:'church'}
  ];
  if(!regH['heilige3k'].regions.includes(region)) church.push({date:year+'-01-06',name:{de:'Heilige Drei Könige',en:'Epiphany',ru:'Богоявление'},type:'church'});
  if(!regH['fronleichnam'].regions.includes(region)) church.push({date:fmtDate(fronleichnam),name:{de:'Fronleichnam',en:'Corpus Christi',ru:'Праздник Тела Христова'},type:'church'});
  if(!regH['maria'].regions.includes(region)) church.push({date:year+'-08-15',name:{de:'Mariä Himmelfahrt',en:'Assumption of Mary',ru:'Успение Богородицы'},type:'church'});
  if(!regH['reformtag'].regions.includes(region)) church.push({date:year+'-10-31',name:{de:'Reformationstag',en:'Reformation Day',ru:'День Реформации'},type:'church'});
  if(!regH['allerheiligen'].regions.includes(region)) church.push({date:year+'-11-01',name:{de:'Allerheiligen',en:'All Saints\'s Day',ru:'День всех святых'},type:'church'});
  if(!regH['bussbet'].regions.includes(region)) church.push({date:fmtDate(bussbet),name:{de:'Buß- und Bettag',en:'Repentance Day',ru:'День покаяния'},type:'church'});

  return national.concat(regional, church);
}

function getBussUndBettag(year){var d=new Date(year,10,22);while(d.getDay()!==3)d.setDate(d.getDate()-1);return d}
function getISOWeek(d){var tmp=new Date(d.getTime());tmp.setHours(0,0,0,0);tmp.setDate(tmp.getDate()+3-(tmp.getDay()+6)%7);var w1=new Date(tmp.getFullYear(),0,4);return 1+Math.round(((tmp-w1)/864e5-(tmp.getDay()+6)%7+(w1.getDay()+6)%7)/7)}
function isWeekend(d){var day=d.getDay();return day===0||day===6}
function getHolidayInfo(dateStr,holidays){return holidays.filter(function(h){return h.date===dateStr})}
function getUserEventsForDate(dateStr){
  var targetMD = dateStr.substring(5);
  return userEvents.filter(function(e){
    if(e.date === dateStr) return true;
    if((e.recurring === true || e.recurring === 'true' || e.date.startsWith('0000')) && e.date.substring(5) === targetMD) return true;
    return false;
  });
}

var holidaysCache=[];
function isUserWorkDay(dateStr){
  var d = new Date(dateStr);
  if (isNaN(d.getTime())) return false;
  var dow = d.getDay(); var idx = dow === 0 ? 7 : dow;
  if (!workMode.workDays.includes(idx)) return false;
  var hols = getHolidayInfo(dateStr, holidaysCache).filter(function(h){return h.type!=='church'});
  if (hols.length > 0) return false;
  return true;
}

// === SAFE RENDER ===
function render() {
  try {
    if (!document.body) return;
    if (typeof t !== 'function') {
      window.t = function(key) {
        var dict = (typeof LANGS !== 'undefined' && LANGS[currentLang]) ? LANGS[currentLang] : {};
        return dict[key] || key;
      };
    }
    document.querySelectorAll('[data-t]').forEach(function(el){ if (el && el.dataset.t) el.textContent = t(el.dataset.t); });
    document.querySelectorAll('[data-t-title]').forEach(function(el){ if (el && el.dataset.tTitle) el.title = t(el.dataset.tTitle); });
    if (typeof getHolidays === 'function') holidaysCache = getHolidays(currentYear, currentRegion);
    safeSetText('yearDisplay', currentYear);
    if (typeof renderRegionSelect === 'function') renderRegionSelect();
    if (typeof renderLangSelect === 'function') renderLangSelect();
    if (typeof renderFilters === 'function') renderFilters();
    if (typeof renderGlobalStats === 'function') renderGlobalStats();
    if (typeof renderHistory === 'function') renderHistory();
    if (typeof renderCalendarGrid === 'function') renderCalendarGrid();
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  } catch (err) {
    console.error('🔥 RENDER CRASH:', err);
    document.body.innerHTML = '<div style="padding:40px;font-family:sans-serif;color:#ef4444;background:#0f172a;height:100vh;"><h2>❌ Ошибка отображения</h2><p>Откройте консоль (F12), чтобы увидеть детали.</p><pre style="background:#1e293b;color:#fff;padding:15px;border-radius:8px;overflow:auto;">' + err.stack + '</pre></div>';
  }
}

function renderRegionSelect(){ var sel = safeGet('regionSelect'); if (!sel) return; sel.innerHTML = ''; for(var k in REGIONS){ sel.innerHTML += '<option value="'+k+'" '+(k===currentRegion?'selected':'')+'>'+REGIONS[k].de+'</option>'; } }
function renderLangSelect(){ var sel = safeGet('langSelect'); if (!sel) return; sel.innerHTML = ''; for(var k in LANGS){ sel.innerHTML += '<option value="'+k+'" '+(k===currentLang?'selected':'')+'>'+LANGS[k].name+'</option>'; } }

function renderFilters(){
  var el = safeGet('filters'); if (!el) return;
  var items=[{key:'national',label:t('national'),color:'#fff9c4'},{key:'regional',label:t('regional'),color:'#ffe0b2'},{key:'church',label:t('church'),color:'#e0e0e0'},{key:'user',label:t('user_ev'),color:'#bbdefb'},{key:'moon',label:t('moon'),color:'#94a3b8'}];
  var html='';
  for(var i=0;i<items.length;i++){ var it=items[i]; html+='<span class="filter-chip '+(filters[it.key]?'active':'')+'" data-filter="'+it.key+'"><span class="inline-block w-2 h-2 rounded-full mr-1" style="background:'+it.color+'"></span>'+it.label+'</span>'; }
  
  var sym=''; if(selectedZodiac){ var match=ZODIAC_SIGNS.find(function(s){return s.id===selectedZodiac;}); if(match) sym=match.symbol; }
  html+='<div class="relative" id="zodiacWrap" style="display:inline-block;position:relative;z-index:100;pointer-events:auto !important;">';
  html+='<span class="filter-chip '+(selectedZodiac?'active':'')+'" id="zodiacBtn" style="display:inline-flex;align-items:center;gap:6px;cursor:pointer;position:relative;z-index:101;pointer-events:auto !important;">⛎ <span id="zodiacIconLarge" class="'+(selectedZodiac?'':'hidden')+'" style="font-size:16px;line-height:1">'+sym+'</span> '+t('zodiac')+'</span>';
  html+='<div id="zodiacDropdown" style="display:'+(zodiacMenuOpen?'grid':'none')+';position:absolute;left:0;top:calc(100% + 6px);z-index:102;padding:6px;border-radius:8px;gap:4px;grid-template-columns:repeat(6,36px);background:'+(isDark?'#1e293b':'#fff')+';border:1px solid '+(isDark?'#475569':'#cbd5e1')+';box-shadow:0 8px 24px rgba(0,0,0,'+(isDark?'0.5':'0.15')+');pointer-events:auto !important;">';
  for(var z=0;z<ZODIAC_SIGNS.length;z++){ var sign=ZODIAC_SIGNS[z]; html+='<div class="zi" data-zodiac-id="'+sign.id+'" data-zodiac-symbol="'+sign.symbol+'" title="'+(sign.name[currentLang]||sign.name.de)+'" style="width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;border-radius:6px;cursor:pointer;transition:background 0.12s;pointer-events:auto !important;">'+sign.symbol+'</div>'; }
  html+='</div></div>';
  el.innerHTML = html;
}

function renderGlobalStats(){
  var el = safeGet('globalStats'); if (!el) return;
  var today=new Date(), endOfYear=new Date(currentYear,11,31), isCurrentYear=today.getFullYear()===currentYear;
  var daysLeft=0, workDaysLeft=0, nextHoliday=null;
  if (currentYear >= 1995) {
    if(isCurrentYear){ var fromDate=new Date(today); fromDate.setDate(fromDate.getDate()+1); for(var d=new Date(fromDate); d<=endOfYear; d.setDate(d.getDate()+1)){ daysLeft++; if(isUserWorkDay(fmtDate(d))) workDaysLeft++; } var natReg=holidaysCache.filter(function(h){return h.type!=='church'}); for(var hi=0;hi<natReg.length;hi++){ var hd=new Date(natReg[hi].date); if(hd>=today&&(!nextHoliday||hd<new Date(nextHoliday.date))) nextHoliday=natReg[hi]; } }
    var items=[];
    if(isCurrentYear){
      items.push('<span class="flex items-center gap-1"><i data-lucide="calendar-clock" class="w-[14px] h-[14px]"></i> '+t('days_left')+': <b>'+daysLeft+'</b></span>');
      items.push('<span class="flex items-center gap-1"><i data-lucide="briefcase" class="w-[14px] h-[14px]"></i> '+t('work_left')+': <b>'+workDaysLeft+'</b></span>');
      if(nextHoliday) items.push('<span class="flex items-center gap-1"><i data-lucide="star" class="w-[14px] h-[14px]"></i> '+t('next_holiday')+': <b>'+(nextHoliday.name[currentLang]||nextHoliday.name.de)+'</b> ('+nextHoliday.date+')</span>');
    }
    el.innerHTML = items.join('');
  } else { el.innerHTML = '<span class="text-xs opacity-50 italic">Статистика не рассчитана</span>'; }
}

function renderCalendarGrid(){ var grid = safeGet('calendarGrid'); if (!grid) return; grid.innerHTML = ''; for(var m=0; m<12; m++) { grid.innerHTML += renderMonthCard(m); } if (typeof lucide !== 'undefined') lucide.createIcons(); }

function renderMonthCard(monthIdx){
  var lang=LANGS[currentLang]||LANGS.de;
  var first=new Date(currentYear,monthIdx,1), daysInMonth=new Date(currentYear,monthIdx+1,0).getDate();
  var startDay=(first.getDay()+6)%7;
  var html='<div class="month-card rounded-lg p-3" data-month-idx="'+monthIdx+'" style="cursor:pointer">';
  html+='<div class="font-semibold text-sm mb-2">'+lang.months[monthIdx]+'</div>';
  html+='<div class="grid gap-0 month-grid">';
  html+='<div class="wk-num">'+t('week')+'</div>';
  for(var d=0;d<7;d++){var colC=d>=5?'c-red':'c-gray';html+='<div class="text-center text-[9px] font-bold '+colC+'">'+lang.days[d]+'</div>';}
  var dayNum=1; var showOfficialHolidays = (currentYear >= 1995);
  for(var row=0;row<6&&dayNum<=daysInMonth;row++){
    var wkDate=new Date(currentYear,monthIdx,dayNum);html+='<div class="wk-num lh-26">'+getISOWeek(wkDate)+'</div>';
    for(var col=0;col<7;col++){
      if((row===0&&col<startDay)||dayNum>daysInMonth){html+='<div class="day-cell"></div>';}
      else{
        var date=new Date(currentYear,monthIdx,dayNum), dateStr=fmtDate(date), hols=showOfficialHolidays?getHolidayInfo(dateStr,holidaysCache):[], uEvents=getUserEventsForDate(dateStr);
        var isToday=dateStr===fmtDate(new Date()), zSign=getZodiacSign(monthIdx+1,dayNum); var cls='day-cell'; if(isToday) cls+=' today';
        var natHol=null, regHol=null, chHol=null;
        if(showOfficialHolidays){ for(var hi=0;hi<hols.length;hi++){if(hols[hi].type==='national')natHol=hols[hi];if(hols[hi].type==='regional')regHol=hols[hi];if(hols[hi].type==='church')chHol=hols[hi];} }
        if(selectedZodiac&&zSign===selectedZodiac) cls+=' zodiac-highlight';
        else if(filters.user&&uEvents.length>0) cls+=' user-event';
        else if(showOfficialHolidays && filters.national&&natHol) cls+=' national';
        else if(showOfficialHolidays && filters.regional&&regHol) cls+=' regional';
        else if(showOfficialHolidays && filters.church&&chHol) cls+=' church';
        else if(isWeekend(date)) cls+=' weekend';
        var tooltipParts=[];
        if(showOfficialHolidays && natHol&&filters.national)tooltipParts.push('&#x1F3DB; '+(natHol.name[currentLang]||natHol.name.de));
        if(showOfficialHolidays && regHol&&filters.regional)tooltipParts.push('&#x1F3F3; '+(regHol.name[currentLang]||regHol.name.de));
        if(showOfficialHolidays && chHol&&filters.church)tooltipParts.push('&#x271D; '+(chHol.name[currentLang]||chHol.name.de));
        uEvents.forEach(function(e){if(filters.user)tooltipParts.push((e.icon||'&#x1F4CC;')+' '+e.title+' <span style="opacity:0.7;font-size:9px">(клик для изм.)</span>')});
        var moonMark='';
        if(filters.moon){var mp=getMoonPhase(date);tooltipParts.push(mp.icon+' '+mp.name);moonMark='<div class="tt-moon">'+mp.icon+'</div>';}
        var tooltipHtml=tooltipParts.length?'<div class="tooltip-box">'+tooltipParts.join('<br>')+'</div>':'';
        var cursorStyle=uEvents.length?'pointer':'default';
        html+='<div class="'+cls+' tooltip-wrap" data-zodiac="'+zSign+'" data-date="'+dateStr+'" style="cursor:'+cursorStyle+'" data-has-event="'+(uEvents.length>0?'true':'false')+'">'+dayNum+moonMark+tooltipHtml+'</div>';dayNum++;
      }
    }
  }
  html+='</div></div>';return html;
}

function renderHistory(){
  var block = safeGet('historyBlock'); if (!block) return;
  var titleEl = safeGet('historyTitle'); var regimeEl = safeGet('historyRegime'); var factEl = safeGet('historyFact');
  var years = Object.keys(HISTORY_TEXTS).map(Number).sort(function(a,b){return b-a});
  var infoYear = years.find(function(y){ return currentYear >= y; }) || 1;
  var info = HISTORY_TEXTS[infoYear];
  var lang = currentLang in LANGS ? currentLang : 'de';
  if (titleEl) titleEl.textContent = (info.title[lang] || info.title.de) + ' (' + currentYear + ')';
  if (regimeEl) regimeEl.textContent = info.regime[lang] || info.regime.de;
  if (factEl) factEl.textContent = info.fact[lang] || info.fact.de;
  safeSetText('historyRegimeLabel', t('history_regime_label'));
  safeSetText('historyFactLabel', t('history_fact_label'));
  block.classList.remove('hidden');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// === EVENT DELEGATION ===
function setupEventListeners() {
  console.log('🔧 Setting up global event listeners...');
  
  // Header buttons
  var btnYearPrev = document.getElementById('btnYearPrev');
  if (btnYearPrev) btnYearPrev.addEventListener('click', function(e){ e.preventDefault(); changeYear(-1); });
  var btnYearNext = document.getElementById('btnYearNext');
  if (btnYearNext) btnYearNext.addEventListener('click', function(e){ e.preventDefault(); changeYear(1); });
  var btnGoto = document.getElementById('btnGotoDate');
  if (btnGoto) btnGoto.addEventListener('click', function(e){ e.preventDefault(); openGotoModal(); });
  var btnWork = document.getElementById('btnWorkMode');
  if (btnWork) btnWork.addEventListener('click', function(e){ e.preventDefault(); openWorkModeModal(); });
  var btnPrint = document.getElementById('btnPrint');
  if (btnPrint) btnPrint.addEventListener('click', function(e){ e.preventDefault(); window.print(); });
  var btnTheme = document.getElementById('btnToggleTheme');
  if (btnTheme) btnTheme.addEventListener('click', function(e){ e.preventDefault(); toggleTheme(); });
  var btnAdd = document.getElementById('btnAddEvent');
  if (btnAdd) btnAdd.addEventListener('click', function(e){ e.preventDefault(); openAddEvent(null); });
  
  // Selects
  var regionSelect = document.getElementById('regionSelect');
  if (regionSelect) regionSelect.addEventListener('change', function(){ setRegion(this.value); });
  var langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.addEventListener('change', function(){ setLang(this.value); });
  
  // Filters and Zodiac
  var filtersEl = safeGet('filters');
  if (filtersEl && !filtersEl.dataset.globalListener) {
    filtersEl.dataset.globalListener = 'true';
    filtersEl.addEventListener('click', function(e){
      var chip = e.target.closest('[data-filter]');
      if (chip) { toggleFilter(chip.dataset.filter); return; }
      
      if (e.target.closest('#zodiacBtn')) { e.stopPropagation(); toggleZodiacMenu(); }
      var item = e.target.closest('.zi');
      if (item) { e.stopPropagation(); selectZodiac(item.dataset.zodiacId, item.dataset.zodiacSymbol); }
    });
    
    filtersEl.addEventListener('mouseover', function(e){
      var item = e.target.closest('.zi');
      if (item && !selectedZodiac) highlightZodiac(item.dataset.zodiacId);
    });
    
    filtersEl.addEventListener('mouseout', function(e){
      var wrap = e.target.closest('#zodiacWrap');
      if (wrap && !selectedZodiac) {
        if (!e.relatedTarget || !wrap.contains(e.relatedTarget)) {
          clearZodiacHover();
        }
      }
    });
  }
  if (!document.body.dataset.zodiacGlobalListener) {
    document.body.dataset.zodiacGlobalListener = 'true';
    document.addEventListener('click', function(e){ if (zodiacMenuOpen && !e.target.closest('#zodiacWrap')) { var dd = document.getElementById('zodiacDropdown'); if (dd) { dd.style.display = 'none'; zodiacMenuOpen = false; } } });
  }
  
  // Calendar Grid
  var grid = safeGet('calendarGrid');
  if (grid && !grid.dataset.globalListener) {
    grid.dataset.globalListener = 'true';
    grid.addEventListener('click', function(e){
      var card = e.target.closest('.month-card');
      if (card) { openMonthDetail(parseInt(card.dataset.monthIdx)); return; }
      var day = e.target.closest('.day-cell');
      if (day) {
        e.stopPropagation();
        var dateStr = day.dataset.date;
        if (day.dataset.hasEvent === 'true') { var ev = getUserEventsForDate(dateStr)[0]; if (ev) openEventDetail(ev.__backendId); }
        else { openAddEvent({ date: dateStr }); }
      }
    });
  }
  console.log('✅ Global event listeners set up');
}

// === MODAL: MONTH DETAIL (WITH EDITING) ===
function openMonthDetail(monthIdx) {
  var lang = LANGS[currentLang] || LANGS.de;
  var daysInMonth = new Date(currentYear, monthIdx + 1, 0).getDate();
  var calDays = daysInMonth, weekends = 0, holDays = 0, workDays = 0;
  var showOfficialHolidays = (currentYear >= 1995);
  for (var d = 1; d <= daysInMonth; d++) {
    var date = new Date(currentYear, monthIdx, d);
    var dateStr = fmtDate(date);
    var hols = showOfficialHolidays ? getHolidayInfo(dateStr, holidaysCache).filter(function(h) { return h.type !== 'church'; }) : [];
    if (isWeekend(date)) weekends++;
    if (hols.length > 0) holDays++;
    if (isUserWorkDay(dateStr)) workDays++;
  }
  var html = '';
  html += '<div class="modal-overlay" id="monthModalOverlay">';
  html += '<div class="modal-content-full">';
  html += '<button id="btnCloseMonth" class="modal-close-btn">✕</button>';
  html += '<h1 style="margin:0 0 20px 0;font-size:32px;font-weight:800;color:#fff;">' + lang.months[monthIdx] + ' ' + currentYear + '</h1>';
  html += '<div class="modal-stats-grid">';
  html += '<div class="stat-box"><div class="stat-val">' + calDays + '</div><div class="stat-lbl">' + (lang.calendar_days || 'Календарные дни') + '</div></div>';
  html += '<div class="stat-box"><div class="stat-val">' + workDays + '</div><div class="stat-lbl">' + (lang.work_days || 'Рабочие дни') + '</div></div>';
  html += '<div class="stat-box"><div class="stat-val">' + weekends + '</div><div class="stat-lbl">' + (lang.weekends || 'Выходные') + '</div></div>';
  html += '<div class="stat-box"><div class="stat-val">' + holDays + '</div><div class="stat-lbl">' + (lang.holidays || 'Праздники') + '</div></div>';
  html += '</div>';
  html += '<div class="modal-grid-large">';
  html += '<div class="wk-num-lg">' + t('week') + '</div>';
  var days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  for (var i = 0; i < 7; i++) { html += '<div class="day-header" style="color:' + (i >= 5 ? '#ef4444' : '#94a3b8') + '">' + days[i] + '</div>'; }
  var first = new Date(currentYear, monthIdx, 1);
  var startDay = (first.getDay() + 6) % 7;
  var dayNum = 1;
  for (var row = 0; row < 6 && dayNum <= daysInMonth; row++) {
    var wkDate = new Date(currentYear, monthIdx, dayNum);
    html += '<div class="wk-num-lg">' + getISOWeek(wkDate) + '</div>';
    for (var col = 0; col < 7; col++) {
      if ((row === 0 && col < startDay) || dayNum > daysInMonth) { html += '<div class="day-cell-lg"></div>'; }
      else {
        var date = new Date(currentYear, monthIdx, dayNum);
        var dateStr = fmtDate(date);
        var hols = showOfficialHolidays ? getHolidayInfo(dateStr, holidaysCache) : [];
        var uEvents = getUserEventsForDate(dateStr);
        var isToday = dateStr === fmtDate(new Date());
        var zSign = getZodiacSign(monthIdx + 1, dayNum);
        var cls = 'day-cell-lg';
        if (isToday) cls += ' today';
        var natHol = null, regHol = null, chHol = null;
        if (showOfficialHolidays) { for (var hi = 0; hi < hols.length; hi++) { if (hols[hi].type === 'national') natHol = hols[hi]; if (hols[hi].type === 'regional') regHol = hols[hi]; if (hols[hi].type === 'church') chHol = hols[hi]; } }
        var style = '';
        var tooltipParts = [];
        if (chHol && filters.church) { style = 'background:#475569;color:#fff;'; tooltipParts.push('&#x271D; ' + (chHol.name[currentLang] || chHol.name.de)); }
        else if (natHol && filters.national) { style = 'background:#ffd600;color:#000;'; tooltipParts.push('&#x1F3DB; ' + (natHol.name[currentLang] || natHol.name.de)); }
        else if (regHol && filters.regional) { style = 'background:#ff9100;color:#fff;'; tooltipParts.push('&#x1F3F3; ' + (regHol.name[currentLang] || regHol.name.de)); }
        else if (isWeekend(date)) { style = 'background:#ff1744;color:#fff;'; }
        else if (uEvents.length > 0 && filters.user) { style = 'background:#1e88e5;color:#fff;'; uEvents.forEach(function(e) { tooltipParts.push((e.icon || '&#x1F4CC;') + ' ' + e.title); }); }
        else if (isToday) { style = 'border:2px solid #6366f1;'; }
        if (selectedZodiac && zSign === selectedZodiac) { cls += ' zodiac-highlight'; style = 'background:#818cf8;color:#fff;box-shadow:0 0 8px rgba(129,140,248,0.6);'; }
        var moonMark = '';
        if (filters.moon) { var mp = getMoonPhase(date); tooltipParts.push(mp.icon + ' ' + mp.name); moonMark = '<div style="position:absolute;bottom:4px;right:6px;font-size:16px;pointer-events:none;opacity:0.9;">' + mp.icon + '</div>'; }
        var tt = tooltipParts.length ? '<div class="tooltip-box" style="display:none;position:absolute;z-index:999;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);padding:6px 10px;border-radius:6px;font-size:11px;white-space:nowrap;pointer-events:none;background:#334155;color:#e2e8f0;box-shadow:0 2px 8px rgba(0,0,0,0.4);">' + tooltipParts.join('<br>') + '</div>' : '';
        var cursorStyle = uEvents.length ? 'pointer' : 'default';
        html += '<div class="' + cls + '" style="' + style + 'position:relative;cursor:'+cursorStyle+';" data-date="' + dateStr + '" data-has-event="'+(uEvents.length>0?'true':'false')+'">' + dayNum + moonMark + tt + '</div>';
        dayNum++;
      }
    }
  }
  html += '</div></div></div>';
  
  var container = safeGet('modalContainer');
  if (container) {
    container.innerHTML = html;
    var btnClose = document.getElementById('btnCloseMonth');
    if (btnClose) btnClose.addEventListener('click', function() { container.innerHTML = ''; });
    var overlay = document.getElementById('monthModalOverlay');
    if (overlay) overlay.addEventListener('click', function(e) { if (e.target === overlay) container.innerHTML = ''; });
    container.querySelectorAll('.tooltip-box').forEach(function(box) { var parent = box.parentElement; parent.addEventListener('mouseenter', function() { box.style.display = 'block'; }); parent.addEventListener('mouseleave', function() { box.style.display = 'none'; }); });
    
    // === КЛИК ПО ДНЮ В ОКНЕ МЕСЯЦА -> ОТКРЫТЬ РЕДАКТИРОВАНИЕ ===
    var modalGrid = container.querySelector('.modal-grid-large');
    if (modalGrid) {
      modalGrid.addEventListener('click', function(e) {
        var dayCell = e.target.closest('.day-cell-lg');
        if (dayCell && dayCell.dataset.hasEvent === 'true') {
          e.stopPropagation();
          var dateStr = dayCell.dataset.date;
          var ev = getUserEventsForDate(dateStr)[0];
          if (ev) openAddEvent(ev);
        }
      });
    }
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeModal() { var c = safeGet('modalContainer'); if (c) c.innerHTML = ''; }

// === EVENT MODAL: ADD / EDIT ===
function openAddEvent(editData) {
  var isEdit = !!editData;
  var editId = isEdit ? editData.__backendId : null;
  var formDay = 1, formMonth = 0, formYear = currentYear;
  if (isEdit && editData.date) { var parts = editData.date.split('-'); formYear = parseInt(parts[0]); formMonth = parseInt(parts[1]) - 1; formDay = parseInt(parts[2]); }
  else if (!isEdit && editData && editData.date) { var parts = editData.date.split('-'); formYear = parseInt(parts[0]); formMonth = parseInt(parts[1]) - 1; formDay = parseInt(parts[2]); }
  else { var now = new Date(); formYear = now.getFullYear(); formMonth = now.getMonth(); formDay = now.getDate(); }
  
  var lang = LANGS[currentLang] || LANGS.de;
  var deleteBtn = isEdit ? '<button type="button" id="btnDeleteEvent" class="btn-secondary text-red-400 border-red-400 text-xs">' + t('delete') + '</button>' : '';
  var iconOpts = ['&#x1F4CC;','&#x1F382;','&#x2764;&#xFE0F;','&#x2B50;','&#x1F389;','&#x1F3E0;','&#x2708;&#xFE0F;','&#x1F4BC;','&#x1F393;','&#x1F3C6;'];
  var iconKeys = ['tt_note','tt_bday','tt_love','tt_star','tt_party','tt_home','tt_travel','tt_work','tt_study','tt_trophy'];
  var currentIcon = isEdit ? (editData.icon || '&#x1F4CC;') : '&#x1F4CC;';
  var iconsHtml = '';
  for (var i = 0; i < iconOpts.length; i++) { var ic = iconOpts[i]; var active = (isEdit && editData.icon === ic) ? 'ring-2 ring-indigo-400' : ''; iconsHtml += '<div class="icon-opt ' + active + '" data-icon="' + ic + '" title="' + t(iconKeys[i]) + '">' + ic + '</div>'; }
  
  var dayOpts = ''; for (var i = 1; i <= 31; i++) { var selected = (i === formDay) ? 'selected' : ''; dayOpts += '<option value="' + i + '" ' + selected + '>' + i + '</option>'; }
  var monthOpts = ''; for (var i = 0; i < 12; i++) { var mVal = String(i + 1).padStart(2, '0'); var selected = (i === formMonth) ? 'selected' : ''; monthOpts += '<option value="' + mVal + '" ' + selected + '>' + lang.months[i] + '</option>'; }
  var yearOpts = '<option value="0000"' + (isEdit && editData.date && editData.date.startsWith('0000') ? ' selected' : '') + '>' + t('unknown_year') + '</option>';
  var startYear = formYear - 100, endYear = formYear + 10;
  for (var y = startYear; y <= endYear; y++) { var selected = ''; if (isEdit && editData.date && editData.date.startsWith(String(y))) selected = ' selected'; else if (!isEdit && y === formYear) selected = ' selected'; yearOpts += '<option value="' + y + '"' + selected + '>' + y + '</option>'; }
  
  var isRecurringChecked = (isEdit && (editData.recurring === true || editData.recurring === 'true' || editData.date.startsWith('0000'))) ? ' checked' : '';
  var titleVal = isEdit ? (editData.title || '') : '';
  var descVal = isEdit ? (editData.description || '') : '';
  
  var html = '<div class="modal-overlay" id="eventModalOverlay"><div class="modal-content" style="max-width:560px">';
  html += '<h2 class="text-lg font-bold mb-4">' + (isEdit ? t('edit_title') : t('add_title')) + '</h2><form id="eventForm">';
  html += '<div class="mb-3"><label class="text-xs block mb-1"><span>' + t('date') + '</span></label><div class="flex gap-2">';
  html += '<select id="evDay" class="w-1/3 text-sm" required>' + dayOpts + '</select>';
  html += '<select id="evMonth" class="w-1/3 text-sm" required>' + monthOpts + '</select>';
  html += '<select id="evYear" class="w-1/3 text-sm" required>' + yearOpts + '</select></div></div>';
  html += '<div class="mb-3"><label class="text-xs block mb-1">' + t('title') + '</label><input type="text" id="evTitle" value="' + titleVal + '" placeholder="' + t('ph_title') + '" required class="w-full text-sm"></div>';
  html += '<div class="mb-3"><label class="text-xs block mb-1">' + t('description') + '</label><textarea id="evDesc" class="w-full text-sm" rows="2">' + descVal + '</textarea></div>';
  html += '<div class="mb-3 flex items-center gap-2"><input type="checkbox" id="evRecurring"' + isRecurringChecked + '><label class="text-xs">' + t('recurring') + '</label></div>';
  html += '<div class="mb-6"><label class="text-xs block mb-2">' + t('icon') + '</label><div class="flex gap-3 flex-wrap p-2 rounded" id="iconPicker">' + iconsHtml + '</div><input type="hidden" id="evIcon" value="' + currentIcon + '"></div>';
  html += '<div class="flex gap-2 justify-end" style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">' + deleteBtn + '<button type="button" id="btnCancelEvent" class="btn-secondary text-xs">' + t('cancel') + '</button><button type="submit" class="btn-primary text-xs">' + t('save') + '</button></div></form></div></div>';
  
  safeSetHTML('modalContainer', html);
  var container = safeGet('modalContainer');
  if (!container) return;
  
  var overlay = document.getElementById('eventModalOverlay');
  if (overlay) overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
  var btnCancel = document.getElementById('btnCancelEvent');
  if (btnCancel) btnCancel.addEventListener('click', closeModal);
  
  if (isEdit && editId) {
    var btnDelete = document.getElementById('btnDeleteEvent');
    if (btnDelete) {
      btnDelete.addEventListener('click', function() {
        if (confirm('🗑 Удалить это событие "' + (editData.title || '') + '"?')) {
          if (window.dataSdk && window.dataSdk.delete) window.dataSdk.delete({__backendId: editId});
          else { userEvents = userEvents.filter(function(x) { return x.__backendId !== editId; }); localStorage.setItem('userEvents', JSON.stringify(userEvents)); render(); }
          closeModal();
        }
      });
    }
  }
  
  container.querySelectorAll('.icon-opt').forEach(function(opt) {
    opt.addEventListener('click', function(e) {
      e.stopPropagation();
      container.querySelectorAll('.icon-opt').forEach(function(o) { o.classList.remove('ring-2', 'ring-indigo-400'); o.style.boxShadow = ''; o.style.background = ''; });
      this.classList.add('ring-2', 'ring-indigo-400');
      var hidden = safeGet('evIcon');
      if (hidden) hidden.value = this.dataset.icon;
    });
  });
  
  var form = document.getElementById('eventForm');
  if (form) form.addEventListener('submit', function(e) { e.preventDefault(); saveEvent(e, editId); });
  var evYear = safeGet('evYear');
  if (evYear) { evYear.addEventListener('change', function() { var y = this.value, chk = safeGet('evRecurring'); if (!chk) return; if (y === '0000') { chk.checked = true; chk.disabled = true; } else { chk.disabled = false; } }); }
}

async function saveEvent(e, editId){
  e.preventDefault();
  var d = safeGet('evDay')?.value?.padStart(2,'0');
  var m = safeGet('evMonth')?.value;
  var y = safeGet('evYear')?.value;
  var title = safeGet('evTitle')?.value;
  if(!d||!m||!y||!title) return;
  var dateStr = y + '-' + m + '-' + d;
  var recurring = (y === '0000') ? true : (safeGet('evRecurring')?.checked || false);
  var desc = safeGet('evDesc')?.value || '';
  var icon = safeGet('evIcon')?.value || '&#x1F4CC;';
  var item = {date:dateStr, title:title, description:desc, recurring:recurring, icon:icon};
  if(editId){
    item.__backendId = editId;
    if(window.dataSdk && window.dataSdk.update) await window.dataSdk.update(item);
    else { var idx = userEvents.findIndex(x=>x.__backendId===editId); if(idx!==-1) userEvents[idx]=item; localStorage.setItem('userEvents', JSON.stringify(userEvents)); render(); }
  } else {
    item.__backendId = Date.now().toString();
    if(window.dataSdk && window.dataSdk.create) await window.dataSdk.create(item);
    else { userEvents.push(item); localStorage.setItem('userEvents', JSON.stringify(userEvents)); render(); }
  }
  closeModal();
}

function openEventDetail(id){ var ev = userEvents.find(function(e){ return e.__backendId === id; }); if (!ev) return; openAddEvent(ev); }
async function initDeleteConfirm(id){ if(confirm(t('confirm_del'))){ if(window.dataSdk && window.dataSdk.delete) await window.dataSdk.delete({__backendId:id}); else { userEvents=userEvents.filter(function(x){return x.__backendId!==id}); localStorage.setItem('userEvents',JSON.stringify(userEvents)); render(); } closeModal(); } }

// === GOTO MODAL ===
function openGotoModal() {
  var todayStr = fmtDate(new Date());
  var html = '';
  html += '<div class="modal-overlay" id="gotoModalOverlay">';
  html += '<div class="modal-content" style="max-width:320px;padding:24px">';
  html += '<h2 class="text-lg font-bold mb-4">' + t('goto_date') + '</h2>';
  html += '<div class="mb-5"><label class="text-xs block mb-2">' + t('select_date') + '</label>';
  html += '<input type="date" id="gotoDateInput" class="w-full text-base py-2 px-3" value="' + todayStr + '" min="1995-01-01" max="' + (currentYear + 10) + '-12-31"></div>';
  html += '<div class="flex gap-2 justify-end items-center">';
  html += '<button type="button" id="btnGoToday" class="btn-secondary text-xs mr-auto">' + t('today') + '</button>';
  html += '<button type="button" id="btnCancelGoto" class="btn-secondary text-xs border-transparent">' + t('cancel') + '</button>';
  html += '<button type="button" id="btnGoSelected" class="btn-primary text-xs">' + t('goto') + '</button>';
  html += '</div></div></div>';
  
  safeSetHTML('modalContainer', html);
  
  var container = safeGet('modalContainer');
  if (!container) return;
  
  // Закрытие по клику на оверлей
  var overlay = document.getElementById('gotoModalOverlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeModal();
    });
  }
  
  // Кнопка "Отмена"
  var btnCancel = document.getElementById('btnCancelGoto');
  if (btnCancel) {
    btnCancel.addEventListener('click', closeModal);
  }
  
  // Кнопка "Сегодня"
  var btnToday = document.getElementById('btnGoToday');
  if (btnToday) {
    btnToday.addEventListener('click', function() {
      closeModal();
      jumpToDate(new Date());
    });
  }
  
  // Кнопка "Перейти"
  var btnGo = document.getElementById('btnGoSelected');
  if (btnGo) {
    btnGo.addEventListener('click', function() {
      var val = safeGet('gotoDateInput')?.value;
      if (!val) return;
      closeModal();
      var parts = val.split('-');
      var year = parseInt(parts[0]);
      var month = parseInt(parts[1]) - 1; // 0-11
      var day = parseInt(parts[2]);
      jumpToDate(new Date(year, month, day));
    });
  }
  
  // Также поддерживаем нажатие Enter в поле ввода
  var dateInput = document.getElementById('gotoDateInput');
  if (dateInput) {
    dateInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        var val = this.value;
        if (!val) return;
        closeModal();
        var parts = val.split('-');
        jumpToDate(new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])));
      }
    });
  }
}

// Переход к дате с подсветкой
function jumpToDate(date) {
  var targetYear = date.getFullYear();
  var dateStr = fmtDate(date);
  
  // Если год изменился — переключаем и перерисовываем
  if (currentYear !== targetYear) {
    currentYear = targetYear;
    render();
  }
  
  // Ждём, пока элементы появятся в DOM после рендера
  setTimeout(function() {
    // Функция для подсветки одного элемента
    function highlightElement(el) {
      if (el) {
        // Плавная прокрутка к элементу
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Добавляем класс с анимацией
        el.classList.add('date-highlight');
        // Убираем подсветку через 3 секунды
        setTimeout(function() {
          el.classList.remove('date-highlight');
        }, 3000);
      }
    }
    
    // 1. Подсветка на главном календаре (ищем по data-date)
    var mainDay = document.querySelector('.day-cell[data-date="' + dateStr + '"]');
    highlightElement(mainDay);
    
    // 2. Если открыто окно месяца — подсветка там тоже
    var modalDay = document.querySelector('.day-cell-lg[data-date="' + dateStr + '"]');
    highlightElement(modalDay);
    
  }, 150); // Небольшая задержка для завершения рендера
}

// Вспомогательные функции (для совместимости)
function goToToday() {
  closeModal();
  jumpToDate(new Date());
}

function goToSelectedDate() {
  var val = safeGet('gotoDateInput')?.value;
  if (!val) return;
  closeModal();
  var p = val.split('-');
  jumpToDate(new Date(parseInt(p[0]), parseInt(p[1]) - 1, parseInt(p[2])));
}

// === SETTINGS ===
function saveSettings(){ try{ localStorage.setItem('cal_region',currentRegion); localStorage.setItem('cal_lang',currentLang); localStorage.setItem('cal_theme',isDark?'dark':'light'); localStorage.setItem('cal_filters',JSON.stringify(filters)); }catch(e){} }
function loadSettings(){ try{ var r=localStorage.getItem('cal_region'); if(r&&REGIONS[r]) currentRegion=r; var l=localStorage.getItem('cal_lang'); if(l&&LANGS[l]) currentLang=l; var tt=localStorage.getItem('cal_theme'); if(tt) isDark=(tt==='dark'); var f=localStorage.getItem('cal_filters'); if(f) Object.assign(filters,JSON.parse(f)); }catch(e){} }
function loadSettingsAndApply(){ loadSettings(); loadWorkMode(); var app=safeGet('app'); if(app){ app.classList.toggle('dark',isDark); app.classList.toggle('light',!isDark); } render(); }
function changeYear(delta){ currentYear+=delta; render(); }
function setRegion(r){ currentRegion=r; saveSettings(); render(); }
function setLang(l){ currentLang=l; saveSettings(); render(); }
function toggleTheme(){ isDark=!isDark; saveSettings(); var app=safeGet('app'); if(app){ app.classList.toggle('dark',isDark); app.classList.toggle('light',!isDark); } render(); }
function toggleFilter(key){ filters[key]=!filters[key]; saveSettings(); render(); }

// === DATA SDK ===
var dataHandler = { onDataChanged: function(data){ userEvents=data; render(); } };
var defaultConfig = { app_title:'Kalender Deutschland', background_color:'#0f172a', surface_color:'#1e293b', text_color:'#e2e8f0', primary_action_color:'#6366f1', secondary_action_color:'#94a3b8', font_family:'DM Sans', font_size:14 };
function applyConfig(config){ var title=config.app_title||defaultConfig.app_title; var titleEl=safeGet('appTitle'); if(titleEl) titleEl.textContent=title; document.body.style.fontFamily=(config.font_family||defaultConfig.font_family)+', sans-serif'; var app=safeGet('app'); if(app){ app.style.background=config.background_color||defaultConfig.background_color; app.style.color=config.text_color||defaultConfig.text_color; } document.querySelectorAll('.btn-primary').forEach(function(el){ el.style.background=config.primary_action_color||defaultConfig.primary_action_color; }); }

window.dataSdk = {
  init: async function(handler) {
    this.handler = handler;
    try {
      if (window.universalStorage) { var result = await window.universalStorage.get(['userEvents']); this.data = result.userEvents || []; }
      else { var saved = localStorage.getItem('userEvents'); this.data = saved ? JSON.parse(saved) : []; }
    } catch(e) { console.warn('Storage init error', e); this.data = []; }
    handler.onDataChanged(this.data);
  },
  create: async function(item) { item.__backendId = Date.now().toString(); this.data.push(item); await this._save(); return {isOk: true}; },
  update: async function(item) { var i = this.data.findIndex(function(x){ return x.__backendId === item.__backendId; }); if (i !== -1) this.data[i] = item; await this._save(); return {isOk: true}; },
  delete: async function(item) { this.data = this.data.filter(function(x){ return x.__backendId !== item.__backendId; }); await this._save(); return {isOk: true}; },
  _save: async function() { try { if (window.universalStorage) { await window.universalStorage.set({userEvents: this.data}); } else { localStorage.setItem('userEvents', JSON.stringify(this.data)); } this.handler.onDataChanged(this.data); } catch(e) { console.error('Save error:', e); } }
};
window.elementSdk = { init:function(){}, setConfig:function(){} };

// === WORK MODE MODAL ===
function openWorkModeModal(){
  var lang = LANGS[currentLang] || LANGS.de;
  var types = ['vollzeit','teilzeit','minijob','shift','custom'];
  var typeOptions = '';
  for (var i=0;i<types.length;i++){ var tKey = 'wm_' + types[i]; var label = lang[tKey] || types[i]; var sel = (workMode.type === types[i]) ? ' selected' : ''; typeOptions += '<option value="'+types[i]+'"'+sel+'>'+label+'</option>'; }
  var dayLabels = lang.days || ['Mo','Tu','We','Th','Fr','Sa','Su'];
  var dayButtons = '';
  for (var d=1; d<=7; d++){ var active = workMode.workDays.includes(d) ? ' bg-indigo-500 text-white' : ' bg-transparent'; var txt = dayLabels[d-1] || d; dayButtons += '<button type="button" class="px-2 py-1 rounded border text-xs'+active+'" data-day-idx="'+d+'" style="min-width:32px;margin-right:4px;margin-bottom:4px">'+txt+'</button>'; }
  var hourOptions = ''; var presetHours = [4,5,6,7,8,9,10]; var isCustomHour = presetHours.indexOf(workMode.hoursPerDay) === -1;
  for (var h=0; h<presetHours.length; h++){ var hv = presetHours[h]; var sel = (!isCustomHour && workMode.hoursPerDay === hv) ? ' selected' : ''; hourOptions += '<option value="'+hv+'"'+sel+'>'+hv+'</option>'; }
  hourOptions += '<option value="custom"'+(isCustomHour?' selected':'')+'>Custom</option>';
  var customHourInput = '<input type="number" step="0.25" min="1" max="16" id="wmHoursCustom" class="w-20 text-xs ml-2'+(isCustomHour?'':' hidden')+'" value="'+(isCustomHour?workMode.hoursPerDay:'' )+'">';
  var html = '<div class="modal-overlay" id="workModalOverlay"><div class="modal-content" style="max-width:480px"><div class="flex justify-between items-center mb-3"><h2 class="text-lg font-bold">'+t('work_mode_title')+'</h2><button id="btnCloseWork" class="p-1 rounded hover:bg-white/10"><i data-lucide="x" style="width:18px;height:18px"></i></button></div><div class="mb-3"><label class="text-xs block mb-1">'+t('work_mode_type')+'</label><select id="wmType" class="w-full text-xs">'+typeOptions+'</select></div><div class="mb-3"><label class="text-xs block mb-1">'+t('work_days_label')+'</label><div class="flex flex-wrap" id="wmDayButtons">'+dayButtons+'</div></div><div class="mb-3"><label class="text-xs block mb-1">'+t('hours_per_day_label')+'</label><div class="flex items-center gap-2"><select id="wmHours" class="text-xs">'+hourOptions+'</select>'+customHourInput+'</div></div><p class="text-[11px] opacity-70 mb-4">'+t('work_mode_hint')+'</p><div class="flex justify-end gap-2"><button type="button" id="btnCancelWork" class="btn-secondary text-xs">'+t('cancel')+'</button><button type="button" id="btnSaveWork" class="btn-primary text-xs">'+t('save')+'</button></div></div></div>';
  safeSetHTML('modalContainer', html);
  var container = safeGet('modalContainer');
  if (container) {
    var overlay = document.getElementById('workModalOverlay');
    if (overlay) overlay.addEventListener('click', function(e){ if(e.target===overlay) closeModal(); });
    var btnClose = document.getElementById('btnCloseWork');
    if (btnClose) btnClose.addEventListener('click', closeModal);
    var btnCancel = document.getElementById('btnCancelWork');
    if (btnCancel) btnCancel.addEventListener('click', closeModal);
    var wmType = document.getElementById('wmType');
    if (wmType) { wmType.addEventListener('change', function() { var val = this.value; workMode.type = val; if (val !== 'custom' && WORK_MODE_PRESETS[val]){ workMode.workDays = WORK_MODE_PRESETS[val].workDays.slice(); workMode.hoursPerDay = WORK_MODE_PRESETS[val].hoursPerDay; } openWorkModeModal(); }); }
    container.querySelectorAll('#wmDayButtons button').forEach(function(btn) { btn.addEventListener('click', function() { var dayIdx = parseInt(this.dataset.dayIdx); var i = workMode.workDays.indexOf(dayIdx); if (i === -1) workMode.workDays.push(dayIdx); else workMode.workDays.splice(i,1); openWorkModeModal(); }); });
    var wmHours = document.getElementById('wmHours');
    var customInput = document.getElementById('wmHoursCustom');
    if (wmHours) { wmHours.addEventListener('change', function() { var val = this.value; if (val === 'custom'){ if (customInput){ customInput.classList.remove('hidden'); customInput.focus(); } } else { workMode.hoursPerDay = parseFloat(val); if (customInput){ customInput.classList.add('hidden'); } } }); }
    var btnSave = document.getElementById('btnSaveWork');
    if (btnSave) { btnSave.addEventListener('click', function() { if (wmHours && wmHours.value === 'custom' && customInput){ var hv = parseFloat((customInput.value || '').replace(',','.')); if (!isNaN(hv) && hv>0 && hv<=24) workMode.hoursPerDay = hv; } saveWorkMode(); closeModal(); render(); }); }
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// === INIT ===
function safeInit() {
  console.log('🟢 safeInit started');
  setTimeout(function() { var loader = document.getElementById('loadingScreen'); if (loader) loader.style.display = 'none'; }, 2000);
  if (!safeGet('app')) { console.log('⏳ Waiting for DOM...'); setTimeout(safeInit, 100); return; }
  try {
    loadSettings(); loadWorkMode();
    var app = safeGet('app');
    if (app) { app.classList.toggle('dark', isDark); app.classList.toggle('light', !isDark); }
    if (window.dataSdk && window.dataSdk.init) {
      window.dataSdk.init(dataHandler).catch(function(err) { console.warn('⚠️ dataSdk init failed:', err); }).finally(function() { console.log('🎨 Calling render()...'); render(); setupEventListeners(); console.log('✅ App fully initialized'); var loader = document.getElementById('loadingScreen'); if (loader) loader.style.display = 'none'; });
    } else { console.log('🎨 No dataSdk, rendering immediately...'); render(); setupEventListeners(); console.log('✅ App initialized (no SDK)'); var loader = document.getElementById('loadingScreen'); if (loader) loader.style.display = 'none'; }
  } catch (err) { console.error('❌ Init crash:', err); render(); var loader = document.getElementById('loadingScreen'); if (loader) loader.style.display = 'none'; }
}

// Запуск
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', safeInit); } else { safeInit(); }