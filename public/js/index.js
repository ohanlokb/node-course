let socket = io();

socket.on('connect', function (){
    console.log('Connected to server.');
    
    socket.emit('createMessage', {
        from: 'kev@test.com',
        text: 'Hi'
    });
});

socket.on('disconnect', function (){
    console.log('Disconnected to server.');
});

socket.on('newMessage', function (message){
    console.log('New message', message);
});