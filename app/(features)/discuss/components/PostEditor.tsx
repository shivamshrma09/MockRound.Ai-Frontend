"use client"
import React, { useState } from 'react'
import { createPost, getUserData } from '../services/postService'
import { IoCreateOutline, IoSparkles } from "react-icons/io5";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "framer-motion";
import { CiImageOn } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import { FaBold } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";

const API_KEY = "AIzaSyBNs3G_xMHFROHR4lAVPWHh6t-q-Ze6_jg";
const genAI = new GoogleGenerativeAI(API_KEY);

interface PostEditorProps {
  onPostCreated?: () => void;
}

function PostEditor({ onPostCreated }: PostEditorProps) {
  const [showmodal, setshowmodal] = useState(false)
  const [showEnhancer, setShowEnhancer] = useState(false);
  const [enhancedResult, setEnhancedResult] = useState("");
  const [text, setText] = useState(`# Welcome to MockRound.AI Discussion

This is a **bold text** example and this is *italic text*.

## Features Available:

### Text Formatting
- **Bold text** using **text**
- Links: [Visit Google](https://google.com)
- Images: ![Sample Image](https://via.placeholder.com/300x200)

### Code Examples

Inline code: \`console.log('Hello World')\`

Code block:
\`\`\`javascript
function greetUser(name) {
  return \`Hello, \${name}! Welcome to MockRound.AI\`;
}

console.log(greetUser('Developer'));
\`\`\`

### More Examples

> This is a blockquote example

**List of interview topics:**
1. Data Structures
2. Algorithms
3. System Design
4. JavaScript/React
5. Node.js/Backend

**Happy coding! 🚀**`)

  const enhanceText = async () => {
    if (!text.trim()) return;

    try {
      const enhancePrompt = `You are a text enhancement AI for a developer discussion forum. Take the user's text and:
1. Fix grammar and spelling
2. Improve structure and flow
3. Make it more professional and clear
4. Keep the original meaning
5. Format it nicely with proper markdown
6. Make it suitable for a tech discussion post

User text: ${text}`;

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(enhancePrompt);
      const response = await result.response.text();
      
      setEnhancedResult(response);
      setShowEnhancer(true);
    } catch (error) {
      console.error("Enhancement Error:", error);
      setEnhancedResult("Enhancement service temporarily unavailable. Please try again later.");
      setShowEnhancer(true);
    }
  };

  const useEnhancedText = () => {
    setText(enhancedResult);
    setShowEnhancer(false);
    setEnhancedResult("");
  };

  const addBold = () => {
    setText(text + '**bold text**')
  }

  const addImage = () => {
    setText(text + '![image](image-url)')
  }

  const addLink = () => {
    setText(text + '[link text](url)')
  }

  const addHeading = (level: number) => {
    setText(text + '\n' + '#'.repeat(level) + ' Heading')
  }

  const addCode = () => {
    setText(text + '\n```\ncode here\n```')
  }

  const handlePost = async () => {
    if (!text.trim()) return;
    
    try {
      const userData = getUserData();
      const postData = {
        content: text,
        authorId: userData.userId,
        author: {
          username: userData.username,
          avatar: userData.avatar
        }
      };
      
      const result = await createPost(postData);
      if (result.success) {
        setshowmodal(false);
        setText('');
        if (onPostCreated) {
          onPostCreated();  
        }
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
   <div>
      <button className='bg-[#0ddd3a] curcer-pointer flex gap-1 w-28 mt-4 px-2 h-8 shadow-lg shadow-black/50 items-center text-bold rounded-xl font-bold text-xl'
        onClick={() => setshowmodal(!showmodal)}
      ><IoCreateOutline className='text-3xl font-bold  '/>Create</button>

      {showmodal && (
        <div className="fixed inset-0 bg-black bg-opacity-1  bg-black/75 flex items-center justify-center">
          <div className="bg-white border-2 rounded-xl border-black p-3 w-[700px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-[#d97757] text-xl"> Create Post</h3>
              <div className='flex flex-row gap-2'>

             <button 
                className="bg-[#d97757] text-white px-5 py-2 rounded-xl hover:bg-gray-800 border-2 font-bold"
                onClick={handlePost}
              >
                Post
              </button>

                <button
                      onClick={() => setShowEnhancer(false)}
                      className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>

            </div>
             </div>
            
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-2">
                <button 
                  className="border hover:bg-gray-100 p-1 flex items-center"
                  onClick={addBold}
                  title="Bold"
                >
                  <FaBold/>
                </button>
                <button 
                  className="border hover:bg-gray-100 p-1 flex items-center"
                  onClick={addImage}
                  title="Image"
                >
                  <CiImageOn/>
                </button>
                <button 
                  className="border hover:bg-gray-100 p-1 flex items-center"
                  onClick={addLink}
                  title="Link"
                >
                  <CiLink/>
                </button>
                <button 
                  className="border hover:bg-gray-100 p-1 flex items-center"
                  onClick={addCode}
                  title="Code Block"
                >
                  <FaCode/>
                </button>
              </div>
              <div className="flex gap-1">
                <button className="border px-2 py-1 hover:bg-gray-100 text-sm" onClick={() => addHeading(1)}>H1</button>
                <button className="border px-2 py-1 hover:bg-gray-100 text-sm" onClick={() => addHeading(2)}>H2</button>
                <button 
                  className="border px-2 py-1 hover:bg-gray-100 text-sm" 
                  onClick={() => addHeading(3)}
                >
                  H3
                </button>
                
                <motion.button
                  className="border px-3 py-1 hover:bg-[#d97757] hover:text-white text-sm bg-[#d97757]/10 text-[#d97757] font-medium transition-colors flex items-center gap-1"
                  onClick={enhanceText}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoSparkles className="text-sm" />
                  Enhance by AI
                </motion.button>
              </div>            </div>
            
            {showEnhancer && (
              <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white border-2 rounded-xl border-[#d97757] p-4 w-[600px] max-h-[80vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl text-[#d97757]">Enhanced Text</h3>
                    <button 
                      className="text-gray-500 hover:text-gray-700 text-xl"
                      onClick={() => setShowEnhancer(false)}
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-gray-700">AI Enhanced Version:</h4>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm leading-relaxed max-h-64 overflow-y-auto">
                      <pre className="whitespace-pre-wrap font-sans">{enhancedResult}</pre>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={useEnhancedText}
                      className="bg-[#d97757] hover:bg-[#b85d3a] text-white px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                      Use Enhanced Text
                    </button>
                    <button
                      onClick={() => navigator.clipboard.writeText(enhancedResult)}
                      className="border border-[#d97757] text-[#d97757] hover:bg-[#d97757] hover:text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Copy to Clipboard
                    </button>
                  
                  </div>
                </div>
              </div>
            )}
            
            <textarea 
              className="w-full h-40 p-3 border-2 rounded-xl border-neutral-500 resize-none text-base" 
              placeholder="Write your post with markdown formatting..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            
            <div className="flex gap-3 mt-4">
              
            
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostEditor
