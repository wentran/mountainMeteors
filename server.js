const path = require('path');
const express = require('express');
const webpack = require('webpack');
// const config = require('./webpack.config');
// const webpackMiddleware = require('webpack-dev-middleware');
const cors = require('cors');
// const compiler = webpack(config);
const bodyParser = require('body-parser');

const app = express();
const router = express.Router()

router.use((req, res, next) => {
  console.log('routing all requests');
  next();
});
// app.use(webpackMiddleware(compiler))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const accountRoutes = require('./server/routes/accountRoutes');
const listingRoutes = require('./server/routes/listingRoutes');
const rankingRoutes = require('./server/routes/rankingRoutes');

app.use('/api', accountRoutes);
app.use('/api', listingRoutes);
app.use('/api', rankingRoutes);


app.get('/public/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public/bundle.js'));
});

app.get('*', function(req, res) {
  console.log('req.url', req.url);
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(2500, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:2500');
});
