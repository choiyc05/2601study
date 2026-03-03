// server.mjs
import { createServer } from 'node:http';
import { text , controller } from './main.js';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8;' });

  const html = controller(req);
  res.end(html);
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
