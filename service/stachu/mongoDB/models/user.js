const mongoose = require(`mongoose`);

const userSchema = mongoose.Schema({
    Login: {
        type: String,
        required: true,
        
    },
    Pass: {
        type: String,
        required: true,
        
    },
    Email: {
        type: String,
        required: true,
        
    },
})

const User = mongoose.Model(`Users`, userSchema)

module.exports = User;