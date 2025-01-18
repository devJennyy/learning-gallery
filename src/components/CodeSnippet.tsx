import { useState } from "react";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";
import { IoCopyOutline } from "react-icons/io5";
import { Task01Data } from "@/data/CodeSnippetData";
import "../styles/code-editor.css";

const customLanguages = {
  ...languages,
  js: {
    ...languages.js,
    operator: undefined,
  },
};

const CodeSnippet = () => {
  const [copy, setCopy] = useState(false);
  return (
    <div
      id="code-editor"
      className="w-full px-20 h-screen flex justify-center items-center"
    >
      <div className="max-w-full rounded-md text-justify border border-[#1E293B]">
        <div className="flex justify-between items-center px-2 pr-5 py-2 text-sm bg-[#111827]">
          <div className="flex">
            <button className="px-4 py-2 bg-[#1E293B] rounded-md">
              Beginner
            </button>
            <button className="px-4 py-2 rounded-md">Advance</button>
          </div>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              Copied
            </button>
          ) : (
            <button
              onClick={() => {
                navigator.clipboard.writeText(Task01Data);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
              className="py-1 inline-flex items-center gap-1"
            >
              <IoCopyOutline />
              <p>Copy</p>
            </button>
          )}
        </div>

        <div className="p-3">
          <div
            className="h-[25rem]"
            style={{
              padding: "20px",
              backgroundColor: "#030608",
              lineHeight: "1.5",
              border: "1px solid #1E293B",
              borderRadius: "5px",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              overflowY: "auto",
              overflowX: "hidden",
              scrollbarWidth: "thin",
              scrollbarColor: "#4B5563 #111827",
            }}
          >
            <pre
              style={{
                margin: 0,
                fontFamily: "monospace",
                fontSize: "14px",
                color: "#E5E7EB",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
              dangerouslySetInnerHTML={{
                __html: highlight(Task01Data, customLanguages.js, "javascript"),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
