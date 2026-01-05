console.log("Hello from Raspberry Pi!");
var x = 3;
var y = 4;
var z = x + 2*y;

var x = 3;
var y = 2;
y = x;
console.log(x);
console.log(y);
console.log(z);

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

console.log(cube(2)); // 12
console.log(square(5));

function addThree(a, b, c) {
    return a + b + c;
}

console.log(addThree(2, 4, 6)); // 12

function addStrings(s1, s2) {
    return s1 + s2;
}

console.log(addStrings("Hello ", "Javier")); // Hello Javier


function evenOrOdd(x) {
    if (x % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

