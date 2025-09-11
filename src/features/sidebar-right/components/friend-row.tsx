"use client";

import React, { memo } from "react";
import Avatar from "@/shared/components/avatar";
import { MoreHorizontal } from "lucide-react";
import type { Friend } from "../constants/sidebar-right";

type Props = {
  friend: Friend;
};

const FriendRow: React.FC<Props> = ({ friend }) => {
  return (
    <div role="listitem" className="flex items-center justify-between gap-3 px-2 py-2 rounded-md hover:bg-gray-50">
      <div className="flex items-center gap-3">
        <Avatar src={friend.avatar} alt={friend.name} size={40} presence={friend.presence} />
        <div className="min-w-0">
          <div className="font-semibold text-sm text-[#2e3350] truncate">{friend.name}</div>
          <div className="text-xs uppercase text-[#9aa0b3]">{friend.status}</div>
        </div>
      </div>
      <MoreHorizontal size={18} className="text-[#bfc3d8]" aria-hidden />
    </div>
  );
};

export default memo(FriendRow);
