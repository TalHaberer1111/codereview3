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
