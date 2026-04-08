# AALinksWebsite

Sitio web estático tipo link-in-bio para Aneudys Amparo. El proyecto está construido con HTML, CSS y JavaScript vanilla, e incluye soporte PWA mediante `manifest.json` y `service-worker.js`.

Actualmente está corriendo en producción en https://links.aneudysamparo.com.

## Demo

- Sitio: https://links.aneudysamparo.com

## Características

- Landing page personal con diseño responsive.
- Estilo visual moderno con efectos glassmorphism, gradientes y animaciones de entrada.
- Respeto por `prefers-reduced-motion` para accesibilidad.
- Registro de service worker en contexto seguro.
- Cache de assets principales para funcionamiento offline básico.
- Manifest web app para instalación como aplicación.

## Estructura del proyecto

```text
.
├── assets/
│   ├── favicon.svg
│   ├── icon-192.svg
│   └── icon-512.svg
├── index.html
├── manifest.json
├── script.js
├── service-worker.js
└── styles.css
```

## Requisitos

- Un navegador moderno.
- Un servidor estático local para pruebas completas.

Nota: si abres `index.html` directamente desde el sistema de archivos, el service worker no se registrará. Para probar la PWA correctamente, sirve el proyecto por `http://localhost` o en un entorno `https`.

## Ejecución local

Puedes usar cualquier servidor estático. Algunos ejemplos:

### Con Python

```bash
python3 -m http.server 8080
```

### Con Node.js

```bash
npx serve .
```

Luego abre el sitio en el navegador:

```text
http://localhost:8080
```

Si usas `npx serve`, revisa el puerto que indique la terminal.

## Despliegue

El proyecto no requiere build ni paso de compilación. Puede desplegarse como sitio estático en plataformas como:

- Dokploy
- Nginx
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

Solo necesitas publicar el contenido del repositorio tal como está.

## Personalización rápida

### Contenido y enlaces

Edita `index.html` para cambiar:

- Nombre, handle y texto descriptivo.
- Avatar y metadatos SEO/Open Graph.
- Enlaces sociales y enlace principal.
- Texto del footer.

### Estilos

Edita `styles.css` para ajustar:

- Paleta de colores en `:root`.
- Tipografías.
- Layout responsive.
- Efectos hover, animaciones y fondos.

### Comportamiento

Edita `script.js` para modificar:

- Animación inicial de revelado.
- Efecto de seguimiento del puntero sobre tarjetas.
- Registro del service worker.

### PWA

Edita `manifest.json` para cambiar:

- Nombre de la aplicación.
- Colores del tema.
- Iconos.
- Modo de visualización.

Edita `service-worker.js` para ajustar:

- Nombre y versión del caché.
- Lista de archivos precargados.
- Estrategia de cache en peticiones.

## Mantenimiento

Cuando cambies assets críticos o archivos cacheados, conviene actualizar:

- El valor de `CACHE_NAME` en `service-worker.js`.
- Los query params versionados en `index.html`.
- Las rutas incluidas en `CORE_ASSETS` si agregas o renombras archivos.

Esto evita que clientes existentes sigan usando una versión antigua en caché.

## Accesibilidad y compatibilidad

- El sitio incluye etiquetas semánticas y `aria-label` en enlaces sociales.
- Las animaciones se reducen automáticamente si el usuario prefiere menos movimiento.
- El registro del service worker se limita a contextos seguros.

## Licencia

Este repositorio no incluye una licencia explícita. Si planeas hacerlo público para reutilización, añade una licencia apropiada.