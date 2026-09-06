# Proyecto_Muebles

Tienda de muebles en línea. Proyecto para la asignatura de Desarrollo Web.

## Estructura del proyecto

```
Proyecto_Muebles/
├── index.html              # Página principal con ofertas destacadas
├── InicioSesion.html       # Inicio de sesión
├── registro.html           # Registro de usuario
├── catalogo.html           # Catálogo de productos
├── contacto.html           # Información de contacto y formulario
├── tutoriales.html         # Tutoriales con video embebido
├── pasostutoriales1.html   # Pasos: Escritorio
├── pasostutoriales2.html   # Pasos: Velador
├── pasostutoriales3.html   # Pasos: Armario
├── pasostutoriales4.html   # Pasos: Mueble de cocina
├── carrito.html            # Carrito de compras
├── estilos/
│   └── styles.css          # Hoja de estilos CSS (todas las páginas)
├── metodos/
│   └── sripts.js           # JavaScript: header, footer, validaciones y LocalStorage
└── subir.bat               # Script para subir cambios a GitHub
```

## LocalStorage

El proyecto usa el método **LocalStorage** del navegador para guardar datos sin base de datos:

| Dato | Clave | Dónde se usa |
|---|---|---|
| Usuarios registrados | `usuarios` | `registro.html` guarda y `InicioSesion.html` verifica |
| Carrito de compras | `carrito` | `catalogo.html` agrega y `carrito.html` muestra/elimina |

Todo está en `metodos/sripts.js`:
- `agregarAlCarrito()` → `localStorage.setItem("carrito", ...)`
- `mostrarCarrito()` → `localStorage.getItem("carrito")`
- `eliminarDelCarrito()` → reescribe `localStorage`
- `validarRegistro()` → guarda el usuario con `localStorage.setItem("usuarios", ...)`
- `validarLogin()` → busca en `localStorage.getItem("usuarios")`

Para verlo en el navegador: F12 → pestaña **Application** → **Local Storage**.

## Características

- Estructura HTML5 semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Hojas de estilos CSS externas para todas las páginas
- Formularios de registro, inicio de sesión y contacto con validación en JavaScript
- Mensajes de error claros y específicos junto a cada campo
- Páginas interconectadas mediante hipervínculos
- Videos embebidos en la página de tutoriales
- Carrito de compras funcional con LocalStorage
- Header y footer compartidos inyectados por JavaScript

## Cómo subir los cambios

1. Ejecuta `subir.bat` desde la carpeta del proyecto
2. El script inicializa/usa el repositorio existente
3. Te pedirá un mensaje para el commit
4. Subirá los cambios al repositorio de GitHub