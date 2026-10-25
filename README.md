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
> Este repositorio corresponde a la base inicial del **Taller de Arquitectura y Desarrollo Web Integrado**. La navegación y las tres vistas funcionan con datos demostrativos. Supabase, Prisma y Vercel están preparados o documentados, pero no se presentan como conectados ni desplegados sin credenciales y verificaciones reales.

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

La primera entrega no pretende resolver todo el ciclo operativo de un refugio. Entrega una base ejecutable, modular y documentada sobre la cual el equipo podrá incorporar autenticación, persistencia, evaluación de solicitudes y administración en iteraciones posteriores.

### Contexto académico

| Elemento | Definición |
|---|---|
| Actividad | Taller de Arquitectura y Desarrollo Web Integrado |
| Entrega | 26 de octubre de 2026, 6:00 p. m., hora de Colombia |
| Tipo de producto | Aplicación web SPA con backend administrado planificado |
| Repositorio | Público, administrado mediante GitHub Flow |
| Estado | Base inicial en construcción y verificación |

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

### Alcance de la primera entrega

| Capacidad | Estado de esta base |
|---|---|
| Inicio con propuesta de valor y mascotas destacadas | Implementada con datos demostrativos |
| Catálogo con búsqueda y filtro por especie | Implementado en memoria |
| Detalle de mascota y refugio | Implementado con datos demostrativos |
| Navegación y ruta de error | Implementadas |
| Modelo Prisma para PostgreSQL | Configurado, sin migraciones aplicadas |
| Cliente de Supabase | Configurado, inactivo sin variables |
| Data API y autenticación | Diseñadas, pendientes de proyecto Supabase y RLS |
| Despliegue Vercel | Preparado, no publicado todavía |

Los nombres, perfiles e imágenes mostrados en la interfaz son datos demostrativos para validar la presentación. No representan mascotas ni organizaciones registradas en una base de producción.

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
| Google Stitch | Prototipo visual | Enlace disponible; capturas pendientes |
| Vercel | Hosting de la SPA | Reescritura configurada; despliegue pendiente |
| GitHub | Código, Issues, PR, Project y CI | Configuración en curso |
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

| Estado | Método | Contrato | Descripción | Vista |
|---|---|---|---|---|
| Supabase, pendiente | `GET` | `/rest/v1/pets?status=eq.AVAILABLE` | Listar mascotas publicadas | Inicio, Catálogo |
| Supabase, pendiente | `GET` | `/rest/v1/pets?id=eq.{id}&select=*,shelter:shelters(*)` | Consultar una mascota y refugio | Detalle |
| Supabase, pendiente | `GET` | `/rest/v1/shelters?id=eq.{id}` | Consultar organización | Detalle |
| Supabase + RLS, pendiente | `GET/PATCH` | `/rest/v1/profiles?id=eq.{auth.uid}` | Consultar o editar perfil propio | Perfil futuro |
| Supabase + RLS, pendiente | `POST` | `/rest/v1/adoption_requests` | Crear solicitud propia | Detalle futuro |
| Supabase + RLS, pendiente | `GET` | `/rest/v1/adoption_requests?applicant_id=eq.{auth.uid}` | Consultar solicitudes propias | Seguimiento futuro |
| API propia, planificada | `POST` | `/api/adoption-requests/{id}/transition` | Validar transición de estado en servidor | Panel de refugio futuro |

Los filtros del catálogo actual se ejecutan en memoria y no realizan solicitudes HTTP.

## Diseño y prototipos

**Prototipo interactivo:** [Adopme en Google Stitch](https://stitch.withgoogle.com/preview/5253726196803477313?node-id=7a2c06889ff04ac1b8823a52d7e9267c)

> [!WARNING]
> Las capturas originales de Stitch no están incluidas porque el enlace no fue accesible desde el entorno automatizado y no se fabricará evidencia. El procedimiento de incorporación se encuentra en [`docs/prototipos/README.md`](docs/prototipos/README.md).

### Vista 1 · Inicio

| Aspecto | Definición |
|---|---|
| Función | Comunicar propósito, mostrar mascotas destacadas y explicar el proceso |
| Acciones | Abrir catálogo, navegar al proceso o seleccionar una mascota |
| Destino | Catálogo o Detalle |
| Datos previstos | `GET /rest/v1/pets?status=eq.AVAILABLE` |
| Estado | Ruta `/` implementada con datos demostrativos |

### Vista 2 · Catálogo de mascotas

| Aspecto | Definición |
|---|---|
| Función | Explorar perfiles mediante búsqueda y filtro por especie |
| Acciones | Buscar, filtrar, limpiar filtros y abrir un perfil |
| Destino | Detalle de la mascota seleccionada |
| Datos previstos | Consulta filtrada de `pets` mediante Supabase Data API |
| Estado | Ruta `/mascotas` implementada; filtros en memoria |

### Vista 3 · Detalle de mascota y adopción

| Aspecto | Definición |
|---|---|
| Función | Presentar historia, características y refugio responsable |
| Acciones | Volver al catálogo; la solicitud aparece deshabilitada y rotulada como futura |
| Destino | Catálogo o formulario futuro de solicitud |
| Datos previstos | `pets`, `shelters` y `adoption_requests` |
| Estado | Ruta `/mascotas/:petId` implementada; creación de solicitud pendiente |

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
│   └── adopme-mark.svg          # Marca provisional de la implementación
├── src/
│   ├── app/                     # Enrutamiento
│   ├── components/              # Layout y UI reutilizable
│   ├── features/pets/           # Datos demostrativos de mascotas
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
- Credenciales de Supabase únicamente para validar la integración remota.

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
4. desplegar desde `main` después de que CI sea satisfactorio.
5. Verificar `/`, `/mascotas` y una ruta de detalle mediante acceso directo.

No se publica una URL de producción hasta que Vercel devuelva y se compruebe una URL real.

## Historias de usuario y tareas técnicas

### Backlog funcional

| ID | Issue | Historia | Prioridad | Estado inicial |
|---|---:|---|---|---|
| HU-01 | [#2](https://github.com/JuanEstebanLT/web-design-adopme/issues/2) | Como visitante, quiero consultar mascotas disponibles para conocer opciones de adopción. | Alta | Todo |
| HU-02 | [#3](https://github.com/JuanEstebanLT/web-design-adopme/issues/3) | Como visitante, quiero filtrar mascotas para encontrar perfiles acordes con mi contexto. | Alta | Todo |
| HU-03 | [#4](https://github.com/JuanEstebanLT/web-design-adopme/issues/4) | Como visitante, quiero visualizar el detalle de una mascota para tomar una decisión informada. | Alta | Todo |
| HU-04 | [#5](https://github.com/JuanEstebanLT/web-design-adopme/issues/5) | Como visitante, quiero consultar el refugio responsable para conocer el origen de la publicación. | Media | Backlog |
| HU-05 | [#6](https://github.com/JuanEstebanLT/web-design-adopme/issues/6) | Como adoptante, quiero registrar una solicitud para expresar formalmente mi interés. | Alta | Backlog |
| HU-06 | [#7](https://github.com/JuanEstebanLT/web-design-adopme/issues/7) | Como adoptante, quiero consultar mis solicitudes para conocer su estado. | Media | Backlog |
| HU-07 | [#8](https://github.com/JuanEstebanLT/web-design-adopme/issues/8) | Como refugio, quiero gestionar publicaciones de mascotas para mantener el catálogo actualizado. | Media | Backlog |

### Tareas técnicas iniciales

| ID | Issue | Tarea | Resultado verificable |
|---|---:|---|---|
| TT-01 | [#1](https://github.com/JuanEstebanLT/web-design-adopme/issues/1) | Inicializar base técnica y entrega académica | Proyecto validado e integrado por PR |
| TT-02 | [#9](https://github.com/JuanEstebanLT/web-design-adopme/issues/9) | Configurar React Router | Tres rutas y 404 navegables |
| TT-03 | [#10](https://github.com/JuanEstebanLT/web-design-adopme/issues/10) | Consolidar estructura modular | Responsabilidades separadas |
| TT-04 | [#11](https://github.com/JuanEstebanLT/web-design-adopme/issues/11) | Preparar diseño base responsive | UI accesible en escritorio y móvil |
| TT-05 | [#12](https://github.com/JuanEstebanLT/web-design-adopme/issues/12) | Incorporar prototipos de Stitch | Tres capturas originales versionadas |
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

Los Issues reales se crean sin responsable hasta que los colaboradores sean incorporados y el equipo acuerde la distribución.

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

Cada PR debe incluir resumen, Issue relacionado, cambios, evidencias, pruebas y observaciones. La plantilla evita declarar verificaciones no ejecutadas. La rama `main` debe recibir cambios mediante PR una vez finalizada la inicialización.

### Labels, milestones y Project

- Tipos: `type:feature`, `type:bug`, `type:documentation`, `type:task`, `type:chore`, `type:testing`.
- Prioridades: `priority:critical`, `priority:high`, `priority:medium`, `priority:low`.
- Áreas: `area:frontend`, `area:backend`, `area:database`, `area:architecture`, `area:design`, `area:devops`, `area:github`.
- Milestones: Inicialización y entrega académica; Fundamentos de frontend; Integración backend; Funcionalidades de adopción; Validación y despliegue.
- Project: [**Adopme — Desarrollo y seguimiento**](https://github.com/users/JuanEstebanLT/projects/7), con `Backlog`, `Todo`, `In Progress`, `In Review` y `Done`, además de los campos `Tipo` y `Prioridad`. Milestone y responsable utilizan los campos nativos de GitHub; los responsables permanecen vacíos.

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

| Elemento | Clasificación | Evidencia o limitación |
|---|---|---|
| React + Vite | Implementado | Tres vistas y build local |
| React Router | Implementado | `/`, `/mascotas`, `/mascotas/:petId`, `*` |
| Filtros del catálogo | Implementados | Estado local, sin API |
| Supabase JS | Configurado | Inactivo sin `.env.local` |
| Supabase Auth/PostgreSQL/RLS | Planificado | Requiere proyecto y credenciales |
| Prisma | Configurado | Esquema sin migraciones aplicadas |
| Stitch | Parcial | Enlace disponible; capturas bloqueadas por acceso |
| Vercel | Configurado | Publicación pendiente |
| GitHub Actions | Implementado y verificado | [Workflow #1 satisfactorio](https://github.com/JuanEstebanLT/web-design-adopme/actions/runs/40151119079) |
| GitHub Project | Implementado | [Project #7](https://github.com/users/JuanEstebanLT/projects/7) con 23 Issues iniciales |
| GitHub Flow inicial | Implementado y verificado | [PR #24](https://github.com/JuanEstebanLT/web-design-adopme/pull/24) fusionado tras CI |
| Protección de `main` | Implementada y verificada | PR y check `validate` obligatorios; sin force-push ni eliminación |
| Video grupal | Pendiente | No grabado ni publicado |

## Hoja de ruta

1. **Inicialización y entrega académica:** base ejecutable, documentación, prototipos, gestión y evidencia.
2. **Fundamentos de frontend:** sistema de componentes, estados de carga/error y accesibilidad ampliada.
3. **Integración backend:** proyecto Supabase, RLS, autenticación y acceso de servidor Prisma.
4. **Funcionalidades de adopción:** solicitudes, seguimiento y gestión de publicaciones.
5. **Validación y despliegue:** pruebas, datos de demostración controlados, Vercel y revisión final.

Solo la primera etapa tiene fecha académica definida. No se inventan fechas para las demás.

## Evidencias académicas

La lista de comprobación y el guion sugerido se encuentran en [`docs/evidencias/README.md`](docs/evidencias/README.md).

| Requisito académico | Evidencia en el repositorio |
|---|---|
| Proyecto, problema, objetivos y alcance | Secciones iniciales de este README |
| Framework y herramientas TIC | Selección y justificación técnica |
| API y cuatro recursos | Tabla de contratos y estados reales |
| Tres vistas | Rutas React y sección de diseño |
| Modelo ER | Diagrama Mermaid y esquema Prisma |
| Arquitectura | Diagrama Mermaid y ADR |
| Navegación | Diagrama Mermaid y React Router |
| Repositorio y colaboración | Issues, plantillas, milestones y flujo |
| Código ejecutable | Scripts `dev`, `lint`, `build` y CI |
| Video de máximo cinco minutos | Guion preparado; grabación pendiente |

## Enlaces y referencias

### Enlaces del proyecto

- [Repositorio Adopme](https://github.com/JuanEstebanLT/web-design-adopme)
- [GitHub Project #7](https://github.com/users/JuanEstebanLT/projects/7)
- [Issues de Adopme](https://github.com/JuanEstebanLT/web-design-adopme/issues)
- [Pull request inicial #24](https://github.com/JuanEstebanLT/web-design-adopme/pull/24)
- [Workflow de validación #1](https://github.com/JuanEstebanLT/web-design-adopme/actions/runs/40151119079)
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

Consultas técnicas verificadas el 24 de octubre de 2026. Las versiones exactas instaladas se conservan en `package-lock.json`.

---

<div align="center">

**Equipo de Desarrollo · Adopme**<br>
Taller de Arquitectura y Desarrollo Web Integrado

</div>
