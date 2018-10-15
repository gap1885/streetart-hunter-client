const express = require('express');
const path = require('path');
const cors = require('cors');

const pkg = require('./package.json');
const app = express();


const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      const path = 'https://' + req.get('Host') + req.url;
      return res.redirect(path);
    }
    next();
  };
};

app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));

app.use(forceSSL());

app.use(express.static(path.join(__dirname, '/dist/streetart-hunter')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(path.join(__dirname, '/dist/streetart-hunter/index.html')));
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(pkg.name + ' ' + pkg.version + ' listening on ' + port));