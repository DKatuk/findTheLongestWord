const findTheLongestWord = require("./index"); 

test("findTheLongestWord function", () => {
  const sentence =
    "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

  expect(findTheLongestWord(sentence)).toBe("experience");
});
