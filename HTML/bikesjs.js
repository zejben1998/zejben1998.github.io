//WILLDO

function changecolour(number, colour){
var fix = number + 1;
var divname = "bikeimg" + fix;
//TODO:
//DODAC OBSLUGE FOLDEROW TJ, GDY WYBIERAMY DRUGIE AUTO TO ZAMIAST PODMIENIAC URL NA PO PROSTU A.JPG TO ZEBY PODMIENIALO NA CAR1/A.JPG
document.getElementById(divname).style.content = "url(bike" + fix + "/"  + colour + ".png)";

}

bikes = document.getElementsByClassName('bike');
//var buttons = "<div class=\"buttonwrapper\"><div class=\"button1\"></div><div class=\"button2\"></div><div class=\"button3\"></div></div>";

for (var i=0; i<bikes.length; i++){
//	bikes[i].innerHTML = bikes[i].innerHTML + buttons;
	bikes[i].innerHTML = bikes[i].innerHTML + "<div class=\"buttonwrapper\"><div onclick=\"changecolour(" + i + ", 'a')\" class=\"button1\"></div><div onclick=\"changecolour(" + i + ", 'b')\" class=\"button2\"></div><div onclick=\"changecolour(" + i + ", 'c')\" class=\"button3\"></div></div>";
;

//	bikes[i].innerHTML = buttons + bikes[i].innerHTML;
	console.log(bikes[i].innerHTML);

}
