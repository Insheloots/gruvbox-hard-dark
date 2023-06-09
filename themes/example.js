//Function definition
function greet(name) {
    const message = `Hello, ${name}!`;
    console.log(message);
}

// Call to function
greet('John');

class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        console.log(`Count: ${this.count}`);
    }
}

// Creación de una instancia de la clase
const counter = new Counter();
counter.increment();
counter.increment();
