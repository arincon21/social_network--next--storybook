# Social Network - Next.js & Storybook

Una aplicación de red social moderna construida con Next.js 15, React 19 y Storybook, diseñada para demostrar mejores prácticas en desarrollo de componentes reutilizables y arquitectura modular.

## Características Principales

- **Posts Sociales**: Sistema de publicaciones con interacciones sociales
- **Pronóstico del Clima**: Widget integrado con datos meteorológicos
- **Tarjetas de Cumpleaños**: Notificaciones y celebraciones de cumpleaños
- **Navegación Avanzada**: Navbar con dropdowns para mensajes, notificaciones y perfil
- **Sidebars Responsivas**: Paneles laterales con navegación y contenido adicional
- **Componentes Reutilizables**: Biblioteca de componentes UI compartidos
- **Storybook Integration**: Desarrollo y documentación de componentes aislados

## Tecnologías Utilizadas

### Core
- **Next.js 15.5.2** - Framework React con App Router
- **React 19.1.0** - Biblioteca para interfaces de usuario
- **TypeScript 5** - Tipado estático para JavaScript

### UI & Estilos
- **Tailwind CSS 4** - Framework de CSS utilitario
- **Lucide React** - Iconos SVG modernos

### Desarrollo & Testing
- **Storybook 9.1.5** - Herramienta para desarrollo de componentes
- **Vitest** - Framework de testing rápido
- **Playwright** - Testing end-to-end
- **ESLint** - Linting y formateo de código

### Optimización
- **React Window** - Virtualización para listas grandes
- **Turbopack** - Empaquetador rápido para desarrollo

## Instalación

Asegúrate de tener Node.js (versión 18+) instalado. Este proyecto usa pnpm como gestor de paquetes.

```bash
# Clona el repositorio
git clone <url-del-repositorio>
cd social_network--next--storybook

# Instala dependencias
pnpm install
```

## Uso

### Desarrollo Local

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Storybook

Para desarrollar y visualizar componentes de forma aislada:

```bash
pnpm storybook
```

Abre [http://localhost:6006](http://localhost:6006) para acceder a Storybook.

### Build de Producción

```bash
pnpm build
pnpm start
```

### Testing

```bash
# Ejecutar tests con Vitest
pnpm test

# Ejecutar linting
pnpm lint
```

## Estructura del Proyecto

```
src/
├── app/                    # Páginas y layouts de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── features/              # Funcionalidades modulares
│   ├── birthday-card/     # Componente de cumpleaños
│   ├── navbar-top/        # Barra de navegación superior
│   ├── sidebar-left/      # Panel lateral izquierdo
│   ├── sidebar-right/     # Panel lateral derecho
│   ├── social-post/       # Sistema de posts sociales
│   └── weather-chart/     # Widget de clima
├── shared/                # Componentes y hooks compartidos
│   ├── components/        # Componentes UI reutilizables
│   └── hooks/            # Hooks personalizados
└── stories/               # Historias de Storybook
```

## Scripts Disponibles

- `pnpm dev` - Inicia servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm start` - Inicia servidor de producción
- `pnpm lint` - Ejecuta ESLint
- `pnpm storybook` - Inicia Storybook
- `pnpm build-storybook` - Construye Storybook estáticamente

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Despliegue

La aplicación está optimizada para desplegar en Vercel, y ya se encuentra activa en producción.

### Detalles de Producción
- **URL del Proyecto:** [https://social-network-next-storybook.vercel.app](https://social-network-next-storybook.vercel.app)
- **Plataforma:** Vercel (Production)
- **Status:** Activo 🟢

Para más información sobre despliegue, consulta la [documentación de Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
