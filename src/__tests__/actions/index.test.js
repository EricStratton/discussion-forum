import * as actions from './../../actions/index';
import * as constants from './../../actions/ActionTypes';

describe('discussion forum actions', () => {

  it('deletePost should create DELETE_POST action', () => {
      expect(actions.deletePost(1)).toEqual({
        type: constants.DELETE_POST,
        id: 1
    });
  });

  it('addPost should create ADD_POST action', () => {
    expect(actions.addPost({ content: 'Socks are cool.', votes: '0', timeStamp: '13:33', id: 1 })).toEqual({
      type: constants.ADD_POST,
      content: 'Socks are cool.',
      votes: '0',
      timeStamp: '13:33',
      id: 1
    });
  });

});