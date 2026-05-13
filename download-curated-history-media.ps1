$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$outDir = Join-Path $root 'assets\history'

$files = @(
  'Limes2.png',
  'Hermannsdenkmal statue.jpg',
  'Frankish Empire 481 to 814-en.svg',
  'HolyRomanEmpire 1618.png',
  'Map of the Holy Roman Empire (1618) - DE.svg',
  'Extent of the Hansa.png',
  'Prussia 1806 map - DE.svg',
  'Confederation of the Rhine (1812).svg',
  'Revolutions of 1848 in Europe (pasopt eng).svg',
  'German Empire (1871–1918).svg',
  'Weimar Republic location map.svg',
  'Deutschland Besatzungszonen 1945.svg',
  '1945 Deutschland-Karte-der-Besatzungszonen.jpg',
  'Bundeskanzleramt Berlin 2010.jpg',
  'Germany in European Union.svg',
  'Germany location map.svg',
  'Germany, administrative divisions - de - colored.svg'
)

$directUrls = @{
  'HolyRomanEmpire 1618.png' = 'https://upload.wikimedia.org/wikipedia/commons/8/89/HolyRomanEmpire_1618.png'
  'Map of the Holy Roman Empire (1618) - DE.svg' = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Map_of_the_Holy_Roman_Empire_%281618%29_-_DE.svg'
  'Prussia 1806 map - DE.svg' = 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Prussia_1806_map_-_DE.svg'
  'Revolutions of 1848 in Europe (pasopt eng).svg' = 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Revolutions_of_1848_in_Europe_%28pasopt_eng%29.svg'
  'German Empire (1871–1918).svg' = 'https://upload.wikimedia.org/wikipedia/commons/3/34/German_Empire_%281871%E2%80%931918%29.svg'
  'Weimar Republic location map.svg' = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Weimar_Republic_location_map.svg'
  'Deutschland Besatzungszonen 1945.svg' = 'https://upload.wikimedia.org/wikipedia/commons/0/01/Deutschland_Besatzungszonen_1945.svg'
  '1945 Deutschland-Karte-der-Besatzungszonen.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/1945_Deutschland-Karte-der-Besatzungszonen.jpg'
  'Bundeskanzleramt Berlin 2010.jpg' = 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Bundeskanzleramt_Berlin_2010.jpg'
  'Germany in European Union.svg' = 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Germany_in_European_Union.svg'
  'Germany, administrative divisions - de - colored.svg' = 'https://upload.wikimedia.org/wikipedia/commons/6/69/Germany%2C_administrative_divisions_-_de_-_colored.svg'
}

function Get-SafeName([string]$file) {
  $normalized = $file.Normalize([Text.NormalizationForm]::FormKD)
  $safe = $normalized -replace '[^A-Za-z0-9_.\-()]+' , '_'
  $safe = $safe -replace '_+', '_'
  return $safe.Trim('_')
}

function Get-FileUrl([string]$file) {
  return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + [System.Uri]::EscapeDataString($file).Replace('%2F', '/')
}

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$downloaded = 0
$skipped = 0
$failed = @()

foreach ($file in $files) {
  $safeName = Get-SafeName $file
  $target = Join-Path $outDir $safeName

  if ((Test-Path -LiteralPath $target) -and ((Get-Item -LiteralPath $target).Length -gt 0)) {
    Write-Host "skip $safeName"
    $skipped++
    continue
  }

  try {
    $url = if ($directUrls.ContainsKey($file)) { $directUrls[$file] } else { Get-FileUrl $file }
    Invoke-WebRequest -Uri $url -OutFile $target -UserAgent 'Mozilla/5.0 (Kalender Deutschland curated media)' -MaximumRedirection 10
    $length = (Get-Item -LiteralPath $target).Length
    if ($length -le 0) { throw "empty file" }
    Write-Host "saved $safeName $length"
    $downloaded++
    Start-Sleep -Milliseconds 750
  } catch {
    Write-Warning "failed $file $($_.Exception.Message)"
    if (Test-Path -LiteralPath $target) { Remove-Item -LiteralPath $target -Force }
    $failed += [PSCustomObject]@{ file = $file; safeName = $safeName; error = $_.Exception.Message }
  }
}

[PSCustomObject]@{
  downloadedAt = (Get-Date).ToString('o')
  total = $files.Count
  downloaded = $downloaded
  skipped = $skipped
  failed = $failed
} | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $outDir 'curated-download-report.json') -Encoding UTF8

if ($failed.Count -gt 0) {
  Write-Warning "$($failed.Count) files failed. See assets\history\curated-download-report.json"
  exit 1
}
