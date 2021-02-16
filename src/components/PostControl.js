import React from 'react';
import PostList from './PostList';
import AddPost from './AddPost';
import EditPost from './EditPost';
import PostDetail from './PostDetail';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    console.log(this.state.selectedPost);
    this.setState({ selectedPost: selectedPost });
  }
  
  handleDeletingPostFromList = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({ selectedPost: null });
  }

  handleEditPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, content, votes, timeStamp } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      content: content,
      votes: votes,
      timeStamp: timeStamp
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, content, votes, timeStamp } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      content: content,
      votes: votes,
      timeStamp: timeStamp
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false })
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditPost post={ this.state.selectedPost } onEditPost={ this.handleEditPostInList } />
      buttonText = 'Return to Post List';
    } else if (this.state.selectedPost != null){
      console.log(this.state.selectedPost);
      currentlyVisibleState = <PostDetail post={ this.state.selectedPost } />
      buttonText = 'Return to Post List';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddPost onNewPostCreation={ this.handleAddingNewPostToList } />
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostList postList={ this.props.masterPostList } onPostSelection={ this.handleChangingSelectedPost } />
      buttonText = "Add Post";
    }
    return (
      <>
        { currentlyVisibleState }
        <button onClick={ this.handleClick }>{ buttonText }</button>
      </>
    )
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;