
"use client";
import { useState } from "react";
import Image from "next/image";
import { CheckSquare } from "lucide-react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { friendRequests } from "@/constants/navbar-data";

const FriendRequestsDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleFriendAction = (id: number | string, action: "accept" | "decline") => {
    console.log("friend action", id, action);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 rounded-full hover:bg-[#4a4d62] cursor-pointer"
      >
        <CheckSquare size={20} />
      </button>
      <span className="absolute -top-1 -right-1 bg-[#2ecc71] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
        6
      </span>

      <div
        className={`origin-top-right absolute right-0 mt-[5px] w-[360px] bg-white rounded-sm shadow-[0_0_34px_0_rgba(63,66,87,0.1)] overflow-hidden z-40 transition-opacity ${
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
          {friendRequests.map((f) => (
            <div
              key={f.id}
              className="w-full text-left px-4 py-4 flex items-center justify-between gap-4 hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image
                    src={f.avatar}
                    alt={f.name}
                    width={40}
                    height={40}
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{f.name}</div>
                  <div className="text-sm text-gray-400">{f.subtitle}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleFriendAction(f.id, "accept")}
                  className="w-10 h-10 bg-sky-400 text-white rounded flex items-center justify-center"
                >
                  +
                </button>
                <button
                  onClick={() => handleFriendAction(f.id, "decline")}
                  className="w-10 h-10 bg-gray-300 text-gray-600 rounded flex items-center justify-center"
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={() => {
              console.log("check events");
              setIsOpen(false);
            }}
            className="w-full bg-sky-400 text-white py-3 font-semibold rounded-b"
          >
            Revisa todos tus eventos
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendRequestsDropdown;
