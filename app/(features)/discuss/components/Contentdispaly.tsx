import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useRouter, usePathname } from 'next/navigation'
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Post, likePost, addComment, getComments, getUserData } from '../services/postService';

interface ContentdispalyProps {
  post: Post;
}

function Contentdispaly({ post }: ContentdispalyProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isPostPage = pathname?.includes('/post/');
  
  const [isLiked, setIsLiked] = useState(() => {
    const userData = getUserData();
    return post.likes?.includes(userData.userId) || false;
  });
  const [likesCount, setLikesCount] = useState(post.likesCount || 0);
  const [isLiking, setIsLiking] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentsCount, setCommentsCount] = useState(post.commentsCount || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [loadingComments, setLoadingComments] = useState(false);
  
  const handleLike = async () => {
    if (isLiking || !post._id) return;
    
    setIsLiking(true);
    const userData = getUserData();
    const wasLiked = isLiked;
    
    setIsLiked(!wasLiked);
    setLikesCount(prev => wasLiked ? prev - 1 : prev + 1);
    
    try {
      await likePost(post._id, userData.userId);
    } catch (error) {
      setIsLiked(wasLiked);
      setLikesCount(prev => wasLiked ? prev + 1 : prev - 1);
      console.error('Failed to like post:', error);
    } finally {
      setIsLiking(false);
    }
  };
  
  const fetchComments = async () => {
    if (!post._id || loadingComments) return;
    
    setLoadingComments(true);
    try {
      const response = await getComments(post._id);
      if (response.success) {
        setComments(response.comments);
        setCommentsCount(response.commentsCount);
      }
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    } finally {
      setLoadingComments(false);
    }
  };
  
  useEffect(() => {
    if (showComments && comments.length === 0) {
      fetchComments();
    }
  }, [showComments]);
  
  const handleComment = async () => {
    if (!newComment.trim() || isCommenting || !post._id) return;
    
    setIsCommenting(true);
    const userData = getUserData();
    
    try {
      await addComment(post._id, {
        commenterId: userData.userId,
        commenter: {
          username: userData.username,
          avatar: userData.avatar
        },
        content: newComment.trim()
      });
      
      setNewComment('');
      setCommentsCount(prev => prev + 1);
      fetchComments();
    } catch (error) {
      console.error('Failed to add comment:', error);
    } finally {
      setIsCommenting(false);
    }
  };
  
  const handleCardClick = () => {
    if (!isPostPage) {
      router.push(`/discuss/post/${post._id}`);
    }
  };

  /* ── Shared action bar ── */
  const ActionBar = ({ size = 'sm' }: { size?: 'sm' | 'lg' }) => {
    const iconClass = size === 'lg' ? 'text-xl' : 'text-base';
    const textClass = size === 'lg' ? 'text-sm font-medium' : 'text-xs';

    return (
      <div className={`flex items-center ${size === 'lg' ? 'gap-6' : 'gap-5'}`}>
        <button 
          className={`flex items-center gap-1.5 transition-all duration-200 group
            ${isLiked ? 'text-red-400' : 'text-gray-500 hover:text-red-400'}
            ${isLiking ? 'opacity-50 pointer-events-none' : ''}
          `}
          onClick={(e) => { e.stopPropagation(); handleLike(); }}
        >
          {isLiked
            ? <AiFillLike className={`${iconClass} transition-transform duration-200 group-hover:scale-110`} />
            : <AiOutlineLike className={`${iconClass} transition-transform duration-200 group-hover:scale-110`} />
          }
          <span className={textClass}>{likesCount}</span>
        </button>
        <button 
          className='flex items-center gap-1.5 text-gray-500 hover:text-violet-400 transition-all duration-200 group'
          onClick={(e) => {
            e.stopPropagation();
            setShowComments(!showComments);
            if (!showComments && comments.length === 0) fetchComments();
          }}
        >
          <LiaComments className={`${iconClass} transition-transform duration-200 group-hover:scale-110`} />
          <span className={textClass}>{commentsCount}</span>
        </button>
        <div className='flex items-center gap-1.5 text-gray-600'>
          <MdOutlineRemoveRedEye className={iconClass} />
          <span className={textClass}>{Math.floor(Math.random() * 1000) + 100}</span>
        </div>
      </div>
    );
  };

  /* ── Comment section ── */
  const CommentSection = () => (
    <div className='space-y-3 pt-4'>
      {/* Comment input */}
      <div className='flex gap-3'>
        <input
          type='text'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Write a comment...'
          className='flex-1 px-3 py-2 rounded-lg text-sm text-white placeholder-gray-500
            bg-white/[0.04] border border-white/[0.08] 
            focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.06]
            transition-all duration-200'
          onKeyPress={(e) => e.key === 'Enter' && handleComment()}
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={(e) => { e.stopPropagation(); handleComment(); }}
          disabled={!newComment.trim() || isCommenting}
          className='px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
            bg-violet-500/20 text-violet-300 border border-violet-500/20
            hover:bg-violet-500/30 hover:border-violet-500/40
            disabled:opacity-40 disabled:pointer-events-none'
        >
          {isCommenting ? '...' : 'Post'}
        </button>
      </div>
      
      {/* Comments list */}
      {loadingComments ? (
        <div className='text-gray-500 py-3 text-sm'>Loading comments...</div>
      ) : comments && comments.length > 0 ? (
        <div className='space-y-0'>
          {comments.map((comment, index) => (
            <div
              key={index}
              className='flex gap-3 py-3 border-b border-white/[0.04] last:border-b-0'
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={comment.commenter.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.commenter.username)}&background=1a1a2e&color=a78bfa`}
                alt='Commenter'
                className='w-7 h-7 rounded-full object-cover ring-1 ring-white/[0.08] flex-shrink-0 mt-0.5'
              />
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-0.5'>
                  <span className='text-violet-400 font-medium text-xs'>{comment.commenter.username}</span>
                  <span className='text-gray-600 text-[10px]'>{new Date(comment.createdAt).toLocaleDateString()}</span>
                </div>
                <p className='text-gray-300 text-sm leading-relaxed'>{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='text-gray-600 py-3 text-center text-xs'>No comments yet</div>
      )}
    </div>
  );

  /* ════════════════════════════════════════════════
     FULL POST PAGE VIEW
     ════════════════════════════════════════════════ */
  if (isPostPage) {
    return (
      <div className='p-3 sm:p-6 max-w-3xl mx-auto'>
        <div className='flex flex-col space-y-5'>
          {/* Author header */}
          <div className='flex items-center space-x-3'> 
            <img 
              src={post.author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.username)}&background=1a1a2e&color=a78bfa`}
              alt='Profile'
              className='w-11 h-11 rounded-full object-cover ring-2 ring-violet-500/30'
            />
            <div>
              <div className='flex items-center gap-2 mb-0.5'>
                <h4 className='text-white text-base font-semibold'>{post.author.username}</h4>
                <span className='text-gray-600 text-xs'>•</span>
                <p className='text-gray-500 text-xs'>{new Date(post.createdAt || '').toLocaleDateString()}</p>
              </div>
              <p className='text-gray-500 text-xs'>@{post.author.username.toLowerCase().replace(' ', '')}</p>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className='bg-violet-500/15 text-violet-300 border border-violet-500/20 px-2.5 py-0.5 rounded-full text-xs font-medium'
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Markdown content */}
          <div className='text-white prose prose-invert max-w-none'>
            <ReactMarkdown
              components={{
                h1: ({children}) => <h1 className="text-xl font-bold text-white mb-4 leading-tight">{children}</h1>,
                h2: ({children}) => <h2 className="text-lg font-semibold text-white mb-3 mt-5 leading-tight">{children}</h2>,
                h3: ({children}) => <h3 className="text-base font-medium text-white mb-2 mt-3">{children}</h3>,
                code: ({children}) => <code className="bg-white/[0.08] text-violet-300 px-1.5 py-0.5 rounded font-mono text-sm">{children}</code>,
                pre: ({children}) => <pre className="bg-white/[0.04] border border-white/[0.08] text-white p-4 rounded-xl overflow-x-auto my-4">{children}</pre>,
                blockquote: ({children}) => <blockquote className="border-l-3 border-violet-500 pl-4 italic text-gray-400 my-3 py-2 bg-violet-500/[0.04] rounded-r-lg">{children}</blockquote>,
                a: ({href, children}) => <a href={href} className="text-violet-400 hover:text-violet-300 hover:underline font-medium" target="_blank" rel="noopener noreferrer">{children}</a>,
                img: ({src, alt}) => <img src={src} alt={alt} className="max-w-full h-auto rounded-xl my-4 border border-white/[0.08]" />,
                p: ({children}) => <p className="mb-3 text-gray-300 leading-relaxed">{children}</p>,
                ul: ({children}) => <ul className="list-disc list-inside mb-3 text-gray-300 space-y-1">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside mb-3 text-gray-300 space-y-1">{children}</ol>
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
         
          {/* Action bar */}
          <div className='py-3 border-t border-white/[0.06]'>
            <ActionBar size='lg' />
          </div>
          
          {/* Comments */}
          {showComments && <CommentSection />}
        </div>
      </div>
    );
  }

  /* ════════════════════════════════════════════════
     FEED CARD VIEW
     ════════════════════════════════════════════════ */
  return (
    <div
      className='group border-b border-white/[0.04] px-2 py-4 cursor-pointer
        transition-all duration-200 hover:bg-white/[0.02]'
      onClick={handleCardClick}
    >
      <div className='flex flex-col space-y-2.5'>
        {/* Author row */}
        <div className='flex items-center gap-2.5'> 
          <img 
            src={post.author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.username)}&background=1a1a2e&color=a78bfa`}
            alt='Profile'
            className='w-8 h-8 rounded-full object-cover ring-1 ring-white/[0.1]'
          />
          <div className='flex items-center gap-2'>
            <h4 className='text-white text-sm font-medium'>{post.author.username}</h4>
            <span className='text-gray-600 text-[10px]'>•</span>
            <p className='text-gray-500 text-xs'>{new Date(post.createdAt || '').toLocaleDateString()}</p>
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className='flex flex-wrap gap-1.5'>
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className='bg-violet-500/10 text-violet-400 border border-violet-500/15 text-[10px] px-2 py-0.5 rounded-full font-medium'
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Content preview */}
        <div className='text-gray-400 text-sm leading-relaxed prose prose-invert max-w-none'>
          <ReactMarkdown
            components={{
              h1: ({children}) => <h1 className="text-base font-semibold text-white mt-1 mb-1">{children}</h1>,
              h2: ({children}) => <h2 className="text-sm font-medium text-white mt-1 mb-1">{children}</h2>,
              h3: ({children}) => <h3 className="text-sm text-gray-400 mt-1 mb-1">{children}</h3>,
              code: ({children}) => <code className="bg-white/[0.06] text-violet-300 px-1 py-0.5 rounded text-xs">{children}</code>,
              pre: ({children}) => <pre className="bg-white/[0.04] border border-white/[0.06] p-3 rounded-lg overflow-x-auto my-2 text-xs">{children}</pre>,
              blockquote: ({children}) => <blockquote className="border-l-2 border-violet-500/40 pl-2 italic text-gray-500 my-1">{children}</blockquote>,
              a: ({href, children}) => <a href={href} className="text-violet-400 hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
              img: ({src, alt}) => <img src={src} alt={alt} className="max-w-full h-auto rounded-lg my-2 border border-white/[0.06]" />
            }}
          >
            {post.content.length > 200 ? post.content.substring(0, 200) + '...' : post.content}
          </ReactMarkdown>
        </div>
       
        {/* Action bar */}
        <div className='pt-1'>
          <ActionBar size='sm' />
        </div>

        {/* Inline comments */}
        {showComments && (
          <div onClick={(e) => e.stopPropagation()}>
            <CommentSection />
          </div>
        )}
      </div>
    </div>
  );
}

export default Contentdispaly

