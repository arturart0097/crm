import Editor from "@monaco-editor/react";

import "./style.css";

export function CodeViewer({ code }) {
  return (
    <div className="border-code-viewer">
      <Editor
        height={800}
        defaultLanguage="html"
        value={code}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          wordWrap: "on",
          fontLigatures: true,
          scrollBeyondLastLine: false,
        }}
        theme="vs-dark"
      />
    </div>
  );
}
