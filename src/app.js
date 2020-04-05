const express = require("express");
const app = express();
const port = 3000;

app.get('/name', (req, res) => res.send("hello word"));

app.post('/name2/:age', (req, res) => {
    let {age} = req.params
    res.json({
        age
    })
});

const member = require('./member.router');
const order = require('./order.router');

app.use('/member',member);
app.use('/order',order);

app.listen(port, () => console.log(`listening on the ${port}`));
