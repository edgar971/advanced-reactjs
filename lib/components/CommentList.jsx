import React, { PureComponent } from 'react';
import Comment from './Comment';

class CommentList extends PureComponent {
  render() {
    const { comments } = this.props; 
    return (
      <div>
        <h4>Comments ({comments.length})</h4>
        {Object.values(comments).map((comment) =>
          <Comment
            key={comment.id}
            comment={comment}
          />
        )}
      </div>
    );
  }
}

export default CommentList;