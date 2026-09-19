const readline = require("readline");

const {
    writeFile,
    readFile,
    appendFile
} = require("./fileOperations");

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for filename
rl.question("Enter filename: ", (filename) => {

    // Validate filename
    if (filename.trim() === "") {
        console.log("Filename cannot be empty.");
        rl.close();
        return;
    }

    // Ask for initial content
    rl.question("Enter initial content: ", (content) => {

        // Create/write the file
        writeFile(filename, content, (writeError) => {

            if (writeError) {
                console.log(
                    "Error while writing file:",
                    writeError.message
                );
                rl.close();
                return;
            }

            console.log("File created/written successfully.");

            // Read the file
            readFile(filename, (readError, data) => {

                if (readError) {
                    console.log(
                        "Error while reading file:",
                        readError.message
                    );
                    rl.close();
                    return;
                }

                console.log("\nInitial file contents:");
                console.log(data);

                // Ask for additional content
                rl.question(
                    "\nEnter additional content to append: ",
                    (additionalContent) => {

                        // Append content
                        appendFile(
                            filename,
                            additionalContent,
                            (appendError) => {

                                if (appendError) {
                                    console.log(
                                        "Error while appending:",
                                        appendError.message
                                    );
                                    rl.close();
                                    return;
                                }

                                console.log(
                                    "Content appended successfully."
                                );

                                // Read final file contents
                                readFile(
                                    filename,
                                    (finalReadError, finalData) => {

                                        if (finalReadError) {
                                            console.log(
                                                "Error reading final file:",
                                                finalReadError.message
                                            );
                                        } else {
                                            console.log(
                                                "\nFinal file contents:"
                                            );
                                            console.log(finalData);
                                        }

                                        rl.close();
                                    }
                                );
                            }
                        );
                    }
                );
            });
        });
    });
});