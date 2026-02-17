@echo off
cls

echo ==============================
echo   DEPLOY AUTOMATICO GITHUB
echo ==============================
echo.

set /p mensagem=Digite a mensagem do commit: 

if "%mensagem%"=="" (
    echo.
    echo Mensagem nao pode ser vazia.
    pause
    exit
)

git add .

git diff --cached --quiet
if %errorlevel%==0 (
    echo.
    echo Nenhuma alteracao detectada.
    pause
    exit
)

git commit -m "%mensagem%"
git pull origin main --rebase
git push

echo.
echo ==============================
echo   DEPLOY FINALIZADO
echo ==============================
pause