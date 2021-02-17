import * as c from '../actions/ActionTypes';

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
})

export const addPost = (post) => {
  const { content, votes, timeStamp, id } = post;
  return {
    type: c.ADD_POST,
    content,
    votes,
    timeStamp,
    id
  }
}

export const upVote = (post) => {
  const { content, votes, timeStamp, id } = post;
  return {
    type: c.ADD_POST,
    content,
    votes: votes + 1,
    timeStamp,
    id
  }
}

export const downVote = (post) => {
  const { content, votes, timeStamp, id } = post;
  return {
    type: c.ADD_POST,
    content,
    votes: votes - 1,
    timeStamp,
    id
  }
}