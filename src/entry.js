export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

// Entry.prototype.numberOfWords() {
//   var splitString = this.split(" ");
//   var numberOfWords = splitString.length;
//   return numberOfWords;
// }
//
// Entry.prototype.numberOfVowels() {
//   var charSplit = this.split("");
//   var vowels;
//   var numberOfVowels = 0;
//   for (i=0; i < charSplit.length; i++) {
//     if (charSplit[i] == "a" || charSplit[i] == "e" || charSplit[i] == "i" || charSplit[i] == "o" || charSplit[i] == "u" ||) {
//       numberOfVowels++;
//     }
//   }
//   return numberOfVowels;
// }
//
// Entry.prototype.numberOfConsonants() {
//   var charSplit = this.split("");
//   var vowels;
//   var numberOfConsonants = 0;
//   for (i=0; i < charSplit.length; i++) {
//     if !(charSplit[i] == "a" || charSplit[i] == "e" || charSplit[i] == "i" || charSplit[i] == "o" || charSplit[i] == "u" ||) {
//       numberOfConsonants++;
//     }
//   }
//   return numberOfConsonants;
// }
//
// Entry.prototype.getTeaser() {
//   var splitString = this.split(" ");
//   var teaserArray;
//   for (i=0; i<9; i++) {
//     teaserArray.push(splitString[i]);
//   }
//   return teaserArray;
// }
