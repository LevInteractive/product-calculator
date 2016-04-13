const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const renderPage = (res, contentType, file) => {
  fs.readFile(path.join(__dirname, file), (err, str) => {
    if (err) {
      return renderPage(res, 'text/html', 'app.html');
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(str, 'utf-8');
  });
};

const server = http.createServer((req, res) => {
  var path = url.parse(req.url).pathname.replace(/^\//, '');

  console.log('-- Requesting: ' + path);

  if (/^api\//.test(path)) {
    renderPage(res, 'application/json', `${path}.json`);
  } else if (/\.js$/.test(path)) {
    renderPage(res, 'application/javascript', path);
  } else if (/(\.js|\.js\.map)$/.test(path)) {
    renderPage(res, 'application/json', path);
  } else {
    renderPage(res, 'text/html', 'app.html');
  }
});

const msg = `
---------------------------------------------------
Server listening on localhost:3030.

 * App URL: http://localhost:3030
 * Saved products: http://localhost:3030/api/products
 * Products index: http://localhost:3030/api/all-products
---------------------------------------------------
`;

server.listen(3030, null, null, () => console.log(msg));
