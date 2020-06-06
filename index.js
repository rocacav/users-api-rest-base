const express = require('express');
const dotenv = require('dotenv').config();

const api = require('./api');
const config = require('./config');
const Sentry = require('@sentry/node');

const app = express();
app.use(express.json());
app.use('/api', api);
Sentry.init({ dsn: 'https://6e5e2b45ddb44c3e86e357f77c866b29@o403581.ingest.sentry.io/5266436' });

app.get('/', (req, res)=>{
    res
    .sendStatus(500);
});

const server = app.listen(process.env.PORT || config.port, config.host, ()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Servidor iniciado en host ${host} puerto ${port} ...`);
});
