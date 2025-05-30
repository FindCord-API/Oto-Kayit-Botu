@echo off
title Findcord Kayit Botu
cd /d "%~dp0"
node index.js 2> error.txt
if %errorlevel% neq 0 (
  echo Hata olustu!
  type error.txt
) else (
  echo Basarili calisti.
)