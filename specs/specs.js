describe("pingPong", function() {

    it("returns 'ping-pong' for all multipliers of 15", function() {
    debugger;
    expect(pingPong(15)).to.equal(1 , 2 , 'ping' , 4 , 'pong' , 'ping' , 7 , 8 , 'ping' , 'pong' , 11 , 'ping' , 13 , 14 , 'ping-pong' );
  });
  it("returns 'ping' for all multipliers of 3", function (){
    expect(pingPong(3)).to.equal( 1 , 2 , "ping");
  });
  it("returns 'pong' for all multipliers of 5", function () {
    expect(pingPong(5)).to.equal(1 , 2 , 'ping' , 4 , "pong");
  });
  it("returns all integers up to the number of input", function() {
    expect(pingPong(2)).to.equal(1 , 2);
  });
});
