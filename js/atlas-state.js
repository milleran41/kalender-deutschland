// Large state view opened from the Germany atlas.
(function() {
  const params = new URLSearchParams(window.location.search);
  const stateKey = params.get('state') || 'bayern';
  const lang = params.get('lang') || localStorage.getItem('cal_lang') || 'de';
  const text = (window.ATLAS_I18N && (window.ATLAS_I18N[lang] || window.ATLAS_I18N.de)) || {};
  const details = (window.ATLAS_STATE_DETAILS && window.ATLAS_STATE_DETAILS[stateKey]) || {};
  const stateName = (window.ATLAS_STATE_NAMES && window.ATLAS_STATE_NAMES[stateKey]) || stateKey;
  const color = (window.ATLAS_STATE_COLORS && window.ATLAS_STATE_COLORS[stateKey]) || '#6366f1';
  let focusMask = null;
  let outlineLayer = null;

  document.documentElement.lang = lang;
  document.title = stateName + ' - ' + (text.title || 'Map of Germany');

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value || '';
  }

  function localizedDesc() {
    if (!details.desc) return text.unavailable || '';
    return details.desc[lang] || details.desc.en || details.desc.de || '';
  }

  function renderInfo() {
    setText('stateWindowSubtitle', text.subtitle);
    setText('stateWindowTitle', stateName);
    setText('stateCapitalLabel', text.capital);
    setText('stateAreaLabel', text.area);
    setText('statePopulationLabel', text.population);
    setText('stateCapital', details.capital || '-');
    setText('stateArea', details.area || '-');
    setText('statePopulation', details.population || '-');
    setText('stateOverviewHeading', text.overview);
    setText('stateDescription', localizedDesc());
    setText('stateFactsHeading', text.facts);
    setText('stateDataSource', text.source);

    const facts = document.getElementById('stateFacts');
    if (facts) {
      const factItems = (details.factsByLang && (details.factsByLang[lang] || details.factsByLang.en)) || details.facts || [];
      facts.innerHTML = factItems.map(function(item) {
        return '<li>' + item + '</li>';
      }).join('');
    }
  }

  function renderMap() {
    const map = L.map('stateMap', {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: true
    });

    map.createPane('stateMaskPane');
    map.getPane('stateMaskPane').style.zIndex = 430;
    map.createPane('stateFillPane');
    map.getPane('stateFillPane').style.zIndex = 460;
    map.createPane('stateOutlinePane');
    map.getPane('stateOutlinePane').style.zIndex = 520;

    map.attributionControl.setPrefix('');
    map.attributionControl.addAttribution('GeoJSON: GitHub open data');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    fetch('data/geo/state_details/' + stateKey + '.geojson')
      .then(function(response) {
        if (!response.ok) throw new Error('Map file not found');
        return response.json();
      })
      .then(function(geojson) {
        const layer = L.geoJSON(geojson, {
          style: function() {
            return {
              color: '#ffffff',
              weight: 0,
              fillOpacity: 0,
              pane: 'stateFillPane',
              className: 'selected-state-fill'
            };
          },
          onEachFeature: function(feature, featureLayer) {
            if (feature.properties && feature.properties.name) {
              featureLayer.bindTooltip(feature.properties.name, {
                sticky: true,
                className: 'state-tooltip'
              });
            }
          }
        }).addTo(map);

        addFocusMask(map, geojson, layer.getBounds());
        addStateOutline(map, geojson);
        layer.bringToFront();
        if (outlineLayer) outlineLayer.bringToFront();
        map.fitBounds(layer.getBounds(), { padding: [46, 46] });
      })
      .catch(function(error) {
        console.error(error);
        setText('stateDescription', text.unavailable);
      });
  }

  function addStateOutline(map, geojsonData) {
    if (outlineLayer) map.removeLayer(outlineLayer);

    outlineLayer = L.geoJSON(geojsonData, {
      style: {
        color: color,
        weight: 5,
        opacity: 0.98,
        fill: false,
        lineJoin: 'round',
        pane: 'stateOutlinePane',
        className: 'selected-state-outline'
      },
      interactive: false
    }).addTo(map);
  }

  function addFocusMask(map, geojsonData, stateBounds) {
    if (focusMask) map.removeLayer(focusMask);

    const southWest = stateBounds.getSouthWest();
    const northEast = stateBounds.getNorthEast();
    const latPad = Math.max((northEast.lat - southWest.lat) * 1.2, 1.4);
    const lngPad = Math.max((northEast.lng - southWest.lng) * 1.2, 1.4);
    const outerRing = [
      [northEast.lat + latPad, southWest.lng - lngPad],
      [northEast.lat + latPad, northEast.lng + lngPad],
      [southWest.lat - latPad, northEast.lng + lngPad],
      [southWest.lat - latPad, southWest.lng - lngPad]
    ];
    const stateHoles = [];

    geojsonData.features.forEach(function(feature) {
      const geometry = feature.geometry || {};
      const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates || [];

      polygons.forEach(function(polygon) {
        if (!polygon || !polygon[0]) return;
        stateHoles.push(polygon[0].map(function(point) {
          return [point[1], point[0]];
        }));
      });
    });

    focusMask = L.polygon([outerRing].concat(stateHoles), {
      stroke: false,
      fillColor: '#020617',
      fillOpacity: 0.46,
      interactive: false,
      pane: 'stateMaskPane'
    }).addTo(map);
  }

  const closeButton = document.getElementById('btnStateClose');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      window.close();
    });
  }

  renderInfo();
  renderMap();
})();
