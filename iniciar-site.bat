@echo off
title Cartorio 3º Distrito - Servidor Local

echo Iniciando servidor...
cd /d C:\sites\cartorio-3-distrito-marica

start http://localhost:5173
npm run dev

pause
