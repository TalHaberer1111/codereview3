//Business Logic

// var PingPong = function(countTo) {
//   var Countup = [];
//   for (var i = 1; i <= countTo; i += 1) {
//     if (i % 15 == 0) {
//       countUp.push("pingpong");
//     } else if (i % 5 == 0){
//       countUp.push("pong");
//     } else if (i % 3 == 0) {
//       countUp.push("ping");
//     } else {
//       countUp.push(i)
//     }
//   }
//   return CountUp;
//
//   }
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

// $(document).ready(function() {
//   $("form#PingPong").submit(function(event) {
//
//    //captue user input
//    var CountTo= parseInt($("#CountTo").val());
//    var userAnswer = counting(countTo);
//
//    $(."result").text(userAnswer);
//   event.preventDefault();
//   });
// });



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
