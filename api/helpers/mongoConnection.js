/**
 * Created by ihor on 23.03.18.
 */
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const config = require('config');

const dbConnections = {};
mongoose.Promise = bluebird.Promise;

function createConnection(dbName) {
    dbConnections[dbName] = mongoose.createConnection(
        config.mongodb.ip,
        dbName,
        config.mongodb.port,
        config.mongodb.options
    );
    dbConnections[dbName].on('error', console.error.bind(console, `Connection error to database ${dbName} :`));
    return dbConnections[dbName];
}

module.exports = (dbName) => {
    if (dbConnections.hasOwnProperty(dbName)) {
        console.log(`Mongo connections ${dbName} alredy exsist!`);
        return dbConnections[dbName];
    }
    console.log(`Create new Mongo connection to ${dbName}!`);
    return createConnection(dbName);
};
