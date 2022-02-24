
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
};
  
            function decode(expr) {
                let wer = "";
                for (let i = 0; i < expr.length; i += 10) {
                  let rew = expr.substr(i, 10);
                  wer = wer + decoderText(rew);
                }
                function decoderText(rew) {
                    if (rew === "**********") return " ";
                    let pol = "";
                    for (let i = 0; i < rew.length; i += 2) {
                      let lop = rew.substr(i, 2);
                      if (lop == "10") {
                          pol = pol + ".";
                      }
                      if (lop == "11") {
                          pol = pol + "-";
                      }
                    }
                  return MORSE_TABLE[pol];
                }
                return wer;
              }
module.exports = {
    decode
}