import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000');

function attachListeners() {
    socket.on('music', (data) => {
        console.log('Hey data', data);
    })

    socket.on('welcome', (data) => {
        console.log('Hey welcome', data);
    })
}


function fireMusic(data) {
    socket.emit('music', data);
}

function attachListenerForMusic(handler){
    socket.on('music', handler);
}

export default {
    attachListeners,
    fireMusic,
    attachListenerForMusic
}