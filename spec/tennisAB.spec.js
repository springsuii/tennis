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
    else if(ScoreA === 40)
        ScoreA = 50;
    return ScoreA;
  }
  this.scoreB = function(){
    if(ScoreB === 0)
      ScoreB = 15;
    else if(ScoreB === 15)
      ScoreB = 30;
    else if(ScoreB === 30)
      ScoreB = 40;
    else if(ScoreB === 40)
      ScoreB = 50;
    return ScoreB;
  }
  this.echoScore = function(){
    //caseA
    if(ScoreA === 0 && ScoreB === 0)
      return 'Love - Love';
    else if(ScoreA === 15 && ScoreB === 0)
      return 'Fifteen - Love';
    else if(ScoreA === 30 && ScoreB === 0)
        return 'Thirty - Love';
    else if(ScoreA === 40 && ScoreB === 0)
        return 'Fourty - Love';
    else if(ScoreA === 50 && ScoreB === 0){
        ScoreA = 0;
        ScoreB = 0;
        return 'A WIN';
    }
    //caseB
    else if(ScoreA === 0 && ScoreB === 15)
      return 'Love - Fifteen';
    else if(ScoreA === 0 && ScoreB === 30)
      return 'Love - Thirty';
    else if(ScoreA === 0 && ScoreB === 40)
      return 'Love - Fourty';
    else if(ScoreA === 0 && ScoreB === 50){
        ScoreA = 0;
        ScoreB = 0;
        return 'B WIN';
      }
    //caseNon0
    else if(ScoreA === 15 && ScoreA === 15)
      return 'Fifteen - Fifteen';
  }
}
describe('Tennis', function () {
    var ten = new tennis();
    //caseA
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
  //caseB
  it('check score A 0 - B 15 echo love - Fifteen',function(){
    ten.scoreB();
    expect(ten.echoScore()).toEqual('Love - Fifteen');
  });
  it('check score A 0 - B 30 echo love - Thirty',function(){
    ten.scoreB();
    expect(ten.echoScore()).toEqual('Love - Thirty');
  });
  it('check score A 0 - B 40 echo love - Fourty',function(){
    ten.scoreB();
    expect(ten.echoScore()).toEqual('Love - Fourty');
  });
  it('check B WIN',function(){
    ten.scoreB();
    expect(ten.echoScore()).toEqual('B WIN');
  });
  //caseScoreNonZero
  it('check B WIN',function(){
    ten.scoreB();
    ten.scoreA();
    expect(ten.echoScore()).toEqual('Fifteen - Fifteen');
  });
});
