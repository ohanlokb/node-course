const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'/../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('New user connected');

    socket.emit('newEmail', {
        from: 'kev@test.com',
        text: 'Hi'
    });

    socket.on('createEmail', (newEmail)=>{
        console.log("Create email", newEmail);
    });

    socket.on('disconnect', ()=>{
        console.log("Disconnected from server");
    });
});

server.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
});