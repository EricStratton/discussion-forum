import * as actions from './../../actions/index';
import * as constants from './../../actions/ActionTypes';

describe('discussion forum actions', () => {

  it('deletePost should create DELETE_POST action', () => {
      expect(actions.deletePost(1)).toEqual({
        type: constants.DELETE_POST,
        id: 1
    });
  });
});