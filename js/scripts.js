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


//
// //User Interface Logic
//
//
//
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





//business logic
// var counting = function(countTo) {
//   var countUp = [];
//    for (var i = 1; i <= countTo; i += 1){
//      if (i % 15 == 0) {
//       countUp.push("pingpong");
//    } else if (i % 5 == 0) {
//      countUp.push("pong");
//    } else if (i % 3 == 0) {
//       countUp.push("ping");
//    } else{
//       countUp.push(i);
//    }
//  }
//      return countUp;
//
// }


// $(document).ready(function() {
//   $("form#questions").submit(function(event){
//
// //CAPTURE USER INPUT
//   var countTo = parseInt($("#countTo").val());
//   var userAnswer = counting(countTo);
//
//    $(".result").text(userAnswer);
//  event.preventDefault();
//   });
// });
