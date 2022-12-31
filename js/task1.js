'use strict';

const fibonacci = (num) => {
   if(num <= 1) return num;
   else return fibonacci(num - 1) + fibonacci(num - 2);
}

const memo = f => {
    const cache = {};
    return arg => cache[arg] || (cache[arg] = f(arg))
}

const result = memo(fibonacci);
console.log(result(16));





