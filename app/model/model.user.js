const mongoose = require('mongoose');

// blog schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// blog model
module.exports = mongoose.model('User', userSchema);