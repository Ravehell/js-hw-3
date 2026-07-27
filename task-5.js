// function getEvenNumbers(numbers) {
//     const evenNumbers = []
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i])
//         }

//     }
//     return evenNumbers
// }


// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
// // [2, 4, 6]



// function formatName(name) {
//     if (name.length > 10) {
//         return name.slice(0, 10) + `...`
//     } else {
//         return name
//     }

// }

// console.log(formatName("Oleksandr"))
// // "Oleksandr");
// console.log(formatName("Christopher"))
// // "Christophe...");



// function containsNumber(numbers, value) {
//     return numbers.includes(value)
// }

// console.log(containsNumber([1, 5, 8], 5))
// // true);

// console.log(containsNumber([1, 5, 8], 4))
// // false);



// function calculateEvenSum(numbers) {
//     let evenSum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenSum += numbers[i]
//         }
//     }
//     return evenSum
// }


// console.log(calculateEvenSum([1, 2, 3, 4, 5, 6])); // 12
// console.log(calculateEvenSum([2, 4, 6, 8])); // 20
// console.log(calculateEvenSum([1, 3, 5, 7])); // 0
// console.log(calculateEvenSum([10, 15, 20, 25])); // 30
// console.log(calculateEvenSum([])); // 0


// function removeSmallNumbers(numbers, min) {
//     const smallNumber = []
//     for (const number of numbers) {
//         if (number >= min) {
//             smallNumber.push(number)
//         }
//     }
//     return smallNumber
// }

// console.log(removeSmallNumbers([3, 8, 15, 1, 20], 10)); // [15, 20]
// console.log(removeSmallNumbers([5, 10, 15], 10)); // [10, 15]
// console.log(removeSmallNumbers([1, 2, 3], 5)); // []
// console.log(removeSmallNumbers([20, 30, 40], 25)); // [30, 40]
// console.log(removeSmallNumbers([], 10)); // []



// function createEmail(name) {
//     return name.toLowerCase() + "@gmail.com"
// }

// console.log(createEmail("Ivan"))
// // "ivan@gmail.com")


// function countUpperCase(message) {
//     let count = 0;
//     for (const text of message) {
//         if (text === text.toUpperCase() && text !== text.toLowerCase()) {
//             count++
//         }
//     }
//     return count
// }


// console.log(countUpperCase("HeLLo")); // 3
// console.log(countUpperCase("JAVA")); // 4
// console.log(countUpperCase("javascript")); // 0
// console.log(countUpperCase("HTML CSS")); // 7
// console.log(countUpperCase("GoIT")); // 3



// function mergeArrays(firstArray, secondArray) {
//     return firstArray.concat(secondArray)
// }


// console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]
// console.log(mergeArrays([], [1, 2])); // [1, 2]
// console.log(mergeArrays([5, 6], [])); // [5, 6]
// console.log(mergeArrays(["a"], ["b", "c"])); // ["a", "b", "c"]
// console.log(mergeArrays([], [])); // []


// // function findMin(numbers) {
// //     let min = numbers[0];
// //     for (const number of numbers) {
// //         if (number < min) {
// //             min = number
// //         }
// //     }
// //     return min
// // }




// console.log(findMin([12, 5, 18, 2, 9])); // 2
// console.log(findMin([100, 50, 25])); // 25
// console.log(findMin([-5, 10, 0])); // -5
// console.log(findMin([7])); // 7
// console.log(findMin([3, 3, 3])); // 3



// function containsHello(message) {
//     return message.toLowerCase().includes(`hello`)
// }


// console.log(containsHello("Hello world"))
// // true

// console.log(containsHello("Good morning"))
// // false



// function removeDuplicates(numbers) {
//     const result = []
//     for (const number of numbers) {
//         if (!result.includes(number)) {
//             result.push(number)
//         }
//     }
//     return result
// }

// console.log(removeDuplicates([1, 2, 2, 3, 1, 4])); // [1,2,3,4]


// function reverseTwoWords(text) {
//     return text.split(` `).toReversed().join(` `)
// }

// console.log(reverseTwoWords("Hello World"))
// // "World Hello");


// function countVowels(text) {
//     let count = 0;
//     const vowels = `aeiou`
//     for (const letter of text) {
//         if (vowels.includes(letter.toLowerCase())) {
//             count++
//         }
//     }
//     return count
// }


// console.log(countVowels("javascript")); // 3
// console.log(countVowels("education")); // 5
// console.log(countVowels("OpenAI")); // 4
// console.log(countVowels("HELLO")); // 2


// function arrayToString(words) {
//     return words.join(` `)
// }


// console.log(arrayToString(["I", "love", "JS"]));



// function findShortestWord(words) {
//     let shorterstword = words[0];
//     for (let i = 0; i < words.length; i++) {
//         if (shorterstword.length > words[i].length) {
//             shorterstword = words[i]
//         }

//     }
//     return shorterstword
// }

// function findShortestWord(words) {
//     let shorterstword = words[0]
//     for (const word of words) {
//         if (shorterstword.length > word.length)
//             shorterstword = word
//     }
//     return shorterstword
// }

// console.log(findShortestWord(["JavaScript", "HTML", "CSS"])); // "CSS"
// console.log(findShortestWord(["cat", "dog", "elephant"])); // "cat"
// console.log(findShortestWord(["one", "two", "three"])); // "one"
// console.log(findShortestWord(["a", "ab", "abc"])); // "a"
// console.log(findShortestWord(["frontend", "js", "developer"])); // "js"


// function findCommon(firstArray, secondArray) {
//     const result = []
//     for (let i = 0; i < firstArray.length; i++) {
//         if (secondArray.includes(firstArray[i]))
//             result.push(firstArray[i])
//     }
//     return result
// }


// console.log(findCommon([1, 2, 3], [2, 4, 3])); // [2, 3]
// console.log(findCommon([5, 6], [1, 2])); // []
// console.log(findCommon([10, 20, 30], [30, 40, 10])); // [10, 30]
// console.log(findCommon(["a", "b"], ["b", "c"])); // ["b"]
// console.log(findCommon([], [1, 2])); // []

// function doubleNumbers(numbers) {
//     const result = []
//     for (const number of numbers) {
//         result.push(number * 2)
//     }
//     return result
// }


// console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
// console.log(doubleNumbers([5, 10, 15])); // [10, 20, 30]
// console.log(doubleNumbers([0, -2, 8])); // [0, -4, 16]
// console.log(doubleNumbers([])); // []


// function canBuyTicket(age) {

//     if (age >= 18) {
//         return "Welcome!"
//     } else {
//         return "Access denied"
//     }
// }


// console.log(canBuyTicket(17)); // "Access denied"
// console.log(canBuyTicket(18)); // "Welcome!"
// console.log(canBuyTicket(25)); // "Welcome!"
// console.log(canBuyTicket(10)); // "Access denied"
