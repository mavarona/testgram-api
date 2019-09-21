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
    const {
        id
    } = req.params

    let index = -1;

    for (let i in posts) {
        if (posts[i].id == id) {
            index = i
            break
        }
    }

    if (index > -1) {
        const post = posts.splice(index, 1)
        res.json({})
    } else {
        res.status(404).json({
            msg: 'Post not found.'
        })
    }
});

router.put('/:id', (req, res) => {
    res.send('PUT /posts works!');
});

module.exports = router;