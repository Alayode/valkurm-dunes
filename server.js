const express = require('express');
const path = require('path');

const app = express();

/** Set the dist folder as source for rendering static file */
app.use('/dist', express.static(path.join(__dirname, 'dist')));

/** Send all requests to index.html */
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/index.html'));
});

/** Tell server to listen on the port set by the environment or use port 3000 */
app.listen(process.env.PORT || 3010);

module.exports = app;
