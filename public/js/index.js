
const socket = io();

socket.on('connect', function(){
    console.log('connected to server');
});

 socket.on('disconnect', function(){
    console.log('Disconnected'); 
});

socket.on('newMessage',function(msg){
    var formattedTime = moment(msg.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template, {
        text:msg.text,
        from:msg.from,
        createdAt:formattedTime
    });
        jQuery('#messages').append(html);
    // var li = jQuery('<li></li>');
    // li.text(`${msg.from} ${formattedTime}: ${msg.text}`)

    // jQuery('#messages').append(li);
})

socket.on('newLocationMessage', function(msg){
    var formattedTime = moment(msg.createdAt).format('h:mm a');
    var template = jQuery('#location-message-template').html();
    var html = Mustache.render(template, {
        from:msg.from,
        url:msg.url,
        createdAt:formattedTime
    });
    // var li = jQuery('<li></li>');
    // var a = jQuery('<a target="_blank">My Current Location</a>');
    // li.text(`${msg.from} ${formattedTime}: `);
    // a.attr('href', msg.url);
    // li.append(a);
    // jQuery('#messages').append(li);

    jQuery('#messages').append(html);
})

jQuery('#message-form').on('submit', function(e){
    e.preventDefault();

    const messageTextBox = jQuery('[name=message]')

    socket.emit('createMessage', {
        from: 'User',
        text:messageTextBox.val()
    }, function(){
        messageTextBox.val('')
    })
})

var locationButton = jQuery('#send-location');

locationButton.on('click', function(){
    if(!navigator.geolocation){
        return alert('Geolocation not supported by your browser');
    }

    locationButton.attr('disabled', 'disabled').text('Sending Location...');

    navigator.geolocation.getCurrentPosition(function(position){
        locationButton.removeAttr('disabled').text('Send Location')
        socket.emit('createLocationMessage', {
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        })
    },
    function(){
        locationButton.removeAttr('disabled').text('Send Location')
        alert('Unable to fetch location');
    })
})