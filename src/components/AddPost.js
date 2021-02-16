import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function AddPost(props) {
  function handleNewPostFormSubmission(e) {
    e.preventDefault();
    props.onNewPostCreation({
      content: e.target.content.value,
      votes: e.target.votes.value,
      timeStamp: e.target.timeStamp.value,
      id: v4()
    })
  }
  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Add This Post" />
    </>
  )
}

AddPost.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default AddPost;