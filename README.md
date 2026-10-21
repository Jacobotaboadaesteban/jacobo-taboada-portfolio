# Jacobo Taboada Esteban — Portfolio

Portfolio personal bilingüe (español e inglés) con una estética de bar contemporáneo. Los proyectos se presentan como bebidas en una estantería y se pueden explorar desde la barra o desde la carta. Cada ficha incluye resumen, pasos, resultados y herramientas.

## Tecnologías

- Next.js con App Router, React y TypeScript.
- Tailwind CSS y estilos propios.
- Framer Motion para las animaciones.
- Fuentes Barlow Condensed y DM Sans servidas localmente.
- Ilustraciones originales en SVG y CSS.

No necesita backend ni variables de entorno.

## Ejecutar en local

Requiere Node.js 20.9 o posterior y npm.

```bash
npm ci
npm run dev
```

Abre <http://localhost:3000>. Para comprobar el build de producción:

```bash
npm run typecheck
npm run build
npm start
```

## Secciones

- **Inicio:** presentación, foto y enlaces a proyectos y contacto.
- **Habilidades:** cinta animada con controles de pausa y soporte para movimiento reducido.
- **La historia:** perfil, trayectoria, formación y herramientas.
- **El bar:** estantería interactiva y carta con seis proyectos. Las fichas incluyen cuatro pestañas: resumen, preparación, resultados y tecnología.
- **Contacto:** correo, teléfono, LinkedIn y ubicación.
- Selector de idioma español / inglés y diseño adaptable a móvil y escritorio.

## Proyectos

- **FaceID-Desk:** prototipo académico de verificación facial 1:1 con webcam y detección básica de parpadeo.
- **Mario Bros:** juego de plataformas hecho con Python y Pyxel.
- **TeesForKindness:** tienda web colaborativa; enlaza al repositorio original del equipo.
- **Survival Analysis:** análisis de datos de pacientes pediátricos con PCA, K-means y métodos de supervivencia.
- **MemorIA:** producto de salud digital en desarrollo.
- **HPE Project:** análisis de tráfico de red y herramientas MCP; repositorio próximamente.

Los proyectos incluyen su estado actual en la web. FaceID-Desk se presenta como prototipo académico y no como sistema de seguridad de producción.

## Editar contenido

El contenido bilingüe, los textos y los datos de proyectos se encuentran en `src/data/portfolio.ts`. Los componentes están en `src/components/portfolio.tsx` y `src/components/bar-art.tsx`; los estilos generales están en `src/app/globals.css`.

La foto del portfolio se sirve desde `public/images/jacobo.jpg`. Las referencias visuales de `design-references/` se conservan localmente y no se incluyen en el repositorio.

## Despliegue

El proyecto está preparado para Vercel. Importa el repositorio de GitHub como proyecto Next.js; no hacen falta variables de entorno. Al conectar la rama `main`, Vercel podrá desplegar automáticamente cada cambio enviado a esa rama.
