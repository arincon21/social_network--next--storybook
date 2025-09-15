import { useState } from 'react';
import { Comment, Post } from '../constants/news-feed-data';

export const useNewsFeed = (initialPosts: Post[]) => {
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
      author: { name: 'Tú', avatar: 'https://placehold.co/36x36' },
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

  return {
    posts,
    toggleLike,
    toggleCommentLike,
    addComment,
    sharePost
  };
};