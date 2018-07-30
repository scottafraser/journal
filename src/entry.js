export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numberOfWords = function(sentence) {
  var splitString = sentence.split(" ");
  var numberOfWords = splitString.length;
  return numberOfWords;
};

Entry.prototype.numberOfVowels = function(sentence) {
  var charSplit = sentence.split("");
  var numberOfVowels = 0;
  for (var i = 0; i < charSplit.length; i++) {
    if (charSplit[i] == "a" || charSplit[i] == "e" || charSplit[i] == "i" || charSplit[i] == "o" || charSplit[i] == "u") {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
};

Entry.prototype.numberOfConsonants = function(sentence) {
  var charSplit = sentence.split("");
  var numberOfConsonants = 0
  var regex = /^[a-zA-Z]+$/g;
  for (var i = 0; i < charSplit.length; i++) {
    if (charSplit[i] !== "a" && charSplit[i] !== "e" && charSplit[i] !== "i" && charSplit[i] !== "o" && charSplit[i] !== "u" && charSplit[i] == regex) {
      numberOfConsonants++;
    }
  }
  return numberOfConsonants;
};

Entry.prototype.getTeaser = function(sentence) {
  var splitString = sentence.split(" ");
  var teaserArray;
  for (var i = 0; i<9; i++) {
    teaserArray.push(splitString[i]);
  }
  return teaserArray;
};
