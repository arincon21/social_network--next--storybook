"use client";

import React, { memo } from "react";
import { Sliders } from "lucide-react";
import FriendRow from "@/components/ui/friend-row";
import type { Friend } from "@/constants/sidebar-right";

type Props = {
  title: string;
  friends: Friend[];
};

const SidebarSection: React.FC<Props> = ({ title, friends }) => {
  return (
    <section aria-label={title} className="mb-4">
      <div className="flex items-center justify-between text-xs uppercase text-[#bfc3d8] py-2">
        <span>{title}</span>
        <button type="button" aria-label={`Configurar ${title}`} className="text-[#8f92a3] p-1 rounded-md hover:bg-gray-50">
          <Sliders size={14} />
        </button>
      </div>

      <div role="list" className="space-y-2">
        {friends.map((f) => (
          <FriendRow key={f.id} friend={f} />
        ))}
      </div>
    </section>
  );
};

export default memo(SidebarSection);
