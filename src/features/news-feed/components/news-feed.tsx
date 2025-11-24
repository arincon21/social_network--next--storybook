'use client';

import { Heart, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Avatar from '@/shared/components/avatar';
import Button from '@/shared/components/button';
import { useNewsFeed } from '../hooks/use-news-feed';
import { initialPosts } from '../constants/news-feed-data';
import CommentInputForm from './comment-input-form';

const NewsFeed = () => {
  const { posts, toggleLike, toggleCommentLike, addComment, sharePost } = useNewsFeed(initialPosts);
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});
  const [showCommentForm, setShowCommentForm] = useState<{ [key: number]: boolean }>({});
  const [showAllComments, setShowAllComments] = useState<{ [key: number]: boolean }>({});

  const handleAddComment = (postId: number) => {
    const content = newComment[postId]?.trim();
    if (content) {
      addComment(postId, content);
      setNewComment(prev => ({ ...prev, [postId]: '' }));
    }
  };

  return (
    <div className="mb-[80px]">
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative bg-white border border-[#e6eef5] mt-[30px] max-w-[618px] mx-auto rounded-sm"
          role="article"
          aria-labelledby={`post-${post.id}-title`}
        >
          <div className="p-6">
            {/* Botones flotantes derecha */}
            <div className="absolute right-[-20px] top-[18px] flex flex-col items-center space-y-2">
              <button
                className={`w-9 h-9 cursor-pointer rounded-full bg-[#9a9fbf] flex items-center justify-center shadow-sm text-white transition-colors hover:bg-amber-600 ${post.likes.isLiked ? 'bg-amber-600' : ''
                  }`}
                onClick={() => toggleLike(post.id)}
                aria-label={post.likes.isLiked ? 'Quitar like' : 'Dar like'}
              >
                <Heart className={`w-4 h-4 ${post.likes.isLiked ? 'fill-current' : ''}`} />
              </button>
              <button
                className="w-9 h-9 hover:bg-amber-600 cursor-pointer rounded-full bg-[#9a9fbf] flex items-center justify-center shadow-sm text-white"
                onClick={() => setShowCommentForm(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                aria-label="Comentar"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              <button
                className="w-9 h-9 hover:bg-amber-600 cursor-pointer rounded-full bg-[#9a9fbf] flex items-center justify-center shadow-sm text-white"
                onClick={() => sharePost(post.id)}
                aria-label="Compartir"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-start justify-between w-full box-border min-h-[110px]">
              <div className="flex items-start space-x-4">
                <Avatar
                  src={post.author.avatar}
                  alt={`Avatar de ${post.author.name}`}
                  size={48}
                  className="flex-shrink-0"
                />
                <div className="relative">
                  <div className="flex items-center space-x-3">
                    <h4 id={`post-${post.id}-title`} className="text-gray-800 font-semibold">
                      {post.author.name}
                    </h4>
                    <span className="text-sm text-gray-400">{post.timeAgo}</span>
                  </div>
                  <p className="mt-4 text-gray-500 leading-relaxed max-w-prose">{post.content}</p>
                </div>
              </div>
              <button
                className="text-gray-300 mr-5 hover:text-gray-500 transition-colors"
                aria-label="Más opciones"
              >
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {post.image && (
              <div className="mt-4">
                <Image
                  src={post.image}
                  alt={`Imagen del post de ${post.author.name}`}
                  width={600}
                  height={800}
                  className="object-cover rounded-sm"
                  unoptimized
                />
              </div>
            )}

            <div className="mt-6 flex items-center justify-between border-t border-gray-300 pt-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {post.likes.users.slice(0, 3).map((user, index) => (
                    <Avatar
                      key={index}
                      src={`/assets/images/avatar-placeholder.png`}
                      alt={`Avatar de ${user}`}
                      size={24}
                      className="border-2 border-white"
                    />
                  ))}
                </div>

                <div className="ml-3 text-sm text-gray-500">
                  <div className="flex items-center text-[#9aa3b2]">
                    <Heart className={`w-4 h-4 ${post.likes.isLiked ? 'fill-current text-red-500' : ''}`} />
                    <span className="ml-2 text-sm text-gray-500">{post.likes.count}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {post.likes.users.length > 0 && (
                      <>
                        A {post.likes.users.slice(0, 2).join(', ')}
                        {post.likes.count > 2 && ` y ${post.likes.count - 2} más`}
                        {' les gusta esto'}
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">{post.comments}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Share2 className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">{post.shares}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Render comments list if exists */}
          {post.commentsList && post.commentsList.length > 0 && (
            <>
              {(showAllComments[post.id] ? post.commentsList : post.commentsList.slice(0, 2)).map((comment) => (
                <div key={comment.id} className="p-6 bg-[#f6f8fa] border-b border-gray-300">
                  <div className="flex items-start space-x-3">
                    <Avatar
                      src={comment.author.avatar}
                      alt={`Avatar de ${comment.author.name}`}
                      size={36}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-gray-800">{comment.author.name}</div>
                          <div className="text-xs text-gray-400">{comment.timeAgo}</div>
                        </div>
                      </div>
                      <div className="mt-2 text-gray-600 text-sm">{comment.content}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 pt-6 flex items-center gap-3">
                    <button
                      className={`flex items-center text-[#9aa3b2] hover:text-red-500 transition-colors ${comment.isLiked ? 'text-red-500' : ''
                        }`}
                      onClick={() => toggleCommentLike(post.id, comment.id)}
                      aria-label={comment.isLiked ? 'Quitar like del comentario' : 'Dar like al comentario'}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${comment.isLiked ? 'fill-current' : ''}`} />
                      <span className="text-sm text-gray-500">{comment.likes}</span>
                    </button>
                  </div>
                </div>
              ))}

              {post.commentsList.length > 2 && !showAllComments[post.id] && (
                <div
                  className="p-3 text-center cursor-pointer border-b border-gray-300"
                  onClick={() => {
                    setShowAllComments(prev => ({ ...prev, [post.id]: true }));
                    setShowCommentForm(prev => ({ ...prev, [post.id]: true }));
                  }}
                >
                  <span className="text-xs text-gray-500 font-medium">Ver más comentarios +</span>
                </div>
              )}
            </>
          )}

          {showCommentForm[post.id] && (
            <CommentInputForm
              postId={post.id}
              newComment={newComment[post.id] || ''}
              setNewComment={(value) => setNewComment(prev => ({ ...prev, [post.id]: value }))}
              handleAddComment={handleAddComment}
            />
          )}

        </div>
      ))}
    </div>
  );
};

export default NewsFeed;