let characterArray = ["'", "<", ">","?", "/", "`", "", " ","=", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", ".", "-", "!", "@", "#", "$", "%", "^", "&", "*", "(",")", "_", "+", "|", "\\", ":", "\n", ";",",","{","}", "\""];

import fs from 'fs'


//Avoid editting this var. Instead, edit the "message" file.

const content=fs.readFileSync('./message', 'utf-8').toString();

//DO NOT TOUCH MESSAGE VAR, PROGRAM USES IT ON ITS OWN

let message = "";
o
function charToNumber(character) {
    let numQuery = (element) => element == character;
    let number = characterArray.findIndex(numQuery) + 1;
    if (number < 10) {
        return "0" + number;
    } else {
        return number.toString();
    }
}

let contentArr = content.split("");
for (let i = 0; i <= contentArr.length - 1; i++) {
    let numberThing = charToNumber(contentArr[i])
    message = message + numberThing
}
console.log(message)
let split = message.match(/.{2}/g);
let decodedMessage = ""
for (let i = 0; i < split.length; i++) {
    if (numToChar(split[i]) == undefined) {
        decodedMessage = decodedMessage + "="
    } else {
        decodedMessage = decodedMessage + numToChar(split[i])
    }
}

//DEBUG: IF YOU WANT TO VERIFY CONTENT, UNCOMMENT
function numToChar(num) {
    let number = parseInt(num)
    return characterArray[number - 1]
}
