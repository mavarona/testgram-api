const mongoose = require('mongoose')

//3. Create a Schema (Structure)
const PostSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})


//4. Create a model
const Post = mongoose.model('Post', PostSchema)

module.exports = Post