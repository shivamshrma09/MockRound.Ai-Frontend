"use client"
import React, { useState } from 'react'
import { createPost, getUserData } from '../services/postService'
import { IoCreateOutline, IoSparkles } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { CiImageOn } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import { FaBold } from "react-icons/fa";
const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;

interface PostEditorProps {
  onPostCreated?: () => void;
}

function PostEditor({ onPostCreated }: PostEditorProps) {
  const [showmodal, setshowmodal] = useState(false);
  const [showEnhancer, setShowEnhancer] = useState(false);
  const [enhancedResult, setEnhancedResult] = useState("");
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [text, setText] = useState("");

  /* ── Groq AI enhance (direct fetch to avoid SDK browser issues) ── */
  const enhanceText = async () => {
    if (!text.trim()) return;
    setIsEnhancing(true);

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content:
                "You are a text enhancement AI for a developer discussion forum. When given text, you: fix grammar and spelling, improve structure and flow, make it professional and clear, keep the original meaning, format it nicely with proper markdown, and make it suitable for a tech discussion post. Return only the enhanced text, no commentary.",
            },
            {
              role: "user",
              content: text,
            },
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData?.error?.message || `HTTP ${res.status}`);
      }

      const data = await res.json();
      const response = data.choices?.[0]?.message?.content || "";
      setEnhancedResult(response);
      setShowEnhancer(true);
    } catch (error: any) {
      console.error("Enhancement Error:", error);
      setEnhancedResult(`Enhancement failed: ${error?.message || "Unknown error"}`);
      setShowEnhancer(true);
    } finally {
      setIsEnhancing(false);
    }
  };

  const useEnhancedText = () => {
    setText(enhancedResult);
    setShowEnhancer(false);
    setEnhancedResult("");
  };

  /* ── Toolbar helpers ── */
  const addBold   = () => setText(text + "**bold text**");
  const addImage  = () => setText(text + "![image](image-url)");
  const addLink   = () => setText(text + "[link text](url)");
  const addCode   = () => setText(text + "\n```\ncode here\n```");
  const addHeading = (level: number) =>
    setText(text + "\n" + "#".repeat(level) + " Heading");

  /* ── Post submit ── */
  const handlePost = async () => {
    if (!text.trim()) return;
    setIsPosting(true);
    try {
      const userData = getUserData();
      const result = await createPost({
        content: text,
        authorId: userData.userId,
        author: { username: userData.username, avatar: userData.avatar },
      });
      if (result.success) {
        setshowmodal(false);
        setText("");
        onPostCreated?.();
      }
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsPosting(false);
    }
  };

  /* ── Toolbar button style ── */
  const toolbarBtn =
    "flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-500/30 text-gray-400 hover:text-white hover:bg-white/[0.06] hover:border-white/20 transition-all duration-150 text-sm";

  return (
    <div>
      {/* ═══ Trigger button ═══ */}
      <button
        onClick={() => setshowmodal(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm text-white
          transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
          boxShadow:
            "0 0 16px rgba(124, 58, 237, 0.35), 0 2px 8px rgba(0,0,0,0.4)",
        }}
      >
        <IoCreateOutline className="text-lg" />
        Create Post
      </button>

      {/* ═══ Main Modal ═══ */}
      <AnimatePresence>
        {showmodal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-2xl rounded-2xl border border-neutral-500/30 p-5 flex flex-col gap-4"
              style={{
                background:
                  "linear-gradient(160deg, #0e0e0e 0%, #0a0a0a 100%)",
                boxShadow: "0 0 40px rgba(0,0,0,0.6), 0 0 1px rgba(124,58,237,0.15)",
              }}
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.18 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
                    }}
                  >
                    <IoCreateOutline className="text-white text-base" />
                  </div>
                  <h3 className="text-white font-semibold text-base">
                    Create Post
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePost}
                    disabled={!text.trim() || isPosting}
                    className="px-4 py-1.5 rounded-lg text-sm font-semibold text-white
                      transition-all duration-200 hover:opacity-90 active:scale-95
                      disabled:opacity-40 disabled:pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
                    }}
                  >
                    {isPosting ? "Posting..." : "Post"}
                  </button>
                  <button
                    onClick={() => { setshowmodal(false); setText(""); }}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-400
                      border border-neutral-500/30 hover:text-white hover:border-white/20
                      transition-all duration-150"
                  >
                    Cancel
                  </button>
                </div>
              </div>

              {/* Gradient divider */}
              <div
                className="h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.25) 50%, transparent 100%)",
                }}
              />

              {/* Toolbar */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-1.5">
                  <button className={toolbarBtn} onClick={addBold} title="Bold">
                    <FaBold />
                  </button>
                  <button className={toolbarBtn} onClick={addImage} title="Image">
                    <CiImageOn className="text-base" />
                  </button>
                  <button className={toolbarBtn} onClick={addLink} title="Link">
                    <CiLink className="text-base" />
                  </button>
                  <button className={toolbarBtn} onClick={addCode} title="Code">
                    <FaCode />
                  </button>
                  <div className="w-px h-5 bg-white/10 mx-1" />
                  {[1, 2, 3].map((h) => (
                    <button
                      key={h}
                      className={toolbarBtn + " w-auto px-2 text-xs font-bold"}
                      onClick={() => addHeading(h)}
                    >
                      H{h}
                    </button>
                  ))}
                </div>

                {/* AI Enhance button — project violet theme */}
                <motion.button
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                    border border-neutral-500/30 text-violet-400
                    hover:bg-violet-500/10 hover:border-violet-500/40
                    transition-all duration-150"
                  onClick={enhanceText}
                  disabled={isEnhancing || !text.trim()}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    opacity: isEnhancing || !text.trim() ? 0.5 : 1,
                    pointerEvents: isEnhancing ? "none" : "auto",
                  }}
                >
                  <IoSparkles className="text-sm" />
                  {isEnhancing ? "Enhancing..." : "Enhance by AI"}
                </motion.button>
              </div>

              {/* Textarea */}
              <textarea
                className="w-full h-44 p-3 rounded-xl resize-none text-sm text-gray-200 placeholder-gray-600
                  border border-neutral-500/30 bg-white/[0.03]
                  focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.05]
                  transition-all duration-150"
                placeholder="Write your post with markdown formatting..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ AI Enhancer Result Modal ═══ */}
      <AnimatePresence>
        {showEnhancer && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-xl rounded-2xl border border-neutral-500/30 p-5 flex flex-col gap-4"
              style={{
                background:
                  "linear-gradient(160deg, #0e0e0e 0%, #0a0a0a 100%)",
                boxShadow:
                  "0 0 40px rgba(0,0,0,0.6), 0 0 1px rgba(124,58,237,0.2)",
              }}
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.18 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <IoSparkles className="text-violet-400 text-lg" />
                  <h3 className="text-white font-semibold text-base">
                    AI Enhanced Text
                  </h3>
                </div>
                <button
                  className="text-gray-500 hover:text-white text-xl transition-colors"
                  onClick={() => setShowEnhancer(false)}
                >
                  ×
                </button>
              </div>

              {/* Gradient divider */}
              <div
                className="h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.25) 50%, transparent 100%)",
                }}
              />

              {/* Result */}
              <div
                className="rounded-xl border border-neutral-500/30 p-3 max-h-64 overflow-y-auto
                  bg-white/[0.03] text-sm text-gray-300 leading-relaxed"
              >
                <pre className="whitespace-pre-wrap font-sans">
                  {enhancedResult}
                </pre>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={useEnhancedText}
                  className="flex-1 py-2 rounded-lg text-sm font-semibold text-white
                    transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
                  }}
                >
                  Use Enhanced Text
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(enhancedResult)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-violet-400
                    border border-neutral-500/30
                    hover:bg-violet-500/10 hover:border-violet-500/40
                    transition-all duration-150"
                >
                  Copy
                </button>
                <button
                  onClick={() => setShowEnhancer(false)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400
                    border border-neutral-500/30
                    hover:text-white hover:border-white/20
                    transition-all duration-150"
                >
                  Discard
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PostEditor
