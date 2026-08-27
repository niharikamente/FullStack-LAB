const fs = require('fs').promises;

async function writeFileAsync() {

    try {

        await fs.writeFile(
            'promise.txt',
            'Hello from Node.js Promises!'
        );

        console.log('File saved successfully.');

    } catch (err) {

        console.log('Error writing file:', err);
    }
}

writeFileAsync();