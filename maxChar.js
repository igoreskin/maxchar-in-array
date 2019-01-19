// Given an array of letters, return the letter that is most commonly used in the array, but without a character map:

function maxChar(arr) {
    const sortedArr = arr.sort((a, b) => a.localeCompare(b)).map(el => el.toLowerCase());
    let number = 1;
    let counter = 1;
    let letter = '';
    let char = sortedArr[0];
    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] === char && i !== sortedArr.length - 1) {
            counter++;
        } else if (sortedArr[i] === char && i === sortedArr.length - 1) {
            counter++;
            if(counter > number) {
                return `${sortedArr[sortedArr.length - 1]}, ${counter}`;
            }
        } else {
            if(counter > number) {
                number = counter;
                char = sortedArr[i];
                letter = sortedArr[i - 1];
                // console.log(letter)
                counter = 1;
            } else {
                counter = 1;
                char = sortedArr[i];
            }
        }
    }
    return `${letter}, ${number}`;
}


// console.log(maxChar(['c', 'C', 'u', 'f', 'u', 'a', 'c', 'c', 'u', 'u', 'u', 'c', 'f', 'f', 'g', 'c', 'f', 'a', 'a', 'a', 'u', 'u', 'u']));