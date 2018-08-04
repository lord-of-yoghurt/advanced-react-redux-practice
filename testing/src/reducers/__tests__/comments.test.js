import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

describe('Comments reducer', () => {
  it('handles actions of the SAVE_COMMENT type', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'Testing rules!'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['Testing rules!']);
  });

  it('handles actions of unknown types', () => {
    const newState = commentsReducer([], { type: 'dunno' });

    expect(newState).toEqual([]);
  });
});
