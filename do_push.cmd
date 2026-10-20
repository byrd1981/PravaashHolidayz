@echo off
setlocal enabledelayedexpansion

cd /d "e:\Bhavin\Projects\TourismForVishal\Site\tourm"

REM Set GIT editor to avoid vim hangs
set GIT_EDITOR=true
set GIT_SEQUENCE_EDITOR=true

echo.
echo ===== Current Status =====
git status

echo.
echo ===== Committing staged changes =====
git commit -m "Commit staged changes" || echo No changes to commit

echo.
echo ===== Fetching latest remote =====
git fetch origin main

echo.
echo ===== Rebasing local on remote =====
git rebase origin/main

echo.
echo ===== Pushing to remote =====
git push origin main --force-with-lease

echo.
echo ===== Done =====
echo Push complete. Press any key to close.
pause

