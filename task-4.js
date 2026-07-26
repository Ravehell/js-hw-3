// function findLongestWord(words) {
//     let longestWord = words[0];
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }

//     }
//     return longestWord;
// }



// console.log(findLongestWord(["apple", "banana", "kiwi"])); // "banana"
// console.log(findLongestWord(["cat", "dog", "mouse"])); // "mouse"
// console.log(findLongestWord(["JavaScript", "HTML", "CSS"])); // "JavaScript"
// console.log(findLongestWord(["one"])); // "one"



// function getEvenNumbers(numbers) {
//     const evenNumber = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumber.push(numbers[i])
//         }
//     }
//     return evenNumber;

// }


// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// console.log(getEvenNumbers([11, 13, 15])); // []
// console.log(getEvenNumbers([8, 10, 12])); // [8, 10, 12]
// console.log(getEvenNumbers([7])); // []



// function addPrefix(words, prefix) {
//     const pref = []
//     for (const word of words) {
//         pref.push(prefix + word)
//     }
//     return pref
// }



// console.log(addPrefix(["cat", "dog"], "super-"));
// // ["super-cat", "super-dog"]

// console.log(addPrefix(["apple", "banana"], "my-"));
// // ["my-apple", "my-banana"]

// console.log(addPrefix([], "new-"));
// // []



// function calculatePositiveTotal(numbers) {
//     let total = 0;
//     for (const number of numbers) {
//         if (number > 0) {
//             total += number
//         }
//     }
//     return total
// }



// console.log(calculatePositiveTotal([1, -2, 3, -4, 5])); // 9
// console.log(calculatePositiveTotal([-5, -7])); // 0
// console.log(calculatePositiveTotal([10, 20, 30])); // 60
// console.log(calculatePositiveTotal([0, 5, -1])); // 5


// function includesNumber(numbers, value) {
//     for (const number of numbers) {
//         if (number === value) {
//             return true
//         }
//     }
//     return false
// }


// console.log(includesNumber([1, 2, 3], 2)); // true
// console.log(includesNumber([1, 2, 3], 4)); // false
// console.log(includesNumber([10], 10)); // true
// console.log(includesNumber([], 5)); // false


// function findLargestNumber(numbers) {
//     let largestNumber = numbers[0];
//     for (const number of numbers) {
//         if (number > largestNumber) {
//             largestNumber = number
//         }
//     }
//     return largestNumber
// }


// console.log(findLargestNumber([1, 5, 3, 8, 2])); // 8
// console.log(findLargestNumber([100, 50, 20])); // 100
// console.log(findLargestNumber([-5, -2, -8])); // -2
// console.log(findLargestNumber([7])); // 7




// function findShortestWord(words) {
//     let shortesWord = words[0]
//     for (const word of words) {
//         if (word.length < shortesWord.length) {
//             return word
//         }
//     }
//     return shortesWord
// }



// console.log(findShortestWord(["apple", "kiwi", "banana"])); // "kiwi"
// console.log(findShortestWord(["JavaScript", "CSS", "HTML"])); // "CSS"
// console.log(findShortestWord(["one"])); // "one"



// function calculateEvenTotal(numbers) {
//     let evenTotal = 0
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0)
//             evenTotal += numbers[i]
//     }
//     return evenTotal
// }





// console.log(calculateEvenTotal([1, 2, 3, 4, 5, 6])); // 12
// console.log(calculateEvenTotal([1, 3, 5])); // 0
// console.log(calculateEvenTotal([8, 10])); // 18



// function filterLessThan(numbers, value) {
//     const result = []
//     for (const number of numbers) {
//         if (number < value) {
//             result.push(number)
//         }
//     }
//     return result
// }


// console.log(filterLessThan([1, 5, 8, 2, 10], 5));
// // [1, 2]

// console.log(filterLessThan([20, 30, 40], 25));
// // [20]


// function addNumber(numbers, value) {
//     const newNumbers = numbers.slice()
//     newNumbers.push(value)
//     return newNumbers
// }


// console.log(addNumber([1, 2, 3], 4));
// // [1, 2, 3, 4]

// console.log(addNumber([], 10));
// // [10]

// console.log(addNumber([5], 7));
// // [5, 7]



// function makeUpperCase(words) {
//     const result = []
//     for (const word of words) {
//         result.push(word.toUpperCase())
//     }
//     return result
// }


// console.log(makeUpperCase(["cat", "dog"]));
// // ["CAT", "DOG"]

// console.log(makeUpperCase(["JavaScript"]));
// // ["JAVASCRIPT"]

// console.log(makeUpperCase([]));
// // []




// function calculateAverage(numbers) {
//     let total = 0;
//     for (const number of numbers) {
//         total += number
//     }
//     return total / numbers.length
// }


// console.log(calculateAverage([2, 4, 6])); // 4
// console.log(calculateAverage([10, 20])); // 15
// console.log(calculateAverage([5])); // 5


// function multiplyNumbers(numbers, multiplier) {
//     let result = []
//     for (const number of numbers) {
//         result.push(number * multiplier)
//     }
//     return result
// }



// console.log(multiplyNumbers([1, 2, 3], 2));
// // [2, 4, 6]

// console.log(multiplyNumbers([5], 10));
// // [50]

// console.log(multiplyNumbers([4, 8], 3));
// // [12, 24]

// console.log(multiplyNumbers([], 5));
// // []



// function slugify(title) {
//     const slug = title.toLowerCase().split(` `).join(`-`)
//     return slug
// }



// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"



// function reverseWords(words) {
//     const result = [];
//     for (let i = words.length - 1; i >= 0; i--) {
//         result.push(words[i]);

//     }
//     return result;
// }


// console.log(reverseWords(["one", "two", "three"]));
// // ["three", "two", "one"]

// console.log(reverseWords(["JavaScript", "HTML", "CSS"]));
// // ["CSS", "HTML", "JavaScript"]

// console.log(reverseWords(["cat"]));
// // ["cat"]

// console.log(reverseWords([]));
// // []



// function getCommonElements(firstArray, secondArray) {
//     const result = []
//     for (const array of firstArray) {
//         if (secondArray.includes(array)) {
//             result.push(array)
//         }
//     }
//     return result
// }


// console.log(getCommonElements([1, 2, 3], [2, 4, 6]));
// // [2]

// console.log(getCommonElements(["cat", "dog"], ["dog", "bird"]));
// // ["dog"]

// console.log(getCommonElements([5, 6], [1, 2]));
// // []


function removeDuplicates(numbers) {
    const result = []
    for (const number of numbers) {
        if (!result.includes(number))
            result.push(number)
    }
    return result
}



console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
// [1, 2, 3, 4]

console.log(removeDuplicates([5, 5, 5]));
// [5]

console.log(removeDuplicates([7, 8, 9]));
// [7, 8, 9]

console.log(removeDuplicates([]));
// []