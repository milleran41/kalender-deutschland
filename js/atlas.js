// Interactive Germany atlas.
(function() {
  let map = null;
  let mainLayer = null;
  let focusMask = null;
  const germanyContextBounds = L.latLngBounds([46.2, 3.8], [55.8, 16.2]);
  const stateLabelAnchors = {
    berlin: [52.50, 13.38],
    brandenburg: [52.72, 13.95],
    bremen: [53.08, 8.80],
    hamburg: [53.56, 10.00],
    saarland: [49.38, 6.98]
  };

  function addBaseMap(targetMap) {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(targetMap);
  }

  function langCode() {
    return window.currentLang || localStorage.getItem('cal_lang') || 'de';
  }

  function atlasText(key) {
    const dict = window.ATLAS_I18N || {};
    const lang = langCode();
    return (dict[lang] && dict[lang][key]) || (dict.de && dict.de[key]) || key;
  }

  function updateAtlasTexts() {
    const btn = document.querySelector('#btnOpenAtlas span');
    if (btn) btn.textContent = atlasText('button');

    const title = document.getElementById('atlasTitleText');
    if (title) title.textContent = atlasText('title');

    const hint = document.getElementById('atlasHint');
    if (hint) hint.textContent = atlasText('hint');

    const source = document.getElementById('atlasSource');
    if (source) source.textContent = atlasText('source');

    const close = document.getElementById('btnAtlasClose');
    if (close) close.title = atlasText('close');
  }

  function getStateKey(feature) {
    const props = feature.properties || {};
    if (props.id) {
      const idMap = {
        'DE-BW': 'baden_wuerttemberg',
        'DE-BY': 'bayern',
        'DE-BE': 'berlin',
        'DE-BB': 'brandenburg',
        'DE-HB': 'bremen',
        'DE-HH': 'hamburg',
        'DE-HE': 'hessen',
        'DE-MV': 'mecklenburg_vorpommern',
        'DE-NI': 'niedersachsen',
        'DE-NW': 'nordrhein_westfalen',
        'DE-RP': 'rheinland_pfalz',
        'DE-SL': 'saarland',
        'DE-SN': 'sachsen',
        'DE-ST': 'sachsen_anhalt',
        'DE-SH': 'schleswig_holstein',
        'DE-TH': 'thueringen'
      };
      if (idMap[props.id]) return idMap[props.id];
    }

    return (props.name || '').toLowerCase()
      .replace(/ /g, '_')
      .replace(/-/g, '_')
      .replace(/ü/g, 'ue')
      .replace(/ö/g, 'oe')
      .replace(/ä/g, 'ae')
      .replace(/ß/g, 'ss');
  }

  function createAtlasDOM() {
    const container = document.getElementById('atlasContainer');
    if (!container) return;

    container.innerHTML = `
      <div id="atlasOverlay">
        <div id="atlasContent">
          <div id="atlasHeader">
            <h2 class="atlas-title"><i data-lucide="map"></i> <span id="atlasTitleText"></span></h2>
            <button id="btnAtlasClose" type="button"><i data-lucide="x"></i></button>
          </div>
          <div id="atlasBody">
            <div id="mapContainer"></div>
            <div id="atlasInstruction">
              <strong id="atlasHint"></strong>
              <span id="atlasSource"></span>
            </div>
          </div>
        </div>
      </div>
    `;

    updateAtlasTexts();
    if (window.lucide) window.lucide.createIcons();
    bindEvents();
  }

  function bindEvents() {
    document.addEventListener('click', function(e) {
      const btnOpen = e.target.closest('#btnOpenAtlas');
      if (!btnOpen) return;

      e.preventDefault();
      updateAtlasTexts();
      const overlay = document.getElementById('atlasOverlay');
      if (overlay) {
        overlay.classList.add('active');
        if (!map) initMap();
        else setTimeout(function() { map.invalidateSize(); }, 80);
      }
    });

    const close = document.getElementById('btnAtlasClose');
    if (close) {
      close.addEventListener('click', function() {
        document.getElementById('atlasOverlay').classList.remove('active');
      });
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const overlay = document.getElementById('atlasOverlay');
        if (overlay) overlay.classList.remove('active');
      }
    });

    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.addEventListener('change', updateAtlasTexts);
  }

  function initMap() {
    map = L.map('mapContainer', {
      zoomControl: false,
      attributionControl: true,
      minZoom: 5,
      maxZoom: 10,
      maxBounds: germanyContextBounds.pad(0.18),
      maxBoundsViscosity: 0.85,
      zoomSnap: 0.25
    }).fitBounds(germanyContextBounds, { padding: [18, 18] });

    map.attributionControl.setPrefix('');
    map.attributionControl.addAttribution('GeoJSON: GitHub open data');
    addBaseMap(map);
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    loadMainMap();
  }

  function loadMainMap() {
    fetch('data/geo/germany_states.geojson')
      .then(function(response) {
        if (!response.ok) throw new Error('Germany map not found');
        return response.json();
      })
      .then(function(geojsonData) {
        if (mainLayer) map.removeLayer(mainLayer);

        mainLayer = L.geoJSON(geojsonData, {
          style: function(feature) {
            const stateKey = getStateKey(feature);
            return {
              color: '#ffffff',
              weight: 3,
              fillColor: (window.ATLAS_STATE_COLORS && window.ATLAS_STATE_COLORS[stateKey]) || '#e2e8f0',
              fillOpacity: 0.24,
              className: 'state-polygon'
            };
          },
          onEachFeature: function(feature, layer) {
            const stateName = feature.properties && feature.properties.name;
            const stateKey = getStateKey(feature);

            const labelAnchor = stateLabelAnchors[stateKey];
            if (labelAnchor) {
              L.tooltip({
                permanent: true,
                direction: 'center',
                className: 'state-label state-label-' + stateKey,
                interactive: false
              }).setLatLng(labelAnchor).setContent(stateName).addTo(map);
            } else {
              layer.bindTooltip(stateName, {
                permanent: true,
                direction: 'center',
                className: 'state-label',
                interactive: false
              });
            }

            layer.on({
              mouseover: function(event) {
                event.target.setStyle({ weight: 5, color: '#0f172a', fillOpacity: 0.38 });
                event.target.bringToFront();
              },
              mouseout: function(event) {
                mainLayer.resetStyle(event.target);
              },
              click: function() {
                openStateWindow(stateKey);
              }
            });
          }
        }).addTo(map);

        addFocusMask(geojsonData);
        map.fitBounds(germanyContextBounds, { padding: [18, 18] });
      })
      .catch(function(err) {
        console.error('Error loading Germany states:', err);
      });
  }

  function addFocusMask(geojsonData) {
    if (focusMask) map.removeLayer(focusMask);

    const outerRing = [
      [58.5, -1.5],
      [58.5, 21.5],
      [43.8, 21.5],
      [43.8, -1.5]
    ];
    const germanyHoles = [];

    geojsonData.features.forEach(function(feature) {
      const geometry = feature.geometry || {};
      const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates || [];

      polygons.forEach(function(polygon) {
        if (!polygon || !polygon[0]) return;
        germanyHoles.push(polygon[0].map(function(point) {
          return [point[1], point[0]];
        }));
      });
    });

    focusMask = L.polygon([outerRing].concat(germanyHoles), {
      stroke: false,
      fillColor: '#f8fafc',
      fillOpacity: 0.62,
      interactive: false,
      pane: 'overlayPane'
    }).addTo(map);

    if (mainLayer) mainLayer.bringToFront();
  }

  function openStateWindow(stateKey) {
    const page = 'atlas-state.html?state=' + encodeURIComponent(stateKey) + '&lang=' + encodeURIComponent(langCode()) + '&v=' + Date.now();
    const url = window.chrome && chrome.runtime && chrome.runtime.getURL ? chrome.runtime.getURL(page) : page;
    const popup = window.open(url, '_blank', 'width=1180,height=780,menubar=no,toolbar=no,location=no,status=no');
    if (popup) {
      popup.focus();
    } else {
      window.location.href = url;
    }
  }

  createAtlasDOM();
  setTimeout(updateAtlasTexts, 250);
  setTimeout(updateAtlasTexts, 900);
})();
