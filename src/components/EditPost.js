import React from 'react';
import { v4 } from "uuid";
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditPost(props) {
  function handleEditPostFormSubmission(e) {
    e.preventDefault();
    props.onEditPost({
      content: e.target.content.value,
      votes: e.target.votes.value,
      timeStamp: e.target.timeStamp.value,
      id: v4()
    })
  }
  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Edit This Post" />
    </>
  )
}

EditPost.propTypes = {
  onEditPost: PropTypes.func
};

export default EditPost;