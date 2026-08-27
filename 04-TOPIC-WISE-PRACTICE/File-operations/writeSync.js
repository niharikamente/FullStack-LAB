const fs = require('fs');

try {
    fs.writeFileSync(
        'sync.txt',
        'This file was created synchronously.'
    );

    console.log('File saved successfully.');
} catch (err) {
    console.log('Error:', err);
}