import { createReadStream } from 'fs';
import { join, resolve } from 'path';
import { EventEmitter } from 'events';
import { parse } from 'properties';

class Languages extends EventEmitter {
  constructor(lang, callback) {
    super(lang, callback);
    this.chain(this.root(`./languages-chain.json`), (data) => {
      parse(data[lang], {
        path: true,
        namespaces: true
      }, (err, data) => {
        if (!err) {
          super.emit('done', data);
        } else {
          error(chalk.red(err));
        };
      });
    });
    super.addListener('done', callback);
  };
  
  chain(path, callback) {
    const cache = [],
      socket = createReadStream(path);

    socket.addListener('data', buffer => {
      cache.push(buffer);
    });
    socket.addListener('end', () => {
      callback(JSON.parse(cache.join('')));
    })
  };
  
  root(filename) {
    return join(resolve(), 'languages', filename ?? '');
  };
}

export default Languages;