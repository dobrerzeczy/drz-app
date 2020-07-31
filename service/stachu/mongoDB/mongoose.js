const mongoose = require(`mongoose`);
const mongoURL = `mongodb://localhost:27017/PROJEKTT`


mongoose.connect(mongoURL, {

    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}, (error, done) => {
    if(error)
    {
        console.log(error);
    }
    else if(done)
    {
        console.log(`Polaczono z mongoDB!`);
    }
})