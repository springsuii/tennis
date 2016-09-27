function tennis(){
  var ScoreA ;
  var ScoreB ;
  this.startGame = function(){
    ScoreB = 0;
    ScoreA = 0;
  }
  this.scoreA = function(){
    if(ScoreA === 0)
        ScoreA = 15;
    else if(ScoreA === 0)
        ScoreA = 30;
    else if(ScoreA === 0)
        ScoreA = 40;
    return ScoreA;
  }
  this.echoScore = function(){
    if(ScoreA === 0 && ScoreB === 0)
      return 'Love - Love';
    else if(ScoreA === 15 && ScoreB === 0)
      return 'Fifteen - Love';
  }
}
describe('Tennis', function () {
  it('Start Game score 0 - 0 echo Love - Love', function () {
    var ten = new tennis();
    ten.startGame();
    expect(ten.echoScore()).toEqual('Love - Love');
  });
  it('check score A 15 - B 0 echo fifteen - love',function(){
    var ten = new tennis();
    ten.startGame();
    ten.scoreA();
    expect(ten.echoScore()).toEqual('Fifteen - Love');
  });
});
