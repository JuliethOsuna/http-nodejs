import { createServer } from 'http';
const fs = require('fs');

createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/javascript');
  try {
    const jsFile = fs.readFileSync('main.js');
    res.write(jsFile);
    res.end();
  }catch(e) {
      res.statusCode = 404;
      res.write('Bad request');
      res.end();
  }
}).listen(process.env.PORT);
