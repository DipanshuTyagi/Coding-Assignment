//A. Take a sentence as an input and reverse every word in that sentence.

function reverseWordsInSentence(sentence) {
  let reversedSentence = "";
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length - 1) {
      if (i === sentence.length - 1) {
        word += sentence[i];
      }
      const reversedWord = reverseWord(word);
      reversedSentence += reversedWord + (i === sentence.length - 1 ? "" : " ");
      word = "";
    } else {
      word += sentence[i];
    }
  }
  return reversedSentence;
}

function reverseWord(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

const inputSentence = prompt("Enter a sentence:"); // Use prompt to get user input

const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
