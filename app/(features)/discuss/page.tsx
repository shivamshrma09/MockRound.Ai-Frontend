"use client"
import React, { useState, useEffect, useMemo } from 'react'
import PostEditor from './components/PostEditor'
import Contentdispaly from './components/Contentdispaly'
import { getAllPosts, Post } from './services/postService'
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const { open, isMobile } = useSidebar();
  
  return (
    <header className='border-b bg-black w-full h-8 border-[#191919] flex items-center justify-between  '>
      {(!open || isMobile) && (
        <div className='flex items-center ml-4 sm:ml-19 md:ml-65 mt-[-20px]'>
          <Link href='/home'>
            <Image
              src="/logo2.png"
              alt="MockRound.AI Logo"
              width={150}
              height={10}
              className=""
            />
          </Link>
        </div>
      )}
    </header>
  );
}

const AVAILABLE_TAGS = [
  'DSA', 'WebDev', 'AI', 'ML', 'LeetCode', 'JavaScript', 'Python', 
  'React', 'Node.js', 'MongoDB', 'SQL', 'DevOps', 'System Design',
  'Frontend', 'Backend', 'FullStack', 'Mobile', 'Cloud', 'Blockchain'
];

function page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

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
    return [...posts].sort((a, b) => {
      const dateA = new Date(a.createdAt || '').getTime();
      const dateB = new Date(b.createdAt || '').getTime();
      return dateB - dateA;
    });
  }, [posts]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 bg-black min-h-screen">
        <div className="bg-black">
          <div className="flex items-center">
            <SidebarTrigger className="text-white lg:ml-60" />
          </div>
          <Navbar />
        </div>
        
        <div className='flex justify-end items-center px-4 md:px-8 '>
          <PostEditor onPostCreated={handlePostCreated} />
        </div>
        
        <div className='md:w-250 md:ml-60  '>
          <div className='grid grid-cols-1 gap-4  '>
            {loading ? (
              <div className='text-white text-center py-8'>Loading posts...</div>
            ) : filteredAndSortedPosts.length > 0 ? (
              filteredAndSortedPosts.map((post) => (
                <Contentdispaly 
                  key={post._id}
                  post={post}
                />
              ))
            ) : (
              <div className='text-gray-400 text-center py-8'>
                No posts yet. Be the first to create one!
              </div>
            )}
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default page

