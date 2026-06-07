**Proyecto HTML simple**

Breve descripción:

Este proyecto contiene una página web estática con archivos HTML, CSS y JavaScript para ejercicios. Está pensado para abrirse localmente en el navegador durante desarrollo.

Estructura del proyecto:

- `index.html` — Página principal.
- `css/` — Hojas de estilo (por ejemplo `styles.css`).
- `js/` — Scripts del proyecto (`ejercicio1.js`, `ejercicio2.js`, `ejercicio3.js`, `ejercicio4.js`, `main.js`).

Requisitos previos:

- Node.js y npm (opcional, solo si usa `npx`).

Instrucciones rápidas (usar `npx serve`):

1. Abra una terminal en la carpeta del proyecto (donde está `index.html`).

2. Ejecutar con `npx serve` (no requiere instalación global):

```
npx serve
```

3. Abra el navegador en `http://localhost:5000` (o en la URL/puerto que muestre `serve`).

Notas útiles:

- Si prefiere instalar `serve` de forma global: `npm install -g serve` y luego `serve`.
- Para especificar un puerto: `npx serve -p 5500` y luego abrir `http://localhost:5500`.
- Alternativa ligera: `npx http-server` (usa por defecto `http://127.0.0.1:8080`).
