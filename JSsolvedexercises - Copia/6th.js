function highestCount(){
    const numbers = [10, 3, 4, 5, 10, 10, 6, 6, 4];
    let max = Math.max(...numbers);
    const result = numbers.filter(num => num === max).length;
    
    return "Total de vezes que o maior número do array se repete: " + result;
}
console.log(highestCount());