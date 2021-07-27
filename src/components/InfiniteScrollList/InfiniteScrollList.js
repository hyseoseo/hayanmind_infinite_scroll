import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

import CommentCard from "../CommentCard/CommentCard";

const InfiniteScrollList = () => {
  const [commentList, setCommentList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);
  const PAGE_LIMIT = 50;

  const getCommentList = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=10`)
      .then(response => {
        setIsLoading(false);
        setCommentList(items => [...items, ...response.data]);
        setHasMore(pageNumber !== PAGE_LIMIT);
      })
      .catch(error => console.warn(error));
  };

  useEffect(() => {
    getCommentList();
  }, [pageNumber]);

  const onIntersect = async entry => {
    entry.forEach(element => {
      if (element.isIntersecting && hasMore) {
        setPageNumber(prev => prev + 1);
      }
    });
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
    <div className="content-container">
      {commentList.map(item => (
        <CommentCard key={item.id} item={item} />
      ))}
      <div ref={loader} className="loader">
        {isLoading && "Loading..."}
      </div>
    </div>
  );
};

export default InfiniteScrollList;
