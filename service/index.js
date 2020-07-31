const path = require('path');
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

// parse application/json
app.use(bodyParser.json())

app.get('/test', (req, res) => { res.send('ok'); });

const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    age: Number,
    login: String,
    password: String
});

app.delete('/users', async (request,response) => {
   const { username } = request.body;

   await User.findOneAndRemove({ username });

   response.end('ok');
});

app.get('/users', async (request, response) => {
    const users = await User.find({}).exec();

    response.json(users);
});

app.post('/login', async (request, response) => {
    const { username, password } = request.body;

    const found = await User.find({
        username,
        password
    }).exec();

    if (found.length) {
	response.json(found);
    } else {
	response.status(400);
	response.end('bad credentials');
	}
});

app.post('/users', async (request, response) => {
    const { username, password, firstName, lastName, age } = request.body;

console.log(request.body);

    const exists = await User.find({
        username,
    }).exec();

    if (exists.length) {
        response.status(400);
        response.end('username taken');
    } else {
        const created = await new User({
            username,
            password,
            firstName,
            lastName,
            age
        }).save();

        if (created) {
            response.end('user created');
        } else {
            response.status(400);
            response.end('error creating user');
        }

    }
});

mongoose.connect('mongodb://localhost:27017/drz-app', {useNewUrlParser: true, useUnifiedTopology: true});


const port = 7840


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
