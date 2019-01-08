const path = require('path');
const http = require('http');
const { isRealString } = require('./utils/validation');
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

    socket.on('join', (params, callback)=>{
        if(!isRealString(params.name) || !isRealString(params.room)){
            callback('Name and room name are required');
        }

        socket.join(params.room);

        socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

        socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined`))

        callback();
    });

    socket.on('createMessage',function(msg, callback){
        console.log('createMessage',msg)
        io.emit('newMessage', generateMessage(msg.from, msg.text));
        callback();
    })

    socket.on('createLocationMessage', (coords)=>{
        io.emit('newLocationMessage', generateLocationMessage('User', coords.latitude, coords.longitude))
    });

    socket.on('disconnect',()=>{
        console.log('User disconnected from server');
    })
})

server.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
});