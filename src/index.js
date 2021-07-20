const express = require('express');

const app = express();
const port = 5000;

require('./db');

app.use(require('./routes/index.routes'))
app.listen(port);
console.log('Server on port', port);
