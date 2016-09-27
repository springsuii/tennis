function tennis(){
  var ScoreA ;
  var ScoreB ;
  this.startGame = function(){
    ScoreB = 0;
    ScoreA = 0;
  }
  this.echoScore = function(){
    if(ScoreA === 0 && ScoreB === 0)
      return 'Love-Love';
  }
}
describe('Tennis', function () {
  it('Start Game score 0 - 0 echo Love - Love', function () {
    var ten = new tennis();
    ten.startGame();
    expect(ten.echoScore()).toEqual('Love-Love');
  });
});
