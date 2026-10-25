# Decisiones de arquitectura

## ADR-001 · React con Vite

- **Estado:** aceptada.
- **Decisión:** construir una SPA con React y Vite.
- **Motivo:** el alcance inicial requiere tres vistas, navegación, componentes reutilizables y un entorno de compilación liviano. Vite ofrece una experiencia de desarrollo rápida sin añadir capacidades de servidor que todavía no son necesarias.
- **Consecuencia:** las rutas del cliente requieren una reescritura hacia `index.html` en Vercel.

## ADR-002 · Supabase como backend administrado

- **Estado:** configurada, pendiente de conexión.
- **Decisión:** utilizar Supabase Auth, PostgreSQL y Data API para las primeras operaciones remotas.
- **Motivo:** concentra autenticación y persistencia, y permite proteger datos desde PostgreSQL mediante RLS.
- **Consecuencia:** el navegador usa únicamente la clave pública (`anon`/`publishable`) y cada tabla expuesta debe contar con políticas RLS verificadas.

## ADR-003 · Prisma solo en servidor

- **Estado:** esquema preparado, pendiente de conexión.
- **Decisión:** usar Prisma para modelado y acceso privilegiado desde funciones o un servidor Node.js futuro.
- **Motivo:** Prisma no se ejecuta en el navegador y la cadena PostgreSQL no debe formar parte del bundle Vite.
- **Consecuencia:** el cliente React no importa `@prisma/client`; el cliente generado se ubicará en `server/generated/prisma`, excluido del lint y del control de versiones.

## ADR-004 · Datos demostrativos aislados

- **Estado:** implementada.
- **Decisión:** las tres vistas usan datos locales explícitamente marcados como demostrativos mientras no existan credenciales.
- **Motivo:** permite verificar navegación y presentación sin afirmar una integración remota inexistente.
- **Consecuencia:** `petService.js` conserva el contrato de transición hacia Supabase.
