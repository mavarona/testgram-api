class Post {
    constructor(id, caption, imageUrl, description = "") {
        this.id = id;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.description = description;
        this.active = true;
        this.date = new Date();
    }
}

module.exports = Post;