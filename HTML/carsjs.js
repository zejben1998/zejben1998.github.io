//WILLDO

function changecolour(number, colour){
var fix = number + 1;
var divname = "carimg" + fix;
//TODO:
//DODAC OBSLUGE FOLDEROW TJ, GDY WYBIERAMY DRUGIE AUTO TO ZAMIAST PODMIENIAC URL NA PO PROSTU A.JPG TO ZEBY PODMIENIALO NA CAR1/A.JPG
document.getElementById(divname).style.content = "url(car" + fix + "/"  + colour + ".png)";

}

cars = document.getElementsByClassName('car');
//var buttons = "<div class=\"buttonwrapper\"><div class=\"button1\"></div><div class=\"button2\"></div><div class=\"button3\"></div></div>";

for (var i=0; i<cars.length; i++){
//	cars[i].innerHTML = cars[i].innerHTML + buttons;
	cars[i].innerHTML = cars[i].innerHTML + "<div class=\"buttonwrapper\"><div onclick=\"changecolour(" + i + ", 'a')\" class=\"button1\"></div><div onclick=\"changecolour(" + i + ", 'b')\" class=\"button2\"></div><div onclick=\"changecolour(" + i + ", 'c')\" class=\"button3\"></div></div>";
;

//	cars[i].innerHTML = buttons + cars[i].innerHTML;
	console.log(cars[i].innerHTML);

}
