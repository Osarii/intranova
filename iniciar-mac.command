#!/bin/zsh
cd "$(dirname "$0")" || exit 1
clear
printf "CursoHub - Practica de rutas publicas y privadas\n\n"
printf "Instalando dependencias...\n"
npm install || exit 1
printf "\nIniciando Vite...\n"
npm run dev
