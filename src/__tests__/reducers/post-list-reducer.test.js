import postListReducer from '../../reducers/post-list-reducer';

describe ('postListReducer', () => {

  let action;
    const postData = {
      content: 'I am making a post.',
      votes: '0',
      timeStamp: 1/1/1111,
      id: 1
    };

  const currentState = {
    1: { content: 'Got a sick new T-shirt.',
    votes: '5',
    timeStamp: 1/1/1111,
    id: 1 },
    2: { content: 'Socks are cool.', 
    votes: '15',
    timeStamp: 1/1/1111,
    id: 2 }
  }

  test('Should return default state if there is no action passed into reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
  
  test('Should succesfully add new post data to masterPostList', () => {
    const { content, votes, timeStamp, id } = postData;
    action = {
      type: 'ADD_POST',
      content,
      votes,
      timeStamp,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id] : {
        content,
        votes,
        timeStamp,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: { content: 'Socks are cool.', 
      votes: '15',
      timeStamp: 1/1/1111, 
      id: 2 }
    });
  });

});