let sentence = "";
const sentence1 = "The quick brown fox jumps over the lazy dog.";
const sentence2 = "A journey of a thousand miles begins with a single step.";
const sentence3 = "In the beginning God created the heavens and the earth.";
const sentence4 =
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.";
const sentence5 =
  "Life is really simple, but we insist on making it complicated.";
const sentence6 =
  "The only limit to our realization of tomorrow will be our doubts of today.";
const sentence7 =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

sentence = sentence1; // please change the sentence here to test the other sentences

function findTheLongestWord(sentence) {
  const words = sentence.split(/\s+|[,.'";!?]+/); // Split by spaces and common punctuation marks/\s+|[,.'";!?]+/); // Split by spaces and common punctuation marks

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(",")) {
      words[i] = words[i].replace(/[,.'";!?]+/g, "");
    }
  }

  let longestWord = words[0]; // Assign the first word of the array to a variable

  // Iterate over the array of words to find the longest word
  function checkHowManyVowelsInWord(wordToCheck) {
    let vowelsOfWord = 0;
    for (const letter of wordToCheck) {
      if ("aeiou".includes(letter.toLowerCase())) {
        vowelsOfWord += 1;
      }
    }
    return vowelsOfWord;
  }

  for (const word of words) {
    let vowelsOfWord = checkHowManyVowelsInWord(word);
    let vowelsOfLongestWord = checkHowManyVowelsInWord(longestWord);

    if (
      word.length > longestWord.length || // If the current word is longer than the longest word,
      (word.length === longestWord.length && vowelsOfWord > vowelsOfLongestWord)
      // or if the current word has the same length as the longest word but has more vowels, then the current word is the new longest word
    ) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log("result:", findTheLongestWord(sentence)); // Expected output: 'experience' (sentence7)

module.exports = findTheLongestWord;
