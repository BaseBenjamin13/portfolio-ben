
const express = require('express');
const app = express();
const User = require('./db/models/users');

app.get('/api', (req, res) => {
    User.find()
        .then((data) => {
            // console.log(data);
            res.json(data);
        })
    // res.json({ "users": ["user1", "user2", "user3", "user4"] });
})


const port = 5005;
app.listen(port, () => { console.log(`Server Listening on port ${port}`)});