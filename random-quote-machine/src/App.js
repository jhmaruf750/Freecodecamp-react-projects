import React, { useState, useEffect } from "react";
import "./App.css"; // Add CSS for styling

const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William B. Sprague",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
];

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div id="quote-box" className="container">
      <div className="quote-content">
        <h2 id="text">"{quote.text}"</h2>
        <p id="author">- {quote.author}</p>

        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.text}" - ${quote.author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
          <button id="new-quote" onClick={generateQuote}>
            New Quote
          </button>
        </div>
      </div>

      <footer className="footer">
        <p>Created by JH MaRuF | <a href="https://github.com/jhmaruf750" target="_blank">GitHub</a></p>
      </footer>
    </div>
  );
}

export default App;
