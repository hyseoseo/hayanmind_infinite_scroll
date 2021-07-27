import styled from "styled-components";

export const CommentCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;
  height: 193px;
  border-radius: 20px;
  background-color: #f8f9fa;
  border: 0.5px solid #ced4da;
  margin-top: 6px;
  margin-bottom: 6px;
  color: #212529;
  font-size: 18px;

  .comment-id {
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .comment-id-title,
  .comment-email-title,
  .comment-body-title {
    font-weight: 600;
  }

  .comment-id-content {
    margin-left: 12px;
  }

  .comment-email {
    margin-top: 12px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .comment-email-content {
    margin-left: 12px;
  }

  .comment-body {
    margin: 20px;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
  }
`;
