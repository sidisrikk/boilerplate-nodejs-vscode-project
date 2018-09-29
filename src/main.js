import { get } from 'axios';
import to from 'await-to-js';
import { log } from 'util';

const main = async () => {
  const [err, res] = await to(get('http://localhost:3000/posts/1'));
  if (err) {
    log(err.message);
    return 0;
  }
  log(res.data);
  return 0;
};
main();
