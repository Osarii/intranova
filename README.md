# Práctica #1 — Rutas Públicas y Privadas con React

Aplicación desarrollada con **React + Vite + react-router-dom v6** para demostrar rutas públicas, rutas privadas, autenticación centralizada con Context y una página 404.

## Cómo ejecutar el proyecto

1. Abre Terminal en la carpeta del proyecto.
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre en el navegador la dirección que muestre Vite, normalmente `http://localhost:5173`.

## Estructura principal

```text
src/
├── components/
│   ├── AuthContext.jsx
│   ├── Navbar.jsx
│   └── PrivateHeader.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Registro.jsx
│   ├── Dashboard.jsx
│   ├── Perfil.jsx
│   └── NotFound.jsx
├── routes/
│   ├── Routing.jsx
│   └── PrivateRoutes.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Cómo funciona `PrivateRoutes.jsx`

`PrivateRoutes.jsx` tiene una sola responsabilidad: decidir si el usuario puede acceder a las rutas privadas.

- Obtiene `isAuthenticated` desde `AuthContext`.
- Si el usuario **no está autenticado**, retorna `<Navigate to="/login" />`, por lo que la página privada no llega a renderizarse.
- Si el usuario **sí está autenticado**, muestra el encabezado privado y `<Outlet />`.
- `<Outlet />` representa la ruta hija privada que corresponda, por ejemplo `/dashboard` o `/perfil`.

En `Routing.jsx`, las rutas privadas se agrupan una sola vez de esta manera:

```jsx
<Route element={<PrivateRoutes />}>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/perfil" element={<Perfil />} />
</Route>
```

Así se evita repetir la misma validación de autenticación en cada página privada.

## Estado de autenticación

La autenticación está centralizada en `AuthContext.jsx`.

- `login()` marca al usuario como autenticado.
- `logout()` elimina la sesión.
- El estado se guarda en `localStorage` para mantener la sesión incluso si se actualiza la página.
- El login acepta cualquier correo y contraseña siempre que ambos campos tengan contenido.

## Rutas implementadas

### Públicas

- `/` — Inicio
- `/login` — Login
- `/registro` — Registro

### Privadas

- `/dashboard` — Dashboard del estudiante
- `/perfil` — Perfil del estudiante

### Ruta 404

- `*` — Muestra `404 - Página no encontrada`.

## Prueba de validación solicitada

1. Cierra sesión si existe una sesión previa.
2. Escribe directamente `/dashboard` en la barra del navegador.
3. Debes terminar automáticamente en `/login` sin ver el Dashboard.
4. Escribe cualquier correo y contraseña no vacíos.
5. Envía el formulario.
6. Debes entrar al Dashboard.
7. Navega entre `/dashboard` y `/perfil` usando los enlaces de la barra superior.
8. Presiona **Cerrar sesión**.
9. Debes volver a `/` y las rutas privadas volverán a quedar bloqueadas.

## Correspondencia con la rúbrica

- **15 pts — Estructura:** carpetas `components`, `pages`, `routes`; `Routing.jsx` y `PrivateRoutes.jsx` separados.
- **20 pts — Rutas públicas:** `/`, `/login`, `/registro`; navegación con `Link`/`NavLink`.
- **30 pts — PrivateRoutes:** usa `Outlet` + `Navigate`; protege `/dashboard` y `/perfil` sin duplicar lógica.
- **20 pts — Autenticación:** Context centralizado; login y logout funcionales.
- **15 pts — Navegación y 404:** barra dinámica y ruta comodín `*`.

## Evidencias

La carpeta `evidencias/` contiene capturas del flujo solicitado cuando se genera el paquete final:

- Acceso a `/dashboard` sin sesión y redirección a `/login`.
- Login completado y Dashboard visible.
- Navegación a Perfil autenticado.

## Build de comprobación

Para comprobar que el proyecto compila correctamente:

```bash
npm run build
```

Vite generará la carpeta `dist/` si no hay errores.

## Solución de pantalla blanca

Esta versión no depende de `localStorage` para iniciar la aplicación. El estado de autenticación se mantiene con React Context durante la sesión actual, que es suficiente para los requisitos de la práctica. También incluye un `ErrorBoundary` para mostrar un mensaje visible si ocurre un error de renderizado en vez de dejar la página totalmente en blanco.
# intranova
