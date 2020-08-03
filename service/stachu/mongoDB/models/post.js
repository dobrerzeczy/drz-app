const mongoose = require(`mongoose`);

const postSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true,
        
    },
    Content: {
        type: String,
        required: true,
        
    },
    Date,

})

const Post = mongoose.model('Posts', postSchema) 

module.exports = Post