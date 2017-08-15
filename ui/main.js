console.log('Loaded!');

var element=document.getElementById('mjs');

element.innerHTML = 'New Value';

var img=document.getElementById('modi');
var left=0;

function moveRight(){
    marginleft=marginleft+1;
    ele.style.marginleft=marginleft+'px';
}

img.onclick=function(){
    var interval= setInterval(moveRight,50);
};