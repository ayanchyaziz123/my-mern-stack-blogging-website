const Post = require('../models/posts');
const data = [
    {
        "title": "django new blog",
        "description": "this is new blog of fajngo"
    },
    {
        "title": "django new blog222222222222222222",
        "description": "this is new blog of fajngo"
    },
]

exports.newPost = async (req, res, next) =>{
    console.log(req.body);
    const post = await Post.create(data);
    res.status(201).json({
        success: true,
        post
    })
}


exports.getPosts = async (req, res, next) => {
    const posts = await Post.find();
    res.status(200).json(
        {
            success: true,
            count: posts.length,
            posts
        }
    )
}