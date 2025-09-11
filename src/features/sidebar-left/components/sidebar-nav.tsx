import { SidebarNavItem } from "./sidebar-nav-item";
import { SidebarToggleButton } from "./sidebar-toggle-button";

export interface SidebarItem {
  key: string;
  icon: string;
  label: string;
}

const items: SidebarItem[] = [
  { key: "newsfeed", icon: "olymp-newsfeed-icon", label: "Noticias" },
  { key: "fav", icon: "olymp-star-icon", label: "Páginas favoritas" },
  { key: "groups", icon: "olymp-happy-faces-icon", label: "Grupos de amigos" },
  { key: "music", icon: "olymp-headphones-icon", label: "Música y listas de reproducción" },
  { key: "weather", icon: "olymp-weather-icon", label: "Aplicación del tiempo" },
  { key: "calendar", icon: "olymp-calendar-icon", label: "Calendario y eventos" },
  { key: "badges", icon: "olymp-badge-icon", label: "Insignias de la comunidad" },
  { key: "birthdays", icon: "olymp-cupcake-icon", label: "Cumpleaños de amigos" },
  { key: "stats", icon: "olymp-stats-icon", label: "Estadísticas de la cuenta" },
  { key: "widgets", icon: "olymp-manage-widgets-icon", label: "Administrar widgets" },
];

interface SidebarNavProps {
  collapsed: boolean;
  showLabels: boolean;
  onToggle: () => void;
}

export const SidebarNav = ({ collapsed, showLabels, onToggle } : SidebarNavProps) => {
  return (
    <div className="mt-6 flex flex-col gap-2 px-2">
      <SidebarToggleButton
        collapsed={collapsed}
        showLabels={showLabels}
        onClick={onToggle}
      />
      {
        items.map((it) => (
          <SidebarNavItem
            key={it.key}
            item={it}
            collapsed={collapsed}
            showLabels={showLabels}
          />
        ))
      }
    </div>
  );
};
