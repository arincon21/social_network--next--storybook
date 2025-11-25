'use client';

import { NewsFeedProvider, useNewsFeedContext } from '../context/news-feed-context';
import PostItem from './post-item';

const NewsFeedContent = () => {
  const { posts, toggleLike, toggleCommentLike, addComment, sharePost } = useNewsFeedContext();

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

const NewsFeed = () => {
  return (
    <NewsFeedProvider>
      <NewsFeedContent />
    </NewsFeedProvider>
  );
};

export default NewsFeed;