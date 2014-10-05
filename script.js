$(document).ready(function() {

    /*$("#element").timer({
    callback: function() { alert("timer called"); },
    delay: 5000,
    repeat: 5
  }); */

var elem = $('#test2')
console.log(elem)


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var randnum;
  var points= 0;

  function next(data) {
    var datalength = data.length -1;
    var randnum = getRandomInt(0,datalength);
    var question = data[randnum];
    var answers = question['answers'];

      $('#pytanie,#odpowiedz,#punkty').children().remove();
      $('#pytanie').append('<p>'+ (question['question']) +'</p>');
      $('#punkty').append('<p>'+ 'Liczba punktów : '+ points +'</p');

    for (var i=0; i<answers.length; i++) {

      $('#odpowiedz').append('<button id=button'+i+'>'+(question['answers'][i]['ans'])+'</button>');

      $('#button'+i).data('val',question['answers'][i]['value']);

      $('#button'+i).on('click', function() {

        if(($(this).data('val')) == true) {
          points++
          alert("masz punkt");
          console.log(points);
        }
        else{
          alert("zle odpowiedz"); 
        }
        next(data);
      });
    }
  }

  $.ajax({url: 'trivia.json', dataType: 'json'})

  .done(function (data) { 
    next(data);
  })
  .fail(function (data) {
    console.log("error");
  });

});