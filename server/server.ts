import { createProxyMiddleware } from 'http-proxy-middleware';
var cors = require('cors')
import express, { Application } from 'express';
import apicache from 'apicache'

const app: Application = express();
app.use(cors())
const cache = apicache.middleware;
const proxy = createProxyMiddleware({
  target: 'https://www.home24.de',
  changeOrigin: true,
  logLevel: 'debug',
});

app.post('/graphql',  proxy);
app.listen(3001);
