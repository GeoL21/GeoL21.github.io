# Portal de apps — Clínica Reina Catalina

Página de inicio en https://geol21.github.io/ con enlaces a las apps de la clínica.
No guarda datos ni pide contraseña: cada app pide su propio código de acceso.

## Cómo agregar o quitar una app
Edita la lista `GRUPOS` en `index.html` y pon su ícono en la carpeta `iconos/`.
Si agregas un ícono, súmalo también a `ARCHIVOS` en `sw.js` y sube `VERSION`.

## Cuidado
Este sitio está en la raíz del dominio, donde viven las demás apps.
El service worker solo atiende los archivos del portal; no cambiar eso.

## Verificar ronda (verificar.html)
Página para comprobar el código de verificación de las rondas de Control de cilindros. Solo para el administrador:
pide el código de administrador (CODIGO_ADMIN de Control de cilindros) y lo recuerda en ese equipo (`ver:admin`).
Aparece en el portal en el grupo Administración (13 nov 2026); la protege el código de administrador. Usa la dirección del servidor de `/Control-de-cilindros-/config.js`
y la acción `verificar` de su Apps Script. Lee el QR del reporte con la cámara o desde la imagen (jsQR.js, MIT).
No va en el service worker: necesita internet.

## Estándar visual (16 nov 2026)
Portal y Verificar ronda con el estilo Material 3 "Mornye" (vino #8E4953, fondo #FFF8F7, filas agrupadas, fecha y reloj de Colombia).
Íconos de todas las apps: círculo rosa suave #FFD9DD con ícono Material Symbols Rounded relleno en vino #8E4953
(cilindros propane_tank, ronda fact_check, inventario inventory, material package_2, tanques speed, alarmas notifications_active,
verificar verified_user, portal apps). Los mismos íconos se usan para instalar cada app (icon-192, icon-512 y maskable).
