# Attribution

This project uses local map and historical media assets so the Chrome extension can work reliably without loading most images from the network.

## Geographic Data

The Germany and federal-state GeoJSON files are based on open GitHub geographic datasets. See:

- `data/geo/SOURCE.md`
- `m-ad/geofeatures-ags-germany`
- `isellsoap/deutschlandGeoJSON`

## Map Tiles

The interactive atlas uses OpenStreetMap tile loading from:

```text
https://*.tile.openstreetmap.org/
```

OpenStreetMap data is available under the Open Database License. Tile usage should follow the OpenStreetMap tile usage policy.

## Historical Media

Historical images, maps, flags, and coats of arms in `assets/history/` are intended to be sourced from open-access repositories, mainly Wikimedia Commons.

The helper scripts used to download many media files are kept in the repository:

- `download-history-media.ps1`
- `download-curated-history-media.ps1`
- `download-history-symbols.ps1`
- `download-history-media.js`

When publishing or redistributing the extension, verify the license and attribution requirements of each media file on its original source page.

## Project Brand

Brand mark used in the UI:

```text
milleran
```
