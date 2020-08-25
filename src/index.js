const express = require('express');
const config = require('./server/config');

// Connection and starting database
require('./database');

const app = config(express());

// Starting the expressjs server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})