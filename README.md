# RetroShoot Cabina — sitio web

Landing de una sola página para **RetroShoot Cabina**, cabina fotográfica con estilo
retro para casamientos, 15 años, cumpleaños y eventos corporativos en Bahía Blanca y zona.

- Stack: HTML + CSS + JS estático (sin build). Se sirve tal cual.
- Tipografía: Playfair Display (títulos), Outfit (texto), Alex Brush (logo).
- Íconos: Phosphor (CDN).
- Paleta: negro cálido + dorado latón + crema.
- CTA único a WhatsApp: `+54 291 444 7377` (botón flotante + botones de reserva).
- Instagram: https://www.instagram.com/retroshootcabina/

## Ver en local

```bash
cd retroshoot-cabina-web
python3 -m http.server 5178
# abrir http://localhost:5178
```

## Deploy

Cualquier hosting estático (Vercel, Netlify, GitHub Pages). Para Vercel:
subir la carpeta como proyecto estático, sin framework, output = raíz.

## Imágenes: reemplazar los placeholders

Las fotos actuales son **placeholders** (`picsum.photos` con filtro sepia). Hay que
cambiarlas por fotos reales de la cabina (las del feed de @retroshootcabina sirven).
Guardar los archivos en `assets/img/` y cambiar los `src` en `index.html`.

| Ubicación en `index.html` | Qué foto va | Tamaño sugerido |
|---|---|---|
| `.hero__bg img` | Ambiente de la cabina / cámara vintage, se ve muy oscurecida detrás del texto | 1600×1200 |
| `.strip figure img` (x6) | Tiras de fotos y grupos divirtiéndose en la cabina | 440×560 c/u |
| `.split__media img` | Cámara réflex / detalle del setup retro | 900×1120 |
| `.bento__a` | Foto grupal fuerte, la mejor del carrete | 1200×800 |
| `.bento__b` | Retrato vertical (pareja o quinceañera con props) | 700×1000 |
| `.bento__c/d/e` | Detalle de props, tira impresa, cortina de fondo | 700×700 |
| `og:image` (meta) | Igual que hero, versión 1200×630 | 1200×630 |

## Videos

La sección "Así se vive una fiesta con RetroShoot" muestra **dos reels verticales (9:16)**
embebidos desde Vimeo, en loop y sin sonido:

- https://vimeo.com/1223221432
- https://vimeo.com/1223223145

Los archivos originales quedan guardados en `assets/video/` (`retroshoot.mp4` y
`retroshoot-2.mp4`) por si hace falta re-subirlos o cambiar a video propio.
Para reemplazar un reel, cambiá el ID en el `src` del `<iframe>` correspondiente en `index.html`.

Consejo: subir las fotos ya con revelado cálido / sepia suave para que peguen con la
estética. El CSS igual les aplica un filtro sepia por encima; si las fotos ya vienen
tratadas, se puede bajar el filtro en `assets/css/styles.css` (buscar `sepia(`).
