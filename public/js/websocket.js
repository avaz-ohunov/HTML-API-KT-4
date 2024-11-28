
// websocket.js


const socket = io('http://localhost:3000');


document.getElementById('send-message').addEventListener('click', () => {
    const message = document.getElementById('message').value;
    if (message) {
        socket.emit('chat message', message);
        document.getElementById('message').value = '';
    }
});


socket.on('chat message', (msg) => {
    const chat = document.getElementById('chat');
    const messageElement = document.createElement('div');
    messageElement.className = 'alert alert-info';
    messageElement.textContent = msg;
    chat.appendChild(messageElement);
});