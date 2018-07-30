import { Entry } from './entry';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#new-entry').submit(function(event) {
    event.preventDefault();

    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(body, title);
    var teaser = newEntry.getTeaser(body);
    var numberOfWords = newEntry.numberOfWords(body);
    var numberOfVowels = newEntry.numberOfVowels(body);
    var numberOfConsonants = newEntry.numberOfConsonants(body);

    $('#entry-area').append(
        "<div><p>Word Count: "
        + numberOfWords + ", Vowel Count: " + numberOfVowels + ", Consonant Count: " + numberOfConsonants + "</p>" +
        "<h1>Title</h1><p>"  + title + "</p>" +
        "</div> <div>" +
        "<h1>Body</h1><p>"  + teaser + "</p></div>"
      );
    });
  });
