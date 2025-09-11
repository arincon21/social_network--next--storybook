"use client";
import { memo, useCallback, useMemo } from "react";
import { friendRequests } from "@/features/navbar-top/constants/navbar-data";
import DropdownBase from "./dropdown-base";
import DropdownHeader from "./dropdown-header";
import EnhancedDropdownContent from "./enhanced-dropdown-content";
import DropdownListItem from "./dropdown-list-item";

const FriendRequestsDropdown = memo(() => {
  const handleFriendAction = useCallback((id: number | string, action: "accept" | "decline") => {
    console.log("friend action", id, action);
  }, []);

  const handleViewAllEvents = useCallback(() => {
    console.log("check events");
  }, []);

  const headerActions = useMemo(() => [
    { label: "AJUSTES", onClick: () => console.log("settings") },
    { label: "MARCAR TODO COMO LEÍDO", onClick: () => console.log("mark all read") }
  ], []);

  const renderFriendActions = useCallback((friendId: number | string) => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleFriendAction(friendId, "accept")}
        className="w-10 h-10 bg-sky-400 text-white rounded flex items-center justify-center hover:bg-sky-500 transition-colors"
        aria-label="Aceptar solicitud"
      >
        +
      </button>
      <button
        onClick={() => handleFriendAction(friendId, "decline")}
        className="w-10 h-10 bg-gray-300 text-gray-600 rounded flex items-center justify-center hover:bg-gray-400 transition-colors"
        aria-label="Rechazar solicitud"
      >
        -
      </button>
    </div>
  ), [handleFriendAction]);

  return (
    <DropdownBase
      icon={'olymp-happy-face-icon'}
      badgeCount={6}
      badgeColor="green"
      ariaLabel="Solicitudes de amistad"
      testId="friend-requests-dropdown"
    >
      <DropdownHeader 
        title="SOLICITUDES DE AMISTAD"
        actions={headerActions}
      />

      <EnhancedDropdownContent 
        isEmpty={friendRequests.length === 0}
        emptyMessage="No hay solicitudes de amistad"
        useVirtualization={friendRequests.length > 10}
        itemHeight={80}
        skeletonCount={3}
      >
        {friendRequests.map((friend) => (
          <DropdownListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            subtitle={friend.subtitle}
            actions={renderFriendActions(friend.id)}
            testId={`friend-request-${friend.id}`}
            className="items-center justify-between"
          />
        ))}
      </EnhancedDropdownContent>

      <div className="mt-4">
        <button
          onClick={handleViewAllEvents}
          className="w-full bg-sky-400 text-white py-3 font-semibold rounded-b hover:bg-sky-500 transition-colors"
        >
          Revisa todos tus eventos
        </button>
      </div>
    </DropdownBase>
  );
});

export default FriendRequestsDropdown;
