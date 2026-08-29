
// 1. SINGLE INHERITANCE


console.log("Single Inheritance");

class Animal {
    eat() {
        console.log("Animal is eating.");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking.");
    }
}

let dog = new Dog();
dog.eat();
dog.bark();



// 2. MULTILEVEL INHERITANCE


console.log("\nMultilevel Inheritance");

class Animal2 {
    eat() {
        console.log("Animal is eating.");
    }
}

class Dog2 extends Animal2 {
    bark() {
        console.log("Dog is barking.");
    }
}

class Puppy extends Dog2 {
    play() {
        console.log("Puppy is playing.");
    }
}

let puppy = new Puppy();
puppy.eat();
puppy.bark();
puppy.play();



// 3. HIERARCHICAL INHERITANCE


console.log("\nHierarchical Inheritance");

class Animal3 {
    eat() {
        console.log("Animal is eating.");
    }
}

class Dog3 extends Animal3 {
    bark() {
        console.log("Dog is barking.");
    }
}

class Cat extends Animal3 {
    meow() {
        console.log("Cat is meowing.");
    }
}

let dog3 = new Dog3();
let cat = new Cat();

dog3.eat();
dog3.bark();

cat.eat();
cat.meow();



// 4. MULTIPLE INHERITANCE
// Using Mixins


console.log("\nMultiple Inheritance");

const Flying = {
    fly() {
        console.log("Flying.");
    }
};

const Swimming = {
    swim() {
        console.log("Swimming.");
    }
};

class Duck {
    quack() {
        console.log("Duck is quacking.");
    }
}

// Add both Flying and Swimming features
Object.assign(Duck.prototype, Flying, Swimming);

let duck = new Duck();

duck.quack();
duck.fly();
duck.swim();



// 5. HYBRID INHERITANCE


console.log("\nHybrid Inheritance");

class Animal4 {
    eat() {
        console.log("Animal is eating.");
    }
}

class Dog4 extends Animal4 {
    bark() {
        console.log("Dog is barking.");
    }
}

class Cat4 extends Animal4 {
    meow() {
        console.log("Cat is meowing.");
    }
}

const Running = {
    run() {
        console.log("Running.");
    }
};

Object.assign(Dog4.prototype, Running);

let dog4 = new Dog4();
let cat4 = new Cat4();

dog4.eat();
dog4.bark();
dog4.run();

cat4.eat();
cat4.meow();