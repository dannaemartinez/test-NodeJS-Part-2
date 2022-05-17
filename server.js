const express = require("express");
const services = require('./services');
const parser = require("body-parser");
const { posts } = require("./endpoints");
const { authenticate } = require("./middlewares");
const app = express();
const port = 3000;


app.use(parser.urlencoded({ extended: false }));

app.use(parser.json());

const postHandlers = posts(services);

app.post('/', authenticate, postHandlers.post);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app