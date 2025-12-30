"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Contentdispaly from '../../components/Contentdispaly';

function Navbar() {
  const { open, isMobile } = useSidebar();

  return (
    <header className="border-b bg-black w-full h-8 border-[#191919] flex items-center justify-between">
      {!open && (
        <div className="flex items-center ml-4 sm:ml-19 md:ml-65 mt-[-20px]">
          <Link href="/home">
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

function Page() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [post, setPost] = useState(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL
  
  const getsinglepost = async (postId: string) => {
    const response = await fetch(`${API_BASE}/posts/${postId}`);
    return response.json();
  };
  
  useEffect(() => {
    const verifyAccess = async () => {
      try {
        const postid = params?.postid as string;

        if (!postid) {
          router.push("/discuss");
          return;
        }

        const validid = await getsinglepost(postid);

        if (validid.success === "true") {
          setVerified(true);
          setPost(validid.post);
        } else {
          router.push("/discuss");
        }
      } catch (error) {
        console.error("Post not found:", error);
        router.push("/discuss");
      } finally {
        setLoading(false);
      }
    };
    verifyAccess();
  }, [params, router]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : verified && post ? (
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 bg-black min-h-screen">
            <div className="bg-black">
              <div className="flex items-center">
                <SidebarTrigger className="text-white lg:ml-60" />
              </div>
              <Navbar />
            </div>
            
            <div className="max-w-3xl mx-auto p-4">
              <Contentdispaly post={post} />
            </div>
          </main>
        </SidebarProvider>
      ) : null}
    </div>
  );
}

export default Page;