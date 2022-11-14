const Datastore = require('nedb');

const db = new Datastore({
    filename: 'dbfiles/creditcard.db', // provide a path to the database file 
    autoload: true, // automatically load the database
    timestampData: true // automatically add and manage the fields createdAt and updatedAt
});

module.exports = db;