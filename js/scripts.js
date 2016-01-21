//Business Logic

var pingPong = function(num){

  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      return "ping-pong";
    } else if (i % 3 === 0) {
      return "ping";
    } else if (i % 5 === 0) {
      return "pong"
    } else {
      return i;
    };
  };
};





//User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    var num = $('#input-number').val()

    for (var i = 1; i <= num; i++) {
      if (i % 15 === 0) {
        $('#list').append('<li>'+"Ping-Pong"+'</li>');}
      else if (i % 3 === 0) {
        $('#list').append('<li>'+"Ping"+'</li>');}
      else if (i % 5 === 0) {
        $('#list').append('<li>'+"Pong"+'</li>');}
      else{
        $('#list').append('<li>'+i+'</li>');}

    };

  event.preventDefault();

  });
});
