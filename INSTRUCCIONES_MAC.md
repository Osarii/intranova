# Cómo abrir y ejecutar este proyecto en macOS

El archivo `.zip` funciona normalmente en Mac. Haz doble clic sobre el ZIP para descomprimirlo.

## Opción rápida

1. Abre la carpeta del proyecto.
2. Haz clic derecho sobre `iniciar-mac.command` y elige **Abrir**.
3. Si macOS muestra una advertencia, vuelve a hacer clic derecho > **Abrir** y confirma.
4. El script instalará las dependencias y arrancará Vite.
5. Abre la URL que aparezca en Terminal, normalmente `http://localhost:5173`.

## Opción con Terminal

```bash
cd ruta/de/la/carpeta/react-rutas-publicas-privadas
npm install
npm run dev
```

## Si `npm install` dice que no encuentra package.json

Significa que Terminal está ubicado en otra carpeta. Ejecuta primero `pwd` y luego entra a la carpeta que realmente contiene `package.json` con `cd`.

Ejemplo:

```bash
cd ~/Downloads/react-rutas-publicas-privadas
npm install
npm run dev
```

## Prueba que debes hacer

1. Si existe una sesión guardada, pulsa **Cerrar sesión**.
2. Escribe manualmente `http://localhost:5173/dashboard`.
3. Debe redirigirte a `/login`.
4. Escribe cualquier correo y contraseña no vacíos.
5. Pulsa **Entrar**.
6. Debes llegar al Dashboard.
7. Navega a **Perfil** sin recargar la página.
8. Pulsa **Cerrar sesión** y comprueba que vuelves al inicio.


## Si usas Microsoft Dev Tunnels

Este proyecto incluye `vite.config.js` para escuchar en `0.0.0.0:5173` y permitir el hostname actual del túnel:

`338bprcb-5173.use.devtunnels.ms`

La primera vez que abras el enlace público, Microsoft puede mostrar una pantalla de seguridad. Pulsa **Continue** para acceder a la aplicación.

Si VS Code crea un túnel con un hostname diferente, cambia el valor de `allowedHosts` en `vite.config.js` por el nuevo hostname y reinicia `npm run dev`.
