# Proyecto_Muebles

Tienda de muebles en línea. Proyecto para la asignatura de Desarrollo Web.

## Estructura del proyecto

```
Proyecto_Muebles/
├── index.html          # Página principal
├── InicioSesion.html   # Inicio de sesión
├── registro.html       # Registro de usuario
├── catalogo.html       # Catálogo de productos
├── contacto.html       # Página de contacto
├── tutoriales.html     # Tutoriales con videos
├── carrito.html        # Carrito de compras
├── estilos/
│   └── styles.css      # Hoja de estilos CSS
├── metodos/
│   └── sripts.js       # JavaScript (header, footer y validaciones)
└── subir.bat           # Script para subir cambios a GitHub
```

## Características

- Estructura HTML5 semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Hojas de estilos CSS externas para todas las páginas
- Formularios de registro, inicio de sesión y contacto con validación en JavaScript
- Mensajes de error claros y específicos junto a cada campo
- Páginas interconectadas mediante hipervínculos
- Videos embebidos en la página de tutoriales
- Carrito de compras funcional con `localStorage`
- Header y footer compartidos inyectados por JavaScript

## Cómo subir los cambios

1. Ejecuta `subir.bat` desde la carpeta del proyecto
2. El script clonará el repositorio si no existe
3. Te pedirá un mensaje para el commit
4. Subirá los cambios al repositorio de GitHub
