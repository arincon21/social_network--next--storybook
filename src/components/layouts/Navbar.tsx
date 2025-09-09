"use client";

import React from "react";
import ProfileMenu from "@/components/ui/profile-menu";
import NotificationsDropdown from "@/components/ui/notifications-dropdown";
import MessagesDropdown from "@/components/ui/messages-dropdown";
import FriendRequestsDropdown from "@/components/ui/friend-requests-dropdown";
import NavbarLogo from "@/components/ui/navbar-logo";
import NavbarSearch from "@/components/ui/navbar-search";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 h-[70px] bg-[#3f4257]">
      <div className="mx-auto h-full px-4 flex items-center gap-4">
        {/* Left: Page title / logo */}
        <div className="w-[300px] flex items-center gap-4 pl-[80px]">
          <NavbarLogo title="NOTICIAS" />
        </div>

        {/* Center: Search */}
        <div className="flex-1 flex justify-center mx-4">
          <NavbarSearch 
            placeholder="Busca aquí personas o páginas..."
            ariaLabel="Buscar"
          />
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