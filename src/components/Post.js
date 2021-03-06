import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <>
      <div className='hover' onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.content}</h3>
      </div>
    </>
  );
}

Post.propTypes = {
  content: PropTypes.string,
  votes: PropTypes.number,
  timeStamp: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
}

export default Post;