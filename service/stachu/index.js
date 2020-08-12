require(`./mongoDB/mongoose`)

const Post = require(`./mongodb/models/post`)
const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require('cors');


const app = express();
const port = 3001;

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

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
        Post.create({Title: req.body.Title, Content: req.body.Content, Date: new Date().toLocaleString(),}, (err, result) =>{
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

app.get(`/Posts`, async (req, res) => {
    const Posts = await Post.find({}).exec();

    res.json(Posts);
})
