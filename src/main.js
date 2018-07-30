// import { Entry } from './entry';
import './styles.css';

$(document).ready(function() {
  $('#new-entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    // var newEntry = new Entry(body, title);
    $('#entry-area').append(
        "<div>"
          + title +
        "</div> <div>"
          + body +
        "</div>"
      );
    });
  });
