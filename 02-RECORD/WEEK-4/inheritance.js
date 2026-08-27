class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

let s1 = new Student("Snoopy", 2);

s1.display();

class Animal{

    eat()
    {
    console.log("Eating");
    }

}

class Dog extends Animal{

    bark()
    {
    console.log("Barking");
    }

}

const d=new Dog();

d.eat();
d.bark();


class Bank {

    #balance = 10000;

    // Getter method
    get balance() {
        return this.#balance;
    }

    // Setter method
    set balance(amount) {
        if (amount >= 0) {
            this.#balance = amount;
        } else {
            console.log("Balance cannot be negative.");
        }
    }
}

let account = new Bank();

// Using getter
console.log("Initial Balance:", account.balance);

// Using setter
account.balance = 15000;

console.log("Updated Balance:", account.balance);

// Invalid update
account.balance = -500;
