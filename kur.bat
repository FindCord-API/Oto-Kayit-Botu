@echo off
title Findcord Kayit Botu

node -v >nul 2>&1
IF ERRORLEVEL 1 (
    echo Node.js bulunamadi! Lutfen Node.js'i indirip kurun:
    echo https://nodejs.org/
    pause
    exit /b
)

cd /d "%~dp0"

echo Paketler yukleniyor...
npm install

pause
