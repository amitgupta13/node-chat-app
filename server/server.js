const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'))

    socket.on('createMessage',function(msg, callback){
        console.log('createMessage',msg)
        io.emit('newMessage', generateMessage(msg.from, msg.text));
        callback('This is from the server');
    })

    socket.on('createLocationMessage', (coords)=>{
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    });

    socket.on('disconnect',()=>{
        console.log('User disconnected from server');
    })
})

server.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
});