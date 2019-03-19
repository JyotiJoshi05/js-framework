import express from 'express';
import webpack from 'webpack';
const webpackDevMiddleware = require('webpack-dev-middleware');
import config from './webpack.config.dev.js';
//var express = require('express');
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(7000);
console.log('Server is listening on port ', 7000);
