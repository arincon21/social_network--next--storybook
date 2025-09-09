
"use client";
import { useState } from "react";
import Image from "next/image";
import { Bell } from "lucide-react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { notifications } from "@/constants/navbar-data";

const NotificationsDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleSelect = (id: number | string) => {
    console.log("notif select:", id);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 rounded-full hover:bg-[#4a4d62] cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Bell size={20} />
      </button>
      <span className="absolute -top-1 -right-1 bg-[#ff6b6b] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
        8
      </span>

      <div
        className={`origin-top-right absolute right-0 mt-[5px] w-[360px] bg-white z-40 shadow-[0_0_34px_0_rgba(63,66,87,0.1)] rounded-sm transition-opacity overflow-hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="text-[9px] text-gray-400 font-semibold">
            NOTIFICACIONES
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[9px] text-gray-600">AJUSTES</button>
            <button className="text-[9px] text-gray-600">
              MARCAR TODO COMO LEÍDO
            </button>
          </div>
        </div>

        <div className="max-h-64 overflow-y-auto">
          {notifications.map((n) => (
            <button
              key={n.id}
              onClick={() => handleSelect(n.id)}
              className="w-full text-left px-4 py-4 flex gap-4 items-start hover:bg-gray-50"
            >
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image
                  src={n.avatar}
                  alt={n.name}
                  width={40}
                  height={40}
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="text-sm">
                  <span className="font-semibold text-gray-800">{n.name}</span>
                  <span className="text-gray-700">
                    {" "}
                    {n.text?.replace(n.highlight || "", "")}
                  </span>
                  <span className="text-orange-500"> {n.highlight}</span>
                </div>
                <div className="text-xs text-gray-400 mt-2">{n.time}</div>
                {n.excerpt && (
                  <div className="mt-3 bg-gray-100 p-2 rounded text-sm text-gray-600 inline-block">
                    {n.excerpt}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={() => {
              console.log("view all notifications");
              setIsOpen(false);
            }}
            className="w-full bg-orange-500 text-white py-3 font-semibold"
          >
            Ver todas las notificaciones
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsDropdown;
