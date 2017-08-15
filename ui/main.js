console.log('Loaded!');

var element=document.getElementById('mjs');

element.innerHTML = 'New Value';

var ele=document.getElementById('image');
var left=0;

function right(){
    left=left+1;
    ele.style.left=left+'px';
}

ele.onclick=function(){
    setInterval(right,50);
};