const fs = require('fs');

fs.appendFile(
    'task.txt',
    '\nWelcome to Node.js!',
    (err) => {

        if (err) {
            console.log('Error:', err);
            return;
        }

        console.log('Content appended successfully!');
    }
);