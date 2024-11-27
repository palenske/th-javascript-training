function fizzBuzz(){
let numbers = [2, 15, 7, 50, 45];

return numbers.map(num => {

    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzBuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return "bug!";
    }
    
});
}
console.log(fizzBuzz());