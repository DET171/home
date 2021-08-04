// npm run build --production=false

const express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(3000);
console.log('Server running at 3000');