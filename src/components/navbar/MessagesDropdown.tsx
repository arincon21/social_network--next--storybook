
"use client";
import { useState } from "react";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { messages } from "@/constants/navbar-data";

const MessagesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleSelect = (id: number | string) => {
    console.log("msg select:", id);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 rounded-full hover:bg-[#4a4d62] cursor-pointer"
      >
        <MessageSquare size={20} />
      </button>
      <span className="absolute -top-1 -right-1 bg-[#7f5af0] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
        2
      </span>

      <div
        className={`origin-top-right absolute right-0 mt-[5px] overflow-hidden w-[360px] bg-white rounded-sm shadow-[0_0_34px_0_rgba(63,66,87,0.1)] z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="text-[9px] text-gray-400 font-semibold">
            CHAT / MENSAJES
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[9px] text-gray-600">AJUSTES</button>
            <button className="text-[9px] text-gray-600">
              MARCAR TODO COMO LEÍDO
            </button>
          </div>
        </div>

        <div className="max-h-64 overflow-y-auto">
          {messages.map((m) => (
            <button
              key={m.id}
              onClick={() => handleSelect(m.id)}
              className="w-full text-left px-4 py-4 flex gap-4 items-start hover:bg-gray-50"
            >
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  width={40}
                  height={40}
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="text-sm">
                  <span className="font-semibold text-gray-800">{m.name}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">{m.excerpt}</div>
                <div className="text-xs text-gray-400 mt-2">{m.time}</div>
              </div>
              <div className="text-gray-300">
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
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={() => {
              console.log("view all messages");
              setIsOpen(false);
            }}
            className="w-full bg-[#6b43d6] text-white py-3 font-semibold rounded-b"
          >
            Ver todos los mensajes
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesDropdown;
