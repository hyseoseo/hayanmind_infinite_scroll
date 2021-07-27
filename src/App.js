import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

import Comment from "./Comment";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: Arial, Sans-Serif;
  }

  #root {
    width: 100%;
    height: 100%;
    font-weight: normal;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pages, setPages] = useState(1);
  const loader = useRef(null);

  const getItems = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${pages}&_limit=10`).then(response => {
      setItems([...items, ...response.data]);
    });
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    getItems();
  }, [pages]);

  const onIntersect = async entry => {
    if (entry[0].isIntersecting) {
      setPages(prev => prev + 1);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(loader.current);
    return () => observer.disconnect();
  }, [loader]);

  return (
    <>
      <div className="content-container">
        {items.map((item, index) => (
          <Comment key={item.id} item={item} />
        ))}
        <div ref={loader} className="loader"></div>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
