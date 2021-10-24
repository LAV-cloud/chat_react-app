const express = require('express');
const mongoose = require('mongoose');
require('./app/models');
const http = require('http');

const config = require('./config');
const { PORT, mongoUri, availableCors } = config.app;

const app = express();

config.express(app);
config.router(app);

const server = http.createServer(app);
const socket = require('./app/socket/index');
socket(server, availableCors);

mongoose
  .connect(mongoUri)
  .then(() =>
    server.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
  )
  .catch((err) => console.error(`Error connecting to mongo ${mongoUri}`, err));
