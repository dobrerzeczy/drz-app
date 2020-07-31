const mongoose = require(`mongoose`);

const postSchema = mongoose.Schema({
    Post: {
        type: String,
        required: true,
        
    },

})

const Post = mongoose.Model(`Posts`, postSchema)

module.exports = Post;