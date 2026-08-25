const fs = require('fs');

try {
    const data = fs.readFileSync('task.txt', 'utf8');

    console.log('File contents:');
    console.log(data);
} catch (err) {
    console.log('Error reading file:', err);
}