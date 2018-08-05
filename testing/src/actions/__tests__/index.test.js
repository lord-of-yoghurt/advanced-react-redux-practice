import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

describe('saveComment action creator', () => {
  it('has the correct type', () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const action = saveComment('i <3 testing');

    expect(action.payload).toEqual('i <3 testing');
  });
});
