// console.log('Loaded!');

// // var element=document.getElementById('mjs');

// // element.innerHTML = 'New Value';

// var img = document.getElementById('madi');
// var marginLeft = 0;

// function moveRight () {
//     marginLeft = marginLeft + 1;
//     img.style.marginLeft = marginLeft + 'px';
// }

// img.onclick = function () {
//     var interval = setInterval(moveRight , 50);
// };

// count the no.of times

var button=document.getElementById('counter');
button.onclick=function(){
  
  var request=new XMLHttpRequest();
  
  request.onreadystatechange=function(){
      if(request.readyState===XMLHttpRequest.DONE){
          if(request.status===200){
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
          }
      }
  };
  request.open('GET','http://vuyyurubalakrishna.imad.hasura-app.io/counter',true);
  request.send(null);
    
};


var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('sbt_btn'); 
submit.onclick=function(){
    var names=['name1', 'name2', 'name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};




