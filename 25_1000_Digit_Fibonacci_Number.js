//Project Euler: Problem 25: 1000-digit Fibonacci number

//What is the index of the first term in the Fibonacci sequence to contain n digits?
//Solution
function digitFibonacci(n) {
    const digits = (num) => {
        return num.toString().length;
    };
    let f1 = 1;
    let f2 = 1;
    let index = 3;
    while (true) {
        let fn = f1 + f2;
        if (digits(fn) === n) return index;
        [f1, f2] = [f2, fn];
        index++;
    }
}

digitFibonacci(20);