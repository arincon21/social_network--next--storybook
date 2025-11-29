"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from '@/shared/components/avatar';
import Icon from '@/shared/components/icon';
import { Story } from '../types/stories-types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface StoryViewerProps {
    stories: Story[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
    onStoryViewed: (storyId: string) => void;
}

const STORY_DURATION = 5000; // 5 seconds

const StoryViewer: React.FC<StoryViewerProps> = ({
    stories,
    currentIndex,
    onClose,
    onNext,
    onPrevious,
    onStoryViewed,
}) => {
    const [progress, setProgress] = useState(0);
    const currentStory = stories[currentIndex];

    useEffect(() => {
        // Mark story as viewed
        if (currentStory && !currentStory.viewed) {
            onStoryViewed(currentStory.id);
        }

        // Reset progress when story changes
        setProgress(0);
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / STORY_DURATION) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                clearInterval(interval);
                // Auto-advance to next story
                if (currentIndex < stories.length - 1) {
                    onNext();
                } else {
                    onClose();
                }
            }
        }, 50);

        return () => clearInterval(interval);
    }, [currentIndex, currentStory, stories.length, onNext, onClose, onStoryViewed]);

    if (!currentStory) return null;

    const formatTimeAgo = (date: Date) => {
        const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
        if (seconds < 60) return 'Ahora';
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h`;
        return `${Math.floor(hours / 24)}d`;
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                {/* Story Container */}
                <motion.div
                    className="relative w-full max-w-[500px] h-[90vh] bg-black rounded-lg overflow-hidden"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Progress bars */}
                    <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-2">
                        {stories.map((_, index) => (
                            <div
                                key={index}
                                className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                            >
                                <motion.div
                                    className="h-full bg-white rounded-full"
                                    initial={{ width: '0%' }}
                                    animate={{
                                        width:
                                            index < currentIndex
                                                ? '100%'
                                                : index === currentIndex
                                                    ? `${progress}%`
                                                    : '0%',
                                    }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Header */}
                    <div className="absolute top-4 left-0 right-0 z-20 px-4 pt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar
                                    src={currentStory.userAvatar}
                                    alt={currentStory.userName}
                                    size={40}
                                />
                                <div>
                                    <p className="text-white font-semibold text-sm">
                                        {currentStory.userName}
                                    </p>
                                    <p className="text-white/70 text-xs">
                                        {formatTimeAgo(currentStory.timestamp)}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white hover:bg-white/10 rounded-full p-2 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Story Image */}
                    <div className="w-full h-full flex items-center justify-center">
                        <img
                            src={currentStory.imageUrl}
                            alt={`Historia de ${currentStory.userName}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Navigation Buttons */}
                    {currentIndex > 0 && (
                        <button
                            onClick={onPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all backdrop-blur-sm"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}

                    {currentIndex < stories.length - 1 && (
                        <button
                            onClick={onNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all backdrop-blur-sm"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    )}

                    {/* Click areas for navigation */}
                    <div className="absolute inset-0 flex">
                        <div
                            className="w-1/3 h-full cursor-pointer"
                            onClick={currentIndex > 0 ? onPrevious : undefined}
                        />
                        <div className="w-1/3 h-full" />
                        <div
                            className="w-1/3 h-full cursor-pointer"
                            onClick={currentIndex < stories.length - 1 ? onNext : undefined}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default StoryViewer;
