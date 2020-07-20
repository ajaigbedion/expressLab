const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send(`
    <html>
        <head>
            <title>My site</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>
    `)
})

app.get('/puppies', (req,res) => {
    res.send(`
    <html>
        <head>
            <title>My site</title>
        </head>
        <body>
            <h1>This is where the good boys go</h1>
        </body>
    </html>
    `)
})

app.get('/kittens', (req,res) => {
    res.send(`
    <html>
        <head>
            <title>My site</title>
        </head>
        <body>
            <h1>This is where the cool cats go</h1>
        </body>
    </html>
    `)
})

const PORT = 1337;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

