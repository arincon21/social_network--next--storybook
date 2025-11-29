"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Avatar from '@/shared/components/avatar';

interface StoryAvatarProps {
    userName: string;
    userAvatar: string;
    viewed: boolean;
    onClick: () => void;
}

const StoryAvatar: React.FC<StoryAvatarProps> = ({
    userName,
    userAvatar,
    viewed,
    onClick,
}) => {
    return (
        <motion.div
            className="flex flex-col items-center cursor-pointer flex-shrink-0 group"
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            {/* Avatar with gradient border */}
            <div className="relative mb-2">
                {/* Gradient border for unviewed stories */}
                <div
                    className={`rounded-full p-[3px] ${viewed
                        ? 'bg-[#e6ecf5]'
                        : 'bg-gradient-to-br from-[#ff5e3a] via-[#ff763a] to-[#7c5ac2]'
                        } transition-all duration-300`}
                >
                    <div className="bg-white rounded-full p-[2px]">
                        <Avatar
                            src={userAvatar}
                            alt={userName}
                            size={64}
                            className="ring-2 ring-white"
                        />
                    </div>
                </div>

                {/* Add icon for unviewed stories */}
                {!viewed && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#ff5e3a] rounded-full flex items-center justify-center border-2 border-white">
                        <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* User name */}
            <span
                className={`text-xs text-center w-full truncate px-1 transition-colors duration-200 ${viewed ? 'text-[#888da8]' : 'text-[#515365] font-medium'
                    } group-hover:text-[#ff5e3a]`}
            >
                {userName}
            </span>
        </motion.div>
    );
};

export default StoryAvatar;
