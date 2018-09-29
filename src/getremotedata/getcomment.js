import { get } from 'axios';
import to from 'await-to-js';
import { log } from 'util';

const getComment = async (id) => {
  const [err, res] = await to(get(`http://localhost:3000/comments/${id}`));
  if (err) {
    log(err.message);
    return null;
  }
  log(res.data);
  return res;
};

export default getComment;
