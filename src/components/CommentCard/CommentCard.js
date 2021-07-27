import React from "react";
import { CommentCardStyled } from "./CommentCard.styles";

const CommentCard = ({ item }) => {
  return (
    <CommentCardStyled>
      <div className="comment-id">
        <span className="comment-id-title">Comment Id</span>
        <span className="comment-id-content">{item.id}</span>
      </div>
      <div className="comment-email">
        <span className="comment-email-title">Email</span>
        <span className="comment-email-content">{item.email}</span>{" "}
      </div>
      <div className="comment-body">
        <span className="comment-body-title">Comment</span>
        <div className="comment-body-content">{item.body.substring(0, 150)}</div>{" "}
      </div>
    </CommentCardStyled>
  );
};

export default CommentCard;
