const net = require('net');

const client = net.createConnection({
    port: 3000,
    host: 'localhost'
}, () => {

    console.log('Connected to server.');

    client.write('Hello Server');

});

client.on('data', (data) => {

    console.log(`Server says: ${data}`);

    client.end();

});