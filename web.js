const express = require('express');
var app = express();


app.use('/home', express.static('dist'));
const port = 3000
app.listen(port);
console.log(`Server running at ${port}`);