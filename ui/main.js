console.log('Loaded!');

var element=document.getElementById('mjs');

element.innerHTML = 'New Value';

var ele=document.getElementById('image');
var left=0;

function moveRight(){
    marginleft=marginleft+1;
    ele.style.marginleft=marginleft+'px';
}

ele.onclick=function(){
    var interval= setInterval(moveRight,50);
};