export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numberOfWords = function() {
  var splitString = this.body.split(" ");
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
  var numberOfConsonants = 0;
  var regex = /^[A-Za-z]+$/;
  for (var i = 0; i < charSplit.length; i++) {
    if (charSplit[i] !== "a" && charSplit[i] !== "e" && charSplit[i] !== "i" && charSplit[i] !== "o" && charSplit[i] !== "u" && charSplit[i] !== " " && charSplit[i].match(regex)) {
      numberOfConsonants++;
    }
  }
  return numberOfConsonants;
};

Entry.prototype.getTeaser = function(sentence) {
  var splitString = sentence.split(" ");
  var teaserArray = new Array;
  console.log(teaserArray);
  for (var i = 0; i<9; i++) {
    teaserArray.push(splitString[i]);

  }
  teaserArray = teaserArray.join(" ");
  console.log(teaserArray);
  return teaserArray;
};
