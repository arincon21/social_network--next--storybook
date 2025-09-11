"use client";

import React from "react";
import OptimizedImage from "@/shared/components/optimized-image";

type Presence = "online" | "away" | "offline" | "invisible" | undefined;

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number; // pixels
  presence?: Presence;
  title?: string;
  className?: string;
};

const presenceColor = (p?: Presence) =>
  p === "online" ? "bg-[#2ecc71]" : p === "away" ? "bg-[#ffcc4d]" : p === "offline" ? "bg-[#ff6b6b]" : "bg-[#cfd6e6]";

const Avatar: React.FC<AvatarProps> = ({ src, alt = "avatar", size = 40, presence, title, className = "" }) => {
  // next/image needs numeric width/height passed to OptimizedImage
  return (
    <div title={title} className="relative">
      <div className={`rounded-full overflow-hidden flex-shrink-0 ${className}`} style={{ width: size, height: size }}>
        <OptimizedImage src={src || `https://placehold.co/${size}x${size}`} alt={alt} width={size} height={size} />
      </div>
      <span className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white z-10 ${presenceColor(presence)}`} />
    </div>
  );
};

export default Avatar;
