@echo off
cd /d "e:\Bhavin\Projects\TourismForVishal\Site\tourm"
setlocal enabledelayedexpansion

echo.
echo ===== GIT STATUS =====
git status
echo.
echo ===== GIT LOG (last 3 commits) =====
git log --oneline -3
echo.
echo ===== FETCHING FROM REMOTE =====
git fetch origin main
echo.
echo ===== REBASING LOCAL ON REMOTE =====
git rebase origin/main
echo.
echo ===== PUSHING TO REMOTE =====
git push origin main --force-with-lease
echo.
echo ===== FINAL STATUS =====
git log --oneline -3
