'use client';

import { useNewsFeed } from '../hooks/use-news-feed';
import { initialPosts } from '../constants/news-feed-data';
import PostItem from './post-item';

const NewsFeed = () => {
  const { posts, toggleLike, toggleCommentLike, addComment, sharePost } = useNewsFeed(initialPosts);

  return (
    <div className="mb-[80px]">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onToggleLike={() => toggleLike(post.id)}
          onToggleCommentLike={(commentId) => toggleCommentLike(post.id, commentId)}
          onAddComment={(content) => addComment(post.id, content)}
          onShare={() => sharePost(post.id)}
        />
      ))}
    </div>
  );
};

export default NewsFeed;