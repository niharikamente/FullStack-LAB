const os =  require('os');
const path = require('path');
const dns = require('dns');
const net = require('net');
const { promisify } = require('util');
const fs = require('fs');

fs.writeFileSync('test.txt', 'Hello Node.js');


const filePath = 'C:\\CSM-B-97\\FullStack-LAB\\OBSERVATION-TASKS\\TASK-1\\Task1_Observation_Document.pdf';
const newPath = path.join(__dirname, 'data', 'config.json');//constructs a path as a string by combining different path parts correctly

//OS (Operating System) Module
console.log(newPath);
console.log('Operating System Info:');
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`Current User: `,os.userInfo());

//Path Module
console.log('Path Info:');
console.log(`Directory Name: ${path.dirname(filePath)}`);
console.log(`File Name: ${path.basename(filePath)}`);//Returns the filename
console.log(`File Extension: ${path.extname(filePath)}`);
console.log(`Joined Path: ${newPath}`);


// ==================== DNS MODULE ====================

// Convert callback functions into Promise functions
const lookup = promisify(dns.lookup);
const resolve4 = promisify(dns.resolve4);

async function startProgram() {

    console.log('\nDNS Info:');

    // lookup()
    const result = await lookup('google.com');

    console.log(`IP Address: ${result.address}`);
    console.log(`IP Family: ${result.family}`);

    // resolve4()
    const addresses = await resolve4('google.com');

    console.log('IPv4 Addresses:', addresses);

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

server.listen(3000, () => {
    console.log('Server listening on port 3000.');
});
}

startProgram();