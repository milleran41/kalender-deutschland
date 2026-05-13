$ErrorActionPreference = 'Continue'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$outDir = Join-Path $root 'assets\history'
$sources = @(
  (Join-Path $root 'js\history-data.js'),
  (Join-Path $root 'js\history-extra.js')
)

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

$files = [System.Collections.Generic.HashSet[string]]::new()
foreach ($source in $sources) {
  $text = Get-Content -LiteralPath $source -Raw -Encoding UTF8
  foreach ($match in [regex]::Matches($text, "img\('([^']+)'\)")) {
    [void]$files.Add($match.Groups[1].Value)
  }
}

Write-Host "Found $($files.Count) media files"
$failed = @()
$downloaded = 0
$skipped = 0

foreach ($file in $files) {
  $safeName = Get-SafeName $file
  $target = Join-Path $outDir $safeName
  if ((Test-Path -LiteralPath $target) -and ((Get-Item -LiteralPath $target).Length -gt 0)) {
    Write-Host "skip $safeName"
    $skipped++
    continue
  }

  try {
    $url = Get-FileUrl $file
    Invoke-WebRequest -Uri $url -OutFile $target -UserAgent 'Mozilla/5.0 (Kalender Deutschland History Media)' -MaximumRedirection 10
    $length = (Get-Item -LiteralPath $target).Length
    if ($length -le 0) { throw "empty file" }
    Write-Host "saved $safeName $length"
    $downloaded++
  } catch {
    Write-Warning "failed $file $($_.Exception.Message)"
    if (Test-Path -LiteralPath $target) { Remove-Item -LiteralPath $target -Force }
    $failed += [PSCustomObject]@{ file = $file; safeName = $safeName; error = $_.Exception.Message }
  }
}

$report = [PSCustomObject]@{
  downloadedAt = (Get-Date).ToString('o')
  total = $files.Count
  downloaded = $downloaded
  skipped = $skipped
  failed = $failed
}

$report | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $outDir 'download-report.json') -Encoding UTF8

if ($failed.Count -gt 0) {
  Write-Warning "$($failed.Count) files failed. See assets\history\download-report.json"
  exit 1
}
