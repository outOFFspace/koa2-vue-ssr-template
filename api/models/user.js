const {Schema} = require('mongoose');

module.exports = new Schema({
    username: String,
    password: String,
    email: String,
    ip: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
});
