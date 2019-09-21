const express = require('express');
const router = express.Router();

const posts = require('../data-source/posts');

router.get('/', (req, res) => {
    res.json(posts);
});

router.get('/:id', (req, res) => {
    const {
        id
    } = req.params;
    let post = null;
    for (let i in posts) {
        if (posts[i].id == id) {
            post = posts[i];
            break;
        }
    }
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({
            msg: 'Post not found'
        })
    }
});

router.post('/', (req, res) => {
    res.send('POST /posts works!');
});

router.delete('/:id', (req, res) => {
    res.send('DELETE /posts works!');
});

router.put('/:id', (req, res) => {
    res.send('PUT /posts works!');
});

module.exports = router;