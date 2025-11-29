"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/shared/components/card';
import Scrollbar from '@/shared/components/scrollbar';
import StoryAvatar from './story-avatar';
import StoryViewer from './story-viewer';
import { getStoriesData } from '../constants/stories-data';
import { Story } from '../types/stories-types';

const StoriesContainer: React.FC = () => {
    const [stories, setStories] = useState<Story[]>(getStoriesData());
    const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const handleStoryClick = (index: number) => {
        setSelectedStoryIndex(index);
        setIsViewerOpen(true);
    };

    const handleCloseViewer = () => {
        setIsViewerOpen(false);
        setSelectedStoryIndex(null);
    };

    const handleNextStory = () => {
        if (selectedStoryIndex !== null && selectedStoryIndex < stories.length - 1) {
            setSelectedStoryIndex(selectedStoryIndex + 1);
        }
    };

    const handlePreviousStory = () => {
        if (selectedStoryIndex !== null && selectedStoryIndex > 0) {
            setSelectedStoryIndex(selectedStoryIndex - 1);
        }
    };

    const handleStoryViewed = (storyId: string) => {
        setStories((prevStories) =>
            prevStories.map((story) =>
                story.id === storyId ? { ...story, viewed: true } : story
            )
        );
    };

    return (
        <>
            <Card className="mb-[30px] w-[616px]">
                <div className="px-[25px] py-[20px]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[#515365] font-bold text-base">Historias</h3>
                        <span className="text-[#888da8] text-xs">
                            {stories.filter((s) => !s.viewed).length} nuevas
                        </span>
                    </div>

                    {/* Stories scroll container */}
                    <div className="relative -mx-[25px] px-[25px]">
                        <Scrollbar
                            direction="horizontal"
                            position="bottom"
                            maxWidth="w-full"
                            className=""
                        >
                            <div className="flex gap-3">
                                {stories.map((story, index) => (
                                    <motion.div
                                        key={story.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="flex-shrink-0"
                                    >
                                        <StoryAvatar
                                            userName={story.userName}
                                            userAvatar={story.userAvatar}
                                            viewed={story.viewed}
                                            onClick={() => handleStoryClick(index)}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </Scrollbar>
                    </div>
                </div>
            </Card>

            {/* Story Viewer Modal */}
            {isViewerOpen && selectedStoryIndex !== null && (
                <StoryViewer
                    stories={stories}
                    currentIndex={selectedStoryIndex}
                    onClose={handleCloseViewer}
                    onNext={handleNextStory}
                    onPrevious={handlePreviousStory}
                    onStoryViewed={handleStoryViewed}
                />
            )}
        </>
    );
};

export default StoriesContainer;
