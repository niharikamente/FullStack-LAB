const fs = require('fs');

const content = 'Hello, this is my first Node.js file.';
//writeFile():filename,content,callback function
//If the file doesn't exist:Creates the file
//If the file already exists:Overwrites the old content
fs.writeFile('task.txt', content, (err) => {
    if (err) {
        console.log('Error writing file:', err);
        return;
    }

    console.log('File has been created successfully!');
});