import { Entry } from '../src/entry';

describe ('Entry', function() {
  var newEntry;

  beforeEach(function() {
    newEntry = new Entry("test", "this is a test");
  });

  it ('should  test  count the words in entry body', function() {
    expect(newEntry.title).toEqual("test");
    });

  it ('should count the words in the body of the entry', function() {
    var wordCount = newEntry.numberOfWords();
    console.log(wordCount);
    expect(wordCount).toEqual(4);

  });
});
