import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <small>By: { comment.username }</small>
      <p>{ comment.body }</p>
    </div>
  );
};

export default Comment;