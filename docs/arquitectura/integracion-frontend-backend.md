# Preparación del frontend para Supabase

Este documento describe cómo conectar el frontend actual sin utilizar Prisma dentro del navegador.

## Flujo previsto

1. Supabase Auth registra o autentica a la persona.
2. El identificador de `auth.users` se utiliza como `profiles.id`.
3. El frontend consulta Supabase mediante servicios como `petService.js`.
4. Los servicios transforman las filas de PostgreSQL al formato que consumen los componentes.
5. Las políticas RLS controlan qué datos puede leer o modificar cada rol.

Prisma se reserva para herramientas o servicios ejecutados en un entorno de servidor. Nunca debe importarse desde un componente React.

## Diferencias actuales

| Frontend demostrativo | Prisma / Supabase | Transformación necesaria |
| --- | --- | --- |
| `id: "luna"` | UUID | Los datos reales utilizarán el UUID recibido de la tabla `pets`. |
| `species: "dog"` | `PetSpecies.DOG` | Convertir el enum a minúsculas para los filtros. |
| `ageLabel: "2 años"` | `ageMonths: 24` | Guardar meses y generar la etiqueta en el frontend. |
| `shelter: "Casa Bigotes"` | Relación `Pet.shelter` | Tomar `shelter.name` y `shelter.city` de la consulta relacionada. |
| `story` y `summary` | `description` | Temporalmente ambos pueden derivarse de `description`; conviene definir si se necesitan dos campos. |
| `qualities: []` | No existe | Añadir un campo o tabla de características si estas etiquetas serán administrables. |
| `size` y `sex` con texto libre | `String?` | Definir valores permitidos o enums antes de crear formularios de refugios. |
| Correo del registro | Supabase `auth.users.email` | El correo de acceso pertenece a Auth; `Profile` no necesita duplicarlo salvo una decisión explícita. |
| Contraseña | Supabase Auth | Nunca se guarda en `profiles`, Prisma ni almacenamiento del navegador. |

## Campos que podrían faltar

- `Pet`: requisitos de adopción, necesidades médicas, fecha de nacimiento aproximada y características administrables.
- `Shelter`: información pública de contacto separada de información privada.
- `AdoptionRequest`: disponibilidad horaria, experiencia previa o consentimiento, solo si el proceso real los necesita.
- `Profile`: preferencias de contacto. El teléfono y la ciudad ya están preparados.

No se recomienda añadir estos campos hasta validar el proceso real con los refugios.

## Roles y permisos esperados

- `ADOPTER`: consulta el catálogo público y administra sus propias solicitudes.
- `SHELTER`: administra únicamente sus refugios, mascotas y solicitudes recibidas.
- `ADMIN`: supervisa refugios, perfiles y contenido.

El catálogo debe conservar lectura pública. Las operaciones de creación y actualización deben protegerse con RLS y sesión autenticada.

## Adaptador inicial

`mapPetFromDatabase.js` contiene una transformación inicial entre nombres `snake_case`, enums y el formato visual. Al conectar Supabase se deben probar valores nulos, imágenes faltantes y relaciones de refugio inexistentes.
