var player=1;
var field=  [ [1,1,2,2], [3,3,4,4], [5,5,6,6], [7,7,8,8]];
console.log(field);
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
    console.log("Shuffle finished");
    console.log(field);
}

function clickImg(value){
	var row=Math.floor(value/10);
	var col=value%10;
	console.log("You click row"+row+"col:"+col);
if (field[row][col]) 
    {
var source="img/img"+field[row][col]+".png";
var imageid="img"+row+col;
console.log(imageid);
document.getElementById(imageid).src=source;

	}

}