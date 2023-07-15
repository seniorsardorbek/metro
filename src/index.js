const http = require('http');
const express = require('express');
const cors = require('cors');
const { expressMiddleware } = require('@apollo/server/express4');
const config = require('./shared/config');
const makeGraphQLServer = require('./graphql');

const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());

const server = makeGraphQLServer(httpServer);

server.start().then(() => {
  app.use('/graphql', expressMiddleware(server));

  httpServer.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
  });
});
