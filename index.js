const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>this is the home page</h1>')
})
app.get('/about',(req, res) =>{
    res.send('<h1>this is about page</h1>');
})
app.listen(5050, () =>{
    console.log('server is started');
})