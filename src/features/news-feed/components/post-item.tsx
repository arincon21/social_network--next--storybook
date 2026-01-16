'use client';

import { MoreHorizontal } from "lucide-react";
import Image from 'next/image';
import { useState } from 'react';
import Avatar from '@/shared/components/avatar';
import { Post } from '../constants/news-feed-data';
import CommentInputForm from './comment-input-form';
import Modal from '@/shared/components/modal';
import Icon from '@/shared/components/icon';

interface PostItemProps {
    post: Post;
    onToggleLike: () => void;
    onToggleCommentLike: (commentId: number) => void;
    onAddComment: (content: string) => void;
    onShare: () => void;
}

const PostItem = ({
    post,
    onToggleLike,
    onToggleCommentLike,
    onAddComment,
    onShare,
}: PostItemProps) => {
    const [newComment, setNewComment] = useState('');
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [showAllComments, setShowAllComments] = useState(false);
    const [showLikesModal, setShowLikesModal] = useState(false);

    const handleAddCommentWrapper = () => {
        if (newComment.trim()) {
            onAddComment(newComment.trim());
            setNewComment('');
        }
    };

    const visibleLikes = post.likes.users.slice(0, 5);
    const remainingLikesCount = Math.max(0, post.likes.count - 5);

    return (
        <>
            <div
                className="relative bg-white border border-[#e6eef5] mt-[30px] max-w-[618px] mx-auto rounded-sm"
                role="article"
                aria-labelledby={`post-${post.id}-title`}
            >
                <div className="p-6">
                    {/* Botones flotantes derecha */}
                    <div className="absolute right-[-18px] top-[18px] flex flex-col items-center space-y-2">
                        <button
                            className={`w-9 h-9 cursor-pointer rounded-full bg-[#9a9fbf] flex items-center justify-center shadow-sm text-white transition-colors hover:bg-amber-600 ${post.likes.isLiked ? 'bg-amber-600' : ''
                                }`}
                            onClick={onToggleLike}
                            aria-label={post.likes.isLiked ? 'Quitar like' : 'Dar like'}
                        >
                            <Icon name="olymp-like-post-icon" className='w-[18px] h-[18px]' />
                        </button>
                        <button
                            className="w-9 h-9 hover:bg-amber-600 cursor-pointer rounded-full bg-[#9a9fbf] flex items-center justify-center shadow-sm text-white"
                            onClick={() => setShowCommentForm(!showCommentForm)}
                            aria-label="Comentar"
                        >
                            <Icon name="olymp-comments-post-icon" className='w-[18px] h-[18px]' />
                        </button>
                        <button
                            className="w-9 h-9 hover:bg-amber-600 cursor-pointer rounded-full bg-[#9a9fbf] flex items-center justify-center shadow-sm text-white"
                            onClick={onShare}
                            aria-label="Compartir"
                        >
                            <Icon name="olymp-share-icon" className='w-[18px] h-[18px]' />
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
                            />
                        </div>
                    )}

                    <div className="mt-6 flex items-center justify-between border-t border-gray-300 pt-6">
                        <div className="flex items-center">
                            <div className="flex -space-x-2 items-center">
                                {visibleLikes.map((user, index) => (
                                    <Avatar
                                        key={index}
                                        src={`/assets/images/avatar-placeholder.png`}
                                        alt={`Avatar de ${user}`}
                                        size={24}
                                        className="border-2 border-white"
                                    />
                                ))}
                                {remainingLikesCount > 0 && (
                                    <button
                                        onClick={() => setShowLikesModal(true)}
                                        className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500 hover:bg-gray-200 transition-colors z-10"
                                        aria-label={`Ver ${remainingLikesCount} likes más`}
                                    >
                                        +{remainingLikesCount}
                                    </button>
                                )}
                            </div>

                            <button
                                className="ml-3 text-sm text-gray-500 transition-colors text-left group"
                                onClick={onToggleLike}
                            >
                                <div className="flex items-center text-[#9aa3b2]">
                                    <Icon name="olymp-like-post-icon" className={`w-[15px] h-[15px] cursor-pointer ${post.likes.isLiked ? 'fill-current text-red-500' : ''}`} />
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
                            </button>
                        </div>

                        <div className="flex items-center space-x-6 text-gray-400">
                            <button
                                className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer"
                                onClick={() => setShowCommentForm(!showCommentForm)}
                            >
                                <Icon name="olymp-comments-post-icon" className='w-[18px] h-[18px]' />
                                <span className="text-sm">{post.comments}</span>
                            </button>
                            <div className="flex items-center space-x-2">
                                <Icon name="olymp-share-icon" className='w-[18px] h-[18px]' />
                                <span className="text-sm">{post.shares}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Render comments list if exists */}
                {post.commentsList && post.commentsList.length > 0 && (
                    <>
                        {(showAllComments ? post.commentsList : post.commentsList.slice(0, 2)).map((comment) => (
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
                                        onClick={() => onToggleCommentLike(comment.id)}
                                        aria-label={comment.isLiked ? 'Quitar like del comentario' : 'Dar like al comentario'}
                                    >
                                        <Icon name="olymp-like-post-icon" className={`w-4 h-4 mr-2 ${comment.isLiked ? 'fill-current' : ''}`} />
                                        <span className="text-sm text-gray-500">{comment.likes}</span>
                                    </button>
                                </div>
                            </div>
                        ))}

                        {post.commentsList.length > 2 && !showAllComments && (
                            <div
                                className="p-3 text-center cursor-pointer border-b border-gray-300 hover:bg-gray-50 transition-colors"
                                onClick={() => {
                                    setShowAllComments(true);
                                    setShowCommentForm(true);
                                }}
                            >
                                <span className="text-xs text-gray-500 font-medium">Ver más comentarios +</span>
                            </div>
                        )}
                    </>
                )}

                {showCommentForm && (
                    <CommentInputForm
                        postId={post.id}
                        newComment={newComment}
                        setNewComment={setNewComment}
                        handleAddComment={handleAddCommentWrapper}
                    />
                )}
            </div>

            <Modal
                isOpen={showLikesModal}
                onClose={() => setShowLikesModal(false)}
                title="Personas a las que les gusta esto"
            >
                <div className="space-y-4">
                    {post.likes.users.map((user, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <Avatar
                                src="/assets/images/avatar-placeholder.png"
                                alt={user}
                                size={40}
                            />
                            <span className="text-gray-700 font-medium">{user}</span>
                        </div>
                    ))}
                    {post.likes.users.length === 0 && (
                        <p className="text-gray-500 text-center py-4">Aún no hay likes.</p>
                    )}
                </div>
            </Modal>
        </>
    );
};

export default PostItem;
