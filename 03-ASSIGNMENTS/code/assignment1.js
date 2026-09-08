// 1. SINGLE INHERITANCE
// Real-time Example: Employee -> Manager

console.log("1. SINGLE INHERITANCE");

class Employee {
    work() {
        console.log("Employee is working.");
    }
}

class Manager extends Employee {
    manageTeam() {
        console.log("Manager is managing the team.");
    }
}

let manager = new Manager();

manager.work();
manager.manageTeam();

// 2. MULTILEVEL INHERITANCE
// Real-time Example: Person -> Employee -> Developer

console.log("\n2. MULTILEVEL INHERITANCE");

class Person {
    introduce() {
        console.log("I am a person.");
    }
}

class Employee2 extends Person {
    work() {
        console.log("Employee is working.");
    }
}

class Developer extends Employee2 {
    writeCode() {
        console.log("Developer is writing code.");
    }
}

let developer = new Developer();

developer.introduce();
developer.work();
developer.writeCode();

// 3. HIERARCHICAL INHERITANCE
// Real-time Example: Vehicle -> Car / Bike

console.log("\n3. HIERARCHICAL INHERITANCE");

class Vehicle {
    start() {
        console.log("Vehicle is starting.");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving.");
    }
}

class Bike extends Vehicle {
    ride() {
        console.log("Bike is being ridden.");
    }
}

let car = new Car();
let bike = new Bike();

car.start();
car.drive();

bike.start();
bike.ride();

// 4. MULTIPLE INHERITANCE
// Using Mixins
// Real-time Example: SmartPhone

console.log("\n4. MULTIPLE INHERITANCE");

const Camera = {
    takePhoto() {
        console.log("Smartphone is taking a photo.");
    }
};

const MusicPlayer = {
    playMusic() {
        console.log("Smartphone is playing music.");
    }
};

class Smartphone {
    makeCall() {
        console.log("Smartphone is making a call.");
    }
}

// Adding features from both Camera and MusicPlayer
Object.assign(Smartphone.prototype, Camera, MusicPlayer);

let phone = new Smartphone();

phone.makeCall();
phone.takePhoto();
phone.playMusic();

// 5. HYBRID INHERITANCE
// Combination of inheritance + mixins
// Real-time Example: Company Employees

console.log("\n5. HYBRID INHERITANCE");

class Employee3 {
    login() {
        console.log("Employee logged into the company system.");
    }
}

class Developer2 extends Employee3 {
    writeCode() {
        console.log("Developer is writing code.");
    }
}

class Tester extends Employee3 {
    testSoftware() {
        console.log("Tester is testing the software.");
    }
}

const RemoteWork = {
    workFromHome() {
        console.log("Employee is working from home.");
    }
};

// Developer gets RemoteWork feature
Object.assign(Developer2.prototype, RemoteWork);

let developer2 = new Developer2();
let tester = new Tester();

developer2.login();
developer2.writeCode();
developer2.workFromHome();

tester.login();
tester.testSoftware();