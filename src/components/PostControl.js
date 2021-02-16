import React from 'react';

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
    if (!this.state.formVisibleOnPage) {
      currentlyVisibleState = <PostList postList={ this.props.masterPostList } onPostSelection={ this.handleChangingSelectedPost }>
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={ this.handleClick }>{buttonText}</button>
      </>
    )
  }
}