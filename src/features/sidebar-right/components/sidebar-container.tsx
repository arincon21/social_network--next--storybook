"use client";

import React, { useMemo, useEffect } from "react";
import Avatar from "@/shared/components/avatar";
import Input from "../../../shared/components/input";
import SidebarSection from "./sidebar-section";
import { Sliders, MessageSquare, X } from "lucide-react";
import type { Friend } from "../constants/sidebar-right";

type Section = { title: string; friends: Friend[] };

type Props = {
  collapsed: boolean;
  showContent: boolean;
  sections: Section[];
  onCollapse: (v: boolean) => void;
  onToggleExpand: () => void;
};

const SidebarContainer = ({ collapsed, showContent, sections, onCollapse, onToggleExpand }: Props) => {
  const flatFriends = useMemo(() => sections.flatMap((s) => s.friends), [sections]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCollapse(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCollapse]);

  return (
    <aside className={`fixed flex flex-col top-[70px] right-0 z-20 h-[calc(100vh-70px)] bg-white shadow-[0_0_34px_0_rgba(63,66,87,0.1)] transition-all duration-300 ease-in-out overflow-hidden ${collapsed ? "w-[70px]" : "w-[320px]"}`}>
      <div className="flex-1 overflow-y-auto w-full">
        {collapsed ? (
          <div className="flex flex-col items-center gap-4 py-4">
            {flatFriends.map((f) => (
              <div key={f.id} title={f.name} className="relative">
                <Avatar src={f.avatar} alt={f.name} size={40} presence={f.presence} />
              </div>
            ))}
          </div>
        ) : (
          <div className="px-4 pb-4  space-y-4 min-h-full flex flex-col justify-between">
            <div className="h-full">
              {sections.map((section) => (
                <SidebarSection key={section.title} title={section.title} friends={section.friends} />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Input aria-label="Buscar amigos" placeholder="Buscar amigos..." className={`flex-1 ${showContent ? "opacity-100" : "opacity-0"}`} />
              <button type="button" aria-label="Abrir filtros" className="p-2 text-[#8f92a3] rounded-md hover:bg-gray-50">
                <Sliders size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className={`${showContent ? "w-full h-[70px]" : "py-6 flex items-center justify-center"} w-full h-[70px]`}>
        {showContent ? (
          <button type="button" className="w-full px-6 h-[70px] bg-[#6b43d6] text-white flex items-center justify-between" aria-label="Cerrar chat">
            <div className="font-semibold">OLYMPUS CHAT</div>
            <X size={25} className="cursor-pointer" onClick={() => onCollapse(true)} />
          </button>
        ) : (
          <button type="button" className="w-full h-[70px] bg-[#6b43d6] cursor-pointer flex items-center justify-center text-white" onClick={onToggleExpand} aria-label="Abrir chat">
            <MessageSquare size={25} />
          </button>
        )}
      </div>
    </aside>
  );
};

export default SidebarContainer;