const Post = require('../models/Post')
const posts = require('../data-source/posts')

exports.getPosts = () => {
    return new Promise(resolve => {
        resolve(posts)
    })
}

exports.addPost = (caption, imageUrl, description) => {

    const newId = posts.length === 0 ? 1 : posts[posts.length - 1].id + 1

    const newPost = new Post(
        newId,
        caption,
        imageUrl,
        description
    )

    posts.push(newPost)

    return new Promise(resolve => resolve(newPost))
}

exports.getSinglePost = (id) => {
    let post = null;

    for (let i in posts) {
        if (posts[i].id == id) {
            post = posts[i]
            break;
        }
    }

    return new Promise((resolve, reject) => {
        if (post) {
            resolve(post)
        } else {
            reject()
        }
    })
}

exports.updatePost = () => {}

exports.deletePost = (id) => {
    let index = -1;

    for (let i in posts) {
        if (posts[i].id == id) {
            index = i
            break
        }
    }

    return new Promise((resolve, reject) => {
        if (index > -1) {
            const post = posts.splice(index, 1)
            resolve(post)
        } else {
            reject()
        }
    })
}