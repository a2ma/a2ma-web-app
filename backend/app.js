const express = require('express');
const bodyParser = require('body-parser');

const Post = require('./models/post');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);
    console.log("Hello");
    res.status(201).json({
        message: 'Post added successfully.'
    });
});

app.get("/api/posts", (req, res, next) => {
    const posts = [
        {
            id: 'adflk4530498adfj093okadf0',
            title: 'First post from the server-side!',
            content: 'Hi! I\'m a post that was made from the server side. So far I\'m just dummy data but one day I\'ll be coming from the database.'
        },
        {
            id: 'adflk4530498adadsfadsfwef3',
            title: 'Second post from the server-side!',
            content: 'Hi! I\'m a post that was made from the server side. So far I\'m just dummy data but one day I\'ll be coming from the database.'
        },
        {
            id: 'daflk230948lkerw0908w9e0rf',
            title: 'Third post from the server-side!',
            content: 'Hi! I\'m a post that was made from the server side. So far I\'m just dummy data but one day I\'ll be coming from the database.'
        }
    ];
    res.status(200).json({
        message: 'Posts fetched succesfully',
        posts: posts
    });
});

module.exports = app;