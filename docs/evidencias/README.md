# Evidencias académicas

Este documento registra el estado verificable de la primera entrega del **Taller de Arquitectura y Desarrollo Web Integrado**. No presenta como realizados el video, el despliegue ni las integraciones remotas que aún no existen. La guía académica original no está almacenada en el repositorio; la matriz sigue los 28 requisitos comunicados para la actividad.

## Matriz de cumplimiento

| # | Requisito | Estado real | Evidencia | Ruta o enlace | Observaciones |
|---:|---|---|---|---|---|
| 1 | Definición del proyecto | Cumplido | Nombre, propósito y contexto | [`README.md`](../../README.md#descripción-del-proyecto) | Adopme se delimita como plataforma web de adopción responsable |
| 2 | Problemática | Cumplido | Fragmentación y falta de trazabilidad | [`README.md`](../../README.md#problemática) | Relacionada con adoptantes y refugios |
| 3 | Justificación | Cumplido | Justificación funcional y técnica | [`README.md`](../../README.md#justificación) | Explica por qué una SPA y un modelo relacional |
| 4 | Objetivo general | Cumplido | Objetivo medible de diseño e inicialización | [`README.md`](../../README.md#objetivo-general) | No promete una aplicación completa |
| 5 | Objetivos específicos | Cumplido | Cinco objetivos | [`README.md`](../../README.md#objetivos-específicos) | Cubren interfaz, datos, integraciones, trazabilidad y evidencia |
| 6 | Público objetivo | Cumplido | Visitante, adoptante, refugio y administrador | [`README.md`](../../README.md#actores) | Capacidades previstas diferenciadas |
| 7 | Alcance inicial | Cumplido | Tabla de primera entrega y exclusiones | [`README.md`](../../README.md#alcance-de-la-primera-entrega) | Distingue datos demo de funciones futuras |
| 8 | Funcionalidades previstas | Cumplido | Lista funcional y backlog | [`README.md`](../../README.md#funcionalidades-planificadas) | Las avanzadas permanecen abiertas |
| 9 | Framework seleccionado y justificado | Cumplido | React + Vite | [`README.md`](../../README.md#justificación) | Selección coherente con tres vistas SPA |
| 10 | Tres herramientas TIC | Cumplido | Stitch, Supabase y Prisma | [`README.md`](../../README.md#justificación-de-las-tres-herramientas-tic) | Vercel se clasifica como complementaria |
| 11 | Arquitectura técnica | Cumplido | Principios, componentes y decisiones | [`README.md`](../../README.md#arquitectura-e-integración), [`decisiones.md`](../arquitectura/decisiones.md) | Prisma permanece fuera del navegador |
| 12 | Diagrama de arquitectura | Cumplido | Mermaid con cliente, backend y servidor futuro | [`README.md`](../../README.md#diagrama-de-arquitectura) | Diferencia implementado y proyectado |
| 13 | Modelo de datos | Cumplido | Entidades, atributos y restricciones | [`schema.prisma`](../../prisma/schema.prisma) | PostgreSQL sin migraciones aplicadas |
| 14 | Diagrama entidad-relación | Cumplido | Mermaid ER | [`README.md`](../../README.md#diagrama-entidad-relación) | Incluye cardinalidades y Auth separado |
| 15 | Mínimo cuatro entidades o recursos | Cumplido | Perfil, Refugio, Mascota y Solicitud | [`README.md`](../../README.md#recursos-principales) | `auth.users` se identifica como cuenta administrada |
| 16 | API y operaciones previstas | Cumplido | Métodos, contratos, datos y vistas | [`README.md`](../../README.md#operaciones-de-datos) | Separa Data API de API propia futura |
| 17 | Tres vistas principales | Parcial | Inicio, Catálogo y Detalle funcionan en React | [`App.jsx`](../../src/app/App.jsx), [`README.md`](../../README.md#diseño-y-prototipos) | Falta captura original específica de Detalle en Stitch |
| 18 | Prototipos y evidencias gráficas | Parcial | Cuatro capturas originales disponibles | [`docs/prototipos`](../prototipos/README.md) | Proceso y Compromiso son secciones complementarias |
| 19 | Flujo de navegación | Cumplido | Mermaid y rutas reales | [`README.md`](../../README.md#flujo-de-navegación) | Inicio → Catálogo → Detalle |
| 20 | Estructura inicial del código | Cumplido | Árbol modular sin carpetas vacías | [`README.md`](../../README.md#estructura-del-proyecto) | Coincide con los archivos versionados |
| 21 | React + Vite ejecutable | Cumplido | Build, vista previa y rutas | [`package.json`](../../package.json) | No requiere credenciales para datos demo |
| 22 | Dependencias y configuración | Cumplido | Lockfile, variables de ejemplo y configuraciones | [`.env.example`](../../.env.example), [`package-lock.json`](../../package-lock.json) | No contiene valores reales |
| 23 | Repositorio público | Cumplido | Repositorio accesible | [JuanEstebanLT/web-design-adopme](https://github.com/JuanEstebanLT/web-design-adopme) | Rama principal `main` |
| 24 | README profesional | Cumplido | Documento académico integral | [`README.md`](../../README.md) | Incluye referencias técnicas APA 7 |
| 25 | GitHub Flow | Cumplido | Issue, rama, commit, PR, CI y merge | [Pull requests](https://github.com/JuanEstebanLT/web-design-adopme/pulls?q=is%3Apr) | `main` no recibe desarrollo directo |
| 26 | Ramas y pull requests | Cumplido | Historial de PR y ramas temáticas | [PR #24](https://github.com/JuanEstebanLT/web-design-adopme/pull/24), [PR #29](https://github.com/JuanEstebanLT/web-design-adopme/pull/29), [PR #30](https://github.com/JuanEstebanLT/web-design-adopme/pull/30) | PR fusionados tras validación |
| 27 | Organización colaborativa | Cumplido | Issues, labels, milestones y Project | [Project #7](https://github.com/users/JuanEstebanLT/projects/7) | Sin responsables mientras no haya colaboradores |
| 28 | Evidencias para video grupal | Parcial | Matriz, recorrido y guion disponibles | [Guion](#guion-del-video-grupal-máximo-cinco-minutos) | La grabación grupal no se ha realizado |

## Inventario técnico verificado

| Evidencia | Estado | Fuente |
|---|---|---|
| Cuatro PNG originales de Stitch | Verificado | [`public/images/prototipos`](../../public/images/prototipos/) |
| Navegación `/`, `/mascotas`, `/mascotas/:petId` y `*` | Verificado en código | [`App.jsx`](../../src/app/App.jsx) |
| Modelo relacional y separación de Auth | Verificado | [`schema.prisma`](../../prisma/schema.prisma) y README |
| Project con estados, Tipo y Prioridad | Verificado | [Project #7](https://github.com/users/JuanEstebanLT/projects/7) |
| Protección de `main` | Verificada por API | PR y check `validate` obligatorios; force-push y eliminación bloqueados |
| CI de `main` | Verificada | [Historial del workflow](https://github.com/JuanEstebanLT/web-design-adopme/actions/workflows/ci.yml) |
| Asignaciones | Verificado | Los Issues continúan sin responsable |
| Video grupal | Pendiente | Debe ser grabado por los cuatro integrantes |

## Validaciones del cierre · 24 de octubre de 2026

| Verificación | Resultado real |
|---|---|
| `npm ci --prefer-offline` | Correcto: 281 paquetes instalados, 282 auditados y 0 vulnerabilidades |
| `npm run lint` | Correcto: ESLint terminó con código 0 |
| `npm run prisma:validate` | Correcto: `prisma/schema.prisma` es válido; no se conectó ni modificó una base |
| `npm run build` | Correcto: Vite 8.3.5 transformó 30 módulos y generó `dist/` |
| `npm run preview` | Correcto: `/`, `/mascotas`, `/mascotas/luna` y `/ruta-inexistente` respondieron HTTP 200; el proceso se detuvo después de la prueba |
| Enlaces relativos Markdown | Correcto: todas las rutas locales referenciadas existen |
| Imágenes de Stitch | Correcto: cuatro firmas PNG válidas; dimensiones entre 940×754 y 982×775 px |
| Archivos de entorno | Correcto: no existe un `.env` real versionado; `.env.example` solo contiene marcadores |

El [PR #30](https://github.com/JuanEstebanLT/web-design-adopme/pull/30) superó el check obligatorio `validate` y fue fusionado. El workflow disparado sobre `main` también finalizó correctamente; ambas verificaciones se registran mediante sus resultados reales de GitHub Actions.

## Trabajo no exigido en esta fase

| Capacidad | Estado académico | Motivo |
|---|---|---|
| Proyecto y credenciales reales de Supabase | No exigido en esta fase | Pertenece a integración backend futura |
| Migraciones y persistencia con Prisma | No exigido en esta fase | Requiere base autorizada y revisión |
| Despliegue en Vercel | No exigido en esta fase | La primera entrega evalúa preparación y arquitectura |
| Autenticación y solicitudes completas | No exigido en esta fase | Se encuentran en el backlog funcional |
| Paneles administrativos | No exigido en esta fase | Están fuera del alcance inicial |

## Guion del video grupal (máximo cinco minutos)

| Tiempo | Qué mostrar | Qué explicar |
|---|---|---|
| 0:00–0:25 | Encabezado del README | Presentar Adopme, el problema de información dispersa y la propuesta de valor |
| 0:25–0:55 | Objetivos y alcance | Resumir objetivo general, objetivos específicos y límites de la primera entrega |
| 0:55–1:25 | Tecnologías y herramientas TIC | Justificar React + Vite y las tres TIC: Stitch, Supabase y Prisma; mencionar Vercel como complementaria |
| 1:25–2:05 | Capturas de Stitch y aplicación | Mostrar Inicio, Catálogo, Proceso y Compromiso; indicar que Detalle funciona localmente pero su captura Stitch está pendiente |
| 2:05–2:45 | Diagrama de arquitectura | Explicar cliente, Supabase planificado, Prisma solo en servidor, PostgreSQL, GitHub y Vercel |
| 2:45–3:20 | ER y contratos API | Recorrer las cuatro entidades, relaciones y operaciones previstas sin afirmar una API propia desplegada |
| 3:20–4:05 | GitHub | Mostrar Issues, milestones, Project #7, PR, CI y protección de `main`; aclarar que no hay asignaciones |
| 4:05–4:40 | Demostración React + Vite | Navegar Inicio → Catálogo → Detalle y mostrar la ruta 404 o el resultado del build |
| 4:40–5:00 | Conclusiones | Distinguir lo implementado, preparado y futuro; cerrar con la observación de la captura y la siguiente fase |

## Preparación antes de grabar

- Confirmar que el video final no exceda cinco minutos.
- Abrir previamente README, Stitch, la aplicación local, el Project y un PR con CI satisfactorio.
- Mostrar la vista Detalle local como implementación React, no como captura original de Stitch.
- Mantener visible la distinción entre implementado, configurado, planificado y no exigido.
- Acordar entre el equipo la distribución de los segmentos. Los cuatro integrantes deben participar, pero este documento no asigna intervenciones individuales.
- Agregar el enlace o archivo del video solo después de comprobar la grabación final.

## Pendientes reales de la primera entrega

1. Exportar desde Google Stitch una captura original específica de **Detalle de mascota y adopción**, si esa pantalla existe en el prototipo fuente.
2. Grabar el video grupal con participación de los cuatro integrantes y adjuntar su evidencia final.

Conclusión documental: **Listo con observaciones**. La base técnica y la documentación principal están preparadas; la evidencia visual de Detalle en Stitch y la grabación siguen pendientes.
