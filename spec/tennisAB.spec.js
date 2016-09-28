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
    else if(ScoreA === 15)
        ScoreA = 30;
    else if(ScoreA === 30)
        ScoreA = 40;
    else
        ScoreA = 50;
    return ScoreA;
  }
  this.echoScore = function(){
    if(ScoreA === 0 && ScoreB === 0)
      return 'Love - Love';
    else if(ScoreA === 15 && ScoreB === 0)
      return 'Fifteen - Love';
    else if(ScoreA === 30 && ScoreB === 0)
        return 'Thirty - Love';
    else if(ScoreA === 40 && ScoreB === 0)
        return 'Fourty - Love';
    else if(ScoreA === 50 && ScoreB === 0)
            return 'A WIN';
  }
}
describe('Tennis', function () {
    var ten = new tennis();
  it('Start Game score 0 - 0 echo Love - Love', function () {
    ten.startGame();
    expect(ten.echoScore()).toEqual('Love - Love');
  });
  it('check score A 15 - B 0 echo fifteen - love',function(){
    ten.scoreA();
    expect(ten.echoScore()).toEqual('Fifteen - Love');
  });
  it('check score A 30 - B 0 echo Thirty - love',function(){
    ten.scoreA();
    expect(ten.echoScore()).toEqual('Thirty - Love');
  });
  it('check score A 40 - B 0 echo Fourty - love',function(){
    ten.scoreA();
    expect(ten.echoScore()).toEqual('Fourty - Love');
  });
  it('check A WIN',function(){
    ten.scoreA();
    expect(ten.echoScore()).toEqual('A WIN');
  });
});
