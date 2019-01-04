const socket = io();

socket.on('connect', function(){
    console.log('connected to server');

        socket.emit('createEmail', {
            to:'a@a.com',
            text:'wawa re tawa roti'
        })

        socket.emit('createMessage', {
            from:'a@a.com',
            text:'yoman'
        })
});

 socket.on('disconnect', function(){
    console.log('Disconnected'); 
});

socket.on('newEmail', function(email){
    console.log('new Email',email);
})

socket.on('newMessage',function(msg){
    console.log('newMessage', msg);
})