const mongoose = require('mongoose');
let uri = 'mongodb+srv://jesus_grey:ramoussa123II@cluster0-7lmc4.mongodb.net/testEval?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser: true}).then(
    () => { console.log('Database connection successfull ')},
    err => { console.log('Connot connect to the data base')}
);

require('./user.model');