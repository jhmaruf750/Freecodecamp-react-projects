import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

marked.setOptions({
  breaks: true,
});

function App() {
  const [markdown, setMarkdown] = useState(`# Hello, I'm JH MaRuF 👋

## Web Developer| Problem Solver

This is a **Markdown Previewer** built using React.

### Features:
- Live Markdown rendering
- Built with ❤️ using React & Marked.js
- Personal Branding Included

\`\`\`js
// Sample JavaScript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> “Creativity is intelligence having fun.” – Albert Einstein

![JH MaRuF Logo](https://avatars.githubusercontent.com/u/152607315?s=200&v=4)

[GitHub Profile](https://github.com/jhmaruf750)
`);

  return (
    <div className="App">
      <h1 className="title">Markdown Previewer</h1>
      <div className="container">
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
      <footer>
        Created by{" "}
        <a href="https://github.com/jhmaruf750" target="_blank" rel="noreferrer">
          JH MaRuF
        </a>
      </footer>
    </div>
  );
}

export default App;
