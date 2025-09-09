
"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, FileText, Star, LogOut } from "lucide-react";
import { useClickOutside } from "@/hooks/use-click-outside";

const ProfileMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useClickOutside<HTMLDivElement>(() => setMenuOpen(false));

  const handleSelect = (action: string) => {
    console.log("menu select:", action);
    setMenuOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <div
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={menuOpen}
        className="flex items-center gap-3 px-3 py-1 hover:bg-[#4a4d62] cursor-pointer h-full"
      >
        <div className="relative w-10 h-10">
          <Image
            src="https://placehold.co/35x35"
            alt="Avatar"
            width={35}
            height={35}
            className="object-cover rounded-full"
            unoptimized
          />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#2ecc71] border-2 border-[#45475f] rounded-full" />
        </div>
        <div className="text-left text-gray-100">
          <div className="text-sm font-semibold">James Spiegel</div>
          <div className="text-[9px] text-gray-300 tracking-widest">
            VAQUERO DEL ESPACIO
          </div>
        </div>
        <ChevronDown size={18} className="text-gray-200" />
      </div>

      {/* Dropdown menu */}
      <div
        className={`origin-top-right absolute right-0 w-64 bg-white rounded-sm shadow-[0_0_34px_0_rgba(63,66,87,0.1)] z-30 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="p-3 border-b border-gray-100 text-xs text-gray-400 font-semibold">
          TU CUENTA
        </div>
        <div className="divide-y divide-gray-50">
          <button
            onClick={() => handleSelect("profile-settings")}
            className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50"
          >
            <FileText className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-800 font-medium">
              Configuración de perfil
            </span>
          </button>
          <button
            onClick={() => handleSelect("create-page")}
            className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50"
          >
            <Star className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-800 font-medium">
              Crear página de favoritos
            </span>
          </button>
          <button
            onClick={() => handleSelect("logout")}
            className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50"
          >
            <LogOut className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-800 font-medium">
              Cerrar sesión
            </span>
          </button>
        </div>

        <div className="p-3 border-t border-gray-100">
          <div className="text-xs text-gray-400 font-semibold mb-2">
            AJUSTES DE CHAT
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleSelect("status-online")}
              className="flex items-center gap-2 text-sm p-2 rounded hover:bg-gray-50"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block" />{" "}
              En línea
            </button>
            <button
              onClick={() => handleSelect("status-away")}
              className="flex items-center gap-2 text-sm p-2 rounded hover:bg-gray-50"
            >
              <span className="w-2 h-2 bg-amber-300 rounded-full inline-block" />{" "}
              Ausente
            </button>
            <button
              onClick={() => handleSelect("status-disconnected")}
              className="flex items-center gap-2 text-sm p-2 rounded hover:bg-gray-50"
            >
              <span className="w-2 h-2 bg-rose-400 rounded-full inline-block" />{" "}
              Desconectado
            </button>
            <button
              onClick={() => handleSelect("status-invisible")}
              className="flex items-center gap-2 text-sm p-2 rounded hover:bg-gray-50"
            >
              <span className="w-2 h-2 bg-slate-200 rounded-full inline-block" />{" "}
              Invisible
            </button>
          </div>
        </div>

        <div className="p-3 border-t border-gray-100">
          <div className="text-xs text-gray-400 font-semibold mb-2">
            ESTADO PERSONALIZADO
          </div>
          <div className="flex gap-2">
            <input
              placeholder="Vaquero del espacio"
              className="flex-1 px-3 py-2 border rounded text-sm"
            />
            <button
              onClick={() => handleSelect("save-status")}
              className="px-3 bg-[#6b43d6] text-white rounded"
            >
              ✓
            </button>
          </div>
        </div>

        <div className="p-3 border-t border-gray-100">
          <div className="text-xs text-gray-400 font-semibold mb-2">
            ACERCA DE OLYMPUS
          </div>
          <div className="space-y-2">
            <button
              onClick={() => handleSelect("terms")}
              className="text-left w-full text-sm hover:text-gray-700"
            >
              Términos y Condiciones
            </button>
            <button
              onClick={() => handleSelect("faqs")}
              className="text-left w-full text-sm hover:text-gray-700"
            >
              Preguntas frecuentes
            </button>
            <button
              onClick={() => handleSelect("careers")}
              className="text-left w-full text-sm hover:text-gray-700"
            >
              Carreras
            </button>
            <button
              onClick={() => handleSelect("contact")}
              className="text-left w-full text-sm hover:text-gray-700"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
