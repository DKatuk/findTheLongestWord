const findTheLongestWord = require("./index"); 

test("findTheLongestWord function", () => {
  const sentence1 = "The quick brown fox jumps over the lazy dog.";
  const sentence2 = "A journey of a thousand miles begins with a single step.";
  const sentence3 = "In the beginning God created the heavens and the earth.";
  const sentence4 = "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.";
  const sentence5 = "Life is really simple, but we insist on making it complicated.";
  const sentence6 = "The only limit to our realization of tomorrow will be our doubts of today.";
  const sentence7 = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

  expect(findTheLongestWord(sentence1)).toBe("quick");
  expect(findTheLongestWord(sentence2)).toBe("thousand");
  expect(findTheLongestWord(sentence3)).toBe("beginning");
  expect(findTheLongestWord(sentence4)).toBe("accomplishment");
  expect(findTheLongestWord(sentence5)).toBe("complicated");
  expect(findTheLongestWord(sentence6)).toBe("realization");
  expect(findTheLongestWord(sentence7)).toBe("experience");
});
