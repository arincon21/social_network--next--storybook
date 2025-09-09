"use client";

import React from "react";
import { Search } from "lucide-react";
import ProfileMenu from "@/components/navbar/ProfileMenu";
import NotificationsDropdown from "@/components/navbar/NotificationsDropdown";
import MessagesDropdown from "@/components/navbar/MessagesDropdown";
import FriendRequestsDropdown from "@/components/navbar/FriendRequestsDropdown";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 h-[70px] bg-[#3f4257]">
      <div className="mx-auto h-full px-4 flex items-center gap-4">
        {/* Left: Page title / logo */}
        <div className="w-[300px] flex items-center gap-4 pl-[80px]">
          <div className="text-white font-bold tracking-wider text-xl">
            NOTICIAS
          </div>
        </div>

        {/* Center: Search */}
        <div className="flex-1 flex justify-center mx-4">
          <div className="relative w-full max-w-[600px] h-[70px]">
            <input
              aria-label="Buscar"
              placeholder="Busca aquí personas o páginas..."
              className="w-full h-full bg-[#47495f] text-sm text-gray-200 placeholder:text-gray-400 pl-4 pr-10 outline-none"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-300">
              <Search size={25} />
            </span>
          </div>
        </div>

        {/* Right: icons + profile */}
        <div className="flex-1 flex items-center justify-end gap-8 pr-[60px] h-full">
          <div className="flex items-center gap-3 text-gray-200">
            <FriendRequestsDropdown />
            <MessagesDropdown />
            <NotificationsDropdown />
          </div>

          {/* Profile */}
          <ProfileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;