
// server.js


const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const cors = require('cors');
app.use(cors());
const io = new Server(server, { cors: { origin: '*' } });


// WebSocket
io.on('connection', (socket) => {
    console.log('Пользователь подключился');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});


// SSE
app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    setInterval(() => {
        res.write(`data: ${JSON.stringify({ post: 'Новый пост', time: new Date() })}\n\n`);
    }, 5000);
});


// Запуск сервера
server.listen(3000, () => {
    console.log('Сервер работает на http://localhost:3000');
});