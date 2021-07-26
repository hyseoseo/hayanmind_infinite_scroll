import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

import Comment from "./Comment";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
    font-weight: normal;
    background-color: #f2f2f2;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
  }
`;

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [pages, setPages] = useState(1);

  const getItems = async page => {
    setIsLoading(true);
    await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`).then(response => {
      setItems([...items, ...response.data]);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getItems(pages);
    setPages(pages => pages + 1);
  }, []);

  return (
    <>
      <div className="content-container">
        <div>
          {items.map(item => (
            <div key={item.id}>
              <Comment item={item} />
            </div>
          ))}
        </div>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
