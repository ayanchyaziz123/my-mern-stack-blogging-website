const express = require('express');
const router = express.Router();

const {getPosts, newPost } = require('../controllers/postController');
router.route('/posts').get(getPosts);
router.route('/posts/new').post(newPost);


module.exports = router;