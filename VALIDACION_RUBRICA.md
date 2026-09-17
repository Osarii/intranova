# Validación contra la rúbrica (100 pts)

## 1. Estructura del proyecto — 15 pts

- `src/components/` presente.
- `src/pages/` presente.
- `src/routes/` presente.
- `src/routes/Routing.jsx` separado.
- `src/routes/PrivateRoutes.jsx` separado.
- `src/App.jsx` y `src/main.jsx` presentes.

## 2. Enrutador y rutas públicas — 20 pts

En `Routing.jsx`:

- `BrowserRouter` configura el enrutador.
- `Routes` contiene el mapa de rutas.
- `/` carga `Home`.
- `/login` carga `Login`.
- `/registro` carga `Registro`.
- `Navbar.jsx` usa `NavLink`.
- Las páginas usan `Link` cuando necesitan navegación declarativa.
- No se usan enlaces `<a href>` para la navegación interna de React.

## 3. PrivateRoutes y rutas privadas — 30 pts

En `PrivateRoutes.jsx`:

- Se consulta el estado global `isAuthenticated`.
- Si no hay sesión se retorna inmediatamente `<Navigate to="/login" ... />`.
- La rama autenticada renderiza `<Outlet />`.
- `/dashboard` y `/perfil` son rutas hijas del mismo `<Route element={<PrivateRoutes />}>`.
- La validación no está duplicada en cada página.

## 4. Estado de autenticación — 20 pts

En `AuthContext.jsx`:

- `AuthProvider` centraliza el estado.
- `login()` activa la sesión.
- `logout()` limpia la sesión.
- El estado se comparte mediante Context.
- El login acepta cualquier correo y contraseña no vacíos.
- `PrivateHeader.jsx` muestra **Cerrar sesión** únicamente dentro de la rama privada.
- Logout redirige a `/`.

## 5. Navegación y 404 — 15 pts

- `Navbar.jsx` cambia sus enlaces según `isAuthenticated`.
- La ruta `*` carga `NotFound.jsx`.
- La página muestra `404 - Página no encontrada`.

## Comprobación técnica realizada al paquete

Se validó la sintaxis JSX de los 13 archivos `.jsx` con el parser/transpilador de TypeScript y todos resultaron correctos.

El entorno donde se preparó el ZIP no pudo conectarse a `registry.npmjs.org` (error DNS `EAI_AGAIN`), por lo que la descarga de dependencias y el build de Vite deben ejecutarse en el equipo del estudiante con `npm install` y `npm run build`.
