class Bank {

    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient Balance");
        }
    }
}

let account = new Bank(10000);

account.deposit(5000);

account.withdraw(3000);

console.log("Balance:", account.balance);

