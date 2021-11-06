const mongoose = require('mongoose');

var postsSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    description: String,
    content: String,
    tags: String,
    create_time: Date,
    update_time: Date,
    user_id: Number
});

module.exports = mongoose.model('post', postsSchema);