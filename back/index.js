require('./models/db');
require('./config/config');
require('./config/passportConfig');


const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');
      passport = require('passport')



const routerIndex = require('./index-routing');


const app = express();
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.use('/api', routerIndex);
app.use(passport.initialize());

let port =  process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Listening on port' + port);
});
