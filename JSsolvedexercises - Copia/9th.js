
let frase = "Seja bem-vindo ao Javascript!"

function encode() {

    const vogais = {
        'a': '1',
        'e': '2',
        'i': '3',
        'o': '4',
        'u': '5'
    };
    
    return frase.split('').map(char => {
        return vogais[char] || char;
    }).join('');
}

function decode() {
    const numbers = {
        '1': 'a',
        '2': 'e',
        '3': 'i',
        '4': 'o',
        '5': 'u'
    };
    
    return frase.split('').map(char => {
        return numbers[char] || char;
    }).join('');
}

console.log("Frase trocada: " + encode() + " Frase normal : " + decode());

