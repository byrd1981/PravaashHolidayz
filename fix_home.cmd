@echo off
cd /d "e:\Bhavin\Projects\TourismForVishal\Site\tourm"

echo ===== Adding file =====
git add src/Components/Header/HeaderOne.jsx

echo ===== Committing =====
git commit -m "Fix: Home menu link to use React Router Link"

echo ===== Pushing =====
git push origin main

echo ===== Done =====
