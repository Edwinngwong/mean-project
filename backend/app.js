const express = require('express');

const app = express();



app.use('/api/posts' ,(req, res, next) => {
    const posts = [
        { 
            id: '12345', 
            title: 'first server-side post', 
            content: 'this come from server'
        },
        { 
            id: '12346', 
            title: 'second server-side post', 
            content: 'this come from server 2'
        }
    ];
    res.status(200).json({
        message: 'Posts fetched succesfully',
        posts: posts
    });
});

module.exports = app;