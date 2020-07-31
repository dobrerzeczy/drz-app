require(`./mongoDB/mongoose`)

const Post = require(`./mongodb/models/post`)
const express = require(`express`);
const bodyParser = require(`body-parser`);


const app = express();
const port = 3001;

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, (error) => {
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(`Listening at http://localhost:${port}`)
    }
})

app.get(`/`, (req, res) => {
    res.send(`czesc!`)
})

app.post(`/addPost`, (req, res) => {
    if(req)
    {
        console.log(`ktos dodaje post!`)
        Post.create({Post: req.body.newPost}, (err, result) => {
            if(err)
            {
                console.log(err);
            }
            else if(result)
            {
                console.log(result);
            }
        })
    }
})
