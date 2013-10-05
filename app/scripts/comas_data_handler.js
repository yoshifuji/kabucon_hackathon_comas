monster = function(data)
{
  //  会社名
  var name = data.name;
  
  //  株価
  var attack = data.attack;
  
  //  時価総額
  var defence = data.defence;
  
  //  出来高
  var speed = data.speed;
  
  //  特色
  var attribute = data.attribute;
  
  //  データベース上の連番
  var id = data.id;
  
  //  売買代金
  var life = data.life;
  
  //  従業員数
  var dextality = data.dextality;
  
  //  平均年齢
  var luck = data.luck;
  
  //  企業ロゴアイコン
  var icon = data.icon;

  append_monster = function(selection)
  {
    selection.append("g");
  }
};



