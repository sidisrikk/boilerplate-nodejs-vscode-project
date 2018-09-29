import getComment from './getcomment';

describe('call rest api /comments/:id', () => {
  test.each([
    [1, 'some comment'],
    [2, 'random comment'],
  ])('should ', async (commentId, expected) => {
    const res = await getComment(commentId);
    expect(res.data.body).toBe(expected);
  });
  test('comment doesn\'t exist', async () => {
    const res = await getComment(99);
    expect(res).toBeNull();
  });
});
