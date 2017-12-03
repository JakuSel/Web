var player=1;
var field=  [ [1,1,2,2], [3,3,4,4], [5,5,6,6], [7,7,8,8]];
var turn1=-1;
var turn2=-1;
//console.log(field);
shuffle()

function shuffle()
{
    var i, temp;
    for(i=0;i<10;i++)
        {
            var x1=Math.floor(Math.random()*4);
            var x2=Math.floor(Math.random()*4);
            var y1=Math.floor(Math.random()*4);
            var y2=Math.floor(Math.random()*4);
            temp=field[x1][y1];
            field[x1][y1]=field[x2][y2];
            field[x2][y2]=temp;
        }
  //  console.log("Shuffle finished");
  //  console.log(field);
    
}

function clickImg(value)
{
	var row=Math.floor(value/10);
	var col=value%10;
	//console.log("You click row"+row+"col:"+col);
    
if (field[row][col]>0) 
    {
var source="img/img"+field[row][col]+".png";
var imageid="img"+row+col;
//console.log(imageid);
document.getElementById(imageid).src=source;   
	}
    
if(turn1==-1)
    {
     turn1=row*10+col;   
    }
    
else
    {
    turn2=row*10+col;
    checkCard();
    }
    
}

function checkCard()
{
    var row1=Math.floor(turn1/10);
    var col1=turn1%10;
    var row2=Math.floor(turn2/10);
    var col2=turn2%10;
    console.log(row1);
 
    if(field[row1][col1]==field[row2][col2])
    {
        
    }
    else
    {
       setTimeout(turnBack,500);     
    }      
}
function turnBack()
{
     console.log("Not a same");
    var row1=Math.floor(turn1/10);
    var col1=turn1%10;
    var row2=Math.floor(turn2/10);
    var col2=turn2%10;
    var imageid="img"+row1+col1;
document.getElementById(imageid).src="Img/back.jpg";
    var imageid="img"+row2+col2;
document.getElementById(imageid).src="Img/back.jpg";
    turn1=-1;
    turn2=-1;
    
}