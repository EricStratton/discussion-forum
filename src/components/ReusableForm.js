import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  let timeStamp = new Date();
  let hours = timeStamp.getHours();
  let minutes = timeStamp.getMinutes();
  return (
    <>
      <form onSubmit={ props.formSubmissionHandler }>
        <label for='content'>Post content:</label>
        <textarea name='content' placeholder='Write your post here!'/>
        <input type='hidden' name='votes' value='0'/>
        <input type='hidden' name='timeStamp' value= { hours + ":" + minutes } />
        <button type='submit'>{ props.buttonText }</button>
      </form>
    </>
  );
}


export default ReusableForm;