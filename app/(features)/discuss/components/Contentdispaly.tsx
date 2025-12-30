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
  
  return ( 
    <div className={isPostPage ? 'p-3 sm:p-4 max-w-3xl mx-auto' : `bg-black w-full border-b border-gray-900 p-3 ${!isPostPage ? 'cursor-pointer' : ''}`} onClick={handleCardClick}>
      {isPostPage ? (
        <div className='flex flex-col space-y-4'>
          <div className='flex items-center space-x-3'> 
            <img 
              src={post.author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.username)}&background=random`}
              alt='Profile'
              className='w-12 h-12 rounded-full object-cover'
            />
            <div>
              <div className='flex items-center gap-3 mb-1'>
                <h4 className='text-white text-lg font-bold'>{post.author.username}</h4>
                <span className='text-neutral-500'>•</span>
                <p className='text-neutral-500'>{new Date(post.createdAt || '').toLocaleDateString()}</p>
              </div>
              <p className='text-neutral-500'>@{post.author.username.toLowerCase().replace(' ', '')}</p>
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium'
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          <div className='text-white prose prose-invert max-w-none'>
            <ReactMarkdown
              components={{
                h1: ({children}) => <h1 className="text-xl font-bold text-white mb-4 leading-tight">{children}</h1>,
                h2: ({children}) => <h2 className="text-lg font-semibold text-white mb-3 mt-4 leading-tight">{children}</h2>,
                h3: ({children}) => <h3 className="text-base font-medium text-white mb-2 mt-3">{children}</h3>,
                code: ({children}) => <code className="bg-neutral-700 text-white px-2 py-1 rounded font-mono text-sm">{children}</code>,
                pre: ({children}) => <pre className="bg-neutral-800 text-white p-3 rounded-lg overflow-x-auto my-4 border border-neutral-600">{children}</pre>,
                blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-3 italic text-neutral-300 my-3 py-2 bg-neutral-800/50 rounded-r">{children}</blockquote>,
                a: ({href, children}) => <a href={href} className="text-blue-400 hover:text-blue-300 hover:underline font-medium" target="_blank" rel="noopener noreferrer">{children}</a>,
                img: ({src, alt}) => <img src={src} alt={alt} className="max-w-full h-auto rounded-lg my-4 border border-neutral-600" />,
                p: ({children}) => <p className="mb-3 text-white leading-relaxed">{children}</p>,
                ul: ({children}) => <ul className="list-disc list-inside mb-3 text-white space-y-1">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside mb-3 text-white space-y-1">{children}</ol>
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
         
          <div className='flex items-center gap-6 py-4 border-t border-neutral-600'>
            <div 
              className={`flex items-center gap-3 cursor-pointer transition-colors ${
                isLiked ? 'text-red-400' : 'text-neutral-400 hover:text-red-400'
              } ${isLiking ? 'opacity-50' : ''}`}
              onClick={handleLike}
            >
              {isLiked ? <AiFillLike className='text-xl'/> : <AiOutlineLike className='text-xl'/>}
              <span className='font-medium'>{likesCount}</span>
            </div>
            <div 
              className='flex items-center gap-3 text-neutral-400 hover:text-blue-400 cursor-pointer transition-colors'
              onClick={() => {
                setShowComments(!showComments);
                if (!showComments && comments.length === 0) {
                  fetchComments();
                }
              }}
            >
              <LiaComments className='text-xl'/>
              <span className='font-medium'>{commentsCount}</span>
            </div>
            <div className='flex items-center gap-3 text-neutral-400'>
              <MdOutlineRemoveRedEye className='text-xl'/>
              <span className='font-medium'>{Math.floor(Math.random() * 1000) + 100}</span>
            </div>
          </div>
          
          {showComments && (
            <div className='space-y-4 pt-4 border-t border-neutral-600'>
              <div className='flex gap-4'>
                <input
                  type='text'
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder='Add a comment...'
                  className='flex-1 px-3 py-2 border border-neutral-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-800 text-white placeholder-neutral-400'
                  onKeyPress={(e) => e.key === 'Enter' && handleComment()}
                />
                <button
                  onClick={handleComment}
                  disabled={!newComment.trim() || isCommenting}
                  className='bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-600 text-white px-6 py-2 rounded-lg font-medium'
                >
                  {isCommenting ? '...' : 'Post'}
                </button>
              </div>
              
              {loadingComments ? (
                <div className='text-neutral-400 py-4'>Loading comments...</div>
              ) : comments && comments.length > 0 ? (
                <div className='space-y-4'>
                  {comments.map((comment, index) => (
                    <div key={index} className='flex gap-3 py-3 border-b border-neutral-700 last:border-b-0'>
                      <img 
                        src={comment.commenter.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.commenter.username)}&background=random`}
                        alt='Commenter'
                        className='w-8 h-8 rounded-full object-cover'
                      />
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-1'>
                          <span className='text-blue-400 font-semibold'>{comment.commenter.username}</span>
                          <span className='text-neutral-500 text-sm'>{new Date(comment.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p className='text-white leading-relaxed'>{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='text-neutral-400 py-4 text-center'>No comments yet. Be the first to comment!</div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className='flex flex-col p-2 rounded-xl'>
          <div className='flex items-center mb-4'> 
            <img 
              src={post.author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.username)}&background=random`}
              alt='Profile'
              className='w-8 h-8 rounded-full m-2 object-cover'
            />
            <div className='flex flex-col item-center mt-2'>
              <div className='flex items-center'>
                <h4 className='text-white text-sm'>{post.author.username}</h4>
                <p className='text-gray-400 text-xs mt-1 ml-2'>{new Date(post.createdAt || '').toLocaleDateString()}</p>
              </div>
              <p className='text-gray-400 text-xs'>@{post.author.username.toLowerCase().replace(' ', '')}</p>
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className='flex flex-wrap gap-1 mb-2 ml-2'>
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className='bg-blue-600 text-white text-xs px-2 py-1 rounded-full'
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          <div className='text-white mt-[-5] ml-2'>
            <div className='text-gray-300 text-sm leading-relaxed prose prose-invert max-w-none'>
              <ReactMarkdown
                components={{
                  h1: ({children}) => <h1 className="text-lg font-bold mt-2 mb-1">{children}</h1>,
                  h2: ({children}) => <h2 className="text-base mt-2 mb-1">{children}</h2>,
                  h3: ({children}) => <h3 className="text-sm text-gray-500 mt-2 mb-1">{children}</h3>,
                  code: ({children}) => <code className="bg-gray-800 px-1 py-0.5 rounded text-sm">{children}</code>,
                  pre: ({children}) => <pre className="bg-gray-800 p-3 rounded-lg overflow-x-auto my-2">{children}</pre>,
                  blockquote: ({children}) => <blockquote className="border-l-2 border-gray-600 pl-2 italic text-gray-400 my-1">{children}</blockquote>,
                  a: ({href, children}) => <a href={href} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
                  img: ({src, alt}) => <img src={src} alt={alt} className="max-w-full h-auto rounded-lg my-2" />
                }}
              >
                {post.content.length > 200 ? post.content.substring(0, 200) + '...' : post.content}
              </ReactMarkdown>
            </div>
           
            <div className='flex flex-row mt-2 gap-4 items-center'>
              <div 
                className={`flex items-center gap-2 cursor-pointer transition-colors ${
                  isLiked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                } ${isLiking ? 'opacity-50' : ''}`}
                onClick={handleLike}
              >
                {isLiked ? <AiFillLike className='text-lg'/> : <AiOutlineLike className='text-lg'/>}
                <span className='text-sm'>{likesCount}</span>
              </div>
              <div 
                className='flex items-center gap-2 text-gray-400 hover:text-blue-400 cursor-pointer'
                onClick={() => {
                  setShowComments(!showComments);
                  if (!showComments && comments.length === 0) {
                    fetchComments();
                  }
                }}
              >
                <LiaComments className='text-lg'/>
                <span className='text-sm'>{commentsCount}</span>
              </div>
              <div className='flex items-center gap-2 text-gray-400'>
                <MdOutlineRemoveRedEye className='text-lg'/>
                <span className='text-sm'>{Math.floor(Math.random() * 1000) + 100}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contentdispaly
