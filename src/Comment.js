import React from "react";
import { CommentStyled } from "./Comment.styles";

const Comment = ({ item }) => {
  return (
    <CommentStyled>
      <div>Comment Id {item.id}</div>
      <div>Email {item.email} </div>
      <div>Comment {item.body} </div>
    </CommentStyled>
  );
};

export default Comment;
