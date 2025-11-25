'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Post, Comment, initialPosts } from '../constants/news-feed-data';

interface NewsFeedContextType {
    posts: Post[];
    toggleLike: (postId: number) => void;
    toggleCommentLike: (postId: number, commentId: number) => void;
    addComment: (postId: number, content: string) => void;
    sharePost: (postId: number) => void;
}

const NewsFeedContext = createContext<NewsFeedContextType | undefined>(undefined);

export const NewsFeedProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);

    const toggleLike = (postId: number) => {
        setPosts(prevPosts =>
            prevPosts.map(post => {
                if (post.id === postId) {
                    const isLiked = post.likes.isLiked;
                    const newCount = isLiked ? post.likes.count - 1 : post.likes.count + 1;
                    const newUsers = isLiked
                        ? post.likes.users.slice(0, -1)
                        : [...post.likes.users, 'Tú'];

                    return {
                        ...post,
                        likes: {
                            count: newCount,
                            users: newUsers,
                            isLiked: !isLiked
                        }
                    };
                }
                return post;
            })
        );
    };

    const toggleCommentLike = (postId: number, commentId: number) => {
        setPosts(prevPosts =>
            prevPosts.map(post => {
                if (post.id === postId && post.commentsList) {
                    return {
                        ...post,
                        commentsList: post.commentsList.map(comment => {
                            if (comment.id === commentId) {
                                return {
                                    ...comment,
                                    likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
                                    isLiked: !comment.isLiked
                                };
                            }
                            return comment;
                        })
                    };
                }
                return post;
            })
        );
    };

    const addComment = (postId: number, content: string) => {
        const newComment: Comment = {
            id: Date.now(),
            author: { name: 'Tú', avatar: '/assets/images/avatar-placeholder.png' },
            content,
            timeAgo: 'ahora',
            likes: 0,
            isLiked: false
        };

        setPosts(prevPosts =>
            prevPosts.map(post => {
                if (post.id === postId) {
                    return {
                        ...post,
                        comments: post.comments + 1,
                        commentsList: post.commentsList ? [...post.commentsList, newComment] : [newComment]
                    };
                }
                return post;
            })
        );
    };

    const sharePost = (postId: number) => {
        setPosts(prevPosts =>
            prevPosts.map(post => {
                if (post.id === postId) {
                    return {
                        ...post,
                        shares: post.shares + 1
                    };
                }
                return post;
            })
        );
    };

    return (
        <NewsFeedContext.Provider
            value={{
                posts,
                toggleLike,
                toggleCommentLike,
                addComment,
                sharePost
            }}
        >
            {children}
        </NewsFeedContext.Provider>
    );
};

export const useNewsFeedContext = () => {
    const context = useContext(NewsFeedContext);
    if (context === undefined) {
        throw new Error('useNewsFeedContext must be used within a NewsFeedProvider');
    }
    return context;
};
