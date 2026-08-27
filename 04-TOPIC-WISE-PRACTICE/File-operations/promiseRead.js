const fs = require('fs').promises;

async function readFileAsync() {

    try {
        const data = await fs.readFile('task.txt', 'utf8');

        console.log('File contents:');
        console.log(data);

    } catch (err) {
        console.log('Error reading file:', err);
    }
}

readFileAsync();