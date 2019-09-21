const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postsController');
const postsValidator = require('../controllers/validators/postsValidator');

router.get('/', postsController.getPosts);

router.get('/:id', postsController.getSinglePost);

router.post('/', [
    postsValidator.addPostValidator,
    postsController.addPost
]);

router.delete('/:id', postsController.deletePost);

router.put('/:id', postsController.updatePost);

module.exports = router;