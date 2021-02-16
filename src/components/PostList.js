import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <>
      {Object.values(props.postList).map((post) =>
        <Post
          whenPostClicked={ props.onPostSelection }
          content={ post.content }
          votes={ post.votes }
          timestamp={ post.timestamp } />
      )};
    </>
  )
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
}

export default PostList;