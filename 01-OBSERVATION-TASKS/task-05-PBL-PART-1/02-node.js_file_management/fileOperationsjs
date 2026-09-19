const fs = require("fs");

// Function to write/create a file
function writeFile(filename, content, callback) {
    fs.writeFile(filename, content, "utf8", (error) => {
        if (error) {
            callback(error);
            return;
        }

        callback(null);
    });
}

// Function to read a file
function readFile(filename, callback) {
    fs.readFile(filename, "utf8", (error, data) => {
        if (error) {
            callback(error, null);
            return;
        }

        callback(null, data);
    });
}

// Function to append content to a file
function appendFile(filename, additionalContent, callback) {
    fs.appendFile(
        filename,
        "\n" + additionalContent,
        "utf8",
        (error) => {
            if (error) {
                callback(error);
                return;
            }

            callback(null);
        }
    );
}

// Export all functions
module.exports = {
    writeFile,
    readFile,
    appendFile
};