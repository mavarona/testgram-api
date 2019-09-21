const express = require('express')
const router = express.Router()

const postsController = require('../controllers/postsController')

router.get('/', postsController.getPosts)

router.get('/:id', postsController.getSinglePost)

router.post('/', postsController.addPost)

router.delete('/:id', postsController.deletePost)

router.put('/:id', postsController.updatePost)

module.exports = router