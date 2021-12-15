import { useCallback, useEffect, useState } from "react";

function App() {

  var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  const [data, setData] = useState(null);


  async function updateQuote() {
      try {
          const response = await fetch("https://api.quotable.io/random");
          const {statusCode, statusMessage, ...data} = await response.json();
          if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
          setData(data);
          document.body.style.backgroundColor = 
            document.body.style.color = 
            document.getElementById("new-quote").style.backgroundColor = 
            document.getElementById("twitter-button").style.backgroundColor =
            colors[getRandomNum(0, colors.length - 1)];
      } catch (error) {
          console.error(error);
          setData({content: "Oops... Something went wrong"});
      }
  }

  const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    console.log('use effect ran');
    updateQuote();
  }, []);

  if (!data) return null;

  return ( 
    <div id="quote-box">
      <div id="text">
          <p><i className="fas fa-quote-left"></i> {data.content}</p>
      </div>
      <div id="author">
        <p>- {data.author}</p>
      </div>
      <div id="buttons">
        <a href={`https://twitter.com/intent/tweet?text="${data.content}" - ${data.author}`} className="button" id="twitter-button" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <button id="new-quote" onClick={updateQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;

// Sample data from https://api.quotable.io/random:
// {"_id":"Oh-e1-oygRPX","tags":["famous-quotes"],"content":"To be wronged is nothing unless you continue to remember it.","author":"Confucius","authorSlug":"confucius","length":60,"dateAdded":"2021-05-12","dateModified":"2021-05-12"}