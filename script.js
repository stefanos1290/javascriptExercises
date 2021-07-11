// JavaScript Katas: Split a number array into odd and even numbers

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
    console.log('odd: ',odd, 'even:', even)
}
splitOddAndEven([1, 2, 3, 5, 7, 3, 4 ,2, 4])
