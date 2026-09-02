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

## Imágenes

El sitio usa 4 fotos reales (sepia) alojadas en `assets/img/`, cada una en versión
web y en miniatura para la tira animada:

| Archivo | Dónde se usa |
|---|---|
| `hero-boda.jpg` | fondo del hero (boda de Ana y Carlos) |
| `evento-carnaval.jpg` | galería, tile grande |
| `evento-15.jpg` | galería, tile vertical (15 de Lucía) |
| `evento-boda.jpg` | galería, tile chico |
| `experiencia-cabina.jpg` | sección "Mucho más que una cabina" + galería, tile ancho |
| `tira-*.jpg` | miniaturas de la tira animada |

El CSS les aplica un filtro sepia/latón por encima para unificar el look (buscar
`sepia(` en `assets/css/styles.css` para ajustarlo). Para cambiar una foto,
reemplazá el archivo con el mismo nombre (mantené el aspecto 16:9) o editá el `src`
en `index.html`. Los originales sin comprimir están en `~/Downloads`
(`Gemini_Generated_Image_*.jpeg`).

## Videos

La sección "Así se vive una fiesta con RetroShoot" muestra **dos reels verticales (9:16)**
embebidos desde Vimeo, en loop y sin sonido:

- https://vimeo.com/1223221432
- https://vimeo.com/1223223145

Los archivos originales quedan guardados en `assets/video/` (`retroshoot.mp4` y
`retroshoot-2.mp4`) por si hace falta re-subirlos o cambiar a video propio.
Para reemplazar un reel, cambiá el ID en el `src` del `<iframe>` correspondiente en `index.html`.
