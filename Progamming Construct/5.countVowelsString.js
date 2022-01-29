/*
Given a string, count the total number of vowels present in that string.

Note: The string contains uppercase and lowercase english alphabets only
*/

function countVowels(word) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}
