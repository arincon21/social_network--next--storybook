"use client";
import { memo, useCallback, useMemo } from "react";
import { notifications } from "@/constants/navbar-data";
import DropdownBase from "./dropdown-base";
import DropdownHeader from "./dropdown-header";
import EnhancedDropdownContent from "./enhanced-dropdown-content";
import DropdownListItem from "./dropdown-list-item";

const NotificationsDropdown = memo(() => {
  const handleSelect = useCallback((id: number | string) => {
    console.log("notification select:", id);
  }, []);

  const headerActions = useMemo(() => [
    { label: "CONFIGURACIÓN", onClick: () => console.log("settings") },
    { label: "MARCAR TODO COMO LEÍDO", onClick: () => console.log("mark all read") }
  ], []);

  const handleViewAllNotifications = useCallback(() => {
    console.log("view all notifications");
  }, []);

  return (
    <DropdownBase
      icon={'olymp-thunder-icon'}
      badgeCount={4}
      badgeColor="red"
      ariaLabel="Notificaciones"
      testId="notifications-dropdown"
    >
      <DropdownHeader 
        title="NOTIFICACIONES"
        actions={headerActions}
      />

      <EnhancedDropdownContent 
        isEmpty={notifications.length === 0}
        emptyMessage="No hay notificaciones"
        useVirtualization={notifications.length > 10}
        itemHeight={80}
        skeletonCount={3}
      >
        {notifications.map((notification) => (
          <DropdownListItem
            key={notification.id}
            avatar={notification.avatar}
            name={notification.name}
            text={notification.text}
            highlight={notification.highlight}
            time={notification.time}
            onClick={() => handleSelect(notification.id)}
            testId={`notification-${notification.id}`}
            className="items-start"
          />
        ))}
      </EnhancedDropdownContent>

      <div className="mt-4">
        <button
          onClick={handleViewAllNotifications}
          className="w-full bg-orange-400 text-white py-3 font-semibold rounded-b hover:bg-orange-500 transition-colors"
        >
          Ver todas las notificaciones
        </button>
      </div>
    </DropdownBase>
  );
});

NotificationsDropdown.displayName = 'NotificationsDropdown';

export default NotificationsDropdown;
