const mongoose = require('mongoose');

// blog schema
const blogSchema = new mongoose.Schema({
    title: String,
    content: String
});

// blog model
module.exports = mongoose.model('Blog', blogSchema);