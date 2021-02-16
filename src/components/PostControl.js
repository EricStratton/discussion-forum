import React from 'react';
import PostList from './PostList';
import AddPost from './AddPost';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null
      // Define default state later //
    };
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({ selectedPost: selectedPost });
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

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null
        // Add editing default state later //
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
    if (this.state.formVisibleOnPage) {
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

export default PostControl;