<div align="center">
  <img src="public/images/adopme-mark.svg" width="112" alt="Marca provisional de Adopme" />

# Adopme

### Plataforma web para conectar adopciones responsables

[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=flat-square&logo=react&logoColor=111827)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Preparado-3FCF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7.10-2D3748?style=flat-square&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Vercel](https://img.shields.io/badge/Vercel-Preparado-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![CI](https://img.shields.io/github/actions/workflow/status/JuanEstebanLT/web-design-adopme/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/JuanEstebanLT/web-design-adopme/actions/workflows/ci.yml)
[![Licencia académica](https://img.shields.io/badge/Uso-Académico-DB6848?style=flat-square)](#estado-actual)

[Prototipo en Google Stitch](https://stitch.withgoogle.com/preview/5253726196803477313?node-id=7a2c06889ff04ac1b8823a52d7e9267c) · [Project](https://github.com/users/JuanEstebanLT/projects/7) · [Issues](https://github.com/JuanEstebanLT/web-design-adopme/issues) · [Repositorio](https://github.com/JuanEstebanLT/web-design-adopme)

</div>

> [!IMPORTANT]
> **Estado verificado al 12 de noviembre de 2026.** La base académica inicial está documentada y la interfaz basada en Google Stitch ya se integró a `main` mediante el PR #33. Las tres vistas funcionan localmente con seis perfiles demostrativos y filtros en memoria. **Supabase, Prisma y Vercel siguen sin integración o despliegue real**; se reservan para fases posteriores.

## Tabla de contenido

- [Descripción del proyecto](#descripción-del-proyecto)
- [Problema, justificación y objetivos](#problema-justificación-y-objetivos)
- [Público objetivo y propuesta de valor](#público-objetivo-y-propuesta-de-valor)
- [Alcance funcional](#alcance-funcional)
- [Tecnologías y herramientas TIC](#tecnologías-y-herramientas-tic)
- [Arquitectura e integración](#arquitectura-e-integración)
- [Modelo de datos](#modelo-de-datos)
- [API y contratos previstos](#api-y-contratos-previstos)
- [Diseño y prototipos](#diseño-y-prototipos)
- [Flujo de navegación](#flujo-de-navegación)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Configuración de Supabase y Prisma](#configuración-de-supabase-y-prisma)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Historias de usuario y tareas técnicas](#historias-de-usuario-y-tareas-técnicas)
- [Gestión del proyecto en GitHub](#gestión-del-proyecto-en-github)
- [Equipo](#equipo)
- [Estado actual](#estado-actual)
- [Hoja de ruta](#hoja-de-ruta)
- [Evidencias académicas](#evidencias-académicas)
- [Enlaces y referencias](#enlaces-y-referencias)

## Descripción del proyecto

**Adopme** es una plataforma web concebida para facilitar el encuentro informado entre personas interesadas en adoptar y organizaciones responsables del cuidado de animales. El producto centraliza perfiles de mascotas, información del refugio y el inicio de una solicitud, con énfasis en la trazabilidad y la adopción responsable.

La primera entrega estableció una base ejecutable, modular y documentada. Posteriormente se integró una interfaz responsive basada en Google Stitch, sin adelantar autenticación, persistencia, evaluación de solicitudes o administración. Esas capacidades se incorporarán en iteraciones posteriores.

### Contexto académico

| Elemento | Definición |
|---|---|
| Actividad | Taller de Arquitectura y Desarrollo Web Integrado |
| Fecha de primera entrega | 26 de octubre de 2026, 6:00 p. m. (fecha histórica) |
| Corte de actualización | 12 de noviembre de 2026 |
| Tipo de producto | Aplicación web SPA con backend administrado planificado |
| Repositorio | Público, administrado mediante GitHub Flow |
| Estado | Base académica documentada; rediseño frontend integrado y funcionamiento local confirmado |

## Problema, justificación y objetivos

### Problemática

La información sobre mascotas disponibles suele estar fragmentada entre redes sociales, formularios aislados y publicaciones con diferentes niveles de detalle. Esta dispersión dificulta comparar perfiles, conocer requisitos y dar seguimiento al interés de adopción. Para los refugios, también representa trabajo manual repetido y menor trazabilidad sobre las solicitudes recibidas.

### Justificación

Una aplicación web accesible desde navegadores modernos permite organizar el descubrimiento y el primer contacto sin exigir una instalación. Una experiencia común para visitantes, adoptantes y refugios favorece la claridad de la información, mientras que un modelo relacional evita duplicidades y conserva la relación entre mascota, organización y solicitud.

React y Vite resultan adecuados para esta entrega porque permiten construir las vistas solicitadas mediante componentes reutilizables, navegación del lado del cliente y una compilación optimizada con una configuración contenida. Supabase ofrece autenticación, PostgreSQL y una Data API protegible con RLS. Prisma complementa el diseño y el acceso desde procesos de servidor futuros, sin ejecutarse en el navegador.

### Objetivo general

Diseñar e inicializar una plataforma web modular que permita consultar mascotas y prepare un proceso trazable de adopción responsable entre personas y refugios.

### Objetivos específicos

1. Implementar una base React + Vite navegable y responsive con tres vistas principales.
2. Documentar el dominio mediante entidades, restricciones, cardinalidades y contratos de datos.
3. Preparar una integración segura con Supabase y Prisma, separando cliente y servidor.
4. Mantener trazabilidad técnica mediante Issues, ramas, pull requests, validaciones y convenciones de equipo.
5. Consolidar en este README las evidencias de prototipado, arquitectura y estado real de la entrega.

## Público objetivo y propuesta de valor

### Actores

| Actor | Necesidad principal | Capacidad prevista |
|---|---|---|
| Visitante | Explorar opciones confiables | Consultar catálogo y detalle sin autenticarse |
| Adoptante | Expresar interés y seguir su proceso | Crear y consultar solicitudes propias |
| Refugio | Publicar mascotas y evaluar solicitudes | Administrar perfiles y estados autorizados |
| Administrador | Conservar integridad y moderación | Gestionar usuarios, refugios y publicaciones |

### Propuesta de valor

Adopme reúne información clara, contexto del refugio y un flujo de solicitud trazable en una experiencia accesible. No promete adopciones instantáneas: facilita decisiones informadas y conserva la intervención responsable de las organizaciones.

## Alcance funcional

### Funcionalidades planificadas

- Consultar, buscar y filtrar mascotas disponibles.
- Consultar características, historia y refugio de una mascota.
- Conocer requisitos y pasos del proceso de adopción.
- Registrar y consultar solicitudes de adopción propias.
- Gestionar perfiles autorizados, refugios y publicaciones.
- Actualizar el estado de una solicitud con reglas de autorización.

### Alcance implementado hasta noviembre de 2026

| Capacidad | Estado verificado |
|---|---|
| Inicio con hero, navegación, fotografías, búsqueda y mascotas destacadas | Implementado con contenido demostrativo |
| Catálogo de seis perfiles (tres gatos y tres perros) | Implementado con datos locales |
| Filtros por texto, especie, edad, tamaño, mascotas senior y casos especiales | Implementados en memoria y reflejados en parámetros de URL |
| Detalle con historia, características y refugio de referencia | Implementado con datos demostrativos |
| Proceso, compromiso y llamados a explorar | Secciones informativas implementadas |
| Diseño adaptable y menú móvil | Implementados; revisión a 320 y 375 px pendiente en [#32](https://github.com/JuanEstebanLT/web-design-adopme/issues/32) |
| Inicio, Catálogo, Detalle y ruta 404 | Implementadas mediante React Router |
| Modelo Prisma para PostgreSQL | Esquema definido y validado; sin migraciones aplicadas |
| Cliente de Supabase | Configurado, inactivo sin variables reales |
| Autenticación, Data API y solicitudes reales | Planificadas, sin integración operativa |
| Despliegue Vercel | Configuración preparada, publicación pendiente |

Los seis perfiles, las fotografías y los refugios de referencia son **demostrativos**, no registros de adopciones reales. El [PR #33](https://github.com/JuanEstebanLT/web-design-adopme/pull/33) integró el rediseño visual y los ajustes de navegación en `main`. El equipo confirmó el funcionamiento local el 12 de noviembre de 2026; ello no sustituye las pruebas de dispositivos e integraciones pendientes.

### Fuera del alcance inicial

- Pagos, donaciones, comercio electrónico o servicios veterinarios.
- Chat en tiempo real, geolocalización precisa o notificaciones multicanal.
- Automatización de aprobaciones sin intervención del refugio.
- Paneles administrativos completos o analítica avanzada.
- Migraciones contra una base real sin revisión y credenciales autorizadas.
- Integraciones con claves privilegiadas desde el navegador.

## Tecnologías y herramientas TIC

### Selección tecnológica

| Tecnología | Responsabilidad | Estado |
|---|---|---|
| React 19 | Componentes y estado de interfaz | Implementada y compilable |
| Vite 8 | Desarrollo, empaquetado y servidor local | Implementado |
| JavaScript | Lenguaje principal | Implementado |
| React Router 7 | Rutas de Inicio, Catálogo y Detalle | Implementado |
| Supabase JS | Auth y acceso controlado a Data API | Cliente preparado, sin conexión |
| Supabase PostgreSQL | Persistencia administrada | Diseñada, pendiente de proyecto |
| Prisma ORM 7 | Modelo y acceso desde servidor futuro | Esquema preparado, sin migración |
| Google Stitch | Prototipo y referencia visual | Cuatro capturas originales; interfaz adaptada a React mediante PR #33. La captura independiente de Detalle no se incluyó por alcance |
| Vercel | Hosting de la SPA | Reescritura configurada; despliegue pendiente |
| GitHub | Código, Issues, PR, Project y CI | Implementado y verificado |
| Mermaid | Diagramas técnicos versionables | Implementado en este README |

### Justificación de las tres herramientas TIC

#### 1. Google Stitch · prototipado visual

Permite representar las pantallas y validar jerarquía, navegación e identidad antes de ampliar la implementación. El prototipo es la fuente visual del equipo; por integridad académica, este repositorio no sustituye sus capturas por composiciones ficticias.

#### 2. Supabase · backend y persistencia

Integra PostgreSQL, autenticación y Data API. Reduce trabajo de infraestructura durante las primeras iteraciones y permite aplicar autorización cerca del dato mediante Row Level Security. La clave pública puede usarse en el cliente solo con políticas RLS correctas; las claves de servicio no se exponen.

#### 3. Prisma ORM · modelado y acceso de servidor

Expresa entidades, enumeraciones, relaciones, índices y restricciones de forma versionable. Cuando se incorporen funciones de servidor, permitirá consultas tipadas y migraciones revisables. Prisma no se importa desde React ni recibe credenciales de base de datos en variables `VITE_*`.

### Herramienta complementaria · Vercel

Vercel alojará el artefacto generado por Vite y ejecutará futuras funciones de servidor si se aprueban. `vercel.json` dirige las rutas de la SPA a `index.html`. La publicación depende de vincular el repositorio y registrar variables reales en el panel de Vercel.

## Arquitectura e integración

### Principios

- Presentación, dominio de funcionalidades, servicios y configuración permanecen separados.
- El navegador consume Supabase con una clave pública y políticas RLS; nunca recibe `DATABASE_URL` ni una service-role key.
- Prisma queda reservado para un runtime de servidor futuro.
- Los datos demostrativos permiten ejecutar el frontend sin simular una conexión remota.
- La automatización verifica instalación, lint, esquema y compilación sin acceder a una base real.

### Diagrama de arquitectura

```mermaid
flowchart LR
    U[Visitante o adoptante]
    S[Google Stitch<br/>prototipo]
    G[GitHub<br/>repositorio · Issues · Actions]
    V[Vercel<br/>SPA React + Vite]

    subgraph CLIENTE[Cliente web]
        R[React Router<br/>Inicio · Catálogo · Detalle]
        SDK[Supabase JS<br/>clave pública]
        DEMO[Datos demostrativos<br/>solo base inicial]
    end

    subgraph SUPA[Supabase · integración pendiente]
        AUTH[Auth]
        DATA[Data API]
        RLS[PostgreSQL + RLS]
    end

    subgraph SERVER[Servidor futuro]
        API[Funciones o módulo Node.js]
        P[Prisma Client]
    end

    U --> V
    V --> R
    R --> DEMO
    R -. cuando se configure .-> SDK
    SDK --> AUTH
    SDK --> DATA
    DATA --> RLS
    API --> P
    P --> RLS
    S -. guía visual .-> R
    G -->|CI y despliegue| V
```

La línea continua representa lo ejecutable o el flujo de despliegue previsto; las líneas punteadas señalan integraciones aún no conectadas.

### Componentes principales

| Componente | Responsabilidad actual |
|---|---|
| `src/app` | Declaración central de rutas |
| `src/pages` | Composición de cada vista |
| `src/components` | Layout y UI reutilizable |
| `src/features/pets` | Datos demostrativos y futura lógica del catálogo |
| `src/services` | Frontera de acceso a datos; selecciona demo o Supabase |
| `src/lib` | Configuración compartida, como el cliente Supabase |
| `prisma` | Contrato relacional de servidor |
| `server/generated` | Salida local futura de Prisma, no versionada |

Las decisiones se amplían en [`docs/arquitectura/decisiones.md`](docs/arquitectura/decisiones.md).

## Modelo de datos

Supabase Auth administra credenciales en `auth.users`. La tabla pública `profiles` contiene únicamente datos de aplicación y usa el mismo UUID como clave primaria y referencia lógica. Adopme **no almacena contraseñas manualmente**.

### Diagrama entidad-relación

```mermaid
erDiagram
    AUTH_USER {
        uuid id PK
        string email UK
        datetime created_at
    }

    PROFILE {
        uuid id PK,FK
        string full_name
        string phone
        string city
        UserRole role
        datetime created_at
        datetime updated_at
    }

    SHELTER {
        uuid id PK
        uuid manager_id FK
        string name
        string email UK
        string phone
        string city
        string address
        boolean verified
        datetime created_at
        datetime updated_at
    }

    PET {
        uuid id PK
        uuid shelter_id FK
        string name
        PetSpecies species
        string breed
        int age_months
        string sex
        string size
        string description
        string image_url
        PetStatus status
        datetime published_at
    }

    ADOPTION_REQUEST {
        uuid id PK
        uuid applicant_id FK
        uuid pet_id FK
        string message
        string housing_type
        boolean has_other_pets
        RequestStatus status
        datetime submitted_at
        datetime updated_at
    }

    AUTH_USER ||--|| PROFILE : "autentica"
    PROFILE o|--o{ SHELTER : "administra"
    SHELTER ||--o{ PET : "publica"
    PROFILE ||--o{ ADOPTION_REQUEST : "presenta"
    PET ||--o{ ADOPTION_REQUEST : "recibe"
```

### Restricciones relevantes

| Regla | Implementación prevista |
|---|---|
| Un perfil por cuenta | `profiles.id` coincide con `auth.users.id` |
| Correo único por refugio | Restricción `UNIQUE` en `shelters.email` |
| Solicitud no duplicada | `UNIQUE (applicant_id, pet_id)` |
| Eliminación protegida | `RESTRICT` para mascotas o perfiles con solicitudes |
| Consulta eficiente | Índices por refugio/estado y mascota/estado de solicitud |
| Estados controlados | Enumeraciones para rol, especie, publicación y solicitud |

## API y contratos previstos

### Recursos principales

| Recurso | Entidad | Uso en vistas |
|---|---|---|
| Perfiles | `profiles` | Identidad y autorización del adoptante |
| Refugios | `shelters` | Responsable visible en detalle |
| Mascotas | `pets` | Destacados, catálogo y detalle |
| Solicitudes de adopción | `adoption_requests` | Inicio y seguimiento del proceso futuro |

### Estado real de la API

1. **Implementado localmente:** contrato de servicio con retorno de datos demostrativos cuando faltan variables.
2. **Configurado, no conectado:** Supabase JS puede invocar la Data API una vez creado el proyecto y aplicadas políticas RLS.
3. **Planificado:** funciones propias para operaciones que requieran credenciales de servidor o reglas transaccionales.
4. **No existe todavía:** una API REST personalizada desplegada. Las rutas `/rest/v1/*` pertenecen a Supabase Data API.

### Operaciones de datos

| Estado | Método | Contrato | Datos principales | Descripción | Vista |
|---|---|---|---|---|---|
| Supabase, pendiente | `GET` | `/rest/v1/pets?status=eq.AVAILABLE` | Filtros por especie, ciudad o edad; respuesta con perfil resumido y `shelter_id` | Listar mascotas publicadas | Inicio, Catálogo |
| Supabase, pendiente | `GET` | `/rest/v1/pets?id=eq.{id}&select=*,shelter:shelters(*)` | `id` de mascota; respuesta con características y refugio público | Consultar una mascota y su refugio | Detalle |
| Supabase, pendiente | `GET` | `/rest/v1/shelters?id=eq.{id}` | `id`; respuesta con nombre, ciudad, descripción y contacto autorizado | Consultar organización | Detalle |
| Supabase + RLS, pendiente | `GET/PATCH` | `/rest/v1/profiles?id=eq.{auth.uid}` | `auth.uid`; nombre, teléfono y ciudad del perfil propio | Consultar o editar perfil autorizado | Perfil futuro |
| Supabase + RLS, pendiente | `POST` | `/rest/v1/adoption_requests` | `pet_id`, mensaje, vivienda y otras mascotas; respuesta con `id`, estado y fecha | Crear solicitud propia | Detalle futuro |
| Supabase + RLS, pendiente | `GET` | `/rest/v1/adoption_requests?applicant_id=eq.{auth.uid}` | `auth.uid`; respuesta con mascota, estado y fechas | Consultar solicitudes propias | Seguimiento futuro |
| API propia, planificada | `POST` | `/api/adoption-requests/{id}/transition` | `id` y nuevo estado permitido; respuesta con transición validada | Aplicar reglas transaccionales en servidor | Panel de refugio futuro |

Los filtros del catálogo actual se ejecutan en memoria y no realizan solicitudes HTTP.

## Diseño y prototipos

**Prototipo interactivo:** [Adopme en Google Stitch](https://stitch.withgoogle.com/preview/5253726196803477313?node-id=7a2c06889ff04ac1b8823a52d7e9267c)

### Identidad visual

La identidad de Adopme combina fondo `#F8F9FF`, azul pastel, acentos durazno y menta, tarjetas redondeadas y fotografía de mascotas. La interfaz React implementa la composición de Stitch con HTML semántico y componentes reales: navegación responsive, hero, filtros, catálogo, proceso, compromiso, detalle y footer. Las capturas continúan siendo la referencia visual original y no se usan como interfaz funcional.

La implementación utiliza seis perfiles demostrativos identificados de forma explícita. Los filtros por texto, especie, edad, tamaño, mascotas senior y casos especiales funcionan en memoria y se conservan en parámetros de URL. No existen publicaciones, métricas de adopción, testimonios, alianzas, autenticación ni solicitudes reales.

> [!NOTE]
> Las cuatro capturas siguientes provienen del diseño original de Stitch. **Proceso** y **Compromiso** son secciones informativas, no vistas independientes de Detalle. El [Issue #12](https://github.com/JuanEstebanLT/web-design-adopme/issues/12) se cerró como *no planificado*: se acordó conservar las cuatro evidencias sin incorporar una captura adicional de Detalle. La página de detalle sí existe en React, pero no se presenta como una captura original de Stitch.

### Vista 1 · Inicio

| Aspecto | Definición |
|---|---|
| Función | Comunicar propósito, mostrar mascotas destacadas y explicar el proceso |
| Acciones | Abrir catálogo, navegar al proceso o seleccionar una mascota |
| Destino | Catálogo o Detalle |
| Datos previstos | `GET /rest/v1/pets?status=eq.AVAILABLE` |
| Estado | Ruta `/` implementada con datos demostrativos |

<div align="center">
  <img src="public/images/prototipos/adopme-inicio-stitch.png" width="880" alt="Diseño original de la sección de inicio de Adopme en Google Stitch, con propuesta de valor, mascotas destacadas y filtros de búsqueda" />
  <br>
  <sub><strong>Figura 1.</strong> Inicio: propuesta de valor, llamados a la acción, indicadores y acceso al catálogo.</sub>
</div>

### Vista 2 · Catálogo de mascotas

| Aspecto | Definición |
|---|---|
| Función | Explorar perfiles mediante búsqueda y filtros por especie, edad, tamaño y categoría |
| Acciones | Buscar, filtrar, limpiar filtros y abrir un perfil |
| Destino | Detalle de la mascota seleccionada |
| Datos previstos | Consulta filtrada de `pets` mediante Supabase Data API |
| Estado | Ruta `/mascotas` implementada; filtros en memoria |

<div align="center">
  <img src="public/images/prototipos/adopme-catalogo-stitch.png" width="880" alt="Diseño original del catálogo de mascotas de Adopme en Google Stitch, organizado como una cuadrícula de perfiles disponibles" />
  <br>
  <sub><strong>Figura 2.</strong> Catálogo: perfiles resumidos con fotografía, características, ubicación y acceso al detalle.</sub>
</div>

### Sección · Proceso de adopción

Esta sección explica el recorrido previsto en tres momentos: encontrar un compañero, conocer su historia y prepararse para una adopción responsable. No presenta cuestionarios, citas, certificaciones ni acompañamiento automático como funciones disponibles.

<div align="center">
  <img src="public/images/prototipos/adopme-proceso-stitch.png" width="880" alt="Sección original del proceso de adopción de Adopme en Google Stitch, presentada mediante tres pasos" />
  <br>
  <sub><strong>Figura 3.</strong> Proceso de adopción: explicación visual de las etapas de búsqueda, encuentro y adopción responsable.</sub>
</div>

### Sección · Compromiso con la adopción

La sección refuerza la adopción como una decisión de largo plazo e incorpora orientación sobre responsabilidad, tiempo, salud y bienestar. El testimonio del prototipo se sustituye por un bloque editorial claramente rotulado como demostrativo; no se atribuye a una familia, refugio o red médica.

<div align="center">
  <img src="public/images/prototipos/adopme-compromiso-stitch.png" width="880" alt="Sección original sobre el compromiso con la adopción de Adopme en Google Stitch, con recomendaciones y llamados a la acción" />
  <br>
  <sub><strong>Figura 4.</strong> Compromiso con la adopción: criterios de responsabilidad, testimonio y próximos pasos.</sub>
</div>

### Vista 3 · Detalle de mascota y adopción

| Aspecto | Definición |
|---|---|
| Función | Presentar historia, características y refugio responsable |
| Acciones | Volver al catálogo; la solicitud aparece deshabilitada y rotulada como futura |
| Destino | Catálogo o formulario futuro de solicitud |
| Datos previstos | `pets`, `shelters` y `adoption_requests` |
| Estado | Ruta `/mascotas/:petId` integrada en `main`, con datos demostrativos; solicitud de adopción pendiente |

> [!WARNING]
> No se incluyó una captura original independiente de Detalle en Stitch por la decisión registrada en [#12](https://github.com/JuanEstebanLT/web-design-adopme/issues/12), cerrado como no planificado. La vista React `/mascotas/:petId` sí está implementada; las figuras 3 y 4 siguen siendo secciones complementarias.

## Flujo de navegación

```mermaid
flowchart LR
    I[Inicio<br/>/] -->|Conocer mascotas| C[Catálogo<br/>/mascotas]
    I -->|Elegir destacada · petId| D[Detalle<br/>/mascotas/:petId]
    C -->|Buscar y filtrar| C
    C -->|Seleccionar mascota · petId| D
    D -->|Volver| C
    D -. Solicitar adopción<br/>entrega futura .-> F[Formulario autenticado<br/>planificado]
```

## Estructura del proyecto

```text
web-design-adopme/
├── .github/
│   ├── ISSUE_TEMPLATE/          # Formularios de historias, tareas, errores y mejoras
│   ├── workflows/ci.yml         # Instalación, lint, Prisma y build
│   └── pull_request_template.md
├── docs/
│   ├── arquitectura/            # Decisiones técnicas
│   ├── evidencias/              # Matriz y guion del video
│   └── prototipos/              # Estado de capturas originales
├── prisma/
│   └── schema.prisma            # Modelo PostgreSQL; no contiene credenciales
├── public/images/
│   ├── adopme-mark.svg          # Marca provisional de la implementación
│   └── prototipos/             # Cuatro capturas originales de Google Stitch
├── src/
│   ├── app/                     # Enrutamiento
│   ├── components/              # Layout, PetCard y PetFilters reutilizables
│   ├── features/pets/           # Datos demostrativos y petFilters.js
│   ├── lib/                     # Cliente modular de Supabase
│   ├── pages/                   # Inicio, Catálogo, Detalle y 404
│   ├── services/                # Frontera de acceso a datos
│   ├── styles/                  # Sistema visual responsive
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── prisma.config.js
├── vercel.json
└── vite.config.js
```

No se conservan carpetas vacías. La salida generada por Prisma se creará en `server/generated/prisma` cuando exista una conexión o se ejecute `npm run prisma:generate` con variables locales.

## Instalación y ejecución

### Requisitos

- Git 2.40 o superior.
- Node.js 22.12 o superior; Node.js 24 es la versión usada por CI.
- npm incluido con Node.js.
- No se requieren credenciales para ejecutar la versión demostrativa de esta entrega.

### Instalación

```powershell
git clone https://github.com/JuanEstebanLT/web-design-adopme.git
cd web-design-adopme
npm ci
```

### Desarrollo

```powershell
npm run dev
```

Abrir la URL local que imprime Vite, normalmente `http://localhost:5173`.

### Validaciones

```powershell
npm run lint
$env:DATABASE_URL='postgresql://postgres:postgres@localhost:5432/adopme'
npm run prisma:validate
npm run build
npm run preview
```

La URL de validación del ejemplo no establece conexión durante `prisma validate` y no representa una credencial real. Para generar el cliente o ejecutar migraciones se requiere una base autorizada.

### Variables de entorno

Copiar `.env.example` a `.env.local` y reemplazar únicamente con valores del entorno correspondiente:

| Variable | Runtime | Secreto | Uso |
|---|---|---:|---|
| `VITE_SUPABASE_URL` | Navegador | No | URL pública del proyecto |
| `VITE_SUPABASE_ANON_KEY` | Navegador | No, pero requiere RLS | Acceso público autenticable |
| `DATABASE_URL` | Servidor/CLI | Sí | Conexión agrupada para Prisma |
| `DIRECT_URL` | Servidor/CLI | Sí | Conexión directa para migraciones |

Nunca se deben crear variables `VITE_DATABASE_URL` o `VITE_SUPABASE_SERVICE_ROLE_KEY`: Vite incluiría esos valores en el bundle del navegador.

## Configuración de Supabase y Prisma

### Supabase · pasos pendientes de credenciales

1. Crear o seleccionar el proyecto Supabase autorizado.
2. Aplicar un esquema revisado a partir de `prisma/schema.prisma` o una migración SQL equivalente.
3. Relacionar `profiles.id` con `auth.users.id`.
4. Habilitar RLS en `profiles`, `shelters`, `pets` y `adoption_requests`.
5. Definir políticas mínimas: lectura pública de mascotas disponibles; acceso del adoptante solo a su perfil y solicitudes; gestión del refugio solo sobre sus recursos.
6. Registrar URL y clave pública en el entorno local y Vercel.
7. Verificar operaciones con una cuenta de prueba antes de retirar los datos demostrativos.

### Prisma · límites y comandos

El esquema usa PostgreSQL y Prisma 7. La URL se lee desde `prisma.config.js`, que permanece fuera del bundle Vite.

```powershell
npm run prisma:validate
npm run prisma:generate
npx prisma migrate dev --name init
```

El último comando se documenta, pero **no se ha ejecutado**: crea una migración y modifica una base, por lo que requiere credenciales, revisión del esquema y autorización. En un despliegue posterior, Prisma deberá ejecutarse dentro de una función o servicio Node.js, nunca desde `src/`.

## Despliegue en Vercel

### Configuración preparada

- Comando de instalación: `npm ci`.
- Comando de compilación: `npm run build`.
- Directorio de salida: `dist`.
- Reescritura SPA: `vercel.json`.
- Variables públicas: `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
- Variables de servidor futuras: `DATABASE_URL` y `DIRECT_URL`, nunca expuestas al cliente.

### Publicación pendiente

1. Importar `JuanEstebanLT/web-design-adopme` en Vercel.
2. Confirmar preset Vite y directorio `dist`.
3. Registrar variables por ambiente sin copiarlas al repositorio.
4. Desplegar desde `main` después de que CI sea satisfactorio.
5. Verificar `/`, `/mascotas` y una ruta de detalle mediante acceso directo.

No se publica una URL de producción hasta que Vercel devuelva y se compruebe una URL real.

## Historias de usuario y tareas técnicas

### Historias de usuario y estado real

| ID | Issue | Alcance | Prioridad | Estado al 12/11/2026 |
|---|---:|---|---|---|
| HU-01 | [#2](https://github.com/JuanEstebanLT/web-design-adopme/issues/2) | Consultar mascotas disponibles | Alta | **Abierto**: catálogo local; publicaciones reales y estados de carga/error pendientes |
| HU-02 | [#3](https://github.com/JuanEstebanLT/web-design-adopme/issues/3) | Filtrar mascotas | Alta | **Cerrado, completado**: búsqueda, filtros locales y URL |
| HU-03 | [#4](https://github.com/JuanEstebanLT/web-design-adopme/issues/4) | Ver detalle de una mascota | Alta | **Cerrado, completado**: detalle y estado de mascota inexistente con datos locales |
| HU-04 | [#5](https://github.com/JuanEstebanLT/web-design-adopme/issues/5) | Consultar un refugio | Media | **Abierto**: consulta de datos autorizados reales pendiente |
| HU-05 | [#6](https://github.com/JuanEstebanLT/web-design-adopme/issues/6) | Registrar solicitud | Alta | **Abierto**: requiere autenticación y persistencia |
| HU-06 | [#7](https://github.com/JuanEstebanLT/web-design-adopme/issues/7) | Consultar solicitudes propias | Media | **Abierto**: requiere autenticación, solicitudes reales y RLS |
| HU-07 | [#8](https://github.com/JuanEstebanLT/web-design-adopme/issues/8) | Gestionar publicaciones | Media | **Abierto**: requiere permisos de refugio y persistencia |

Los issues HU-02 y HU-03 se cerraron por el **alcance demostrativo del frontend**. Su cierre no implica integración real con Supabase ni publicación de datos de refugios.

### Tareas técnicas iniciales

| ID | Issue | Tarea | Resultado verificable |
|---|---:|---|---|
| TT-01 | [#1](https://github.com/JuanEstebanLT/web-design-adopme/issues/1) | Inicializar base técnica y entrega académica | Proyecto validado e integrado por PR |
| TT-02 | [#9](https://github.com/JuanEstebanLT/web-design-adopme/issues/9) | Configurar React Router | Tres rutas y 404 navegables |
| TT-03 | [#10](https://github.com/JuanEstebanLT/web-design-adopme/issues/10) | Consolidar estructura modular | Responsabilidades separadas |
| TT-04 | [#11](https://github.com/JuanEstebanLT/web-design-adopme/issues/11) | Preparar diseño base responsive | UI accesible en escritorio y móvil |
| TT-05 | [#12](https://github.com/JuanEstebanLT/web-design-adopme/issues/12) | Documentar capturas originales de Stitch | Cuatro capturas conservadas; cierre como **no planificado** para imagen adicional de Detalle |
| TT-06 | [#13](https://github.com/JuanEstebanLT/web-design-adopme/issues/13) | Documentar modelo de datos | Entidades, restricciones y cardinalidades |
| TT-07 | [#14](https://github.com/JuanEstebanLT/web-design-adopme/issues/14) | Crear diagramas Mermaid | Arquitectura, ER y navegación renderizables |
| TT-08 | [#15](https://github.com/JuanEstebanLT/web-design-adopme/issues/15) | Conectar Supabase | Cliente y RLS verificados con credenciales |
| TT-09 | [#16](https://github.com/JuanEstebanLT/web-design-adopme/issues/16) | Preparar Prisma de servidor | Esquema y cliente generados fuera del frontend |
| TT-10 | [#17](https://github.com/JuanEstebanLT/web-design-adopme/issues/17) | Preparar Vercel | Build y rutas verificadas en URL real |
| TT-11 | [#18](https://github.com/JuanEstebanLT/web-design-adopme/issues/18) | Fortalecer `.gitignore` | Secretos y artefactos excluidos |
| TT-12 | [#19](https://github.com/JuanEstebanLT/web-design-adopme/issues/19) | Mantener `.env.example` | Variables documentadas sin credenciales |
| TT-13 | [#20](https://github.com/JuanEstebanLT/web-design-adopme/issues/20) | Configurar plantillas GitHub | Formularios y plantilla de PR disponibles |
| TT-14 | [#21](https://github.com/JuanEstebanLT/web-design-adopme/issues/21) | Mantener README académico | Estado y evidencias actualizados |
| TT-15 | [#22](https://github.com/JuanEstebanLT/web-design-adopme/issues/22) | Configurar validaciones | CI ejecuta lint, Prisma y build |
| TT-16 | [#23](https://github.com/JuanEstebanLT/web-design-adopme/issues/23) | Preparar evidencias | Matriz, capturas y guion verificables |
| TT-Stitch | [#32](https://github.com/JuanEstebanLT/web-design-adopme/issues/32) | Adaptar interfaz de Stitch a React | PR #33 fusionado; pendiente comprobación móvil a 320 y 375 px |

Los issues futuros no tienen responsable asignado hasta que el equipo acuerde su distribución. Al 12 de noviembre de 2026, GitHub registra **26 issues: 17 cerrados y nueve abiertos**. El #12 se cerró como *no planificado*, no como captura de Detalle completada.

## Gestión del proyecto en GitHub

### GitHub Flow

```text
Issue → rama específica → desarrollo → commit → push → pull request
      → validaciones → revisión → merge a main → cierre del issue
```

No se desarrolla directamente sobre `main` después del commit mínimo que permitió publicar el repositorio vacío.

### Convención de ramas

```text
feature/<issue>-descripcion
fix/<issue>-descripcion
docs/<issue>-descripcion
chore/<issue>-descripcion
ci/<issue>-descripcion
```

Ejemplo real de inicialización: `chore/1-inicializar-vite`.

### Convención de commits

Se adopta [Conventional Commits](https://www.conventionalcommits.org/):

```text
tipo(alcance): descripción breve (#issue)
```

Tipos habituales: `feat`, `fix`, `docs`, `test`, `refactor`, `chore` y `ci`.

### Pull requests

Cada PR debe incluir resumen, contexto, evidencias y pruebas verificables. El [PR #33](https://github.com/JuanEstebanLT/web-design-adopme/pull/33) fusionó el rediseño Stitch el 12 de noviembre de 2026 tras superar el check `validate`. Se eliminaron las seis ramas históricas de trabajo, conservando el historial de commits y pull requests. Los nuevos ajustes documentales se gestionan mediante ramas temporales y PR.

### Labels, milestones y Project

- Tipos: `type:feature`, `type:bug`, `type:documentation`, `type:task`, `type:chore`, `type:testing`.
- Prioridades: `priority:critical`, `priority:high`, `priority:medium`, `priority:low`.
- Áreas: `area:frontend`, `area:backend`, `area:database`, `area:architecture`, `area:design`, `area:devops`, `area:github`.
- Milestones: Inicialización y entrega académica; Fundamentos de frontend; Integración backend; Funcionalidades de adopción; Validación y despliegue.
- Project: [**Adopme — Desarrollo y seguimiento**](https://github.com/users/JuanEstebanLT/projects/7), con `Backlog`, `Todo`, `In Progress`, `In Review` y `Done`, además de `Tipo` y `Prioridad`. Existen 26 issues en el repositorio. Los estados del tablero deben comprobarse allí, pues no necesariamente se sincronizan con el cierre de los issues. Los responsables permanecen sin asignar.

No se asignan Issues mientras los demás integrantes no sean colaboradores del repositorio.

## Equipo

La distribución conserva los roles documentados en el proyecto de referencia Móviles G7; no se han creado asignaciones adicionales.

| Integrante | Rol documentado | Responsabilidad general del rol |
|---|---|---|
| Juan Esteban Lezcano Tejada | Líder de Desarrollo y QA | Coordinar integración y calidad técnica |
| Emmanuel Villa | Desarrollador | Participar en el desarrollo según asignación acordada |
| Juan Bastidas | Desarrollador | Participar en el desarrollo según asignación acordada |
| Mariana Suárez Higuita | Desarrolladora | Participar en el desarrollo según asignación acordada |

Las responsabilidades concretas se definirán después de incorporar colaboradores; los Issues permanecen sin responsable.

## Estado actual

**Corte de verificación: 12 de noviembre de 2026.** El proyecto conserva la documentación de la primera entrega y ya incluye en `main` el rediseño responsive basado en Stitch. El frontend funciona localmente según la comprobación del equipo; no existe todavía persistencia ni despliegue real.

| Elemento | Clasificación | Evidencia o limitación |
|---|---|---|
| React 19 + Vite 8 | Implementado | Inicio, Catálogo, Detalle y 404; build validado por CI |
| React Router 7 | Implementado | `/`, `/mascotas`, `/mascotas/:petId` y ruta comodín |
| Interfaz Google Stitch | Implementada | Hero, navegación, catálogo, proceso, compromiso y footer integrados por [PR #33](https://github.com/JuanEstebanLT/web-design-adopme/pull/33) |
| Perfiles de mascotas | Demostrativos | Seis perfiles locales, sin publicaciones ni refugios reales |
| Filtros del catálogo | Implementados | Texto, especie, edad, tamaño, senior y casos especiales; parámetros de URL |
| Responsive | Implementado; revisión parcial | Pruebas headless reportadas a 768, 1024 y 1440 px; verificación específica a 320 y 375 px pendiente en [#32](https://github.com/JuanEstebanLT/web-design-adopme/issues/32) |
| Prisma | Configurado | Esquema validado; no hay migraciones ni consultas reales |
| Supabase JS | Preparado | Cliente inactivo sin variables reales; no hay Auth, base conectada ni RLS |
| Vercel | Preparado | Configuración SPA, sin publicación verificada |
| GitHub Actions | Validado | `validate` aprobó lint, Prisma y build de PR #33 |
| GitHub Flow | Implementado | PR #33 fusionado; seis ramas anteriores eliminadas; `main` es la rama de referencia |
| GitHub Issues | Seguimiento activo | 26 en total: 17 cerrados y nueve abiertos |
| Evidencias de Stitch | Documentadas | Cuatro capturas originales; la captura adicional de Detalle se omitió por decisión registrada en #12 |
| Video grupal | No acreditado en repositorio | Matriz y guion disponibles; no se afirma grabación ni publicación |

### Pendientes antes de nuevas integraciones

1. Comprobar visualmente las resoluciones de 320 y 375 px; cerrar [#32](https://github.com/JuanEstebanLT/web-design-adopme/issues/32) únicamente con evidencia suficiente.
2. Revisar `npm audit` antes de una futura publicación: Codex reportó cuatro vulnerabilidades moderadas en la instalación de noviembre y no hay constancia de corrección o auditoría posterior.
3. Añadir evidencia de video solo si existe un enlace o grabación real del equipo.

**Decisión vigente:** no iniciar todavía la integración real con Supabase, las migraciones Prisma, la autenticación ni el despliegue en Vercel.

## Hoja de ruta

1. **Inicialización y entrega académica:** base ejecutable, documentación, prototipos, gestión y evidencia.
2. **Fundamentos de frontend:** rediseño Stitch integrado; pendiente de revisión móvil, ampliación de accesibilidad y estados de carga/error.
3. **Integración backend:** proyecto Supabase, RLS, autenticación y acceso de servidor Prisma.
4. **Funcionalidades de adopción:** solicitudes, seguimiento y gestión de publicaciones.
5. **Validación y despliegue:** pruebas, datos de demostración controlados, Vercel y revisión final.

Solo la primera etapa tiene fecha académica definida. No se inventan fechas para las demás.

## Evidencias académicas

La matriz de la **primera entrega de octubre**, el inventario de pruebas y el guion del video se encuentran en [`docs/evidencias/README.md`](docs/evidencias/README.md). Es una evidencia académica histórica, no un reporte en tiempo real del tablero de GitHub. La guía original no está versionada en el repositorio; se conservan los 28 requisitos comunicados.

| # | Requisito académico | Estado | Evidencia principal |
|---:|---|---|---|
| 1 | Definición del proyecto | Cumplido | Descripción y contexto académico |
| 2 | Problemática | Cumplido | Sección Problemática |
| 3 | Justificación | Cumplido | Sección Justificación |
| 4 | Objetivo general | Cumplido | Objetivo general |
| 5 | Objetivos específicos | Cumplido | Cinco objetivos verificables |
| 6 | Público objetivo | Cumplido | Tabla de actores |
| 7 | Alcance inicial | Cumplido | Alcance de la primera entrega |
| 8 | Funcionalidades previstas | Cumplido | Alcance funcional y backlog |
| 9 | Framework seleccionado y justificado | Cumplido | React + Vite y justificación |
| 10 | Tres herramientas TIC | Cumplido | Stitch, Supabase y Prisma |
| 11 | Arquitectura técnica | Cumplido | Principios, componentes y ADR |
| 12 | Diagrama de arquitectura | Cumplido | Mermaid de integración |
| 13 | Modelo de datos | Cumplido | Entidades y restricciones |
| 14 | Diagrama entidad-relación | Cumplido | Mermaid ER |
| 15 | Mínimo cuatro entidades/recursos | Cumplido | Perfil, Refugio, Mascota y Solicitud |
| 16 | API y operaciones previstas | Cumplido | Contratos, métodos y datos |
| 17 | Tres vistas principales | Parcial en evidencia Stitch | Tres rutas React implementadas; sin captura original independiente de Detalle |
| 18 | Prototipos y evidencias gráficas | Parcial en evidencia Stitch | Cuatro capturas originales; se aceptó omitir la imagen adicional de Detalle (#12) |
| 19 | Flujo de navegación | Cumplido | Mermaid y React Router |
| 20 | Estructura inicial del código | Cumplido | Árbol modular real |
| 21 | React + Vite ejecutable | Cumplido | Scripts locales y CI |
| 22 | Dependencias y configuración | Cumplido | `package-lock.json`, `.env.example` y configuración |
| 23 | Repositorio público | Cumplido | Repositorio GitHub |
| 24 | README profesional | Cumplido | Documento principal y referencias |
| 25 | GitHub Flow | Cumplido | Issues, ramas, PR y validaciones |
| 26 | Ramas y pull requests | Cumplido | Historial real de PR |
| 27 | Organización colaborativa | Cumplido | Project, labels y milestones; sin asignaciones |
| 28 | Evidencias para video grupal | Parcial | Matriz y guion disponibles; grabación no acreditada en el repositorio |

## Enlaces y referencias

### Enlaces del proyecto

- [Repositorio Adopme](https://github.com/JuanEstebanLT/web-design-adopme)
- [GitHub Project #7](https://github.com/users/JuanEstebanLT/projects/7)
- [Issues de Adopme](https://github.com/JuanEstebanLT/web-design-adopme/issues)
- [Pull request inicial #24](https://github.com/JuanEstebanLT/web-design-adopme/pull/24)
- [Pull request de cierre académico #30](https://github.com/JuanEstebanLT/web-design-adopme/pull/30)
- [Pull request del rediseño frontend #33](https://github.com/JuanEstebanLT/web-design-adopme/pull/33)
- [Workflow de validación continua](https://github.com/JuanEstebanLT/web-design-adopme/actions/workflows/ci.yml)
- [Prototipo de Adopme en Google Stitch](https://stitch.withgoogle.com/preview/5253726196803477313?node-id=7a2c06889ff04ac1b8823a52d7e9267c)
- [Repositorio documental de referencia Móviles G7](https://github.com/JuanEstebanLT/proyectointegradormoviles-g7)

### Referencias técnicas · APA 7

- GitHub. (2026). *GitHub flow*. https://docs.github.com/en/get-started/using-github/github-flow
- Google. (2026). *Stitch*. https://stitch.withgoogle.com/
- Meta Open Source. (2026). *React documentation*. https://react.dev/
- Prisma Data, Inc. (2026). *Prisma ORM documentation*. https://www.prisma.io/docs/orm/
- Remix Software, Inc. (2026). *React Router documentation*. https://reactrouter.com/
- Supabase, Inc. (2026). *Supabase documentation*. https://supabase.com/docs
- Vercel Inc. (2026). *Vercel documentation*. https://vercel.com/docs
- Vite Contributors. (2026). *Vite documentation*. https://vite.dev/guide/

Referencias técnicas documentadas en octubre de 2026. El estado de código, frontend e issues se revisó el 12 de noviembre de 2026. Las versiones exactas de dependencias se conservan en `package-lock.json`.

---

<div align="center">

**Equipo de Desarrollo · Adopme**<br>
Taller de Arquitectura y Desarrollo Web Integrado

</div>
