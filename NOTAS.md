# Portal de apps — Clínica Reina Catalina

Página de inicio en https://geol21.github.io/ con enlaces a las apps de la clínica.
No guarda datos ni pide contraseña: cada app pide su propio código de acceso.

## Cómo agregar o quitar una app
Edita la lista `GRUPOS` en `index.html` y pon su ícono en la carpeta `iconos/`.
Si agregas un ícono, súmalo también a `ARCHIVOS` en `sw.js` y sube `VERSION`.

## Cuidado
Este sitio está en la raíz del dominio, donde viven las demás apps.
El service worker solo atiende los archivos del portal; no cambiar eso.
