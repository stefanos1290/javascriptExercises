// JavaScript Katas: Split a number array into odd and even numbers
// 1

function splitOddAndEven(numbers) {
    const even = [];
    const odds = [];
    numbers.map((num) => {
        num % 2 === 0 ? even.push(num) : odds.push(num)
    })

    const myNumbers = {
        even,
        odds
    }
    
    return myNumbers;
}

console.log('1:',splitOddAndEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// JavaScript Katas: Count the number of each character in a string
// 2

function countAmountOfEachCharacter(inputString) {
    const myString = {};
    for (let i = 0; i < inputString.length; i++) {
        if (myString.hasOwnProperty(inputString[i])) {
            myString[inputString[i]] += 1;
        } else myString[inputString[i]] = 1;
    }
    return myString
}

console.log('2:',countAmountOfEachCharacter('!!bee!!!!'));

// JavaScript Katas: Remove all exclamation marks from the end
// 3

function removeExclamationMarksFromEnd(inputString) {
    const myArray = inputString.split('');
    while(myArray[myArray.length - 1] === '!') {
        myArray.pop()
    }
    return myArray.join('')
}

console.log('3:',removeExclamationMarksFromEnd('!bee!!!!'));

// JavaScript Katas: Correct the mistakes of the character recognition software
// 4

function correctMistakes(inputString) {
    const myAstring = inputString.split('');
    const myCorrections = myAstring.map((char) => char === '5' ? 'S' : char === '0' ? 'O' : char === '1' ? 'I' : char)
    return myCorrections.join('')
}

console.log('4:',correctMistakes('501 SOI'));

// JavaScript Katas: Calculate total amount of points
// 5

function calculateAmountOfPoints(games) {
    let totalPoints = 0;
    for (const game of games) {
        const scores = game.split(':');
        scores[0] > scores[1] ? totalPoints += 3 : scores[0] === scores[1] ? totalPoints += 1 : totalPoints += 0;
    }
    return totalPoints
}

console.log('5:',calculateAmountOfPoints(['3:1', '3:5', '3:3']));

// JavaScript Katas: Abbreviate a two word name
// 6

function abbreviateName(name) {
    const splitName = name.split(' ');
    const abbreviated = splitName[0].charAt(0) + '.' + splitName[1].charAt(0);
    return abbreviated.toUpperCase()
}

console.log('6:',abbreviateName('joe doe'));

// JavaScript Katas: Count sheep
// 7

function countSheep(amountOfSheep) {
    let result = '';
    for (let i = 1; i <= amountOfSheep; i++) {
        result += `${i} sheep...`;
    }
    return result;
}

console.log('7:',countSheep(5));

// JavaScript Katas: Card Suit
// 8

function defineSuit(card) {
    const options = { "♣": "clubs", "♠": "spades", "♦": "diamonds", "♥": "hearts" };
    const slpitCard = card.split('');
    return options[slpitCard[1]]
}

console.log('8:',defineSuit("3♣"));

// JavaScript Katas: Divisible By
// 9

function divisibleBy(numbers, divisor) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            results.push(numbers[i])
        }
    }
    return results;
}

console.log('9:',divisibleBy([10, 2, 19, 3, 1, 6], 2));

// JavaScript Katas: Remove duplicates
// 10

function removeDuplicates(inputArray) {
    const results = [];
    inputArray.map((num) => {
        if (!results.includes(num)) {
            results.push(num)
        }
    })
    return results;
}

console.log('10:',removeDuplicates([1, 1, 2]));

// JavaScript Katas: Polish Alphabet
// 11

function correctPolishLetters(inputString) {
    const mapping = {
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ó: "o",
        ś: "s",
        ź: "z",
        ż: "z",
      };
    const Astring = inputString.split('')
    let result = ''
    for (let i = 0; i < Astring.length; i++) {
        if (Object.keys(mapping).includes(Astring[i])) {
            result += mapping[Astring[i]];
        } else {
            result += Astring[i];
        }
        
    }
    return result
}

console.log('11:',correctPolishLetters('śtęfąńóś'));

// JavaScript Katas: Well of Ideas - Easy
// 12

function getStatusOfWellOfIdeas(inputArray) {
    const goods = [];
    const bads = [];
    let results = '';
    inputArray.map((x) => x === 'bad' ? bads.push(x) : goods.push(x));
    goods.length === 0 ? results = "Fail!" : goods.length === 1 || goods.length === 2 ? results = "Publish!" : results = "I smell a series!";
    return results;
}

console.log('12:',getStatusOfWellOfIdeas(["bad", "bad", "bad"]));

// JavaScript Katas: Whose Move
// 13

function whoseMove(lastPlayer, isWin) {
    return isWin ? lastPlayer : lastPlayer === 'white' ? 'black' : 'white';
}

console.log('13:',whoseMove("black", false));

// JavaScript Katas: Repeat it
// 14

function repeatIt(inputString, repetitions) {
    let results = '';

    typeof inputString === 'string' ? results += inputString.repeat(repetitions) : results += 'Not a String';

    return results; 
}

console.log('14:',repeatIt('hi', 4));

// JavaScript Katas: Count lowercase letters
// 15

function amountOfLowercaseLetters(inputString) {
    let count = 0;
    for (const char of inputString) {
        if (char.match(/[a-z]/)) {
            count++;
        }
    }
    return count
}

console.log('15:',amountOfLowercaseLetters('aB1c'));

// JavaScript Katas: Sort and Star
// 16

function sortAndStar(stringArray) {
    const sortedStringArray = stringArray.sort();
    const stardString = sortedStringArray[0].split('').join('***');
    return stardString
}

console.log('16:',sortAndStar(["We", "solve", "Katas"]));

// JavaScript Katas: Is it a palindrome?
// 17

function isPalindrome(myString) {
    const reversed = myString.split('').reverse().join('').toLowerCase();
    return reversed === myString.toLowerCase() ? true : false
}

console.log('17:',isPalindrome('RaceCar'));

// JavaScript Katas: Freudian Translator
// 18

function toFreud(myString) {
    const freud = myString.split(' ');
    const freudString = freud.fill('sex', 0);
    return freudString.join(' ')
}

console.log('18:',toFreud('Sigmund Freud'));

// JavaScript Katas: Position in Alphabet
// 19

function positionInAlphabet(myChar) {
    const alphabet = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l':12, 'm': 13, 'n':14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26};
    return alphabet[myChar]
}

console.log('19:',positionInAlphabet('t'));

// JavaScript Katas: Every possible sum of two digits
// 20

function everyPossibleSum(myNumber) {
    const myArrayS = myNumber.toString().split('');
    const myArrayNum = myArrayS.map((x) => Number(x));
    let result = [];
    for (let i = 0; i < myArrayNum.length; i++) {
        for (let j = i + 1; j < myArrayNum.length; j++) {
            result.push(myArrayNum[i] + myArrayNum[j])
        }
    }
    return result
}

console.log('20:',everyPossibleSum(1234));

// JavaScript Katas: Missing values
// 21

function missingValues(myArray) {
    const numX = myArray.filter((num) => {
        return myArray.filter((num1) => {
            return num === num1
        }).length === 1;
   })
   const numY = myArray.filter((num) => {
    return myArray.filter((num1) => {
        return num === num1
        }).length === 2;
    })
    const x = numX;
    const y = numY[0];
   return x * x * y;
}

console.log('21:',missingValues([1, 1, 1, 2, 2, 3]));

// JavaScript Katas: A Gift Well Spent
// 22

function buy(giftCard, prices) {
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] + prices[j] === giftCard) {
                return [prices[i], prices[j]];
            }
        }
    }
    return null;
}

console.log('22:',buy(6, [5, 2, 5, 1]));

// JavaScript Katas: Coin Combination
// 23

function coinCombo(cents) {
    return 'TODO'
}

console.log('23:',coinCombo(52));

// JavaScript Katas: Split In Parts
// 24

function splitInParts(myString, partLength) {
    let remaining = myString;
    let results = '';
    while (remaining.length >= partLength) {
        results += remaining.slice(0, partLength) + ' ';
        remaining = remaining.slice(partLength)
    }
    results += remaining
    return results
}

console.log('24:',splitInParts('HelloDev', 7));

// JavaScript Katas: Higher Version
// 25

function higherVersion(version1, version2) {
    const version1Split = version1.split('.');
    const version2Split = version2.split('.');
    let num1 = [];
    let num2 = [];
    for (let i = 0; i < version1Split.length; i++) {
        num1.push(version1Split[i].replace(/^0+/, ''))
    }
    for (let i = 0; i < version2Split.length; i++) {
        num2.push(version2Split[i].replace(/^0+/, ''))
    }
    
    // return num2
    return 'TODO'

}

console.log('25:',higherVersion('1.0020.003', '1.2.0'));

// JavaScript Katas: Merge Two Arrays
// 26

function mergeArrays(a, b) {
    const mergedArray = [];
    const bigestArray = a.length > b.length ? a.length : a.length < b.length ? b.length : b.length;
    for (let i = 0; i < bigestArray; i++) {
        mergedArray.push(a[i])
        mergedArray.push(b[i])
    }
    return mergedArray.filter((x) => x !== undefined)
}

console.log('26:',mergeArrays([9, 10, 11], ["a", 'b']));

// JavaScript Katas: Find Odd Digits
// 27

function findOddDigits(n, k) {
    const oddDigits = [];
    const slpitNumber = n.toString().split('');

    if (k > n || k === 0) {
        return 0
    }

    for (let i = 0; i < slpitNumber.length; i++) {
        if (Number(slpitNumber[i]) % 1 === 0) {
            oddDigits.push(Number(slpitNumber[i]))
        }
    }
    return oddDigits.length <= 0 ? 0 : k > oddDigits.length ? 0 : oddDigits.slice(0, k)
}

console.log('27:',findOddDigits(123456789111, 5));

// JavaScript Katas: Draw Chessboard
// 28

function drawChessboard(rows, columns) {
    return 28
}

console.log('28:',drawChessboard(3, 3));
