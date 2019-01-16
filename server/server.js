const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,'/../public');
const port = process.env.PORT || 8080;
let app = express();

app.use(express.static(publicPath));
debugger;

app.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
});