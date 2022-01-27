/*
Given a paragraph of words, capitalise the first character of each word and return the updated paragraph.
Note : No inbuilt function such as split() to be used.
*/

function capitalise(paragraph) {
  let n = paragraph.length;
  let result = "";
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      result += paragraph.charAt(i).toUpperCase();
    } else if (paragraph[i] !== " " && paragraph[i - 1] == " ") {
      result += paragraph.charAt(i).toUpperCase();
    } else {
      result += paragraph[i];
    }
  }
  return result;
}
