"use client"
import React, { useState, useEffect, useMemo } from 'react'
import PostEditor from './components/PostEditor'
import Contentdispaly from './components/Contentdispaly'
import { getAllPosts, Post } from './services/postService'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { PiArticleMediumFill } from "react-icons/pi";



const AVAILABLE_TAGS = [
  'DSA', 'WebDev', 'AI', 'ML', 'LeetCode', 'JavaScript', 'Python', 
  'React', 'Node.js', 'MongoDB', 'SQL', 'DevOps', 'System Design',
  'Frontend', 'Backend', 'FullStack', 'Mobile', 'Cloud', 'Blockchain'
];

/* ── Loading skeleton ── */
function PostSkeleton() {
  return (
    <div className="animate-pulse border border-white/[0.06] rounded-xl p-4 space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/[0.06]" />
        <div className="space-y-1.5 flex-1">
          <div className="h-3.5 w-28 bg-white/[0.06] rounded" />
          <div className="h-2.5 w-20 bg-white/[0.04] rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full bg-white/[0.05] rounded" />
        <div className="h-3 w-4/5 bg-white/[0.05] rounded" />
        <div className="h-3 w-3/5 bg-white/[0.04] rounded" />
      </div>
      <div className="flex gap-4 pt-2">
        <div className="h-3 w-12 bg-white/[0.04] rounded" />
        <div className="h-3 w-12 bg-white/[0.04] rounded" />
        <div className="h-3 w-12 bg-white/[0.04] rounded" />
      </div>
    </div>
  );
}

function page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const response = await getAllPosts();
      if (response.success) {
        setPosts(response.posts);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostCreated = () => {
    fetchPosts(); 
  };

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = [...posts];
    if (selectedTag) {
      filtered = filtered.filter(p => p.tags?.includes(selectedTag));
    }
    return filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt || '').getTime();
      const dateB = new Date(b.createdAt || '').getTime();
      return dateB - dateA;
    });
  }, [posts, selectedTag]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 bg-black min-h-screen">

        {/* ═══════ Page header ═══════ */}
        <div className='md:ml-60 px-4 md:px-8 pt-6 pb-2'>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1
                className="text-2xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #f97316 100%)' }}
              >
                Discuss
              </h1>
              <p className="text-gray-500 text-xs">Share ideas, ask questions, and learn together</p>
            </div>
            <PostEditor onPostCreated={handlePostCreated} />
          </div>

          {/* ── Trending tags bar ── */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-hide">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border
                ${!selectedTag
                  ? 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                  : 'text-gray-500 border-white/[0.06] hover:text-orange-300 hover:border-orange-500/20'
                }`}
            >
              All Posts
            </button>
            {AVAILABLE_TAGS.slice(0, 10).map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border
                  ${selectedTag === tag
                    ? 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                    : 'text-gray-500 border-white/[0.06] hover:text-orange-300 hover:border-orange-500/20'
                  }`}
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* ── Gradient divider ── */}
          <div
            className="h-px mb-4"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.25) 50%, transparent 100%)',
            }}
          />
        </div>
        
        {/* ═══════ Posts feed ═══════ */}
        <div className='md:ml-60 px-4 md:px-8 pb-8'>
          <div className='space-y-0'>
            {loading ? (
              <div className='space-y-4'>
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
              </div>
            ) : filteredAndSortedPosts.length > 0 ? (
              filteredAndSortedPosts.map((post) => (
                <Contentdispaly 
                  key={post._id}
                  post={post}
                />
              ))
            ) : (
              <div className='flex flex-col items-center justify-center py-20 text-center'>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(251,146,60,0.1) 100%)' }}
                >
                  <PiArticleMediumFill className="text-orange-400 text-3xl" />
                </div>
                <h3 className='text-white font-semibold text-lg mb-1'>
                  {selectedTag ? `No posts tagged #${selectedTag}` : 'No posts yet'}
                </h3>
                <p className='text-gray-500 text-sm'>
                  {selectedTag ? 'Try selecting a different tag' : 'Be the first to start a discussion!'}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default page


