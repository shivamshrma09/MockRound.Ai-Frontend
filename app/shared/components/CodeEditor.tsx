"use client";
import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { lineNumbers } from "@codemirror/view";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [selectedLang, setSelectedLang] = useState("JavaScript");

  const languageExtensions = {
    JavaScript: [javascript(), lineNumbers()],
    Python: [python(), lineNumbers()],
    Java: [java(), lineNumbers()],
    "C++": [cpp(), lineNumbers()],
  };

  return (
    <div className="h-full flex flex-col bg-black">
      <div className="flex items-center justify-between p-2 border-b border-gray-600">
        <h3 className="text-white text-sm">Code Editor</h3>
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
          className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-xs"
        >
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
        </select>
      </div>
      <div className="flex-1">
        <CodeMirror
          value={code}
          height="100%"
          extensions={languageExtensions[selectedLang]}
          onChange={(value) => setCode(value)}
          theme="dark"
          className="[&_.cm-editor]:!bg-black [&_.cm-content]:!bg-black [&_.cm-gutter]:!bg-black"
          style={{ backgroundColor: "#000000", fontSize: "14px" }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;