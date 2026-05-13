$ErrorActionPreference = 'Continue'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$outDir = Join-Path $root 'assets\history'

$files = @(
  'Banner of the Holy Roman Emperor with haloes (1430-1806).svg',
  'Flag of Prussia (1892-1918).svg',
  'Flag of Germany (3-2).svg',
  'Flag of Germany (1867–1918).svg',
  'Flag of Germany.svg',
  'Flag of East Germany.svg',
  'Coat of arms of Germany.svg'
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
    Invoke-WebRequest -Uri (Get-FileUrl $file) -OutFile $target -UserAgent 'Mozilla/5.0 (Kalender Deutschland history symbols)' -MaximumRedirection 10
    $length = (Get-Item -LiteralPath $target).Length
    if ($length -le 0) { throw "empty file" }
    Write-Host "saved $safeName $length"
    $downloaded++
    Start-Sleep -Milliseconds 800
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
} | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $outDir 'symbols-download-report.json') -Encoding UTF8

if ($failed.Count -gt 0) {
  Write-Warning "$($failed.Count) files failed. See assets\history\symbols-download-report.json"
  exit 1
}
