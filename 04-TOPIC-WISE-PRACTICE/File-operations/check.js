const fs = require('fs');

fs.access('task.txt', fs.constants.F_OK, (err) => {

    if (err) {
        console.log('File does not exist.');
    } else {
        console.log('File exists.');
    }
});