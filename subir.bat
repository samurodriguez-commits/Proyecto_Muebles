@echo off
setlocal enabledelayedexpansion

echo ==================================================
echo  Script de subida al repositorio Proyecto_Muebles
echo ==================================================
echo.

REM Ruta donde estan los archivos del proyecto
set "PROJECT_DIR=%~dp0"
set "REPO_URL=https://github.com/samurodriguez-commits/Proyecto_Muebles.git"

cd /d "%PROJECT_DIR%"

echo [1/5] Verificando si el repositorio ya esta inicializado...

if exist ".git" (
    echo       Repositorio ya inicializado, actualizando el remoto...
    git remote remove origin 2>nul
    git remote add origin "%REPO_URL%"
) else (
    echo       Inicializando git en esta carpeta...
    git init
    if errorlevel 1 (
        echo.
        echo ERROR: No se pudo inicializar git. Verifica que tengas Git instalado.
        pause
        exit /b 1
    )
    git remote add origin "%REPO_URL%"
)

echo.
echo [2/5] Configurando la rama principal...
git branch -M main

echo.
echo [3/5] Agregando los archivos del proyecto...
git add -A

echo.
echo [4/5] Creando el commit...
set /p MENSAJE="Escribe el mensaje del commit (ej: 'Agregar validacion de formularios'): "
if "%MENSAJE%"=="" set "MENSAJE=Actualizacion del proyecto"

git commit -m "%MENSAJE%"
if errorlevel 1 (
    echo.
    echo ERROR: No se pudo hacer el commit. Revisa si hay cambios pendientes.
    pause
    exit /b 1
)

echo.
echo [5/5] Subiendo los cambios a GitHub...
echo       La primera subida usara --force para reemplazar lo que hay en GitHub.
git push -u origin main --force
if errorlevel 1 (
    echo.
    echo ERROR: No se pudo hacer push al repositorio.
    echo Revisa que tengas acceso al repositorio (usuario y clave de GitHub).
    pause
    exit /b 1
)

echo.
echo ==================================================
echo  Cambios subidos correctamente a GitHub.
echo ==================================================
pause
