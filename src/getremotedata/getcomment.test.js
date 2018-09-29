import getComment from './getcomment';

describe('call rest api /comments/:id', () => {
  test.each([
    [1, 'some comment'],
    [2, 'random comment'],
  ])('comment id %i ', async (commentId, expected) => {
    const res = await getComment(commentId);
    expect(res.data.body).toBe(expected);
  });
  test('comment 99 doesn\'t exist', async () => {
    const res = await getComment(99);
    expect(res).toBeNull();
  });
});
