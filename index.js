const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

function findTheLongestWord(sentence) {
  const words = sentence.split(" "); // ["Smart", "people", "learn", "from", "everything", "and", "everyone,", "average", "people", "from", "their", "experience,", "stupid", "people", "already,", "have", "all", "the", "answers"]

  for (let i = 0; i < words.length; i++) {
    // Iterate over the array of words to replace commas with an empty string
    if (words[i].includes(",")) {
      words[i] = words[i].replace(",", "");
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

console.log("result:", findTheLongestWord(sentence)); // Expected output: 'experience'

module.exports = findTheLongestWord;
