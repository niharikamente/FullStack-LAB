const os = require('os');
const path = require('path');
const dns = require('dns');
const net = require('net');
const fs = require('fs');

// ==================== FILE SYSTEM MODULE ====================

fs.writeFileSync('test.txt', 'Hello Node.js');


// ==================== PATH VARIABLES ====================

const filePath =
    'C:\\CSM-B-97\\FullStack-LAB\\OBSERVATION-TASKS\\TASK-1\\Task1_Observation_Document.pdf';

const newPath = path.join(__dirname, 'data', 'config.json');


// ==================== OS MODULE ====================

console.log(newPath);

console.log('Operating System Info:');

console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log('Current User:', os.userInfo());


// ==================== PATH MODULE ====================

console.log('Path Info:');

console.log(`Directory Name: ${path.dirname(filePath)}`);
console.log(`File Name: ${path.basename(filePath)}`);
console.log(`File Extension: ${path.extname(filePath)}`);
console.log(`Joined Path: ${newPath}`);


// ==================== DNS MODULE ====================

dns.lookup('google.com', (err, address, family) => {

    if (err) {
        console.log('DNS Lookup Error:', err.message);
        return;
    }

    console.log('DNS Info:');
    console.log(`IP Address: ${address}`);
    console.log(`IP Family: ${family}`);
});


// ==================== NET MODULE ====================

const server = net.createServer((socket) => {

    console.log('Client connected.');

    socket.write('Hello from the server!');

    socket.on('data', (data) => {
        console.log(`Received from client: ${data}`);
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });

});


// Start server
server.listen(3000, () => {
    console.log('Server listening on port 3000.');
});