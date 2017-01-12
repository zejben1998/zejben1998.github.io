// this here is the javascript to make the slider work
var imgindex=1;
 
function changeslide(n){
    slideShow(imgindex+=n);
}
 
function setslide(n){
    imgindex = n;
    slideShow(imgindex);
}
 
function slideShow(n){
    var images = document.getElementsByClassName("slide");
    if(imgindex>images.length){imgindex=1;}
    if(imgindex<1){imgindex=images.length} 
    for(i=0;i<images.length;i++){
        images[i].style.display="none";
    }
    images[imgindex-1].style.display="block";
 
}
 
var imgindex2=1;
 
function changeslide2(n){
    slideShow2(imgindex2+=n);
}
 
function setslide2(n){
    imgindex2 = n;
    slideShow2(imgindex2);
}
 
function slideShow2(n){
    var images = document.getElementsByClassName("slide2");
    if(imgindex2>images.length){imgindex2=1;}
    if(imgindex2<1){imgindex2=images.length}   
    for(i=0;i<images.length;i++){
        images[i].style.display="none";
    }
    images[imgindex2-1].style.display="block";
 
}
