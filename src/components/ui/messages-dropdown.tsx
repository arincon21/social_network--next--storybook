"use client";
import { memo, useCallback, useMemo } from "react";
import { messages } from "@/constants/navbar-data";
import DropdownBase from "@/components/ui/dropdown-base";
import DropdownHeader from "@/components/ui/dropdown-header";
import EnhancedDropdownContent from "@/components/ui/enhanced-dropdown-content";
import DropdownListItem from "@/components/ui/dropdown-list-item";

const MessagesDropdown = memo(() => {
  const handleSelect = useCallback((id: number | string) => {
    console.log("msg select:", id);
  }, []);

  const headerActions = useMemo(() => [
    { label: "AJUSTES", onClick: () => console.log("settings") },
    { label: "MARCAR TODO COMO LEÍDO", onClick: () => console.log("mark all read") }
  ], []);

  const renderMessageIcon = useCallback(() => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cbd5e1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  ), []);

  const handleViewAllMessages = useCallback(() => {
    console.log("view all messages");
  }, []);

  return (
    <DropdownBase
      icon={"olymp-chat---messages-icon"}
      badgeCount={2}
      badgeColor="purple"
      ariaLabel="Mensajes"
      testId="messages-dropdown"
    >
      <DropdownHeader 
        title="CHAT / MENSAJES"
        actions={headerActions}
      />

      <EnhancedDropdownContent 
        isEmpty={messages.length === 0}
        emptyMessage="No hay mensajes"
        useVirtualization={messages.length > 10}
        itemHeight={80}
        skeletonCount={3}
      >
        {messages.map((message) => (
          <DropdownListItem
            key={message.id}
            avatar={message.avatar}
            name={message.name}
            excerpt={message.excerpt}
            time={message.time}
            actions={renderMessageIcon()}
            onClick={() => handleSelect(message.id)}
            testId={`message-${message.id}`}
            className="items-start"
          />
        ))}
      </EnhancedDropdownContent>

      <div className="mt-4">
        <button
          onClick={handleViewAllMessages}
          className="w-full bg-[#6b43d6] text-white py-3 font-semibold rounded-b hover:bg-[#5a37b8] transition-colors"
        >
          Ver todos los mensajes
        </button>
      </div>
    </DropdownBase>
  );
});

MessagesDropdown.displayName = 'MessagesDropdown';

export default MessagesDropdown;
