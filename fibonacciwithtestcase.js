
function fib(n) {
    if (n===1) {
        return 0;
    }
    if (n===2) {
        return 1;
    }
    var temp1 = 0;
    var temp2 = 1;
    var value = 0;
    for (var i=1;i <= n-2; i++) {
        value = temp1 + temp2;
        temp1 = temp2;
        temp2 = value;
    }
    return value;
}



// test case


console.log("Test 1: fib(1) === 0", fib(1) == 0);
console.log("Test 2: fib(2) === 1", fib(2) == 1);
console.log("Test 3: fib(3) === 2", fib(3) == 1);
console.log("Test 4: fib(10) === 34", fib(10) == 34, fib(10));
console.log("Test 5: fib(20) === 0", fib(20) == 4181, fib(20));