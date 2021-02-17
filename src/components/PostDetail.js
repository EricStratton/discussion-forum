import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props){
const { post, onClickingDelete } = props;
  return (
    <>
      <div>
        <p>{post.content}</p>
        <p>{post.votes}</p>
        <p>{post.timeStamp}</p>
        <button onClick={ () => onClickingDelete(post.id) }>Remove Post</button>
      </div>
    </>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object
}

export default PostDetail;