// 1. GLOBAL
global.x = 42;
console.log("Global value:", x);

// 2. CONSOLE
console.log("Hello World");
console.warn("This is a warning");
console.error("This is an error");

// 3. PROCESS
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);
console.log("Current Directory:", process.cwd());

// 4. BUFFER
const buf = Buffer.from("Hi");
console.log("Buffer content:", buf);
console.log("Buffer as string:", buf.toString());

// 5. __dirname
console.log("Directory name:", __dirname);

// 6. __filename
console.log("File name:", __filename);

// 7. setTimeout
setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);

// 8. setInterval
let count = 0;

const intervalId = setInterval(() => {
    count++;

    console.log(`Interval message #${count}`);

    if (count === 3) {
        clearInterval(intervalId);
        console.log("Stopped interval");
    }
}, 1000);