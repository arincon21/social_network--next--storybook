# PremiumScrollbar Component

Un componente de scrollbar personalizable y reutilizable para React/Next.js con TypeScript.

## Características

- ✅ **Totalmente reutilizable** - Se puede usar en cualquier parte de la aplicación
- ✅ **Altamente configurable** - Colores, posición, tamaño personalizable
- ✅ **Scrollbar interactivo** - Click en track y drag del thumb
- ✅ **Posición flexible** - Lado izquierdo o derecho
- ✅ **Efectos opcionales** - Fade effects configurables
- ✅ **TypeScript completo** - Interfaces bien documentadas
- ✅ **Responsive** - Se adapta automáticamente al contenido

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Contenido a hacer scroll (requerido) |
| `maxHeight` | `string` | `"max-h-96"` | Altura máxima (clase Tailwind) |
| `className` | `string` | `""` | Clases CSS adicionales |
| `trackColor` | `string` | `"bg-gray-300"` | Color del track del scrollbar |
| `thumbColor` | `string` | `"bg-gray-600"` | Color del thumb del scrollbar |
| `thumbHoverColor` | `string` | `"hover:bg-gray-700"` | Color del thumb en hover |
| `scrollbarWidth` | `string` | `"w-1"` | Ancho del scrollbar (clase Tailwind) |
| `position` | `'left' \| 'right'` | `'left'` | Posición del scrollbar |
| `disableFadeEffects` | `boolean` | `false` | Desactivar efectos de fade |

## Ejemplos de Uso

### Uso Básico
```tsx
import PremiumScrollbar from '@/components/ui/premium-scrollbar';

<PremiumScrollbar maxHeight="max-h-64">
  <div>
    {/* Tu contenido aquí */}
  </div>
</PremiumScrollbar>
```

### Scrollbar del Lado Derecho
```tsx
<PremiumScrollbar 
  position="right"
  maxHeight="max-h-80"
>
  <div>Contenido con scrollbar a la derecha</div>
</PremiumScrollbar>
```

### Colores Personalizados
```tsx
<PremiumScrollbar 
  trackColor="bg-blue-100"
  thumbColor="bg-blue-500"
  thumbHoverColor="hover:bg-blue-600"
  scrollbarWidth="w-2"
>
  <div>Contenido con scrollbar azul más ancho</div>
</PremiumScrollbar>
```

### Sin Efectos de Fade
```tsx
<PremiumScrollbar 
  disableFadeEffects={true}
  maxHeight="max-h-96"
>
  <div>Contenido sin efectos de fade</div>
</PremiumScrollbar>
```

### Para Listas Largas
```tsx
<PremiumScrollbar 
  maxHeight="max-h-[500px]"
  className="border rounded-lg"
>
  <ul>
    {items.map(item => (
      <li key={item.id} className="p-2 border-b">
        {item.name}
      </li>
    ))}
  </ul>
</PremiumScrollbar>
```

### En Modales o Dropdowns
```tsx
<PremiumScrollbar 
  maxHeight="max-h-72"
  trackColor="bg-gray-200"
  thumbColor="bg-gray-500"
  position="left"
>
  <div className="p-4">
    {/* Contenido del modal/dropdown */}
  </div>
</PremiumScrollbar>
```

## Casos de Uso Ideales

1. **Dropdowns de navegación** (como en el navbar)
2. **Listas de notificaciones**
3. **Chats o mensajes**
4. **Sidebars con contenido largo**
5. **Modales con mucho contenido**
6. **Tablas con scroll vertical**
7. **Feeds de contenido**
8. **Cualquier contenedor que necesite scroll personalizado**

## Notas Técnicas

- El componente oculta automáticamente el scrollbar nativo del navegador
- Usa `ResizeObserver` para detectar cambios en el contenido
- Implementa eventos de mouse para interacción completa
- Optimizado para performance con `useCallback` y `useMemo`
- Compatible con todos los navegadores modernos
- Funciona perfectamente en dispositivos móviles

## Dependencias

- React 18+
- TypeScript
- Tailwind CSS (para las clases de estilo)
