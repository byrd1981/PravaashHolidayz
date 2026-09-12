@echo off
setlocal

cd /d "%~dp0"
set "BROWSER=none"
set "PORT=3005"

start "React Dev Server" cmd.exe /k "cd /d %~dp0 && set BROWSER=none&&set PORT=3005&&npm.cmd start"

powershell -NoProfile -ExecutionPolicy Bypass -Command "$deadline=(Get-Date).AddMinutes(2); while((Get-Date) -lt $deadline){ try { $response=Invoke-WebRequest -Uri 'http://localhost:3005' -UseBasicParsing -TimeoutSec 2; if($response.StatusCode -eq 200){ Start-Process 'chrome' 'http://localhost:3005'; exit 0 } } catch {}; Start-Sleep -Seconds 1 }; Write-Error 'Dev server did not become ready within 2 minutes.'; exit 1"

endlocal
