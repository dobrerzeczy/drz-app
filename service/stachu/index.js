require(`./mongoDB/mongoose`)

const express = require(`express`);
const bodyParser = require(`body-parser`);


const app = express();
const port = 3001;

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
