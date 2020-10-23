const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '     ':  ' ',
};

function decode(expr) {
    // write your solution here
    let tmpArr = [];
    let resultArr = [];
    let morseArr = [];
    let symbolSize = 5;

    for (let i = 0; i < expr.length; i += 2) {
        if (expr[i] === '0') morseArr.push('');
        else if (expr[i + 1] === '0') morseArr.push('.');
        else if (expr[i + 1] === '1') morseArr.push('-');
        else morseArr.push(' ');
    } 

    for (i = 0; i < morseArr.length / symbolSize; i++) {
      tmpArr[i] = morseArr.slice(i * symbolSize, i * symbolSize + symbolSize);     
    }

    for (i = 0; i < tmpArr.length; i++) {
        for (let prop in MORSE_TABLE) {
            if (tmpArr[i].join('') === prop) resultArr.push(MORSE_TABLE[prop]);
        }
    }

    return resultArr.join('');
}

module.exports = {
    decode
}