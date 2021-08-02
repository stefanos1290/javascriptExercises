// JavaScript Katas: Split a number array into odd and even numbers
// 1

function splitOddAndEven(numbers){
    let odd = [];
    let even = [];
    numbers.map((x) => {
        if (x % 2) {
            odd.push(x)
        }
        else {
            even.push(x)
        }
    })
    console.log("1: ",'odd: ',odd, 'even:', even);
}
splitOddAndEven([1, 2, 3, 5, 7, 3, 4 ,2, 4])

// JavaScript Katas: Count the number of each character in a string
// 2

function countAmountOfEachCharacter(inputString){
    const result = {};
        for (let i = 0; i < inputString.length; i++) {
            if (result.hasOwnProperty(inputString[i])) {
                result[inputString[i]] += 1;
            }
            else result[inputString[i]] = 1;
        }
    return result
}
console.log('2: ',countAmountOfEachCharacter('mississippi'))

// JavaScript Katas: Remove all exclamation marks from the end
// 3

function removeExclamationMarksFromEnd(inputString) {
    const inputStringA = [...inputString];
    while(inputStringA[inputStringA.length - 1] === '!') {
        inputStringA.pop();
    }
    return inputStringA.join('')

}

console.log('3: ',removeExclamationMarksFromEnd('bee!!'))

// JavaScript Katas: Correct the mistakes of the character recognition software
// 4

function correctMistakes(inputString) {
    const corrections = {
        "5": "S",
        "0": "O",
        "1": "I",
      };
    
      return (
        inputString
          .split("")
          .map((char) =>
            corrections.hasOwnProperty(char) ? corrections[char] : char
          )
          .join("")
      );
    
}
console.log('4: ',correctMistakes('0h, 5tefan1s'))


// JavaScript Katas: Calculate total amount of points
// 5

function calculateAmountOfPoints(games) {
    let totalPoints = 0;
    for (const game of games) {
        const [scoreA, scoreB] = game.split(':')
        const point = scoreA > scoreB ? 3 : scoreA === scoreB ? 1 : 0;
        totalPoints += point;
    }
    return totalPoints;
} 

console.log('5:',calculateAmountOfPoints(['0:1', '1:0']))

// JavaScript Katas: Abbreviate a two word name
// 6

function abbreviateName(name) {
    const abbreviatedName = [];
    const firstLastName = name.split(' ');
    const firstName = firstLastName[0];
    const lastName = firstLastName[1];
    const firstNameAb = firstName.charAt(0).toUpperCase();
    const lastNameAb = lastName.charAt(0).toUpperCase();
    abbreviatedName.push(firstNameAb[0]);
    abbreviatedName.push(lastNameAb[0]);
    return abbreviatedName.join('.');
}

console.log('6: ', abbreviateName('john doe'));

// JavaScript Katas: Count sheep
// 7

function countSheep(amountOfSheep){
    let results = '';
    for (let i = 1; i <= amountOfSheep; i++) {
        results += `${i} sheep...`;
    }
    return results;
};

console.log('7: ', countSheep(4));

// JavaScript Katas: Card Suit
// 8 

function defineSuit(card){
    const map = { "♣": "clubs", "♠": "spades", "♦": "diamonds", "♥": "hearts" };
    let myCardShape = card.slice(-1);
    let myCardText = map[myCardShape]
    return myCardText;
};

console.log('8: ', defineSuit('10♥'));

// JavaScript Katas: Divisible By
// 9

function divisibleBy(numbers, divisor){
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i] / divisor)) {
            results.push(numbers[i])
        }
    }
    return results;
};

console.log('9: ', divisibleBy([1, 2, 3, 4, 5, 6], 2));

// JavaScript Katas: Remove duplicates
// 10

function removeDuplicates(inputArray){
    const withoutDuplicates = [];
    for (const numbers of inputArray) {
        if (!withoutDuplicates.includes(numbers)) {
            withoutDuplicates.push(numbers)
        }
    }
    return withoutDuplicates;
}

console.log('10: ', removeDuplicates([1, 1, 2]))

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

      let withoutDuplicates = '';

      for (const char of inputString) {
        if (Object.keys(mapping).includes(char)) {
            withoutDuplicates += mapping[char]
        }
        else withoutDuplicates += char
      }
      return withoutDuplicates;
}

console.log('11: ', correctPolishLetters('ąćęłńóśźżaaaa'))

// JavaScript Katas: Well of Ideas - Easy
// 12

function getStatusOfWellOfIdeas(inputArray) {
    const goods = [];
    for (const el of inputArray) {
        if (el === 'good') {
            goods.push(el)
        }
    }
    return goods.length === 0 ? 'Fail' : goods.length > 2 ? "I smell a series!" : "Publish!";
}

console.log('12: ', getStatusOfWellOfIdeas(['bad', 'good', 'good', 'good']))

// JavaScript Katas: Whose Move
// 13

function whoseMove(lastPlayer, isWin) {
   return isWin ? lastPlayer : lastPlayer === 'white' ? 'black' : 'white';
}

console.log('13:',whoseMove('white', false))

// JavaScript Katas: Repeat it
// 14

function repeatIt(inputString, repetitions) {
    if (typeof(inputString) === 'string') {
        return inputString.repeat(repetitions)
    }
    else return "Not a string"
}
console.log('14:',repeatIt('Stefanos', 3))

// JavaScript Katas: Count lowercase letters
// 15

function amountOfLowercaseLetters(inputString) {
    let count = 0;
    for (const char of inputString) {
      if (char.match(/[a-z]/)) {
        count += 1;
      }
    }
    return count;
  }

console.log('15:',amountOfLowercaseLetters('ab!Bå?'))

// JavaScript Katas: Sort and Star
// 16

function sortAndStar(stringArray) {
    stringArray.sort();
    return stringArray[0].split('').join('***')
}

console.log('16:',sortAndStar(['name', 'stefanos', 'aaaaaa']))


// JavaScript Katas: Is it a palindrome?
// 17

function isPalindrome(myString) {
    const splitString = myString.split('')
    const reversedString =  splitString.reverse().join('')
    if (myString.toUpperCase() === reversedString.toUpperCase()) {
        return true
    } else return false
}

console.log('17:',isPalindrome('Anna'));

// JavaScript Katas: Freudian Translator
// 18

function toFreud(myString) {
    return myString.split(' ').map(word => 'sex')
}

console.log('18:', toFreud('Sigmund Freud'));

// JavaScript Katas: Position in Alphabet
// 19

function positionInAlphabet(myChar){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const lowCaseChar = myChar.toLowerCase()
    return alphabet.findIndex((index) => index === lowCaseChar) + 1
}

console.log('19:', positionInAlphabet('A'));

// JavaScript Katas: Every possible sum of two digits
// 20

function everyPossibleSum(myNumber){
 // TODO 
 return 'TODO'
}

console.log('20:', everyPossibleSum());

// JavaScript Katas: Missing values
// 21

function missingValues(myArray) {
  return 'TODO'
}

console.log('21:', missingValues(21));

// JavaScript Katas: A Gift Well Spent
// 22

function buy(giftCard, prices) {
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] + prices[j] === giftCard) {
                return [i, j]
            }
        }
    }
    return null
}

console.log('22:', buy(5, [5, 2, 3, 4, 5]));

// JavaScript Katas: Coin Combination
// 23

function coinCombo(cents) {
    return 'TODO'
}

console.log('23:', coinCombo(51));

// JavaScript Katas: Split In Parts
// 24

function splitInParts(myString, partLength) {
    let remaining = myString;
    let result = "";
  
    // do it only if the remaining string is longer than the parts
    while (remaining.length >= partLength) {
      // add the next part and a space to the result
      result += remaining.slice(0, partLength) + " ";
  
      // remove the added part from the remaining string
      remaining = remaining.slice(partLength);
    }
  
    // add the last part that was smaller than the part length
    result += remaining;
  
    // remove a trailing space
    return result.trim();
  }

console.log('24:', splitInParts('HelloDev', 2));

// JavaScript Katas: Higher Version
// 25

function higherVersion(version1, version2) {
    const slpit1 = version1.split('.').map(x => Number(x));
    const slpit2 = version2.split('.').map(x => Number(x));
    for (let i = 0; i < slpit1.length; i++) {
        if (slpit1[i] > slpit2[i]) {
            return true;
        } if (slpit1[i] < slpit2[i]) {
            return false;
        }
    }

}
 
console.log('25:', higherVersion("1.2.3", "1.2.2"));

// JavaScript Katas: Merge Two Arrays
// 26

function mergeArrays(a, b) {
    const maxLength = Math.max(a.length, b.length);
    const results = [];
    for(let i = 0; i < maxLength; i++) {
        results.push(a[i]);
        results.push(b[i]);
    }

    return results.filter((x) => x !== undefined);
}

console.log('26:', mergeArrays([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd']));

// JavaScript Katas: Find Odd Digits
// 27

function findOddDigits(n, k) {
    if (k === 0 || k > n) return 0;
    let oddNumbers = '';
    const nArray = String(n).split("").map((n) => Number(n));
    const allOddNumbers = nArray.filter((x) => (x % 2 === 1));
    const oddKNumbers = allOddNumbers.splice(0, k);
    oddKNumbers.map((x) => {
        oddNumbers += x.toString() 
    })
      return Number(oddNumbers);
}

console.log('27:', findOddDigits(34567891115674987, 7));

// JavaScript Katas: Draw Chessboard
// 28

function drawChessboard(rows, columns) {
    const dashBoard = [...Array(rows)].map(() => []);
    const row0 = [...Array(columns)].map((_, i) => (i % 2 ? 'X': '0'))
    const rowX = [...Array(columns)].map((_, i) => (i % 2 ? '0': 'X'))
    return dashBoard.map((_, i) => (i % 2 ? rowX : row0))
}
console.log('28:', drawChessboard(6, 6));

// JavaScript Katas: Letterbox Paint Squad
// 29

function paintLetterboxes(start, end) {
    return 'TODO'
}

console.log('29:', paintLetterboxes());

// JavaScript Katas: Seconds To Minutes And Hours
// 30

function toMinutesAndHours(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 3600) % 60;
    return `${hours} hour(s) and ${minutes} minute(s)`
}

console.log('30:', toMinutesAndHours(2314049));

