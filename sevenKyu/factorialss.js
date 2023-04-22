/*Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial */
function factorial(num) {
    return num==0 ? 1 : num * factorial(num-1)
    }