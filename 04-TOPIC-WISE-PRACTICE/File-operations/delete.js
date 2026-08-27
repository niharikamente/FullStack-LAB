const fs = require('fs');
//unlink() is used to delete a file
fs.unlink('sync.txt', (err) => {

    if (err) {
        console.log('Error deleting file:', err);
        return;
    }

    console.log('File deleted successfully!');
});