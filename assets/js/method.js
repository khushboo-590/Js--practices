// If a key has a function as a value, its called a method.

let person2 = {
    name: "khushboo kumari",
    greet: function () {
        console.log(" my name is " + this.name);
    }
};

person2.greet(); 